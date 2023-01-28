// books.js
const Router = require('koa-router')

// Prefix all routes with /books
const router = new Router({
  prefix: '/books',
})

const books = [
  { id: 101, name: 'Fight Club', author: 'Chuck Palahniuk' },
  { id: 102, name: 'Sharp Objects', author: 'Gillian Flynn' },
  { id: 103, name: 'Frankenstein', author: 'Mary Shelley' },
  { id: 104, name: 'Into The Willd', author: 'Jon Krakauer' },
]

// const books = {
//   101: { id: 101, name: 'Fight Club', author: 'Chuck Palahniuk' },
//   102: { id: 102, name: 'Sharp Objects', author: 'Gillian Flynn' },
//   103: { id: 103, name: 'Frankenstein', author: 'Mary Shelley' },
//   104: { id: 104, name: 'Into The Willd', author: 'Jon Krakauer' },
// }

/* ---------------------- Routes ----------------------- */
/* API REST Get All */
router.get('/', ctx => {
  ctx.body = {
    status: 'success',
    message: books,
  }
})

/* API REST Get x ID */
router.get('/:id', ({response, params}) => {
  const getCurrentBook = books.filter(function (book) {
    if (book.id == params.id) {
      return true
    }
  })

  if (getCurrentBook.length) {
    body = getCurrentBook[0]
  } else {
    response.status = 404
    body = {
      status: 'error!',
      message: 'Book Not Found with that id!',
    }
  }

  // const id = ctx.params.id
  // const book = books[id]
  // if (book) {
  //   ctx.body = book
  // } else {
  //   ctx.response.status = 404
  //   ctx.body = {
  //     status: 'error!',
  //     message: 'Book Not Found with that id!',
  //   }
  // }
})

/* API REST Post */
router.post('/', ({ request, response }) => {
  // Check if any of the data field not empty
  if (
    !request.body.id ||
    !request.body.name ||
    !request.body.author
  ) {
    response.status = 400
    body = {
      status: 'error',
      message: 'Please enter the data',
    }
  } else {
    books.push({
      id: request.body.id,
      name: request.body.name,
      author: request.body.author,
    })
    response.status = 201
    body = {
      status: 'success',
      message: `New book added with id: ${request.body.id} & name: ${request.body.name}`,
    }
  }
})

/* API REST Put */
router.put('/update/:id', ctx => {
  // Check if any of the data field not empty
  if (
    !ctx.request.body.id ||
    !ctx.request.body.name ||
    !ctx.request.body.author
  ) {
    ctx.response.status = 400
    ctx.body = {
      status: 'error',
      message: 'Please enter the data',
    }
  } else {
    const id = ctx.params.id
    const index = books.findIndex(book => book.id == id)
    books.splice(index, 1, ctx.request.body)
    ctx.response.status = 201
    ctx.body = {
      status: 'success',
      message: `New book updated with id: ${ctx.request.body.id} & name: ${ctx.request.body.name}`,
    }
  }
})

/* API REST Delete */
router.delete('/delete/:id', ctx => {
  const id = ctx.params.id
  const index = books.findIndex(book => book.id == id)
  books.splice(index, 1)
  ctx.response.status = 200
  ctx.body = {
    status: 'success',
    message: `Book deleted with id: ${id}`,
  }
})

module.exports = router
