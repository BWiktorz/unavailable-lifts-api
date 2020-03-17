"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var station_data = __importStar(require("./station-id.json"));
var lift_data = __importStar(require("./lifts.json"));
var lift = /** @class */ (function () {
    function lift(m) {
        var _station_id = station_data.stations.find(function (station) { return station.name === m[1]; }).id;
        var _lift_id = lift_data.features.find(function (feat) {
            return feat.properties.station === _station_id &&
                feat.properties.name === m[2].replace('.', '') &&
                feat.properties.levelb === Math.abs(parseInt(m[3])) &&
                feat.properties.levela === Math.abs(parseInt(m[4]));
        }).properties.id;
        this.data = {
            station_name: m[1],
            station_id: _station_id,
            lift_name: m[2],
            lift_id: _lift_id,
            from_floor: m[3],
            to_floor: m[4]
        };
    }
    return lift;
}());
exports.default = lift;
//# sourceMappingURL=lift.js.map