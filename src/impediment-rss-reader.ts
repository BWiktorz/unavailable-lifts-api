import {Item} from "rss-parser";
import lift from "./lift";
let Parser = require('rss-parser');

let parser = new Parser();

let WTM_FEED_URL = "https://www.wtp.waw.pl/feed/?post_type=impediment";
let re = /([A-ZŃŁŻŹ]+.? ?[A-ZŃŁŻŹ]+) \(winda ([a-zł\-\. ]*), poziom (-?\d)\/(-?\d)\)/g;

export async function fetchUnavailableLifts(): Promise<Array<lift>> {
    console.log("Fetching lifts...");
    let feed = await parser.parseURL(WTM_FEED_URL);
    const result: Array<lift> = [];

    feed.items.forEach((item: Item) => {
        // @ts-ignore
        if (item.title.includes("wind")) {
            if (item.content !== undefined) {
                let content: string = item.content.toString();
                console.log(content);
                let m = re.exec(content);
                while (m) {
                    result.push(new lift(m));
                    m = re.exec(content);
                }
            }
        }
    });

    return result;
}