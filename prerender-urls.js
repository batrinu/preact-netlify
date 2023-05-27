const { generateFileList } = require("./src/crawler");
const { join } = require("path");

const content = generateFileList(join(__dirname, "content")).nodes;

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
