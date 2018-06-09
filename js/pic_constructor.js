function PicClass(_img,_id){
    this.img = _img;
    this.id = _id;
}

PicClass.prototype.addToHtml = function(){
    var myGallery = document.getElementById("id_gallery");
    
    var newDiv = document.createElement("div");
    newDiv.className = "col-xl-3 col-md-4 col-sm-6";
    myGallery.appendChild(newDiv);
    
    var newFig = document.createElement("figure");
    newDiv.appendChild(newFig);
    
    var newImg = document.createElement("img");
    newImg.src = "images/"+this.img;
    newFig.appendChild(newImg);
    //var _this = this;
    newDiv.addEventListener("click",function(){
        //alert(this.img);
        document.getElementById("dark_screen").style.display = "flex";
        var darkImg = document.getElementById("dark_img");
         darkImg.src = "images/"+this.img;
         currentPos = this.id;
    }.bind(this))
       
    
}
