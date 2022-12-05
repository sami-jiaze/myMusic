// 手写懒加载
export default {
  mounted (el) {
    const imgsrc = el.src
    el.src = ''
    // console.log(el)
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      // 元素出现在可视区域和离开可视区域被触发
      if (isIntersecting) {
        el.src = imgsrc
        // 停止观察
        observer.unobserve(el)
      }
    })
    observer.observe(el)
  }
}
