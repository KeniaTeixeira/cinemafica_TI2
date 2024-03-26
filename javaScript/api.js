'use strict';

const api_key = 'd18b2a1e9dc30363c1cb5fbefdd23412';
const imagemBaseURL = 'https://image.tmdb.org/t/p/'

const fetchDataFromServer = function(url, callback, optionalParam){
    fetch(url)
        .then(response => response.json())
        .then (data => callback(data, optionalParam));
}

export{ imagemBaseURL, api_key, fetchDataFromServer};