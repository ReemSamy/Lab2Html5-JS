self.onmessage=function(){
    var sum =0;
    for(var i=0;i<1000;i++) sum +=i;
    //alert(sum);

    self.postMessage(sum)
}