import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/string';

/**
* @cardArray base array used as a container for all the numbers,
* @gameTurnStatus number variable used to detect/indicate 
* @gameTurnStatus @values :- 0 -> none opened, 1 -> first card opened, 2 -> second card also opened
* @messageOnScenario message for player based on current status of the game,
* @messageOnScenario @values :- false -> single turn is not completed, 1 -> player missed to open the second card, 2 -> match card
* @movesCount to keep track of the number of times the user opened the cards,
* @gamePoints number of card removed by picking a correct pair,
* @cardTimeLimit number of seconds to open the second card,
* @misMatchCloseTime number of seconds to close the mismatched cards,
* @firstValue value of card which is clicked first,
* @secondValue value of card which is clicked second,
* @firstElem DOM element of first clicked card,
* @secondElem DOM element of second clicked card,
* @secondsNow to display the time seconds remaining for the time limit to open the second card,
* @matchedArray array to contain values from matched cards,
* @gameStatus array that contains last five game plays as an input to game status message
* @progressBarPrev to save previous progress bar html, points and classnames on odd move counts
* @gameEnd to show end game message
* @isMobile to if it is a mobile
* @toggleHelpCardMobile toggle switch for mobile
* @gameLevelDegree number cards to play with in current level
* @imageList Images with specific numbers for first round
* @showLoader Variable to display loader when game reset 
* @showLevelChange Variable to display game level up template
*/

/**
* @basicCardOpen simple function to rotate card and add value
* @matchCard when player opens correct match
* @turnResetter to reset values after a turn
* @misMatch when cards don't match
* @accuracyPoints to update progress bar length
*/

/**
* @cardOpen main function called every time a user opens a card
*/

/**
* @secondCardTimeLimit interval function that starts when first card is opened
* @innerScope to store this object
* @firstCardTimeLimit time count for player to open the second card in a turn
*/

/**
 * @cardArray
 * @matchedArray
 * @gamePoints
 * @movesCount
 * @remainderLevel
 */

 /**
  * @game-level helper which takes gameLevelDegree as parameter and returns the level in WORDS
  */

export default Component.extend({
    classNames: ['w-100 row pt-3 pb-3'],
    randomize: service(),
    init() {
        this._super(...arguments);

        /**
         * To set images for the numbers
         */

         this.set('imageList', {
             1:'harry',
             2:'hermoine',
             3:'ron',
             4:'dumbledore',
             5:'hagrid',
             6:'dobby'
         });

        /**
         * To check the device screen for mobile
         */
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (width < 500) {
            this.set('isMobile', true);
        } else {
            this.set('isMobile', false);
        }

        /**To clear the finished game data
         */
        if (parseInt(localStorage.getItem('gamePoints')) == 50) {
            localStorage.removeItem('cardArray');
            localStorage.removeItem('matchedArray');
            localStorage.removeItem('gamePoints');
            localStorage.removeItem('movesCount');
            localStorage.removeItem('gameLevelDegree');
        }

        /**To check if any incomplete game data is present 
        * @true get the cards order, get the (if any) matched cards and remove them
        * @false for new game find the level
        */
        if (localStorage.getItem("cardArray")) {
            this.set('gameLevelDegree', localStorage.getItem('remainderLevel'));
            this.set('cardArray', JSON.parse(localStorage.getItem("cardArray")));
            if (localStorage.getItem('matchedArray')) {
                this.set('matchedArray', JSON.parse(localStorage.getItem('matchedArray')));
                let matchLen = this.matchedArray.length;
                let cardArrLen = this.cardArray.length;
                for (var i = 0; i < matchLen; i++) {
                    for (var j = 0; j < cardArrLen; j++) {
                        if (this.cardArray[j].value == this.matchedArray[i]) {
                            let temp = this.cardArray[j];
                            Ember.set(temp, 'hide', true);
                        }
                    }
                }
            } else {
                this.set('matchedArray', []);
            }
        } else {
            if (localStorage.getItem('remainderLevel')) {
            } else {
                localStorage.setItem('remainderLevel', 1);
                this.set('gameLevelDegree', 1);
            }

            this.set('cardArray', []);
            this.set('matchedArray', []);

            ///Set of cards are multiples of 6
            for (var i = 1, j = 0; i <= this.gameLevelDegree * 6; i++ , j = j + 2) {
                let obj = {};
                obj.value = i;
                obj.show = false;
                obj.hide = false;
                this.cardArray.pushObject(obj);
                this.cardArray.pushObject(obj);
            }
            this.set('cardArray', this.randomize.randomizeArray(this.cardArray));
            localStorage.setItem('cardArray', JSON.stringify(this.cardArray));
        }
        this.set('gamePoints', localStorage.getItem('gamePoints') ? parseInt(localStorage.getItem('gamePoints')) : 0);
        this.set('movesCount', localStorage.getItem('movesCount') ? parseInt(localStorage.getItem('movesCount')) : 0);
        this.set('cardTimeLimit', 5000);
        this.set('misMatchCloseTime', 1000);
        this.set('secondsNow', 5);
        this.set('gameTurnStatus', 0);
        this.set('messageOnScenario', false);
        this.set('firstValue', false);
        this.set('firstElem', '');
        this.set('secondValue', false);
        this.set('secondElem', '');
        this.set('toggleHelpCardMobile', false);

        this.set('gameStatus', []);
        this.set('progressBarPrev', {});
        this.set('gameEnd', false);
        this.set('showLevelChange', null);
        this.set('showLoader', false);
    },
    resetGame: function (status) {
        //showing loader for 3 seconds
        if(status == 'reset game'){
            this.set('showLoader', true);
            var self = this;
            setTimeout(function () {
                self.set('showLoader', false);
            }, 3000);
        }
        else{
            this.set('showLevelChange', Math.round((this.gamePoints / this.movesCount) * 100));
        }

        //clearing off prev stored data (cardArray is renewed below with new array)
        localStorage.setItem('movesCount', 0);
        localStorage.setItem('matchedArray', []);
        localStorage.setItem('gamePoints', 0);

        this.set('cardArray', []);
        this.set('matchedArray', []);
        this.set('movesCount', 0);
        this.set('gamePoints', 0);
        this.set('gameLevelDegree', localStorage.getItem('remainderLevel'));

        ///Set of cards are multiples of 6
        for (var i = 1, j = 0; i <= this.gameLevelDegree * 6; i++ , j = j + 2) {
            let obj = {};
            obj.value = i;
            obj.show = false;
            obj.hide = false;
            this.cardArray.pushObject(obj);
            this.cardArray.pushObject(obj);
        }
        this.set('cardArray', this.randomize.randomizeArray(this.cardArray));
        localStorage.setItem('cardArray', JSON.stringify(this.cardArray));
    },
    accuracyPoints: computed("movesCount", function () {
        if(this.showLevelChange){
            console.log('here');
        }
        if (this.gamePoints == 0) {
            return htmlSafe('width:0;color:#007bff;background:none;padding-left:10px;');
        } else if (this.movesCount % 2 == 0) {
            let result = Math.round((this.gamePoints / this.movesCount) * 100);
            let className = result > 65 ? 'bg-success' : result > 35 ? 'bg-primary' : result < 5 ? 'text-warning bg-danger' : 'bg-danger';
            this.set('progressBarPrev', { 'html': htmlSafe('width:' + result + '%'), 'value': result, 'class': className });
            return this.progressBarPrev;
        } else {
            if (Object.keys(this.progressBarPrev).length === 0) {
                let result = Math.round((this.gamePoints / this.movesCount) * 100);
                let className = result > 65 ? 'bg-success' : result > 35 ? 'bg-primary' : result < 5 ? 'text-warning bg-danger' : 'bg-danger';
                this.set('progressBarPrev', { 'html': htmlSafe('width:' + result + '%'), 'value': result, 'class': className });
            }
            return this.progressBarPrev;
        }
    }),
    basicCardOpen: function (element, value) {
        $(element).addClass('rotate');
        if(this.gameLevelDegree == 1){
            $(element).addClass('with-image');
            element.style.backgroundImage = `url(/assets/images-for-memory-game/${this.imageList[value]}.jpg)`;
        }else{
            element.innerHTML = value;
        }
    },
    matchCard: function () {
        this.matchedArray.pushObject(this.firstValue);
        localStorage.setItem('matchedArray', JSON.stringify(this.matchedArray));
        this.set('gamePoints', this.gamePoints + 2);
        localStorage.setItem('gamePoints', this.gamePoints);
        //Game Level completion
        if (this.gamePoints == this.cardArray.length) {
            this.toggleProperty('gameEnd');
            var self = this;
            localStorage.setItem('remainderLevel', JSON.parse(localStorage.getItem('remainderLevel')) + 0.5);
             setTimeout(function(){
                self.resetGame('level completion');
            }, 1000);
        }
        this.set('messageOnScenario', 2);
        var self = this;
        setTimeout(function () {
            $(self.firstElem).addClass('remainder-card-hide');
            $(self.secondElem).addClass('remainder-card-hide');
            self.turnResetter();
        }, 1000);
    },
    misMatch: function () {
        this.set('messageOnScenario', 3);
        var self = this;
        setTimeout(function () {
            $(self.firstElem).removeClass('rotate');
            $(self.secondElem).removeClass('rotate');
            if(this.gameLevelDegree == 1){
                $(self.firstElem).removeClass('with-image');
                $(self.secondElem).removeClass('with-image');
            }
            self.turnResetter();
        }, self.misMatchCloseTime);
    },
    turnResetter: function () {
        this.set('secondsNow', 5);
        this.set('gameTurnStatus', 0);
        this.set('messageOnScenario', false);
        if (typeof this.firstElem == "object") {
            if(this.gameLevelDegree == 1){
                this.firstElem.style = '';
            } else{
                this.firstElem.innerHTML = '';
            }
        }
        if (typeof this.secondElem == "object") {
            if(this.gameLevelDegree == 1){
                this.secondElem.style = '';
            } else{
                this.secondElem.innerHTML = '';
            }
        }
        this.set('firstValue', false);
        this.set('firstElem', '');
        this.set('secondValue', false);
        this.set('secondElem', '');
    },
    actions: {
        cardOpen: function (value, event) {
            if ((this.gameTurnStatus == 1 || this.gameTurnStatus == 0) && this.matchedArray.includes(value) == false && this.firstElem != event.target) {

                var innerScope = this;
                this.set('movesCount', this.movesCount + 1);
                localStorage.setItem('movesCount', this.movesCount);
                if (this.firstValue) {
                    this.set('secondValue', value);
                    this.set('secondElem', event.target);
                } else {
                    this.set('firstValue', value);
                    this.set('firstElem', event.target);
                }
                /**
                 * First card opened
                 */
                if (this.gameTurnStatus == 0) {
                    this.set('gameTurnStatus', 1);
                    this.basicCardOpen(this.firstElem, value);
                    innerScope.secondCardTimeLimit = setInterval(function () {
                        innerScope.set('secondsNow', innerScope.secondsNow - 1);
                    }, 1000);
                    /**
                     * To reset variables and clear timer when player misses to open the second card in given time
                     */
                    innerScope.firstCardTimeLimit = setTimeout(function () {
                        clearInterval(innerScope.secondCardTimeLimit);
                        $(innerScope.firstElem).removeClass('rotate');
                        if(this.gameLevelDegree == 1){
                            $(innerScope.firstElem).removeClass('with-image');
                        }
                        innerScope.set('messageOnScenario', 1);
                        setTimeout(function () {
                            innerScope.turnResetter();
                        }, 0)
                    }, innerScope.cardTimeLimit);
                }
                /**
                 * Second card opened
                 */
                else if (this.gameTurnStatus == 1) {
                    this.set('gameTurnStatus', 2);
                    this.set('secondElem', event.target);
                    this.basicCardOpen(this.secondElem, value);
                    clearInterval(innerScope.secondCardTimeLimit);
                    /**
                     * If it is a match
                     */
                    if (this.firstValue == this.secondValue) {
                        clearTimeout(innerScope.firstCardTimeLimit);
                        this.matchCard();
                    }
                    /**
                     * If it is not a match
                     */
                    else {
                        clearTimeout(innerScope.firstCardTimeLimit);
                        this.misMatch();
                    }
                }
            }
        },
        mobileHelpCardFun: function () {
            this.toggleProperty('toggleHelpCardMobile');
        },
        clearLocalData: function () {
            this.resetGame('reset game');
        },
        clearData: function () {
            window.localStorage.clear();
        }
    }
}); 