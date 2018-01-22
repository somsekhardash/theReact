let headerApiUrl,apiBaseUrl,headerSec;
const path = require("path");
import config from "pathName";

if(process.env.NODE_ENV=='dev'){
    apiBaseUrl=config.apiBaseUrl;
    headerApiUrl=`${apiBaseUrl}/assects/json/header.json`;
    headerSec=`${apiBaseUrl}/assects/json/header_section.json`;
}

if(process.env.NODE_ENV=='production'){
    headerApiUrl= config.headerApiUrl;
    headerSec= config.headerSec;
}

module.exports = {"headerApiUrl": headerApiUrl,
                    "apiBaseUrl" : apiBaseUrl }