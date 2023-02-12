class Java {
  constructor() {
    global.System = {
      out: {
        println: (str) => {
          console.log(str);
        },
      },
    };

    String.prototype.equals = function (str) {
      return str == this;
    };
    String.prototype.equalsIgnoreCase = function (str) {
      return str.toLowerCase() == this.toLowerCase();
    };
    String.prototype.contains = function (str) {
      return str !== "" && this.includes(str);
    };

    Math.copySign = function (x) {
      console.log(x);
    };
    Math.signum = Math.sign;
    Math.toDegrees = (radians) => {
      return radians * (180 / Math.PI);
    };
    Math.toRadians = (degrees) => {
      return degrees * (Math.PI / 180);
    };
  }
}

module.exports = Java;
