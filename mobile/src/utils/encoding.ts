import * as FileSystem from 'expo-file-system'

export async function convertFileToBase64(path: string) {
  const fileBase64 = await FileSystem.readAsStringAsync(path, { encoding: 'base64' })
  return fileBase64
}

export async function convertImageToBase64(path: string) {
  const prefix = 'data:image/png;base64'
  const imageBase64 = await convertFileToBase64(path)

  return `${prefix}, ${imageBase64}`
}
