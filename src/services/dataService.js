let catalog =[
  {
    "title": "Watermelons",
    "price": 0.48,
    "category": "Fruit",
    "image": "watermelon.jpg",
    "_id": "watermelons"
  },
  {
    "title": "Apples",
    "price": 1.16,
    "category": "Fruit",
    "image": "apple.jpg",
    "_id": "apples"
  },
  {
    "title": "Mangos",
    "price": 0.88,
    "category": "Fruit",
    "image": "mangos.jpg",
    "_id": "mangos"
  },
  {
    "title": "Kiwis",
    "price": 1.54,
    "category": "Fruit",
    "image": "kiwis.jpg",
    "_id": "kiwis",
  },
  {
    "title": "Bananas",
    "price": 0.20,
    "category": "Fruit",
    "image": "bananas.jpg",
    "_id": "bananas"
  },
  {
    "title": "Spam",
    "price": 1.60,
    "category": "Canned",
    "image": "spam.jpg",
    "_id": "spam"
  }
];

class DataService {
  getProducts() {
    return catalog;
  }
}
export default DataService;