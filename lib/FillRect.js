var clc = require("cli-color");

exports = module.exports = function (x, y, width, height) {
    var _this = this,
        writer = process.stdout;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.draw = function (color) {
        color = color + "BG";
        for (var tx = this.x; tx <= (this.x + this.width - 1); tx++) {
            for (var ty = this.y; ty <= (this.y + this.height - 1); ty++) {
                writer.write(clc.moveTo(tx, ty));
                writer.write(" "[color]);
            }
        }
    };
    this.__bitwiseLSHIFT = function (_writer) {
        writer = _writer;
        return _this;
    }
};