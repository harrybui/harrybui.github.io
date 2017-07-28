let IMAGES = [
  {
    imageUrl: 'img/seattle_washington_pike_place_market.jpg',
    locationUrl: 'https://www.google.com/maps/place/Pike+Place+Market,+Seattle,+WA/@47.60972,-122.342193,16z',
    title: 'Seattle, Washington',
    subTitle: 'Pike Place Market'
  },
  {
    imageUrl: 'img/queenstown_new_zealand_devils_staircase.jpg',
    locationUrl: 'https://www.google.com/maps/place/Devils+Staircase+9793,+New+Zealand/@-45.2358393,168.6356302,11z',
    title: 'Queenstown, New Zealand',
    subTitle: 'Devils Staircase'
  },
  {
    imageUrl: 'img/point_reyes_california_cypress_tunnel.jpg',
    locationUrl: 'https://www.google.com/maps/place/Cypress+Tree+Tunnel/@38.0938611,-122.9498675,16z',
    title: 'Point Reyes, California',
    subTitle: 'Cypress Tunnel'
  },
  {
    imageUrl: 'img/mount_cook_new_zealand_aoraki_mount_cook_national_park_2.jpg',
    locationUrl: 'https://www.google.com/maps/place/Aoraki%2FMount+Cook+National+Park/@-43.5946537,170.2602045,17z',
    title: 'Mount Cook, New Zealand',
    subTitle: 'Aoraki Mount Cook National Park'
  },
  {
    imageUrl: 'img/seattle_washington_kerry_viewpoint_park.jpg',
    locationUrl: 'https://www.google.com/maps/place/Kerry+Park/@47.629547,-122.360137,17z',
    title: 'Seattle, Washington',
    subTitle: 'View from Kerry Viewpoint Park'
  },
  {
    imageUrl: 'img/peru_inca_trail_machu_picchu.jpg',
    locationUrl: 'https://www.google.com/maps/place/Puyupatamarca/@-13.206524,-72.532124,17z',
    title: 'Phuyupatamarca, Peru',
    subTitle: 'Inca Trail to Machu Picchu'
  },
  {
    imageUrl: 'img/kauai_hawaii_hanalei_bay_beach.jpg',
    locationUrl: 'https://www.google.com/maps/place/Hanalei+Pavilion+Beach+Park/@22.2072622,-159.507088,16z',
    title: 'Kauai, Hawaii',
    subTitle: 'Hanalei Bay Beach'
  },
  {
    imageUrl: 'img/santorini_greece_fira_bells.jpg',
    locationUrl: 'https://www.google.com/maps/place/Fira+847+00,+Greece/@36.4199992,25.4229122,15z',
    title: 'Santorini, Greece',
    subTitle: 'Fira Bells'
  },
  {
    imageUrl: 'img/littleton_colorado_roxborough_state_park.jpg',
    locationUrl: 'https://www.google.com/maps/place/Roxborough+State+Park/@39.429056,-105.06854,17z',
    title: 'Littleton, Colorado',
    subTitle: 'Roxborough State Park'
  },
  {
    imageUrl: 'img/yosemite_california_yosemite_falls.jpg',
    locationUrl: 'https://www.google.com/maps/place/Yosemite+Falls/@37.756596,-119.596907,17z',
    title: 'Yosemite, California',
    subTitle: 'Yosemite Falls'
  },
  {
    imageUrl: 'img/kauai_hawaii_hanalei_bay_pier.jpg',
    locationUrl: 'https://www.google.com/maps/place/Hanalei+Pavilion+Beach+Park/@22.2072622,-159.507088,16z',
    title: 'Kauai, Hawaii',
    subTitle: 'Hanalei Bay Pier'
  },
  {
    imageUrl: 'img/santorini_greece_oia_sunset.jpg',
    locationUrl: 'https://www.google.com/maps/place/Oia+847+02,+Greece/@36.4624199,25.3767829,16z',
    title: 'Santorini, Greece',
    subTitle: 'Oia Sunset'
  },
  {
    imageUrl: 'img/rotorua_new_zealand_government_gardens.jpg',
    locationUrl: 'https://www.google.com/maps/place/Government+Gardens+Golf/@-38.1344277,176.2509088,15z',
    title: 'Rotorua, New Zealand',
    subTitle: 'Government Gardens'
  },
  {
    imageUrl: 'img/mount_cook_new_zealand_aoraki_mount_cook_national_park.jpg',
    locationUrl: 'https://www.google.com/maps/place/Aoraki%2FMount+Cook+National+Park/@-43.5946537,170.2602045,17z',
    title: 'Mount Cook, New Zealand',
    subTitle: 'Aoraki Mount Cook National Park'
  },
  {
    imageUrl: 'img/istanbul_turkey_basilica_cistern.jpg',
    locationUrl: 'https://www.google.com/maps/place/Basilica+Cistern/@41.008384,28.9776044,18.86z',
    title: 'Istanbul, Turkey',
    subTitle: 'Basilica Cistern'
  },
  {
    imageUrl: 'img/tekapo_new_zealand_lake_pukaki.jpg',
    locationUrl: 'https://www.google.com/maps/place/Lake+Pukaki/@-44.0484276,170.028968,11z',
    title: 'Tekapo, New Zealand',
    subTitle: 'Lake Pukaki'
  },
  {
    imageUrl: 'img/cappadocia_turkey.jpg',
    locationUrl: 'https://www.google.com/maps/place/Cappadocia/@38.645974,34.8402429,17z',
    title: 'Cappadocia, Turkey',
    subTitle: ''
  },
  {
    imageUrl: 'img/santorini_greece_oia_blue_domes.jpg',
    locationUrl: 'https://www.google.com/maps/place/Oia+847+02,+Greece/@36.4624199,25.3767829,16z',
    title: 'Santorini, Greece',
    subTitle: 'Oia Blue Domes'
  },
  {
    imageUrl: 'img/sydney_australia_sydney_opera_house.jpg',
    locationUrl: 'https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.213108,17z',
    title: 'Sydney, Australia',
    subTitle: 'Sydney Opera House'
  },
  {
    imageUrl: 'img/lake_tahoe_california_kings_beach.jpg',
    locationUrl: 'https://www.google.com/maps/place/Kings+Beach,+CA/@39.249242,-120.035532,15z',
    title: 'Lake Tahoe, California',
    subTitle: 'Kings Beach'
  },
  {
    imageUrl: 'img/point_reyes_california_shipwreck.jpg',
    locationUrl: 'https://www.google.com/maps/place/Point+Reyes+Shipwrecks/@38.0973307,-122.9135628,14z',
    title: 'Point Reyes, California',
    subTitle: 'Shipwreck'
  },
  {
    imageUrl: 'img/queenstown_new_zealand_frankton_arm.jpg',
    locationUrl: 'https://www.google.com/maps/place/Queenstown,+New+Zealand/@-45.0308298,168.6835273,14z',
    title: 'Queenstown, New Zealand',
    subTitle: 'Frankton Arm'
  },
  {
    imageUrl: 'img/mount_cook_new_zealand_hooker_valley_track.jpg',
    locationUrl: 'https://www.google.com/maps/place/Hooker+Valley+track/@-43.718826,170.0904675,17z',
    title: 'Mount Cook, New Zealand',
    subTitle: 'Hooker Valley Track'
  },
  {
    imageUrl: 'img/kyoto_japan_fushimi_inari.jpg',
    locationUrl: 'https://www.google.com/maps/place/Fushimi+Inari+Taisha/@34.9671402,135.770483,17z',
    title: 'Kyoto, Japan',
    subTitle: 'Fushimi Inari'
  },
  {
    imageUrl: 'img/tokyo_japan_chidorigafuchi.jpg',
    locationUrl: 'https://www.google.com/maps/place/Chidori-ga-fuchi/@35.6906112,139.7443655,17z',
    title: 'Tokyo, Japan',
    subTitle: 'Chidorigafuchi'
  },
  {
    imageUrl: 'img/arches_utah_delicate_arch.jpg',
    locationUrl: 'https://www.google.com/maps/place/Delicate+Arch/@38.7446115,-109.5034007,16z',
    title: 'Arches National Park, Utah',
    subTitle: 'Delicate Arch'
  }
];

$(function () {

  let $images, $activeImage, $html, $previous, $next, currentBgIdx = 0, lazyNextBg, ayncImgLoaded;
  
  let template;

  const LEFT_KEYPRESS = 37, RIGHT_KEYPRESS = 39;
  const CYCLE_INTERVAL_MS = 20000;

  let imageTemplate;

  function loadImage(index) {
    let img;
    if (!ayncImgLoaded[index]) {
      let $image = $images.eq(index),
        $img = $image.find('img'),
        imgSrc = $img.data('src');
      img = new Image();
      img.src = imgSrc;
      $img.attr('src', imgSrc);

      ayncImgLoaded[index] = true;
    }
    return img;
  }

  function cacheNextPrev(index) {
    let prevIndex = ((index - 1) < 0) ? ($images.length - 1) : (index - 1);
    let nextIndex = ((index + 1) === $images.length) ? 0 : (index + 1);
    loadImage(prevIndex);
    loadImage(nextIndex);
  }

  function setBg(index, firstTime) {
    let $image = $images.eq(index);
    $image.css('background-image', 'url('+ $image.find('img').data('src') +')');
    $image.addClass('active');
    if ($activeImage) {
      $activeImage.removeClass('active');
    }
    $activeImage = $image;
    
    currentBgIdx = index;
    lazyNextBg();

    let image = loadImage(index);
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
      currentBgIdx = $images.length - 1;
    }
    setBg(currentBgIdx);
    return false;
  }

  function nextBg() {
    if ((currentBgIdx + 1) < $images.length) {
      currentBgIdx++;
    } else {
      currentBgIdx = 0;
    }
    setBg(currentBgIdx);
    return false;
  }

  function init() {

    const templateSrc = document.getElementById('image-template');
    template = _.template(templateSrc.innerHTML);

    let src = '';
    while(IMAGES.length) {
      let randomIdx = Math.floor(Math.random() * IMAGES.length);
      src += template(IMAGES[randomIdx]);
      IMAGES.splice(randomIdx, 1);
    }

    $('.image-list').append($(src));

    $html = $('html');
    $images = $('li');
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

    setBg(0, true);
  }

  init();

});