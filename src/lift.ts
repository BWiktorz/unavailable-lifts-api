import * as station_data from './station-id.json'
import * as lift_data from './lifts.json'

export default class lift {
    private readonly data: { station_name: string; station_id: string, lift_name: string; lift_id: string; from_floor: string; to_floor: string };

    constructor(m: Array<string>) {
        const _station_id = station_data.stations.find(station => station.name === m[1]).id;
        const _lift_id = lift_data.features.find(feat =>
            feat.properties.station === _station_id &&
            feat.properties.name === m[2].replace('.', '') &&
            feat.properties.levelb === Math.abs(parseInt(m[3])) &&
            feat.properties.levela === Math.abs(parseInt(m[4]))
        ).properties.id;

        this.data = {
            station_name: m[1],
            station_id: _station_id,
            lift_name: m[2],
            lift_id: _lift_id,
            from_floor: m[3],
            to_floor: m[4]
        };
    }
}