/*
 * @Date: 2020-08-06 09:44:27
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-06 10:13:57
 * @FilePath: \vue-h5-template\src\directive\imgLazy.js
 */


import baseImg from '@/assets/logo.png'
// 创建一个监听器
let observer = new IntersectionObserver((entries) => {
    // entries是所有被监听对象的集合  
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 当被监听元素到临界值且未加载图片时触发。    
            !entry.target.isLoaded && showImage(entry.target, entry.target.data_src)
        }
    })
})

function showImage(el, imgSrc) {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
        el.src = imgSrc;
        el.isLoaded = true;
    }
}

export default {
    // 这里用inserted和bind都行，因为IntersectionObserver时异步的，以防意外还是用inserted好一点  // inserted和bind的区别在于inserted时元素已经插入页面，能够直接获取到dom元素的位置信息。 
    // 初始化时展示默认图片   
    inserted(el, binding) {
        // 将需要加载的图片地址绑定在dom上  
        el.src = baseImg;
        el.data_src = binding.value;
        observer.observe(el)
    },
    // 停止监听  
    unbind() {
        observer.disconnect();
    }
}

