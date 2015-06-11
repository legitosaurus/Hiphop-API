module.exports = function(args) {
    var haha = {};
    haha.args = args;
	haha.test = function () {
        console.log('testing! ');
        return true;
    }
    return haha;
};