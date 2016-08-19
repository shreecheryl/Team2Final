/***** TABS MENU *****/
$(function() {
var tabs = document.getElementsByClassName('stTab');
var switchToTab = function () {
    var selectedTab = this.id;
    var contentId = selectedTab + 'content';
    var contents = document.getElementsByClassName('stTabContent');
    for(var i = 0; i <  contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'block';
    for(var i = 0; i <  tabs.length; i++) {
        tabs[i].style.backgroundColor = 'initial';
        tabs[i].style.borderColor = 'initial';
        tabs[i].style.color = 'grey';
    }
    document.getElementById(selectedTab).style.backgroundColor = 'skyblue';
    document.getElementById(selectedTab).style.borderColor = 'skyblue';
};
for(var i = 0; i <  tabs.length; i++) {
    window.console.log();
    tabs[i].addEventListener("click", switchToTab, false);
}
document.getElementById('tab1').click();
});

/***** MOBILE MENU *****/
(function($) {
   $.fn.mobileMenu = function() {      
    var menu = document.getElementById("myTopNav");
    this.click(function() {
    if (menu.className === "topnav") {
        menu.className += " responsive";
    } else {
        menu.className = "topnav";
    }
    });
};
}(jQuery));

/***** BACK TO TOP *****/
(function($) {
   $.fn.backToTop = function(options) {
    $('body').prepend('<a href="#" class="scrollToTop"><i class="fa fa-arrow-up fa-2x" aria-hidden="true"></i></a>');
    
	var btnToTop = document.getElementsByClassName('scrollToTop');
    
    var settings = $.extend({
       color : "#fff",
       bgColor : "gray",
       right: "40px",
       bottom: "100px"
    }, options);
       
    $(btnToTop).css("color", settings.color)
               .css("background-color", settings.bgColor)
               .css("right", settings.right)
               .css("bottom", settings.bottom);
       
	//Check to see if the window is top if not then display button
	$(this).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$(btnToTop).fadeIn();
		} else {
			$(btnToTop).fadeOut();
		}
	});
	
	//Click event to scroll to top
	$(btnToTop).click(function(){
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	});
   };
}(jQuery));


/***** RESIZE TEXT *****/
(function ($) {
    
    $.fn.sizeText = function () {
        var biggerText = document.getElementsByClassName("increaseText");
        var smallerText = document.getElementsByClassName("decreaseText");
        var ogText = document.getElementsByClassName("originalText");


        var ogFontSizeArray = new Array;
        var sizeArray = document.getElementsByTagName("*");        
        for (var i =0; i < sizeArray.length; i++){
             var keepSize = sizeArray[i];
             var style = window.getComputedStyle(keepSize, null).getPropertyValue('font-size');
             var fontSize = parseFloat(style); 
             ogFontSizeArray[i] = fontSize;
        }
        
        return this.each(function () {
            
            $(biggerText).click(function(event){    
                
                var elemen = document.getElementsByTagName("*");

                for (var i =0; i < elemen.length; i++){
                    var elemen2 = elemen[i];
                    if ($(elemen2).hasClass('resizeText')){

                        var style = window.getComputedStyle(elemen2, null).getPropertyValue('font-size');
                        var fontSize = parseFloat(style); 
                        elemen2.style.fontSize = (fontSize + 1) + 'px';
                    }
                }
            });
            
            $(smallerText).click(function(event){    
                window.console.log('stuff man');
           
                var elemen = document.getElementsByTagName("*");
                 
                for (var i =0; i < elemen.length; i++){
                    var elemen2 = elemen[i];
                    if ($(elemen2).hasClass('resizeText')){
                        window.console.log(elemen2);
                
                        var style = window.getComputedStyle(elemen2, null).getPropertyValue('font-size');
                        var fontSize = parseFloat(style); 

                        elemen2.style.fontSize = (fontSize - 1) + 'px';
                    }
                }
            });
            $(ogText).click(function(event){    
                    window.console.log('stuff man');

                    var elemen = document.getElementsByTagName("*");

                    for (var i =0; i < elemen.length; i++){
                       elemen[i].style.fontSize =   ogFontSizeArray[i] + 'px';                     
                   }
                });   
        });
    }
}(jQuery));

/***** ACCORDION *****/
(function ($) {
    
    $.fn.accordion = function () {
        
        $('#accordion').find('.accordionSlide').click(function(){

            $(this).next().slideToggle('fast');

            $(".accordionContent").not($(this).next()).slideUp('fast');

   
        });
    };
}(jQuery));

/***** SLIDESHOW *****/
(function ($) {
    $.fn.slider = function () {
        function getEventTarget(e) {
            e = e || window.event;
            return e.target || e.srcElement; 
        }

        var ul = document.getElementById('sliderLinks');

                var elClicked;
                var elLength = $("#slideShowContainer > img").length;
                
                var i;
                var imageNameLoop;
                var linkNameLoop;  
                
                ul.onclick = function(event) {
                    var target1 = getEventTarget(event);
                    elClicked = target1.innerHTML;
                    elClicked = Number(elClicked -1);
                            
                        
                            
                    var imageName = document.getElementById('img' + elClicked);
                    var linkName = document.getElementById('link' + elClicked);
                    $(imageName).addClass("active").fadeIn(2500, "swing");
                    $(linkName).css({'fontSize':'40px', 'textDecoration':'underline'});
                    
                    
                    for (i = 0; i < elLength; i++){
                        
                        var imageNameLoop = document.getElementById('img' + i);
                        var linkNameLoop = document.getElementById('link' + i);
                        
                        
                        $(linkNameLoop).not(linkName).removeClass("active").css({'fontSize':'inherit', 'textDecoration':'none'});
                        $(imageNameLoop).not(imageName).fadeOut(2500, "swing");
    
                    }
                };
        }
}(jQuery));

/***** ALERT AND CONFIRM BOXES *****/
// Closing the custom ALert/Confirm Boxes using the 
var close = document.getElementsByClassName("closebtn");
var i;
// Loop through all close buttons
for (i = 0; i < close.length; i++) {
    // When someone clicks on a close button
    close[i].onclick = function(){

        // Below gets the parent of <span class="closebtn">
        var div = this.parentElement;

        // Set the opacity of div to 0 on close
        div.style.opacity = "0";

        // Hide the element box after closing
        setTimeout(function(){ div.style.visibility = "hidden"; });
    }
}

// Functions to call custom Alert/Confirm
/* 

//Custom Alert Box

/* Add appendAlert('', 'My text'); into a script tag within HTML. The first parameter in this case ''represents the text in the Alert header and 'My Text' represents the Alert text. Both can be changed to suit the page need.
    
    Background/text colors for ALert can be controlled in CSS .alert class
*/

function appendAlert(alertHeader, alertText){
    if (alertHeader !== '') {
        alertHeader = '<h3 class="popupHeader">' + alertHeader + '</h3>';
    }
    
    var alertBox = $('<div class="alert"></div>')
        .html('<span class="closebtn" onclick="this.parentElement.style.display=\'none\'">x</span>' + alertHeader + alertText);
    
    $("body").prepend(alertBox);
};

//Custom Confirm Box

/* Add appendAlert('', 'My text'); into a script tag within HTML. The first parameter in this case ''represents the text in the Alert header and 'My Text' represents the Alert text. Both can be changed to suit the page need.
    
    Background/text colors for ALert can be controlled in CSS .alert class
*/
function appendConfirm(confirmHeader, confirmText){
    if (confirmHeader !== '') {
        confirmHeader = '<h3 class="popupHeader">' + confirmHeader + '</h3>';
    }
    
    var confirmBox = $('<div class="confirm"></div>')
        .html('<span class="closebtn" onclick="this.parentElement.style.display=\'none\'">x</span> <span class="closebtn" onclick="this.parentElement.style.display=\'none\'">ok</span>' + confirmHeader + confirmText);
    
    $("body").prepend(confirmBox);
};

/* Change text within custom Alert and Confirm Box by altering the text between then quotes. 
The first being the box header. The second being descriptive text */

// Custom Alert Box header/text
            appendAlert('My Alert Header', 'This is my custom alert box text');

// Custom confirm Box header/text
            appendConfirm('My Confirm Header', 'This is my custom confirm box text');