if (!Modernizr.svg) {
  // Get all img tag of the document and create variables
  var i = document.getElementsByTagName("img"), j, y;
  // For each img tag
  for (j = i.length; j--;) {
    y = i[j].src
      // If filenames ends with SVG
    if (y.match(/svg$/)) {
      // Replace "svg" by "png"
      i[j].src = y.slice(0, -3) + 'png'
    }
  }
}
