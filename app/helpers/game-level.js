import { helper } from '@ember/component/helper';

export function gameLevel(params/*, hash*/) {
  if(params[0] == 1){
    return 'One';
  }else if (params[0] == 1.5){
    return 'Two ';
  }else if(params[0] == 2){
    return 'Three';
  } else if(params[0] == 2.5){
    return 'Four';
  }else if(params[0] == 3){
    return 'Five';
  }else if(params[0] == 3.5){
    return 'Six';
  }
}

export default helper(gameLevel);
