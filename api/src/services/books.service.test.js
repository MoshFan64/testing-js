/*Nuestro objeto de pruebas*/
const BooksService = require('./books.service')

/*Suplantando la clase MongoLib*/
const MongoLibStub = {
  getAll: () => [...fakeBooks]
}

/*Datos simulados*/
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter'
  }
]

/*Llamada a mock*/
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService.', () => {
  /*Variable para la instancia del servicio*/
  let service;
  /*Para cada prueba, crear una nueva instancia*/
  beforeEach(() => {
    /*Crear instancia del servicio*/
    service = new BooksService();
  });

/*Pruebas para el método getBook*/

  describe('Test for getBooks.', () => {
  test('Should return a list of books.', async () => {
    /*Arrange: preparar el entorno*/
    /*Act: acción a probar*/
    const books = await service.getBooks({});
    console.log(books);
    /*Assert: confirmar*/
    expect(books.length).toEqual(1);
  });
});
/*describe('Test for createBooks.', () => {
  test('Should create a new book.', async () => {

  });
})
*/

});
