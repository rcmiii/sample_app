// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
var t;
var auto_fade_to;
$(function(){
  auto_fade(true);

  $('.menu_selector').click(function(){
    if($(this).attr('id') != $('.current').attr('id')){
        $('.current_menu_box').toggleClass('current_menu_box');
        $(this).addClass('current_menu_box');
        $('.img_contents#' + $(this).attr('id')).fadeIn('fast');
        $('.current').attr('class', 'img_contents').fadeOut('fast');
        $('.img_contents#' + $(this).attr('id')).attr('class', 'img_contents current');
    }
  });
  
  $('.menu_selector').mouseenter(function(){
    auto_fade(false);
  });
  $('.menu_selector').mouseleave(function(){
    auto_fade(true);
  });
  $('.menu').mouseenter(function(){
    $('.extend#' + $(this).attr('id')).show('fast');
  });
  $('.menu').mouseleave(function(){
    $('.extend#' + $(this).attr('id')).hide('fast');
  });
  
  /*listing page js*/
  $('.listing_thumb').click(function(){
    $('img.main_photo').attr('src', "images/entertainment/" + $(this).attr('id') + ".png");
  });
//fancybox plugin part
  $("a#new_review_fancy").click(function(){
      $("a#new_review_fancy").fancybox();
      return false;
  });
  
  $("a#new_review").click(function(){
    $('#review_box').load('review_box.html', function(){
      $('#review_box').slideDown();
    });
    return false;
  });
  
  /*CITYNOTES PAGE JS*/
  $('div.left_menu ul li').click(function(){
    if( ! $(this).hasClass('selected')){
      $('div.left_menu ul li.selected').toggleClass('selected');
      $(this).toggleClass('selected');
    }
  });
  
  $('.add_to_mynotes').click(function(){
    $(this).css('color','#FF0000');
    return false;
  });
});

function auto_fade(start){
  if(start){
    auto_fade_to = setTimeout("next_slide()", 5000);    
  }else{
    clearTimeout(auto_fade_to);
  }
}

function next_slide(){
  var slide_to;
  if(parseInt($('.current').attr('id')) >= 5){
    slide_to = 1;
  } else {
    slide_to = parseInt($('.current').attr('id')) + 1;
  }

  $('.current_menu_box').toggleClass('current_menu_box');
  $('.opt' + slide_to).addClass('current_menu_box');
  $('.img_contents#' + slide_to).fadeIn('fast', function(){
    $('.current').attr('class', 'img_contents').fadeOut('fast', function(){
      $('.img_contents#' + slide_to).attr('class', 'img_contents current');
      auto_fade(true);
    });
  });
}
