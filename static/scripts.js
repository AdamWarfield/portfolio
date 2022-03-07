function stars(){
  
    function freshDot(){
      var container = document.querySelector('.star-container');
      this.obj = document.createElement("div");
      this.obj.classList.add("star");
      this.obj.style.top = (container.offsetHeight * Math.random()) + 'px';
      this.obj.style.left = (container.offsetWidth * Math.random()) + 'px';
      this.size = Math.floor(3 * Math.random()) + 7;
      this.obj.style.height =  this.size + 'px';
      this.obj.style.width = this.size + 'px';
      
      container.appendChild(this.obj);
    }
    var dot = [];
    for(var i = 0 ; i < 200; i++ ){
      dot.push(new freshDot());
    }

  };
  
  window.onload = stars;