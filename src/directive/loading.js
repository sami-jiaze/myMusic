import { createApp } from 'vue'
import { addClass, removeClass } from '@/assets/js/cssClass.js'
import Loading from '@/components/base/loading/loading.vue'

const relativeClass = 'g-relative'
const loadingDirective = {
  mounted (el, binding) {
    console.log(el, binding)
    // 创建vue实例
    const app = createApp(Loading)
    // 动态挂载到新建的div元素上
    const instance = app.mount(document.createElement('div'))
    // 将instance保存下来
    el.instance = instance

    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }

    if (binding.value) {
      append(el)
    }
  },
  updated (el, binding) {
    const title = binding.arg
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
    }

    if (binding.value !== binding.oldvalue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

function append (el) {
  debugger
  // 修改样式通用性显示
  const style = getComputedStyle(el)
  if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
    addClass(el, relativeClass)
  }
  // $el: 获取Vue组件实例挂载的DOM元素
  el.appendChild(el.instance.$el)
}

function remove (el) {
  removeClass(el, relativeClass)
  el.removeChild(el.instance.$el)
}

export default loadingDirective
