// Dynamic import handler for logo base64 files
// This runs at build time to embed logos into components

export async function getLogo1() {
  return require('../logo1.b64').default || '';
}

export async function getLogo2() {
  return require('../logo2.b64').default || '';
}
