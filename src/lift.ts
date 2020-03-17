export default class lift {
    private readonly data: { station_name: string; lift_name: string; from_floor: string; to_floor: string };

    constructor(m: Array<string>) {
        this.data = {
            station_name: m[1],
            lift_name: m[2],
            from_floor: m[3],
            to_floor: m[4]
        };
    }
}