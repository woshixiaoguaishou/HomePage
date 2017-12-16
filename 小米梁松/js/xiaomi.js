// /**
//  * Created by tuanzhang on 2017/8/28.
//  */
// window.onload = function () {
//     var div = document.querySelector('.datuzhong');
//     console.log(div);
//     var imgs = document.querySelectorAll('.datuzhong ul li');
//     console.log(imgs);
//     var t = setInterval(move, 1000);
//     var width = parseInt(getComputedStyle(imgs[0], null).width);
//     console.log(width);
//     var lis = document.querySelectorAll('.lunbodian ul li')
//     console.log(lis);
//     var left = document.querySelector('.zuojian');
//     console.log(left);
//     var right = document.querySelector('.zuoyou');
//     console.log(right);
//     var now = 0;
//     var next = 0;
//     var flag = true;
//
//     function move(way = 'l') {
//         if (way == 'l') {
//             next = now + 1;
//             if (next >= imgs.length) {
//                 next = 0;
//             }
//             imgs[next].style.left = width + 'px';
//             animate(imgs[now], {left: -width});
//             animate(imgs[next], {left: 0}, function () {
//                 flag = true;
//             });
//         }
//         if (way == 'r') {
//             next = now - 1;
//             if (next < 0) {
//                 next = imgs.length - 1;
//             }
//             imgs[next].style.left = -width + 'px';
//             animate(imgs[now], {left: width});
//             animate(imgs[next], {left: 0}, function () {
//                 flag = true;
//             });
//         }
//         lis[now].classList.remove('active');
//         lis[next].classList.add('active');
//         now = next;
//     }
//
//     div.onmousemove = function () {
//         clearInterval(t);
//     }
//     div.onmouseout = function () {
//         t = setInterval(move, 1000)
//     }
//     left.onclick = function () {
//         if (flag) {
//             flag = false;
//             move('r')
//         }
//     }
//     right.onclick = function () {
//         if (flag) {
//             flag = false;
//             move('l')
//         }
//     }
//     lis.forEach(function (value, index) {
//         value.onclick = function () {
//             console.log(index);
//             if (index > now) {
//                 imgs[index].style.left = width + 'px';
//                 animate(imgs[now], {left: -width});
//                 animate(imgs[index], {left: 0});
//                 lis[now].classList.remove('active');
//                 lis[index].classList.add('active');
//                 now = index;
//             }
//             if (index < now) {
//                 imgs[index].style.left = -width + 'px';
//                 animate(imgs[now], {left: width});
//                 animate(imgs[index], {left: 0});
//                 lis[now].classList.remove('active');
//                 lis[index].classList.add('active');
//                 now = index;
//             }
//             if (index == now) {
//                 flag = true;
//             }
//
//         }
//     })
//
//
//     //明星单品-------------
//     var divm = document.querySelector('.box');
//     var imgsm = document.querySelectorAll('.mingxing');
//     console.log(imgsm[0]);
//     console.log(imgsm[1]);
//     var imgsp = document.querySelector('.mingxing0')
//     console.log(imgsm);
//     var width = parseInt(getComputedStyle(imgsm[0], null).width);
//     console.log(width);
//     var leftm = document.querySelector('#zuo');
//     console.log(leftm);
//     var rightm = document.querySelector('#you');
//     console.log(rightm);
//     leftm.onclick = function () {
//         animate(imgsm[0], {left: -width});
//         animate(imgsm[1], {left: 0});
//     }
//     rightm.onclick = function () {
//         animate(imgsm[0], {left: 0});
//         animate(imgsm[1], {left: width});
//     }
//
//
//     //推荐------------------------------
//     var divm = document.querySelector('.box');
//     var imgst = document.querySelectorAll('.tuijian3');
//     var imgtp = document.querySelector('.tuijian0')
//     var width = parseInt(getComputedStyle(imgst[0], null).width);
//     var leftt = document.querySelector('.youzuo');
//     var rightt = document.querySelector('.youyou');
//     leftt.onclick = function () {
//         animate(imgst[0], {left: -width});
//         animate(imgst[1], {left: 0});
//     }
//     rightt.onclick = function () {
//         animate(imgst[0], {left: 0});
//         animate(imgst[1], {left: width});
//     }
//     // 导航栏
//     // var ddiv = document.querySelector('.navzi');
//     // var dwidth = ddiv.offsetWidth;
//     // var dimg = document.querySelectorAll('.yin-2');
//     // console.log(dimg);
//     // var dlis = document.querySelectorAll('.nav-8 li');
//     // console.log(dlis);
//
//     var nlis=document.querySelectorAll('.nav-8 li');  //选中选项卡的名字-------
//     console.log(nlis);
//     var nimgs=document.querySelectorAll('.yin-2');  //选中选项卡内容(图片)----
// //    console.log(imgs);
//     nlis.forEach(function(value,index){                          //遍历所有----------------
//         value.onmousemove=function(){                               //编辑点击效果-------------
//             for(var i=0;i<nlis.length;i++){                     //做一个点击顺序循环-------
//                 nlis[i].classList.remove('active');             //首先去除所有元素---------
//             }
//             this.classList.add('active');                      //使目标出现---------------
//             for(var i=0;i<nimgs.length;i++){
//                 nimgs[i].classList.remove('active');
//             }
//             nimgs[index].classList.add('active');
//         }
//     })
// }
//
