


var Body = {
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    },
    setColor:function(color){
        document.querySelector('body').style.color = color;
    }
    
    
    
}

function nightDayHandler(self){
   
    var target = document.querySelector('body');
    if(self.value === 'night'){ 
    Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

                 
    var selectedItem = document.getElementById('foot');
    selectedItem.style.color='white';
                  
                  
                   
                    
    } else {
    Body.setBackgroundColor('white');
        Body.setColor('black');
    self.value = 'night';
                    
    var selectedItem = document.getElementById('foot');
    selectedItem.style.color='black';
                    
    }
    
} 




