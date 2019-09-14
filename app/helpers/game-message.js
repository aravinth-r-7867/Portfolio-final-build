import { helper } from '@ember/component/helper';

export function gameMessage(params/*, hash*/) {
  var message;
  switch(params[0]){
    case 1:
        message = "Oops you missed it..!!";
        break;
    case 2:
        message = "Wow that's a match, you gain 2 points..!!";
        break;
    case 3:
        message = "Noo, that's not a wrong pair...!!"
  }
  return message;
}

export default helper(gameMessage);
