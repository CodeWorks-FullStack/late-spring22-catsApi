

let fakeDb = {
  Cats: [
    {name: 'Gerald', color: 'orange', livesLeft: 2},
    {name: 'Salem', color: 'white', livesLeft: 9},
    {name: 'Mr. Bill', color: 'yella', livesLeft: 1}
  ]
}


class CatsService{

  async getCats(){
    return fakeDb.Cats
  }

  createCat(catData) {
    fakeDb.Cats.push(catData)
    return catData
  }

  async deleteCat(name){
    fakeDb.Cats = fakeDb.Cats.filter(c => c.name != name)
    return 'cat has been adopted'
  }
}

export const catsService = new CatsService()
