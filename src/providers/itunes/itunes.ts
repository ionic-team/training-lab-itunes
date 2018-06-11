import { Injectable } from "@angular/core";
@Injectable()
export class ItunesProvider {
  constructor() {
    console.log("Hello ItunesProvider Provider");
  }

  get() {
    return new Promise<{}[]>((resolve, reject) => {
      resolve([
        {
          thumbnail:
            "http://is2.mzstatic.com/image/thumb/Video128/v4/e9/58/89/e95889a9-deeb-9b41-ed50-0be244289a50/191773963576_1_1.jpg/100x100bb-85.jpg",
          artist: "BTS",
          title: "MIC Drop"
        },
        {
          thumbnail:
            "http://is2.mzstatic.com/image/thumb/Video128/v4/05/d4/03/05d40316-e624-e7a3-f8c6-61f76cd1e0c5/8864468205830101VIC.jpg/100x100bb-85.jpg",
          artist: "Camila Cabello",
          title: "Havana"
        },
        {
          thumbnail:
            "http://is5.mzstatic.com/image/thumb/Video128/v4/d2/4e/31/d24e3191-e0d5-be9b-7680-6dcf603be7e2/080688999995_USMVC1700038.jpg/100x100bb-85.jpg",
          artist: "for KING & COUNTRY",
          title: "Little Drummer Boy"
        }
      ]);
    });
  }
}
