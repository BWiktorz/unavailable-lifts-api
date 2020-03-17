import { Cache, ExpirationStrategy, MemoryStorage } from "node-ts-cache";
import lift from "./lift";
import {fetchUnavailableLifts} from "./impediment-rss-reader";

const myStrategy = new ExpirationStrategy(new MemoryStorage());

export class LiftsCache {
    @Cache(myStrategy, { ttl: 28800 })
    public async getUnavailableLifts(): Promise<Array<lift>> {
        return fetchUnavailableLifts();
    }
}