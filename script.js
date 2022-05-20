const time=1000
function countdown10(callback){
    setTimeout(function(){
        //console.log("10")
        document.getElementById("demo").innerHTML = "10"
        callback();
    },1*1000)
    
}
function countdown9(callback){
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "9"
        callback();
    },1*1000)
    
}
function countdown8(callback){
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "8"
        callback();
    },1*1000)
   
}
function countdown7(callback){
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "7"
        callback();
    },1*1000)
    
}
function countdown6(callback){
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "6"
        callback();
    },1*1000)
    
}
function countdown5(callback){
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "5"
        callback();
    },1*1000)
    
}
function countdown4(callback){
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "4"
        callback();
    },1*1000)
    
}
function countdown3(callback){
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "3"
        callback();
    },1*1000)
    
}
function countdown2(callback){
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "2"
        callback();
    },1*1000)
    
}
function countdown1(callback){
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "1"
        callback();
    },1*1000)

}

countdown10(()=>{
    countdown9(()=>{
        countdown8(()=>{
            countdown7(()=>{
                countdown6(()=>{
                    countdown5(()=>{
                        countdown4(()=>{
                            countdown3(()=>{
                                countdown2(()=>{
                                    countdown1(()=>{
                                        document.getElementById("demo").innerHTML = "Happy Independence Day"
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});