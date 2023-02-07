# Web Page Links Extractor

A project that finds all the links contained in a web page and presents them as a list of clickable links to the user.

## Description

This project provides a web page where a user inputs the URL, the webpage is scanned and a list of URLs found on that page is scrapped. Then after processing & formatting them the user is presented with the result as a list of clickable links.

## Technologies
- NodeJS
- validator (to validate input)
- body-parser (as middleware)
- ejs (ejs as templating engine)
- cheerio (to parse the response of html call)
- axios (to make the call to the url)

## Installation

- Clone the repository
```bash
git clone https://github.com/MrEhsanEllahi/web-page-links-extractor
```
- Install dependencies
```bash
npm install
```
- Start the program
```bash
npm run serve
```
- Open your web browser and go to http://localhost:3000 to access the web interface.

## Usage
- Input a URL in the form on the web page.
- Submit the form.
- View the results as a list of clickable links.

## Contributing
- Fork the repository
- Create your feature branch: git checkout -b my-new-feature
- Commit your changes: git commit -am 'Add some feature'
- Push to the branch: git push origin my-new-feature
- Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.