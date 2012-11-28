console.log('content script running.');

var locations = {
    f: 'http://facebook.com',
    l: 'http://flickr.com',
    t: 'http://twitter.com',
    w: 'http://wikipedia.org'
};

$(document).ready(function(){
    var body = $('body');
    if (body){
        body.fancygestures(function (letter){
            letter = letter.toLowerCase();
            if (locations[letter]){
                document.location = locations[letter];
            }
            else {
                console.log('Received letter ' + letter + ' with no location.');
            }
        });
    }
});
