$(function(){
    
    var container = $('.full-bg');
    
    $(window).resize(function(){
       var currentWindow = $(this),
           windowWidth = currentWindow.width(),
           windowHeight = currentWindow.height(),
           browserRatio = windowWidth / windowHeight,
           imageRatio = 864/486;
        if(browserRatio < imageRatio){
           container.css({
               height:'100%',
               width: windowHeight * imageRatio,
               left: (windowWidth - windowHeight * imageRatio)/2,
               top:0,
               
           });
        }else{
            container.css({
                height:windowWidth / imageRatio,
                width:'100%',
                left: 0,
                top: (windowHeight - windowWidth / imageRatio)/2,
            });
           
        }
           
    });
    
    $(window).trigger('resize');
    
});