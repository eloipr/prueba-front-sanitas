const fs = require('fs');
const loremIpsum = require('lorem-ipsum').loremIpsum;

const imageUrl = 'https://picsum.photos/id/{ID_FOTO_INCREMENTAL}/500/500.jpg';

let jsonArray = [];

for (let i = 1; i <= 4000; ++i) {
    jsonArray.push({
        id: i,
        photo: imageUrl.replace('{ID_FOTO_INCREMENTAL}', i),
        text: loremIpsum({
            count: 2,
            paragraphLowerBound: 3,
            paragraphUpperBound: 7,
            units: 'paragraphs',
        }),
    });
}

fs.writeFile('src/assets/elements.json', JSON.stringify(jsonArray), (error) => {
    if (error) throw error;
    console.log('Json generated successfully!');
});
