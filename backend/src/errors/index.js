export const dbError = err => {
  if (err) {
    console.error(
      `\n\n    🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 \n\n     Mongoose Error: \n${err}\n\n
      🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 🚫 \n\n
      `
    )
  }
}
