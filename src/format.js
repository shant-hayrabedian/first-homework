
import * as math from './math.js';

export function format(prefix, result) {
    let obj = {
        circleArea: 'The Value of ' +  prefix + ' is: ' + math.circleArea(result),
        hypotenuse: 'The Value of ' +  prefix + ' is: ' + math.hypotenuse(...result),
        pows: 'The Value of ' +  prefix + ' is: ' + math.pow(...result)
    }
    return obj
}
