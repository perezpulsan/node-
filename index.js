const fs = require("fs");
const httpRequest = require("request");

httpRequest(`https://spielhoe.shaula.uberspace.de/drive/out4.json`, (error, httpResponse, body) => {
  body = JSON.parse(body);

  let string = Object.keys(body[0]).join(",") + "\n";
  body.forEach(post => {
    string +=
      Object.values(post)
        .join(",")
        .replace(/\n/g, " ") + "\n";
  });
  fs.writeFile("./dynamic.csv", string, () => console.log(`Im done with ${body.length} lines`));
  //console.log(body);

  //body = JSON.parse(body);
  body = body.filter(d => d.noxevent > 100);
  console.log(body);

  string = Object.keys(body[0]).join(",") + "\n";
  body.forEach(post => {
    string +=
      Object.values(post)
        .join(",")
        .replace(/\n/g, " ") + "\n";
  });
  fs.writeFile("./dynamicFiltered.csv", string, () => console.log(`Im done with ${body.length} lines`));
});
