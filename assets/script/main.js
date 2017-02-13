/**
 * Created by Thib on 07/12/2016.
 */
var Projects = function (mainColor, bgColor, fontColor) {
    this.mainColor = mainColor;
    this.bgColor = bgColor;
    this.fontColor = fontColor;
};

//trouver un moyen de stocker proprement des instances de Projects pour chaque projet.
var main = new Projects('#4B5F64', '#6d8186', '#FFFFFF'),
    atbgo = new Projects('#ff4b2e', '#e5e3e1', '#f7f4ed'),
    md = new Projects('#3ca968', '#e5e3e1', '#FFFFFF'),
    sollic = new Projects('#ffffff', '#000000', '#000000');

var projectsTab = [atbgo, md, sollic];

function chgColors(mainColor, bgColor, fontColor) {
//    change css var that defines colors
    var colorTarget = document.querySelector('body').style;
    colorTarget.setProperty('--main-color', mainColor);
    colorTarget.setProperty('--bg-color', bgColor);
    colorTarget.setProperty('--font-color', fontColor);
}


function upElement(element) {
    element.style.top += element.offsetHeight + "px";

}

function downElement(element) {
    element.style.top -= element.offsetHeight + "px";
}

var ele = document.querySelector('.projects');

for (i = 0; i < ele.childElementCount; i++) {
    (function (i) {
        ele.children[i].addEventListener('mouseenter', function () {
            chgColors(projectsTab[i].mainColor, projectsTab[i].bgColor, projectsTab[i].fontColor)
        });
        ele.children[i].addEventListener('mouseleave', function () {
            chgColors('#4B5F64', '#6d8186', '#FFFFFF')
        });
    }(i));
}

// SCROLLER

$('body').on('scroll', function (e) {
    e.preventDefault();
});

function scroller(element, status) {
    var $sidebar = $('.sidebar');
    var scrollX;
    if (status === 'prev'){
        $sidebar.removeClass('scrolled');
        scrollX= element.offset().left - ($sidebar.width()+250);
    } else {
        $sidebar.addClass("scrolled");
        scrollX = element.offset().left - ($sidebar.width());
    }

    $('body').animate({scrollLeft: scrollX}, 300);
}
$('.next-arrow').on('click', function () {
    scroller($(this).parent().next(), 'next')
});

$('.previous-arrow').on('click', function () {
    scroller($(this).parent().prev(), 'prev')
});
$('.image-holder').on('click', function () {
    scroller($('body'), 'prev')
});


//Ajax e-mail

Mail = function (email, content) {
    this.email = email;
    this.content = content;
};

function sendMail () {
    var mailContent = new Mail($('#e-mail').val(), $('#message').val());
    console.log(mailContent);
    if (mailContent) {
        $.ajax({
            type: "POST",
            url: "./mail.php",
            data: mailContent,
            success: function (response) {
                console.log(this.data);
                console.log(response);
            },
            error: function (response) {
                console.log('ca marche pas ' + response)
            }
        })
    }else{
        alert('veuillez remplir les champs')
    }
}

// $('.button .submit').on('click', sendMail());

//NEW tab

var newTab = document.querySelectorAll('a');

for (i = 0; i <= newTab.length; i++) {
    newTab[i].addEventListener('click', function (e) {
        e.preventDefault();
        window.open(this.href);
        return false;
    })
}
