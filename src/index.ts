export * from './file'
export * from './image'

/**
 * 随机一个min到max之间的整数
 * @param min
 * @param max
 * @returns
 */
export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 延缓执行
 * @param duration 暂停的毫秒数。
 * @returns
 */
export const sleep = (duration: number = 1000): Promise<undefined> => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

/**
 * 向页面中动态追加脚本
 * @param url
 */
export const appendScript = (url: string) => {
  const element = document.createElement('script')
  element.src = url
  document.body.appendChild(element)
}
