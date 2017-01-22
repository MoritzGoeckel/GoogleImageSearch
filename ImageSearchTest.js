var ImagSearch = require("./ImageSearch.js"); 

var search = new ImagSearch();

search.getImages("hallo", function(imgs)
{
    for(let i in imgs)
        console.log(imgs[i].url);
});