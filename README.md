#Google image search for NodeJS
Gets an array of images from the Google image search. No API is used, just parsing the web.

##Image attributes
``` javascript
url         //Image url
h           //Height
w           //With
origin      //Url to the website
src         //Src of the image. Usually base64 encoded
```

##Usage
``` javascript
var ImagSearch = require("./ImageSearch.js"); //Include it

var search = new ImagSearch();

//Uses "hallo" as the search query
search.getImages("hallo", function(imgs)
{
    for(let i in imgs) //Iterates the images
        console.log(imgs[i].url); //Prints the urls
});

```
Will return
```
>node ImageSearchTest.js
Loading not finished yet -> wait...
http://is1.mzstatic.com/image/thumb/Purple122/v4/f4/1d/62/f41d62c2-25d1-b08c-7c79-81e831079db0/source/175x175bb.jpg
https://i.ebayimg.com/00/s/MTAyNFg3Njc=/z/S~EAAOSwNnRYg3ft/$_72.JPG
https://www.hallo-muenchen.de/bilder/2017/01/20/7309985/608953512-dsc_0161-1tV62oYL93.jpg
https://cache.willhaben.at/mmo/0/189/978/900_147401231.jpg
...
```

##Setup
Install the following dependecies
```
npm install phantomjs@1.9.20 -g //Revenant is broken with the latest phantomjs
npm install revenant
npm install url
```