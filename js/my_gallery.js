var pics_ar = [];
var currentPos = 0;

window.onload = function(){
    pics_ar = ["pic01.jpg","pic02.jpg","pic03.jpg","pic04.jpg","pic05.jpg","pic06.jpg",
                "pic07.jpg","pic08.jpg","pic09.jpg","pic10.jpg","pic11.jpg","pic12.jpg",
            "pic13.jpg","pic14.jpg","pic15.jpg","pic16.jpg"]

    createGallery();
    declareDarkScreen();
    
}

function declareDarkScreen(){
    document.getElementById("x_btn").addEventListener("click",function(){
         document.getElementById("dark_screen").style.display = "none";
    })
    document.querySelector('.dark_screen').addEventListener('click', function(){
        this.style.display = "none";
    })

    document.querySelector('#arrow_right').addEventListener('click', function(e){
        e.stopPropagation();
    });
    document.querySelector('#arrow_left').addEventListener('click', function(e){
        e.stopPropagation();
    });



    document.getElementById("arrow_left").addEventListener("click",function(){
        currentPos--;
        if(currentPos < 0){
            currentPos = pics_ar.length-1;
        }
         var darkImg = document.getElementById("dark_img");
         darkImg.src = "images/"+pics_ar[currentPos];
    })
    
    
    document.getElementById("arrow_right").addEventListener("click",function(){
        currentPos++;
        if(currentPos > pics_ar.length-1){
            currentPos = 0;
        }
        var darkImg = document.getElementById("dark_img");
         darkImg.src = "images/"+pics_ar[currentPos];
    })
    
}

function createGallery(){
   // for(var i = 0 ; i < pics_ar.length;i++)
    for(var i in pics_ar)
    {
        var newPic = new PicClass(pics_ar[i],i);
        newPic.addToHtml();
    }
}

