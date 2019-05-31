var costOfBottle = {};

var totalBottles = function(num) {
    var emptyBottles = 0;
    var bottleCaps = 0;
    var fullBottles = Math.floor(num / 2);
    var newFullBottles = fullBottles;
    // emptyBottles += fullBottles;
    // bottleCaps += fullBottles;
    // console.log(fullBottles);
    while (newFullBottles > 0) {
        console.log(newFullBottles, fullBottles, emptyBottles, bottleCaps);
        emptyBottles += newFullBottles;
        bottleCaps += newFullBottles;
        //finish drinking
        newFullBottles = 0;

        newFullBottles += Math.floor(emptyBottles / 2);
        emptyBottles %= 2;
        // console.log(emptyBottles);
        newFullBottles += Math.floor(bottleCaps / 4);
        bottleCaps %= 4;

        fullBottles += newFullBottles;
        // newFullBottles = 0;


    }
    return fullBottles;

}



module.exports = {
    totalBottles: totalBottles
};