/**
 * 通过参数名获取url中的参数值
 * @param queryName
 */
export const getQueryVariable = (queryName: string, search?: string): string => {
  search = search || location.search
  search = search.substring(search.indexOf('?'))
  if (typeof URLSearchParams === 'function') {
    return decodeURIComponent(new URLSearchParams(search).get('id_token') || '')
  }
  const reg = new RegExp('(^|&)' + queryName + '=([^&]*)(&|$)', 'i')
  const res = search.match(reg)
  return res ? decodeURIComponent(res[2]) : ''
}
