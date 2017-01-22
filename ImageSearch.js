var Revenant = require('revenant');
var Cheerio = require('cheerio');
var url = require('url');

module.exports = class ImageSearch{

    constructor()
    {
        this.browser = new Revenant();
    }

    getImages(query, callback)
    {
        let theBase = this;
        this.browser
        .openPage("https://www.google.de/search?q=" + query + "&safe=off&tbm=isch&tbs=qdr:d", function (err, res) {

            let lastHtml = res;
            let interval = setInterval(function(){
                theBase.browser.getInnerHTML("body", function(err, html){
                    if(lastHtml == html && html != null){
                        clearInterval(interval);

                        //Finished loading
                        let $ = Cheerio.load(html);

                        let imgs = [];
                        $("#ires img").each(function( index ) {
                            let parent = $( this ).parent();
                            let href = parent.attr('href');

                            let url_parts = url.parse(href, true);

                            let src = $( this ).attr('src');
                            if(src != undefined)
                                imgs.push( {url:url_parts.query.imgurl, h:url_parts.query.h, w:url_parts.query.w, origin:url_parts.query.imgrefurl, src:src} );
                        });

                        theBase.browser.done();

                        callback(imgs);
                    }
                    else
                    {
                        console.log("Loading not finished yet -> wait...");
                        lastHtml = html;
                    }
                })
            }, 3000);
        });
    }

}