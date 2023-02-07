const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
//cheerio will be used to parse the response of html after call
const cheerio = require('cheerio');
// validator for url validation
const validator = require('validator');

const app = express();

//use body-parser as a middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

//set ejs as a template engine
app.set('view engine', 'ejs');

//show the index view when app starts
app.get('/', function (req, res) {
    res.render('index');
})

app.post('/extract-urls', (req, res) => {
    let url = req.body.url;

    //if not a valid url, return an error
    if (!isValidUrl(url)) {
        res.status(500).send('Invalid URL');
    }

    //remove the trailing slash in order to use url later for viewing 
    url = url.endsWith('/') ? url.substring(0, url.length - 1) : url;

    extractUrls(url, urlsList => {
        //callback will be false in case of any error
        if (!urlsList) {
            res.status(500).send('Something went wrong!');
        } else {

            //console the list of links (task-1)
            console.log(urlsList);

            //show user the list as clickable links(task-2)
            res.render('index', {
                url: url,
                urls: urlsList
            });
        }
    });
});

//make call to extract all urls from the given url
async function extractUrls(url, callback) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const hrefs = $("a");
        const hrefs_data = [];
        if (hrefs.length > 0) {
            hrefs.each(function () {
                href = $(this).attr('href');
                if (typeof href == 'undefined' || href == '') {
                    return;
                }
                href = href.trim();
                //if captured href is not valid url, make it
                if (!isValidUrl(href)) {
                    href = url + '/' + href.substr(href.indexOf('/') + 1);
                }
                //add the link to a list
                hrefs_data.push({
                    href
                });
            });
        }
        //assign the list of links to the object with url as the key (task-1)
        var hrefsObject = {};
        hrefsObject[url] = hrefs_data;

        console.log(hrefsObject);

        callback(hrefsObject);
    } catch (error) {
        console.error(error);
        callback(false);
    }
}

//validate input if that is a valid URL
function isValidUrl(string) {
    return validator.isURL(string);
}

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});