import express from 'express';

const app = express()
const port = process.env.PORT || 2222

app.get('/', (req, res) => {
  res.json({
    status: 'ok!',
    config: {
      public: process.env.PUBLIC_EXAMPLE,
      private: process.env.SECRET_EXAMPLE,
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
