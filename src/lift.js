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
        var _station_name = m[1];
        var _lift_name = m[2].replace('.', '');
        var _from_floor = Math.abs(parseInt(m[3]));
        var _to_floor = Math.abs(parseInt(m[4]));
        var _station_id = station_data.stations.find(function (station) { return station.name === _station_name; }).id;
        var _lift_id = lift_data.features.find(function (feat) {
            return feat.properties.station === _station_id &&
                feat.properties.name === _lift_name &&
                feat.properties.levelb === _from_floor &&
                feat.properties.levela === _to_floor;
        }).properties.id;
        this.data = {
            station_name: _station_name,
            station_id: _station_id,
            lift_name: _lift_name,
            lift_id: _lift_id,
            from_floor: _from_floor,
            to_floor: _to_floor
        };
    }
    return lift;
}());
exports.default = lift;
//# sourceMappingURL=lift.js.map