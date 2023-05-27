const { generateFileList } = require("./src/crawler");
const { join } = require("path");
// const fs = require('fs');
// const parseMD = require('parse-md').default;

const content = generateFileList(join(__dirname, "content")).nodes;
console.log("🚀 ~ file: prerender-urls.js:7 ~ content:", content.find((c) => c.id === "homepage"));
module.exports = () => {
  const pages = [
    {
      url: "/",
      seo: {
        cover: "/assets/profile.jpg",
      },
      data: content.find((c) => c.id === "homepage"),
	  tourDates: content.find((c) => c.id === "tour_dates"),
    },
  ];

  return pages;
};
