/**
 * Created by Thib on 16/11/2016.
 */

//Cool and smooth Nav-Hover
$('header nav ul li ').on('mouseenter', function () {
    $brother = $(this).siblings();
    $(this).find('a').addClass('hovered');
    $brother.find('a').addClass('not-hovered');
});

$('header nav ul li ').on('mouseleave', function () {
    $brother = $(this).siblings();
    $(this).find('a').removeClass('hovered');
    $brother.find('a').removeClass('not-hovered');
});


//Cool menu burger

$('header .menu-burger').find('div').on('click', function (){
    console.log($('nav ul li'))
    $('nav ul').removeClass('col-xs-1');
    $('nav').removeClass('col-xs-1').toggleClass('col-xs-12');
    $('nav ul li').toggleClass('active-burger col-xs-12');
});

console.log($('header .menu-burger').find('div'))


//Cool Research-Bar

$('#research').on('click', function(){
   $(this).siblings().toggleClass('active-research-bar')
})