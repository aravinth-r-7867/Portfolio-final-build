import { helper } from '@ember/component/helper';

export function gameLevel(params/*, hash*/) {
  let temp = params[0];
  if(params[1] == "sendPrevLevel"){
   temp = temp - 0.5;
  }
  if(temp == 1){
    return 'One';
  }else if (temp == 1.5){
    return 'Two ';
  }else if(temp == 2){
    return 'Three';
  } else if(temp == 2.5){
    return 'Four';
  }else if(temp == 3){
    return 'Five';
  }else if(temp == 3.5){
    return 'Six';
  }
}

export default helper(gameLevel);
