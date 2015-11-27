
var maxChapterNumber;
var tracks;
var quillEditor;
var jsonstr = jsonstr || '[{"chapter_no": 1, "id": 1, "title": "hello-1", "parent_id": 0},{"chapter_no": 2, "id": 2, "title": "hello-2", "parent_id": 1},{"chapter_no": 2, "id": 3, "title": "hello-3", "parent_id": 1},{"chapter_no": 2, "id": 4, "title": "hello-4", "parent_id": 1},{"chapter_no": 2, "id": 5, "title": "hello-5", "parent_id": 1},{"chapter_no": 3, "id": 6, "title": "hello-6", "parent_id": 2},{"chapter_no": 3, "id": 7, "title": "hello-7", "parent_id": 2},{"chapter_no": 3, "id": 8, "title": "hello-8", "parent_id": 2},{"chapter_no": 3, "id": 9, "title": "hello-9", "parent_id": 2},{"chapter_no": 3, "id": 10, "title": "hello-10", "parent_id": 3},{"chapter_no": 3, "id": 11, "title": "hello-11", "parent_id": 3},{"chapter_no": 3, "id": 12, "title": "hello-12", "parent_id": 3},{"chapter_no": 3, "id": 13, "title": "hello-13", "parent_id": 3},{"chapter_no": 3, "id": 14, "title": "hello-14", "parent_id": 4},{"chapter_no": 3, "id": 15, "title": "hello-15", "parent_id": 4},{"chapter_no": 3, "id": 16, "title": "hello-16", "parent_id": 4},{"chapter_no": 3, "id": 17, "title": "hello-17", "parent_id": 4},{"chapter_no": 3, "id": 18, "title": "hello-18", "parent_id": 5},{"chapter_no": 3, "id": 19, "title": "hello-19", "parent_id": 5},{"chapter_no": 3, "id": 20, "title": "hello-20", "parent_id": 5},{"chapter_no": 3, "id": 21, "title": "hello-21", "parent_id": 5},{"chapter_no": 4, "id": 22, "title": "hello-22", "parent_id": 6},{"chapter_no": 4, "id": 23, "title": "hello-23", "parent_id": 6},{"chapter_no": 4, "id": 24, "title": "hello-24", "parent_id": 6},{"chapter_no": 4, "id": 25, "title": "hello-25", "parent_id": 6},{"chapter_no": 4, "id": 26, "title": "hello-26", "parent_id": 7},{"chapter_no": 4, "id": 27, "title": "hello-27", "parent_id": 7},{"chapter_no": 4, "id": 28, "title": "hello-28", "parent_id": 7},{"chapter_no": 4, "id": 29, "title": "hello-29", "parent_id": 7},{"chapter_no": 4, "id": 30, "title": "hello-30", "parent_id": 8},{"chapter_no": 4, "id": 31, "title": "hello-31", "parent_id": 8},{"chapter_no": 4, "id": 32, "title": "hello-32", "parent_id": 8},{"chapter_no": 4, "id": 33, "title": "hello-33", "parent_id": 8},{"chapter_no": 4, "id": 34, "title": "hello-34", "parent_id": 9},{"chapter_no": 4, "id": 35, "title": "hello-35", "parent_id": 9},{"chapter_no": 4, "id": 36, "title": "hello-36", "parent_id": 10},{"chapter_no": 4, "id": 37, "title": "hello-37", "parent_id": 10},{"chapter_no": 4, "id": 38, "title": "hello-38", "parent_id": 11},{"chapter_no": 4, "id": 39, "title": "hello-39", "parent_id": 11},{"chapter_no": 4, "id": 40, "title": "hello-40", "parent_id": 11},{"chapter_no": 4, "id": 41, "title": "hello-41", "parent_id": 12},{"chapter_no": 4, "id": 42, "title": "hello-42", "parent_id": 12},{"chapter_no": 4, "id": 43, "title": "hello-43", "parent_id": 12},{"chapter_no": 4, "id": 44, "title": "hello-44", "parent_id": 12},{"chapter_no": 4, "id": 45, "title": "hello-45", "parent_id": 12},{"chapter_no": 4, "id": 46, "title": "hello-46", "parent_id": 13},{"chapter_no": 4, "id": 47, "title": "hello-47", "parent_id": 13},{"chapter_no": 4, "id": 48, "title": "hello-48", "parent_id": 14},{"chapter_no": 4, "id": 49, "title": "hello-49", "parent_id": 14},{"chapter_no": 4, "id": 50, "title": "hello-50", "parent_id": 15},{"chapter_no": 4, "id": 51, "title": "hello-51", "parent_id": 15},{"chapter_no": 4, "id": 52, "title": "hello-52", "parent_id": 15}]';

function getData() {
  return JSON.parse(jsonstr.replace(/=>/g, ':').replace(/nil/g, '0'));
}

function getChapters(data, chapterNumber, parentId) {
  return data.filter(function(item){
    return ((parentId === 0 || item.parent_id === parentId) && item.chapter_no === chapterNumber);
  });
}

function getMaxChapter(data) {
  return data.reduce(function(a, b){
    return a.chapter_no >= b.chapter_no? a : b;
  }, {ch:0});
}

function hasChildren(nodes, node) {
  for (var i=0; i < nodes.length; i++) {
    if (node.id === nodes[i].parent_id) {
      return true;
    }
  }
  return false;
}

function getLeaves(nodes) {
  var leaves = [];
  for(var i=0; i < nodes.length; i++) {
    if(!hasChildren(nodes, nodes[i])) {
      leaves.push(nodes[i]);
    }
  }
  return leaves;
}

function getParent(nodes, node) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].id === node.parent_id) {
      return nodes[i];
    }
  }
  return undefined;
}

function buildTracks() {
  var chapters = getData();
  var tracks = [];
  var leaves = getLeaves(chapters);
  for(var i=0; i < leaves.length; i++) {
    tracks.push(_buildTrack(chapters, leaves[i]));
  }
  return tracks;
}
function _buildTrack(nodes, leaf) {
  var path = [];
  var parent = leaf;
  do {
    path.push(parent);
    parent = getParent(nodes, parent)
  } while(parent);
  return path.reverse();
}

function _buildTreeLevels(data) {
  var max = getMaxChapter(data).chapter_no;
  maxChapterNumber = max;
  var resultTree = new Array(max);
  for (var i = 0; i < max; i++) {
    resultTree[i] = getChapters(data, i + 1, 0);
  }
  return resultTree;
}

function createSliderHTML(trackNumber, numberOfLikes) {
  return '<div class="row">'
    +  '<div class="col-sm-2">'
    +    '<h5 class="v-center">Track: '+ trackNumber + '</h5>'
    +    '<p>' + numberOfLikes + ' Like(s)</p>'
    +  '</div>'
    +  '<div class="col-sm-10">'
    +    '<div data-track-number="' + trackNumber + '" class="slider slider-'+ trackNumber +'">'
    +    '</div>'
    +  '</div>'
    +'</div>';
}

function chapterToSlideHTML(chapter) {
  var x = '<div data-parent-id="' + chapter.parent_id + '" data-id="' + chapter.id + '" class="slide">'
    +  '<div class="slide-content">'
    +    '<h5>' + chapter.title + '</h5>'
    +    '<div class="extra-info">'
    +      '<p>Author: <a href="#" class="author">' + (chapter.author || 'N/A') + '</a></p>'
    // +       '<p class="date">'
    // +         'Created at:'
    // +         '8/11/2015'
    // +       '</p>'
    +      '<p class="likes">' + (chapter.likes||0) + ' like</p>'
    +    '</div>'
    +  '</div>'
    + '</div>';
  return x;
}

function buildChapterSlides() {
  var data = getData();
  var chaptersTree = _buildTreeLevels(data);
  return chaptersTree.map(function(level) {
    return level.map(function(chapter) {
      chapter.html = chapterToSlide(chapter);
      return chapter;
    });
  });

}

function getChapterSiblings(chapters, chapter) {
  return chapters.filter(function(chapter2) {
    return chapter.parent_id === chapter2.parent_id
  });
}

function getChapterChildren(chapters, chapterid) {
  return chapters.filter(function(chapter2) {
    return chapter.id === chapter2.parent_id
  });
}

function clearSlick(slider) {
  while (slider.slick('slickRemove', 0)) {}
}

function replaceSlides(slider, chapters) {
  clearSlick(slider);
  chapters.forEach(function(chapter, index, array){
    slider.slick('slickAdd', chapter.html);
  });
}

tracks = buildTracks();

/* global Maplace chaptersTree quillEditor */
$(document).ready(function(){
  // $.get('images/svg-defs.svg', function(data) {
  //   var $icons = $('<div class="icons"></div>').html(new XMLSerializer().serializeToString(data.documentElement));
  //   $('body').prepend($icons);
  // });

  if ($('#editor').length > 0) {
    quillEditor = new Quill('#editor', {
      modules: {
        'toolbar': { container: '#toolbar' },
        'link-tooltip': true
      },
      theme: 'snow',
    });
  }//endif
  var slidersContainer = $('.tracks').parent();
  if(slidersContainer.length > 0) {
    $(tracks).each(function(index, track) {
      // if(index > 5) {return;}
      var slider = $(createSliderHTML(index + 1, 20)).appendTo(slidersContainer).find('.slider');
      $(track).each(function(index2, chapter){
        slider.append(chapterToSlideHTML(chapter));
      });
      slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '10px',
        centerMode: true,
        adaptiveHeight: true,
        draggable: false,
        infinite: true
        // asNavFor: '.slider-3',
        // focusOnSelect: true
      });
    });
  } else {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '10px',
      centerMode: true,
      adaptiveHeight: true,
      draggable: false,
      infinite: true
      // asNavFor: '.slider-3',
      // focusOnSelect: true
    });
  }
  // $('.slider-1, .slider-2, .slider-3').slick('slickGoTo', 0);

  // $('').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   // asNavFor: '.slider-3',
  //   centerPadding: '10px',
  //   centerMode: true,
  //   focusOnSelect: true
  // });

  // $('').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   // asNavFor: '.slider-2',
  //   centerPadding: '10px',
  //   centerMode: true,
  //   focusOnSelect: true
  // });
  $('[data-toggle="tooltip"]').tooltip()
});


/* global Maplace */

// // $('.js-filter').on('click', function(){
// //   if (filtered === false) {
// //     $('.filtering').slick('slickFilter',':even');
// //     $(this).text('Unfilter Slides');
// //     filtered = true;
// //   } else {
// //     $('.filtering').slick('slickUnfilter');
// //     $(this).text('Filter Slides');
// //     filtered = false;
// //   }
// // });

// $('.slider-1').on('click', '.slick-active.slick-center', function() {
//   var slider1 = $('.slider-1');
//   var slider2 = $('.slider-2');
//   var slider3 = $('.slider-3');
  
//   var slider1ChapterNumber = parseInt(slider1.prop('data-chapter'));
//   var slider2ChapterNumber = parseInt(slider2.prop('data-chapter'));
//   var slider3ChapterNumber = parseInt(slider3.prop('data-chapter'));
//   if (slider1ChapterNumber <= 1) {
//     return;
//   }//endif
//   replaceSlides(slider1, chaptersTree[slider1ChapterNumber - 2]);
//   replaceSlides(slider2, chaptersTree[slider2ChapterNumber - 2]);
//   replaceSlides(slider3, chaptersTree[slider3ChapterNumber - 2]);
//   slider1.prop('data-chapter', slider1ChapterNumber - 1)
//   slider2.prop('data-chapter', slider2ChapterNumber - 1)
//   slider3.prop('data-chapter', slider3ChapterNumber - 1)
// });

// $('.slider-2 .slick-center').on('click', function() {

// });

// $('.slider-3').on('click', '.slick-active.slick-center', function() {
//   var slider1 = $('.slider-1');
//   var slider2 = $('.slider-2');
//   var slider3 = $('.slider-3');
  
//   var slider1ChapterNumber = parseInt(slider1.prop('data-chapter'));
//   var slider2ChapterNumber = parseInt(slider2.prop('data-chapter'));
//   var slider3ChapterNumber = parseInt(slider3.prop('data-chapter'));
//   if ( maxChapterNumber <= slider3ChapterNumber) {
//     return;
//   }//endif
//   replaceSlides(slider1, chaptersTree[slider1ChapterNumber]);
//   replaceSlides(slider2, chaptersTree[slider2ChapterNumber]);
//   replaceSlides(slider3, chaptersTree[slider3ChapterNumber]);
//   slider1.prop('data-chapter', slider1ChapterNumber + 1)
//   slider2.prop('data-chapter', slider2ChapterNumber + 1)
//   slider3.prop('data-chapter', slider3ChapterNumber + 1)
// });

// $('.slider-1').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//   var id = slick.$slides[nextSlide].id;
//   $('.slider-2').slick('slickFilter', '[data-parent=' + id + ']');
// });

// $('.slider-2').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//   var id = slick.$slides[nextSlide].id;
//   $('.slider-3').slick('slickFilter', '[data-parent=' + id + ']');
// });

// $('.slider-3').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//   // var id = slick.$slides[nextSlide].id;
//   // $('.slider-3').slick('slickFilter', '[data-parent=' + id + ']');
// });
$(document).on('click', '.slide', function (){
    var self = $(this);
    var parent = self.closest('.slider');
    var sl = parent.slick('getSlick');
    var index = self.data('slick-index');
    if (self.hasClass('slick-center')) {
        // window.location = "hello-world.html";
        // return false;
    }
    if(sl.$slides.length <= 3) {
      parent.find('.slick-center').removeClass('slick-center');
      self.addClass('slick-center');
    } else {
      parent.slick('slickGoTo', index);
    }
});

$(document).on('beforeChange', '.slider', function(e, sl, n, p) {
    $(sl.$slides[n]).blur();
});

$(document).on('init', '.slider', function(e, sl){
    if(sl.$slides.length > 3) {
        $('.slick-center').removeClass('slick-center');
    }
});

$(document).on('submit', '#new_chapter', function(e) {
  $(this).find('textarea').val(quillEditor.getHTML());
  return true;
});

$(document).on('click', '.slider-add-chapter', function(e) {
  var self = $(this);
  var href = self.data('href');
  var chapterNumber = parseInt(self.data('chapter-number'));
  if(chapterNumber == 1) {
    alert('You cannot add new version of chapter 1');;
    return false;
  }
  var parentChapterId = $('.slider-' + (chapterNumber - 1)).find('slick-center input[type="hidden"]').val();
  window.location = href.replace(/0$/, parentChapterId)
});
