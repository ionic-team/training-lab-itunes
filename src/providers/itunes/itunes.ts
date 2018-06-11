import { Injectable } from "@angular/core";
import testData from "./test-data";
@Injectable()
export class ItunesProvider {
  constructor() {
    console.log("Hello ItunesProvider Provider");
  }
  get() {
    return new Promise<{}[]>((resolve, reject) => {
      var result = testData.feed.entry.map(item => {
        return {
          artist: item["im:artist"].label,
          title: item.title.label,
          thumbnail: item["im:image"][2].label,
          video: item.link[1].attributes.href,
          store: item.link[0].attributes.href
        };
      });
      resolve(result);
    });
  }
}
