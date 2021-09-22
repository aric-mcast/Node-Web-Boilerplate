import express from 'express'
import compression from 'compression'

const PORT = 3000

const App = express()
.use(compression({ filter: (req:any, res:any) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}}))


.on('error', (err: any)=> {
    console.log(err)
})

.get('/', (_req: any, res: any) => {
  res.send('Test');
})

.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`)
})

export default App;