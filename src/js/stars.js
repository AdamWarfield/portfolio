$(document).ready(function(){
  
    function freshDot(){
      this.obj = document.createElement("div");
      this.obj.classList.add("star");
      this.obj.style.top = ($('.star-container').height() * Math.random()) + 'px';
      this.obj.style.left = ($('.star-container').width() * Math.random()) + 'px';
      this.size = Math.floor(3 * Math.random()) + 7;
      this.obj.style.height =  this.size + 'px';
      this.obj.style.width = this.size + 'px';
      
      $('.star-container').append(this.obj);
    }
    var dot = [];
    for(var i = 0 ; i < 200; i++ ){
      dot.push(new freshDot());
    }

  });