import * as station_data from './station-id.json'
import * as lift_data from './lifts.json'

export default class lift {
    private readonly data: { station_name: string; station_id: string, lift_name: string; lift_id: string; from_floor: number; to_floor: number };

    constructor(m: Array<string>) {
        const _station_name = m[1];
        const _lift_name = m[2].replace('.', '');
        const _from_floor = Math.abs(parseInt(m[3]));
        const _to_floor = Math.abs(parseInt(m[4]));

        const _station_id = station_data.stations.find(station => station.name === _station_name).id;
        const _lift_id = lift_data.features.find(feat =>
            feat.properties.station === _station_id &&
            feat.properties.name === _lift_name &&
            feat.properties.levelb ===  _from_floor &&
            feat.properties.levela === _to_floor
        ).properties.id;

        this.data = {
            station_name: _station_name,
            station_id: _station_id,
            lift_name: _lift_name,
            lift_id: _lift_id,
            from_floor: _from_floor,
            to_floor: _to_floor
        };
    }
}