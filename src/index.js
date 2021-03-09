
exports.min = function min (array) {
    return (array !== undefined) && (array.length !== 0) ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return (array !== undefined) && (array.length !== 0) ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
    let avg = 0;
    if ((array !== undefined) && (array.length !== 0)) {

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        avg = sum / array.length;
    }
    return avg;
}
