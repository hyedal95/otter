(($,window,document)=>{

    class ScriptClass {
        init(){
            this.parallax();
            this.header();
            this.section1();
            this.footer();
        }
        parallax(){
            //섹션2의 title 애니메이션구현
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section2').offset().top-700){
                    $('#section2 .title').addClass('on');
                }
            })
            //섹션3의 title 애니메이션구현
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section3').offset().top-700){
                    $('#section3 .title').addClass('on');
                }
            })
            //섹션4의 title 애니메이션구현
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section4').offset().top-700){
                    $('#section4 .title').addClass('on');
                }
            })
            //섹션5의 title 애니메이션구현
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section5').offset().top-700){
                    $('#section5 .title').addClass('on');
                }
            })
            //섹션6의 title 애니메이션구현
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section6').offset().top-700){
                    $('#section6 .title').addClass('on');
                }
            })
            //섹션7의 title 애니메이션구현
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section7').offset().top-700){
                    $('#section7 .title').addClass('on');
                }
            })
            //섹션8의 title 애니메이션구현
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section8').offset().top-700){
                    $('#section8 .title').addClass('on');
                }
            })
        }
        header(){
            //메인 버튼 클릭 이벤트
            $('.main-btn').each(function(idx) {
                $(this).on({
                    click(e) {
                        e.preventDefault();
                        let pos = $(this).attr('href');
                        $('html,body').animate({scrollTop: $(pos).offset().top+1},300)

                    }
                });
            });
            let oldScr = null;
            let newScr = null;
            $(window).scroll(function () {

                newScr = $(window).scrollTop();
                    if ( oldScr-newScr < 0 ) {
                        $('#header').removeClass('on'); // 아래로
                    }                
                    if ( oldScr-newScr > 0 ) {
                       $('#header').addClass('on');  // 위로
                    }                
                oldScr = newScr;
                // 섹션별 포지션 버튼 색상변경

                if ( $(window).scrollTop() > $('#section2').offset().top && $(window).scrollTop() <= $('#section3').offset().top  ) {
                    $('.main-btn').eq(0).addClass('on');                 
                }
                else{
                    $('.main-btn').eq(0).removeClass('on');
                }
                if ( $(window).scrollTop() > $('#section3').offset().top && $(window).scrollTop() <= $('#section4').offset().top ) {
                    $('.main-btn').eq(1).addClass('on');                 
                }
                else{
                    $('.main-btn').eq(1).removeClass('on');
                }
                if ( $(window).scrollTop() > $('#section4').offset().top && $(window).scrollTop() <= $('#section5').offset().top ) {
                    $('.main-btn').eq(2).addClass('on');                 
                }
                else{
                    $('.main-btn').eq(2).removeClass('on');
                }
                if ( $(window).scrollTop() > $('#section5').offset().top && $(window).scrollTop() <= $('#section6').offset().top  ) {
                    $('.main-btn').eq(3).addClass('on');                 
                }
                else{
                    $('.main-btn').eq(3).removeClass('on');
                }
                if ( $(window).scrollTop() > $('#section6').offset().top  && $(window).scrollTop() <= $('#section7').offset().top  ) {
                    $('.main-btn').eq(4).addClass('on');                 
                }
                else{
                    $('.main-btn').eq(4).removeClass('on');
                }
                if ( $(window).scrollTop() > $('#section7').offset().top && $(window).scrollTop() <= $('#section8').offset().top ) {
                    $('.main-btn').eq(5).addClass('on');                 
                }
                else{
                    $('.main-btn').eq(5).removeClass('on');
                }
                if ( $(window).scrollTop() > $('#section8').offset().top && $(window).scrollTop() <= $('#section9').offset().top ) {
                    $('.main-btn').eq(6).addClass('on');                 
                }
                else{
                    $('.main-btn').eq(6).removeClass('on');
                }
                if ( $(window).scrollTop() > $('#section9').offset().top ) {
                    $('.main-btn').eq(7).addClass('on');                 
                }
                else{
                    $('.main-btn').eq(7).removeClass('on');
                }

            });
        }
        section1(){
            //섹션1 메인슬라이드
            //메인슬라이드 (버튼)
            let cnt=0;
            let setId=0; //타이머 변수
            //1. 메인슬라이드함수
            function mainSlide(){
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%` },300,function(){
                    if(cnt>2) cnt=0;
                    if(cnt<0) cnt=2;
                    $('.slide-wrap').stop().animate({left:`${-100*cnt}%` },0);
                });
                //페이지 버튼 이벤트 (네비게이션 :현재 위치가 어디있는지 )
                console.log(cnt);
                $('.page-btn').removeClass('on');
                $('.page-btn').eq(cnt>2?0:cnt).addClass('on');
            
            }
            //2-1. 다음카운트함수 
            function nextCount(){ 
                cnt+=1;
                cnt >2? cnt=0 :cnt;
                mainSlide();
            }
            //2-2. 이전카운트함수
            function prevCount(){
                cnt-=1;
                cnt <0 ? cnt=2 : cnt;
                mainSlide();
            }
            //3-0.페이지버튼 클릭 이벤트 
            $('.page-btn').each(function(idx){
                $(this).on({
                    click(){
                        cnt=idx;
                        mainSlide();
                    }
                })
            })
            //3-1.다음 화살 버튼 이벤트
            $('.slide-right-arrow-btn').on({
                click(){
                    nextCount(); //다음 카운트함수 호출
                    mainSlide(); //메인함수 호출
                }
            });
            //3-2.이전 화살 버튼 이벤트
            $('.slide-left-arrow-btn').on({
                click(){
                    prevCount(); //이전 카운트함수 호출
                    mainSlide(); //메인함수 호출
                }
            });
            //4. 자동타이머
            function autoTimer(){
                setId = setInterval(nextCount,5000);
            }
            autoTimer();

        }
        footer(){}
    }
    const scriptClass =new ScriptClass();
    scriptClass.init();

})(jQuery, window, document);