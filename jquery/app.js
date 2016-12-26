
// Final array containing all images
var thumbs = [];

// Save all references of thumbnails of the page (class = thumbnail)
var listThumbs = $('.thumbnail');

// Put all images source to the thumbs array
for (var i = 0 ; listThumbs[i]; i++) {
    thumbs.push(listThumbs[i].src);
}

// Show the content of the thumbs array
console.log(thumbs);