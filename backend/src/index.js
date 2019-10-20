import app from './app'

const port = parseInt(process.env.PORT) || 4000
const apiEndpoint = process.env.BACKEND_ENDPOINT || `http://localhost:${port}`
const frontendUrl = process.env.FRONTEND_URL

// Start app
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const startMsg = `\n\n\t🚀 Server ready:
\n\tFrontend: ${frontendUrl}
\tPlayground: ${apiEndpoint}\n\n`

app.listen(port, err => {
  if (err) {
    console.error(
      '🚨  An error occurred on the backend server. Unable to start the backend server.'
    )
    console.error(err.stack)
    process.exit(1)
    throw err
  }
  console.log(startMsg)
})
