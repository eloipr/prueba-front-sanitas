const fs = require("fs");

const imageUrl = "https://picsum.photos/id/{ID_FOTO_INCREMENTAL}/500/500.jpg";

let jsonArray = [];

for (let i = 1; i <= 4000; ++i) {
    jsonArray.push({
        id: i,
        photo: imageUrl.replace("{ID_FOTO_INCREMENTAL}", i),
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ante, commodo vel mi at, tincidunt auctor lorem. Aliquam semper vitae nibh vitae cursus. Fusce non pulvinar est. Sed in auctor metus. Morbi sit amet enim nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam consequat purus augue, a aliquam augue vehicula non. Nunc in efficitur nulla, in volutpat ipsum. Maecenas ultrices gravida pharetra. Vestibulum nec malesuada purus.",
    });
}

fs.writeFile("src/assets/elements.json", JSON.stringify(jsonArray), (error) => {
    if (error) throw error;
    console.log("Json generated successfully!");
});
