import axios from "axios";

let catalog = [
  {
    title: "Watermelons",
    price: 0.48,
    category: "Fruit",
    image: "watermelon.jpg",
    _id: "watermelons",
  },
  {
    title: "Apples",
    price: 1.16,
    category: "Fruit",
    image: "apple.jpg",
    _id: "apples",
  },
  {
    title: "Mangos",
    price: 0.88,
    category: "Fruit",
    image: "mangos.jpg",
    _id: "mangos",
  },
  {
    title: "Kiwis",
    price: 1.54,
    category: "Fruit",
    image: "kiwis.jpg",
    _id: "kiwis",
  },
  {
    title: "Bananas",
    price: 0.2,
    category: "Fruit",
    image: "bananas.jpg",
    _id: "bananas",
  },
  {
    title: "Spam",
    price: 1.6,
    category: "Canned",
    image: "spam.jpg",
    _id: "spam",
  },
];

class DataService {
  serverURL = "http://127.0.0.1:5000";

  async getProducts() {
    //use this return to run FE without a BE
    //return catalog;

    //call a server to retrieve products
    let results = await axios.get(this.serverURL + "/api/catalog");
    return results.data;
  }

  async getCategories() {
    let results = await axios.get(this.serverURL + "/api/categories");
    return results.data;
  }

  async getCoupons() {
    let results = await axios.get(this.serverURL + "/api/coupons");
    return results.data;
  }

  async saveProduct(prod) {
    let results = await axios.post(this.serverURL + "/api/catalog", prod);
  }

  async saveCoupon(coupon) {
    let results = await axios.post(this.serverURL + "/api/coupons", coupon);
    return results.data;
  }

  async deleteCoupon(code) {
    let results = await axios.delete(this.serverURL + "/api/coupons/" + code);
    return results.data;
  }
}
export default DataService;
