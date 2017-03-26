$(document).ready(function() {
  // external js: masonry.pkgd.js, imagesloaded.pkgd.js

  loadPage('portfolio.html');

  var grid = document.querySelector('.grid');
  var msnry;

  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 10
    });
  });
  $('#section').load('portfolio.html');

});
