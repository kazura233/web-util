/**
 * Base64转Uint8Array
 * @param data
 * @returns
 */
export const base64ToArrayBufferView = (data: string) => {
  data = atob(data) // 解base64
  let len = data.length
  const u8arr = new Uint8Array(len) // 8位无符号整型数组
  while (len--) {
    u8arr[len] = data.charCodeAt(len) // 返回0x00000~0xFFFF之间的Unicode码
  }
  return u8arr
}

/**
 * Uint8Array转Blob
 * @param u8arr
 * @param mime
 * @returns
 */
export const arrayBufferViewToBlob = (u8arr: Uint8Array, mime: string) => {
  return new Blob([u8arr], { type: mime })
}

/**
 * Uint8Array转File
 * @param u8arr
 * @param fileName
 * @param mime
 * @returns
 */
export const arrayBufferViewToFile = (u8arr: Uint8Array, fileName: string, mime: string) => {
  return new File([u8arr], fileName, { type: mime })
}

/**
 * Blob转File
 * @param blob
 * @param fileName
 * @returns
 */
export const blobToFile = (blob: Blob, fileName: string) => {
  return new File([blob], fileName, { type: blob.type })
}
