
$(function () {

  var $sections, $activeSection, $html, $previous, $next, currentBgIdx = 0, lazyNextBg, ayncImgLoaded;
  var LEFT_KEYPRESS = 37, RIGHT_KEYPRESS = 39;
  var CYCLE_INTERVAL_MS = 20000;

  function loadImage(index) {
    var img;
    if (!ayncImgLoaded[index]) {
      var $section = $sections.eq(index),
        $img = $section.find('img'),
        imgSrc = $img.data('src'),
        img = new Image();

      img.src = imgSrc;
      $img.attr('src', imgSrc);

      ayncImgLoaded[index] = true;
    }
    return img;
  }

  function cacheNextPrev(index) {
    var prevIndex = ((index - 1) < 0) ? ($sections.length - 1) : (index - 1);
    var nextIndex = ((index + 1) === $sections.length) ? 0 : (index + 1);
    loadImage(prevIndex);
    loadImage(nextIndex);
  }

  function setBg(index, firstTime) {
    var $section = $sections.eq(index);
    $section.css('background-image', 'url('+ $section.find('img').data('src') +')');
    $section.addClass('active');
    if ($activeSection) {
      $activeSection.removeClass('active');
    }
    $activeSection = $section;
    
    currentBgIdx = index;
    lazyNextBg();

    var image = loadImage(index);
    if (firstTime) {
      image.onload = function () {
        cacheNextPrev(index);
      };
    } else {
      cacheNextPrev(index);
    }
  }

  function prevBg() {
    if ((currentBgIdx - 1) >= 0) {
      currentBgIdx--;
    } else {
      currentBgIdx = $sections.length - 1;
    }
    setBg(currentBgIdx);
    return false;
  }

  function nextBg() {
    if ((currentBgIdx + 1) < $sections.length) {
      currentBgIdx++;
    } else {
      currentBgIdx = 0;
    }
    setBg(currentBgIdx);
    return false;
  }

  function setRandomBg() {
    setBg(Math.floor(Math.random() * $sections.length), true);
  }

  function init() {
    //Reveal.initialize(revealConfig);

    $html = $('html');
    $sections = $('section');
    $previous = $('.previous-arrow');
    $next = $('.next-arrow');
    ayncImgLoaded = [];

    lazyNextBg = _.debounce(nextBg, CYCLE_INTERVAL_MS);
    lazyNextBg();

    $html.keydown(function (e) {
      if (e.keyCode === LEFT_KEYPRESS) {
        prevBg();
      } else if (e.keyCode === RIGHT_KEYPRESS) {
        nextBg();
      }
    });

    $previous.click(prevBg);
    $next.click(nextBg);

    setRandomBg();
  }

  init();

});