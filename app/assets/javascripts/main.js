
var maxChapterNumber;
var tracks;
var quillEditor;
var jsonstr;

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

// tracks = buildTracks();
var windowHeight, headerHeight;
/* global Maplace chaptersTree quillEditor */
$(document).ready(function(){
  // $.get('images/svg-defs.svg', function(data) {
  //   var $icons = $('<div class="icons"></div>').html(new XMLSerializer().serializeToString(data.documentElement));
  //   $('body').prepend($icons);
  // });
  var headerHeight = $('header').height();
  var windowHeight = $(window).height();
  $('.main-container').css('min-height', (windowHeight - headerHeight) + 'px');
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
    var slider = self.closest('.slider');
    var sl = slider.slick('getSlick');
    var index = self.data('slick-index');
    if(sl.$slides.length <= 3) {
      slider.find('.slick-center').removeClass('slick-center');
      self.addClass('slick-center');
    } else {
      slider.slick('slickGoTo', index);
    }

    var chapterNumber = slider.data('chapter-number');
    var nextSlider = $('.slider-' + (chapterNumber + 1));
    if(nextSlider.length == 0) {
      return;
    }
    var chapterId = self.data('chapter-id');
    nextSlider.slick('slickFilter', '.slide[data-parent-id=' + chapterId + ']');
    nextSlider.find('.slick-center').removeClass('.slick-center');
    var i = chapterNumber + 2
    nextSlider = $('.slider-' + i)
     while(nextSlider.length != 0) {
      nextSlider.slick('slickUnfilter');
      nextSlider.find('.slick-center').removeClass('.slick-center');
      i++;
      nextSlider = $('.slider-' + i);
    } 
    var previousIsEmpty = false;

    $('.slider').each(function() {
      var slider = $(this);
      var sl = slider.slick('getSlick');
      var parentRow = slider.closest('.level');
      var addNewVersionBtn = parentRow.find('.slider-add-chapter');
      var sliderInnerList = slider.find('.slick-list');
      sliderInnerList.find('.no-chapter').remove();
      console.log(addNewVersionBtn);
      if(sl.$slides.length == 0 || previousIsEmpty) {
        addNewVersionBtn.hide();
        if(previousIsEmpty == false) {
          addNewVersionBtn.show();
          previousIsEmpty = true;
        }
        slider.slick('slickFilter', '.no-chapter');
        slider.css('min-height', '180px');
        
        sliderInnerList.append('<p style="display:block;width:100%;text-align:center;font-weight:400;font-size:20px;margin-top:60px" class="no-chapter"> No Chapters here</p>')
      } else {
        addNewVersionBtn.show();
      }
    });
});

$(document).on('beforeChange', '.slider', function(e, sl, n, p) {
    $(sl.$slides[n]).blur();
});

$(document).on('afterChange', '.slider', function(e, sl, n, p) {
  $(this).find('.slick-center').click();
});

$(document).on('init', '.slider', function(e, sl){
    var self = $(this);
    if(!self.hasClass('slider-1')) {
        $('.slick-center').removeClass('slick-center');
    }
});

$(document).on('submit', '.quill-form', function(e) {
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
  var parentSlider = $('.slider-' + (chapterNumber - 1));
  var parentChapterInput = parentSlider.find('.slick-center input[type="hidden"]');
  if(parentChapterInput.length == 0) {
    alert("Please pick a chapter from previous slider");
    return;
  }
  var parentChapterId = parentChapterInput.val();
  window.location = href.replace(/0$/, parentChapterId)
});

$( window).resize(function() {
    $('.main-container').css('min-height', (windowHeight - headerHeight) + 'px');
  });