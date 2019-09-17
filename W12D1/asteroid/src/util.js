const Util = {
    inherits: function inherits(childClass, parentClass) {
        let Surrogate = function () {};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate ();
        childClass.prototype.constructor = childClass;
    },

    randomVec: function randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale: function scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },

    dist: function dist(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
    }
};

module.exports = Util;