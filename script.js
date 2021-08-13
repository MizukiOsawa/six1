$(function(){

  $('#top').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },500)
  });

    $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },500);
    
  });

  $('.menu').click(function(){
    $('#bar1,#bar2,#bar3').toggleClass('open');
    if($('.menu-list').hasClass('flex-open')){
      $('.menu-list').removeClass('flex-open');
      $('.menu-list').slideUp();
      }else {
      $('.menu-list').addClass('flex-open');
      $('.menu-list').slideDown();
    }
  });

  $('#list1').click(function(){
    $('#bar1,#bar2,#bar3').toggleClass('open');
    $('.menu-list').removeClass('flex-open');
    $('.menu-list').slideUp();
  });

  $('#list2').click(function(){
    $('#bar1,#bar2,#bar3').toggleClass('open');
    $('.menu-list').removeClass('flex-open');
    $('.menu-list').slideUp();
  });

  $('#list3').click(function(){
    $('#bar1,#bar2,#bar3').toggleClass('open');
    $('.menu-list').removeClass('flex-open');
    $('.menu-list').slideUp();
  });

  $('#list4').click(function(){
    $('#bar1,#bar2,#bar3').toggleClass('open');
    $('.menu-list').removeClass('flex-open');
    $('.menu-list').slideUp();
  });


  $('#list5').click(function(){
    $('#bar1,#bar2,#bar3').toggleClass('open');
    $('.menu-list').removeClass('flex-open');
    $('.menu-list').slideUp();
  });



});

