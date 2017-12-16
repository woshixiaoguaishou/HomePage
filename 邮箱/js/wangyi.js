/**
 * Created by Lenovo on 2017/9/20.
 */
    $(function(){
        $('.box').fullpage({
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
            continuousVertical:true,
            'navigation':true,
            afterLoad:function(anchorLink,index){
                console.log(index)
                if(index==1){
                    $(".section01").find(".sec-ch-01").animate({top:"25%",opacity:"1"},50,'easeOutExpo')
                    $(".section01").find(".sec-ch-02").animate({top:"0",opacity:"1"},50,'easeOutExpo')
                    $(".section01").find(".text01").animate({top:"50%",opacity:"1"},50,'easeOutExpo')
                    $(".section01").find(".sec-ch-03").delay(100).animate({bottom:"0"},700,'easeOutExpo')
                    $(".section01").find(".sec-ch-04").delay(100).animate({bottom:"0"},1000,'easeOutExpo')
                }
                if(index==2){
                    $(".sec-ch-min01").animate({top:"70",opacity:"1"},200,'easeOutExpo');
                    $(".sec-ch-min02").animate({top:"120",opacity:"1"},210,'easeOutExpo');
                    $(".sec-ch-min03").animate({top:"200",opacity:"1"},220,'easeOutExpo');
                    $(".sec-ch-min04").animate({top:"276",opacity:"1"},240,'easeOutExpo');
                }
                if(index==3){
                    $(".sec03-min01").animate({top:"124",opacity:"1"},100,'easeOutExpo');
                    $(".sec03-min02").animate({top:"160",opacity:"1"},100,'easeOutExpo');
                    $(".sec03-min03").animate({top:"240",opacity:"1"},100,'easeOutExpo');
                    $(".sec03-min04").animate({left:"-6%",opacity:"1"},1000,'easeOutExpo');
                    $(".sec03-min05").animate({left:"61%",opacity:"1"},1000,'easeOutExpo');
                    $(".sec03-min06").animate({top:"412",opacity:"1"},1000,'easeOutExpo');
                }
                if(index==4){
                    $(".sec04-min01").animate({top:"144",opacity:"1"},100,'easeOutExpo');
                    $(".sec04-min02").animate({top:"184",opacity:"1"},100,'easeOutExpo');
                    $(".sec04-min03").animate({left:"2%",opacity:"1"},100,'easeOutExpo');
                    $(".sec04-min04").animate({top:"304",opacity:"1"},1000,'easeOutExpo');
                    $(".sec04-min05").animate({top:"403",opacity:"1"},1000,'easeOutExpo');
                    $(".sec04-min06").animate({left:"43%",opacity:"1"},1000,'easeOutExpo');

                }

            },
            onLeave: function(index, direction){
                if(index==1){
                    $(".section01").find(".sec-ch-01").animate({top:"50",opacity:"0"},1000,'easeOutExpo')
                    $(".section01").find(".sec-ch-02").animate({top:"-100",opacity:"0"},1000,'easeOutExpo')
                    $(".section01").find(".text01").animate({top:"260",opacity:"0"},1000,'easeOutExpo')
                    $(".section01").find(".sec-ch-03").delay(100).animate({bottom:"-400"},1000,'easeOutExpo')
                    $(".section01").find(".sec-ch-04").delay(100).animate({bottom:"-400"},1000,'easeOutExpo')
                }
                if(index==2){
                    $(".sec-ch-min01").delay(300).animate({bot:"0",opacity:"0"},1000,'easeOutExpo');
                    $(".sec-ch-min02").delay(300).animate({top:"20",opacity:"0"},1000,'easeOutExpo');
                    $(".sec-ch-min03").delay(300).animate({top:"100",opacity:"0"},1000,'easeOutExpo');
                    $(".sec-ch-min04").delay(300).animate({top:"150",opacity:"0"},1000,'easeOutExpo');
                }
                if(index==3){
                    $(".sec03-min01").delay(300).animate({top:"70",opacity:"0"},1000,'easeOutExpo');
                    $(".sec03-min02").delay(300).animate({top:"100",opacity:"0"},1000,'easeOutExpo');
                    $(".sec03-min03").delay(300).animate({top:"190",opacity:"0"},1000,'easeOutExpo');
                    $(".sec03-min04").delay(300).animate({left:"11%",opacity:"0"},1000,'easeOutExpo');
                    $(".sec03-min05").delay(300).animate({left:"51%",opacity:"0"},1000,'easeOutExpo');
                    $(".sec03-min06").delay(300).animate({top:"300",opacity:"0"},1000,'easeOutExpo');
                }
                if(index==4){
                    $(".sec04-min01").delay(300).animate({top:"120",opacity:"0"},1000,'easeOutExpo');
                    $(".sec04-min02").delay(300).animate({top:"160",opacity:"0"},1000,'easeOutExpo');
                    $(".sec04-min03").delay(300).animate({left:"7&",opacity:"0"},1000,'easeOutExpo');
                    $(".sec04-min04").animate({top:"314",opacity:"0"},1000,'easeOutExpo');
                    $(".sec04-min05").animate({top:"423",opacity:"0"},1000,'easeOutExpo');
                    $(".sec04-min06").animate({left:"22%",opacity:"0"},1000,'easeOutExpo');

                }
                
            }
        });
    });
