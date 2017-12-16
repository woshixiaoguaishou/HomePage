$(document).ready(function(){


    var div = $('.datuzhong');
    var imgs = $('.datuzhong ul li');
    var t = setInterval(move, 1000);
    var width = div.width();
    var lis = $('.lunbodian ul li')
    var left = $('.zuojian');
    var right = $('.zuoyou');
    var now = 0;
    var next = 0;
    var flag = true;

    function move(way = 'l') {
        if (way == 'l') {
            next = now + 1;
            if (next >= imgs.length) {
                next = 0;
            }
            imgs.eq(next).css({left: width}).end().eq(now).animate({left: -width}).end().eq(next).animate({left: 0}, function () {
                flag = true;
            });
        }
        if (way == 'r') {
            next = now - 1;
            if (next < 0) {
                next = imgs.length - 1;
            }
            imgs.eq(next).css({left: -width}).end().eq(now).animate({left: width}).end().eq(next).animate({left: 0}, function () {
                flag = true;
            });
        }
        lis.eq(now).removeClass('active').end().eq(next).addClass('active');
        now = next;
    }

    $(document.body).on('mousemove', function () {
        clearInterval(t);
    })
    $(document.body).on('mouseout', function () {
        t = setInterval(move, 1000);
    })
    left.click(function () {
        if (flag) {
            flag = false;
            move('r')
        }
    })
    right.click(function () {
        if (flag) {
            flag = false;
            move('l')
        }
    })
    lis.each(function (index, value) {
        // consolele.log(this)
        $(this).click(function () {
            if (index > now) {
                imgs.eq(index).css({left: width});
                imgs.eq(now).animate({left: -width});
                imgs.eq(index).animate({left: 0});
                lis.eq(now).removeClass('active')
                lis.eq(index).addClass('active');
                now = index;
            }
            if (index < now) {
                imgs.eq(index).css({left:- width});
                imgs.eq(now).animate({left: width});
                imgs.eq(index).animate({left: 0});
                lis.eq(now).removeClass('active')
                lis.eq(index).addClass('active');
                now = index;
            }
        })
    })


     //明星单品-------------
     var divm = document.querySelector('.box');
     var imgsm = document.querySelectorAll('.mingxing');
     console.log(imgsm[0]);
     console.log(imgsm[1]);
     var imgsp = document.querySelector('.mingxing0')
     console.log(imgsm);
     var width = parseInt(getComputedStyle(imgsm[0], null).width);
     console.log(width);
     var leftm = document.querySelector('#zuo');
     console.log(leftm);
     var rightm = document.querySelector('#you');
     console.log(rightm);
     leftm.onclick = function () {
         animate(imgsm[0], {left: -width});
         animate(imgsm[1], {left: 0});
     }
     rightm.onclick = function () {
         animate(imgsm[0], {left: 0});
         animate(imgsm[1], {left: width});
     }


     //推荐------------------------------
     var divm = document.querySelector('.box');
     var imgst = document.querySelectorAll('.tuijian3');
     var imgtp = document.querySelector('.tuijian0')
     var width = parseInt(getComputedStyle(imgst[0], null).width);
     var leftt = document.querySelector('.youzuo');
     var rightt = document.querySelector('.youyou');
     leftt.onclick = function () {
         animate(imgst[0], {left: -width});
         animate(imgst[1], {left: 0});
     }
     rightt.onclick = function () {
         animate(imgst[0], {left: 0});
         animate(imgst[1], {left: width});
     }
     // 导航栏
      var ddiv = document.querySelector('.navzi');
      var dwidth = ddiv.offsetWidth;
      var dimg = document.querySelectorAll('.yin-2');
      console.log(dimg);
      var dlis = document.querySelectorAll('.nav-8 li');
      console.log(dlis);

     var nlis=document.querySelectorAll('.nav-8 li');  //选中选项卡的名字-------
     console.log(nlis);
     var nimgs=document.querySelectorAll('.yin-2');  //选中选项卡内容(图片)----
 //    console.log(imgs);
     nlis.forEach(function(value,index){                          //遍历所有----------------
         value.onmousemove=function(){                               //编辑点击效果-------------
             for(var i=0;i<nlis.length;i++){                     //做一个点击顺序循环-------
                 nlis[i].classList.remove('active');             //首先去除所有元素---------
             }
             this.classList.add('active');                      //使目标出现---------------
             for(var i=0;i<nimgs.length;i++){
                 nimgs[i].classList.remove('active');
             }
             nimgs[index].classList.add('active');
         }
     })
})

