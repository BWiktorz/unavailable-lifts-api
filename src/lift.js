"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lift = /** @class */ (function () {
    function lift(m) {
        this.data = {
            station_name: m[1],
            lift_name: m[2],
            from_floor: m[3],
            to_floor: m[4]
        };
    }
    return lift;
}());
exports.default = lift;
//# sourceMappingURL=lift.js.map