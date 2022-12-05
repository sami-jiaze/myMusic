// 增加class类名和删去class类名

export function addClass (el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}

export function removeClass (el, className) {
  el.classList.remove(className)
}
