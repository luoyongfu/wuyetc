window.onload = function(){
    let mySwiper = new Swiper(".swiper-container", {
        autoplay:true,//自动播放
        // disableOnInteraction:true,//用户操作时是否停止autoplay
        delay:2000,//切换时间
        initialSlide:0,//默认的初始化索引值
        speed:500,//滑动速度
        // observer:true,//当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        // observeParent:true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        // grabCursor:true,//鼠标抓取的形状
        loop:true,//循环
        pagination: {
            el: '.swiper-pagination',
        }
    })
}