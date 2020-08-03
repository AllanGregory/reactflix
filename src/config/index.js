const UrlBackend = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'https://auroraflix.herokuapp.com';

export default {
    UrlBackend
};