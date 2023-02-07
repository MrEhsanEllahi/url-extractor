# Web Page Links Extractor

A project that finds all the links contained in a web page and presents them as a JSON object.

## Description

This project takes a URL as input, scans the web page at that URL, and outputs a JSON object with the input URL as the key and a list of URLs found on the page as the value. Additionally, the project provides a web page where a user can input the URL and view the results as a list of clickable links.

## Features
- Extracts all the links from a web page Presents the links in a JSON object format.
- Provides a web interface for users to input URLs and view the results.

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