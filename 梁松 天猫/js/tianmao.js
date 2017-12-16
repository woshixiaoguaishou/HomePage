 window.onload = function () {
     //轮播图------------------------------------------------------------------------------------------
     var div = document.querySelector('.datu');
     var imgs = document.querySelectorAll('.datu ul li');
     console.log(imgs);
     var t = setInterval(move, 2000);
     var width = parseInt(getComputedStyle(imgs[0], null).width);
     console.log(width);
     var lis = document.querySelectorAll('.dian1 li');

     var now = 0;
     var next = 0;
     var flag = true;
     function move() {
         next = now + 1;
         if (next >= imgs.length) {
             next = 0;
         }
         imgs[next].style.left = width + 'px';               //下一张图的位置（left 定位）--------------------
         animate(imgs[now], {left: -width});
         animate(imgs[next], {left: 0});

         lis[now].classList.remove('active');
         lis[next].classList.add('active');
         now = next;
     }
     div.onmousemove = function () {
         clearInterval(t);
     }
     div.onmouseout = function () {
         t = setInterval(move, 2000)
     }
     lis.forEach(function (value, index) {
         console.log(lis);
         value.onclick = function () {
             console.log(index);
             if (index > now) {
                 imgs[index].style.left = width + 'px';
                 animate(imgs[now], {left: -width});
                 animate(imgs[index], {left: 0});
                 lis[now].classList.remove('active');
                 lis[index].classList.add('active');
                 now = index;
             }
             if (index < now) {
                 imgs[index].style.left = -width + 'px';
                 animate(imgs[now], {left: width});
                 animate(imgs[index], {left: 0});
                 lis[now].classList.remove('active');
                 lis[index].classList.add('active');
                 now = index;
             }
             if (index == now) {
                 flag = true;
             }
         }
     })
 //楼层跳转---------------------------------------------------------------
     var floors=document.querySelectorAll('.flooer');
     console.log(floors);
     var navs=document.querySelectorAll('.nav li')
     console.log(navs);
     var cedao=document.querySelector('.tzavn')
     var arr = ['red', 'yellow', 'blue', 'green', 'red', 'yellow', 'blue', 'green']
     window.onscroll=function () {
         var obj=document.body.scrollTop? document.body:document.documentElement;
         var scrolltop=obj.scrollTop;
         console.log(scrolltop);
         var flag = true;
         if(scrolltop>=1197){
             animate(cedao,{width: 30, height: 376,opacity:1},function () {
                 flag=true;
             })
         }
         if(scrolltop<1197){
             animate(cedao,{width: 0, height: 0,opacity:0},function () {
                 flag=false;
             })
         }
         floors.forEach(function(value,index){
             if(scrolltop>=value.offsetTop-400){
                 for(var i=0;i<navs.length;i++){
                     navs[i].style.background = '';
                 }
                 navs[index].style.background=arr[index]
             }
         })
     }
     navs.forEach(function (value,index) {
         value.onclick=function(){
             animate(document.body,{scrollTop:floors[index].offsetTop});
             animate(document.documentElement,{scrollTop:floors[index].offsetTop});
         }
     })
 //    返回顶部----------------------------------------------------------------------------
     btn=document.querySelector('.returntop');
     btn.onclick=function () {
        animate(document.body,{scrollTop:0});
     }
     // 跳转出现
 }

