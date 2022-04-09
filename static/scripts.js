function stars(){
  
  function starGenerator(){
    var container = document.querySelector('.star-container');
    this.obj = document.createElement("div");
    this.obj.classList.add("star");
    if (Math.random() > .33 ){
      this.obj.style.top = ((Math.random() * (0 - 33) +33) + '%');
    }else{
      this.obj.style.top = ((Math.random() * (100 - 32) +32) + '%');
    }
    this.obj.style.left = (Math.random() * 100 + '%');
    this.obj.style.opacity =(Math.random() * ( .9 - .66) + .66);
    this.size = Math.floor(3 * Math.random()) + 7;
    this.obj.style.height =  this.size + 'px';
    this.obj.style.width = this.size + 'px';
    
    container.appendChild(this.obj);
  }
  var dot = [];
  for(var i = 0 ; i < 200; i++ ){
    dot.push(new starGenerator());
  }

  };
  
  window.onload = stars;