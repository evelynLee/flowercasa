$(document).ready(function () {
  var banner_timer, _banner_speed = 5000,
    _banner_roll_speed = 2000;
  $(window).resize(function () {
    check_menu_arrow();
  });
  $('#main_menu_wrap,#cat_menu_panel').scroll(function () {
    check_menu_arrow();
  });
  $(document).on('mousewheel', '#cat_menu_panel,#main_menu_wrap', function (e, delta) {
    this.scrollLeft -= (delta * 40);
    e.preventDefault();
  });
  // --------------  首頁 menu 動畫效果
  // $('#main_menu li a').mouseenter(function () {
  //   var _window_width = window.innerWidth;
  //   if (_window_width >= 1024) {
  //     $(this).children('span').stop(true, true).animate({ 'height': '50px' }, 300);
  //   }
  // }).mouseleave(function () {
  //   var _window_width = window.innerWidth;
  //   if (_window_width >= 1024) {
  //     $(this).children('span').stop(true, true).animate({ 'height': '' }, 150, function () {
  //       $(this).css('height', '');
  //     });
  //   }
  // });
  // ---------------
  $('#main_menu li a').mouseenter(function () {
    var _window_width = window.innerWidth;
    if (_window_width >= 1024) {
      $(this).children('span').stop(true, true).animate({'height': '50px'}, 300);
    }
  }).mouseleave(function () {
    var _window_width = window.innerWidth;
    if (_window_width >= 1024) {
      $(this).children('span').stop(true, true).animate({'height':''}, 150, function () {
        $(this).css('height', '');
      });
    }
  });
  // --------------- 首頁點大圖可 link 到該商品的介紹網頁
  // check_menu_arrow();
  // $('#index_banners_nav li button').click(function () {
  //   clearTimeout(banner_timer);
  //   if (!$(this).hasClass('active')) {
  //     $('#index_banners_nav').find('button.active').removeClass('active');
  //     $(this).addClass('active');
  //     $('#index_banners li').stop(true, true);
  //     var link_url = $(this).data('url');
  //     var link_file = $(this).data('file');
  //     if (link_url != '') {
  //       link_url = ' href="' + link_url + '"';
  //     }
  //     var insert_html = '<li class="slide"><a' + link_url + ' style="background-image:url(/pub_images/' + link_file + ')"></a></li>';
  //     $('#index_banners').prepend(insert_html);
  //     var now_banner = $('#index_banners li:last-child');
  //     now_banner.fadeOut(_banner_roll_speed, function () {
  //       now_banner.remove();
  //       roll_banner();
  //     });
  //   } else {
  //     roll_banner();
  //   }
  // }).eq(0).click().end();
  // ---------------------
  check_menu_arrow();
  $('#index_banners_nav li button').click(function () {
    clearTimeout(banner_timer);
    if (!$(this).hasClass('active')) {
      $('#index_banners_nav').find('button.active').removeClass('active');
      $(this).addClass('active');
      $('#index_banners li').stop(true, true);
      var link_url = $(this).data('url');
      var link_file = $(this).data('file');
      if (link_url != '') {
        link_url = ' href="' + link_url + '"';
      }
      var insert_html = '<li class="slide"><a' + link_url + ' style="background-image:url(./pub_images/' + link_file + ')"></a></li>';
      $('#index_banners').prepend(insert_html);
      var now_banner = $('#index_banners li:last-child');
      now_banner.fadeOut(_banner_roll_speed, function () {
        now_banner.remove();
        roll_banner();
      });
    } else {
      roll_banner();
    }
  }).eq(0).click().end();
  // ---------------------
  function roll_banner() {
    banner_timer = setTimeout(function () {
      roll_next();
    }, _banner_speed);
  }

  function roll_next() {
    var now_element = $('#index_banners_nav').find('button.active');
    var next_element = now_element.closest('li').next('li');
    if (next_element.length == 0) {
      next_element = $('#index_banners_nav li:first-child');
    }
    next_element.find('button').click();
  }

  function roll_prev() {
    var now_element = $('#index_banners_nav').find('button.active');
    var prev_element = now_element.closest('li').prev('li');
    if (prev_element.length == 0) {
      prev_element = $('#index_banners_nav li:last-child');
    }
    prev_element.find('button').click();
  }
});
var toggle_speed = 300;

function viewport_change() {
  var _window_width = window.innerWidth;
  if (_window_width >= 980) {
    if ($('#cat_menu_hamburger').hasClass("toggle")) {
      $('#cat_menu_hamburger').removeClass("toggle");
      $('#cat_menu_wrap').removeClass('toggle');
    }
  }
}

function toggle_cat_menu(event) {
  if (event != null) {
    event.preventDefault();
  }
  if ($('#cat_menu_hamburger').hasClass("toggle")) {
    close_cat_menu(event);
  } else {
    $('#cat_menu_hamburger').addClass("toggle");
    $('#cat_menu_wrap').stop(true, true).addClass('toggle');
    $('#cat_menu_panel').scrollLeft(0);
    $('#cat_menu').stop().css({
      'marginLeft': 50,
      'opacity': 0
    }).delay(i * 100).animate({
      'marginLeft': 0,
      'opacity': 1
    }, 500);
    check_menu_arrow();
  }

}

function close_cat_menu(event) {
  if (event != null) {
    event.preventDefault();
  }
  if ($('#cat_menu_hamburger').hasClass("toggle")) {
    $('#cat_menu_hamburger').removeClass("toggle");
    $('#cat_menu_wrap').stop(true, true).removeClass('toggle');
  }
}

function main_menu_scroll(event, _dir) {
  var _delta = 100,
    _move = 0,
    _speed = 300;
  var _sl = $('#main_menu_wrap').scrollLeft();
  if (_dir == 'left') {
    _move = _sl - _delta;
  } else if (_dir == 'right') {
    _move = _sl + _delta;
  }
  $('#main_menu_wrap').animate({
    scrollLeft: _move
  }, _speed, function () {
    check_menu_arrow();
  });

  event.preventDefault();
}

function cat_menu_scroll(event, _dir) {
  var _delta = 100,
    _move = 0,
    _speed = 300;
  var _sl = $('#cat_menu_panel').scrollLeft();
  if (_dir == 'left') {
    _move = _sl - _delta;
  } else if (_dir == 'right') {
    _move = _sl + _delta;
  }
  $('#cat_menu_panel').animate({
    scrollLeft: _move
  }, _speed, function () {
    check_menu_arrow();
  });

  event.preventDefault();
}

function check_menu_arrow() {
  var menu_width = 0;
  var cat_menu_width = 0;
  $('#main_menu li').each(function () {
    menu_width += $(this).width() + 20;
  });
  if ($('#main_menu_wrap').width() < menu_width) {
    var el = document.getElementById("main_menu_wrap");
    var maxScrollLeft = el.scrollWidth - el.clientWidth - 5;

    _left = $('#main_menu_wrap').scrollLeft();

    if (_left == 0) {
      $('#header_wrap .scroll_menu.left').fadeOut('fast');
    } else {
      $('#header_wrap .scroll_menu.left').fadeIn('fast');
    }
    if (_left >= maxScrollLeft) {
      $('#header_wrap .scroll_menu.right').fadeOut('fast');
    } else {
      $('#header_wrap .scroll_menu.right').fadeIn('fast');
    }
  } else {
    $('#header_wrap .scroll_menu').fadeOut('fast');
  }

  $('#cat_menu li').each(function () {
    cat_menu_width += $(this).width() + 20;
  });
  if ($('#cat_menu_panel').width() < cat_menu_width) {
    var el = document.getElementById("cat_menu_panel");
    var maxScrollLeft = el.scrollWidth - el.clientWidth - 5;

    _left = $('#cat_menu_panel').scrollLeft();

    if (_left == 0) {
      $('#cat_menu_wrap .scroll_menu.left').fadeOut('fast');
    } else {
      $('#cat_menu_wrap .scroll_menu.left').fadeIn('fast');
    }
    if (_left >= maxScrollLeft) {
      $('#cat_menu_wrap .scroll_menu.right').fadeOut('fast');
    } else {
      $('#cat_menu_wrap .scroll_menu.right').fadeIn('fast');
    }
  } else {
    $('#cat_menu_wrap .scroll_menu').fadeOut('fast');
  }
}