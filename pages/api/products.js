const products = [
  { _id: 1, name: "AirPods", image: "airpods", price: 500, rating: 4.5 },
  { _id: 2, name: "Camera", image: "camera", price: 500, rating: 4.5 },
  { _id: 3, name: "Mouse", image: "mouse", price: 500, rating: 4.5 },
  {
    _id: 4,
    name: "Play Station",
    image: "playstation",
    price: 500,
    rating: 4.5,
  },
  { _id: 5, name: "Phone", image: "phone", price: 500, rating: 4.5 },
  { _id: 6, name: "Alexa", image: "alexa", price: 500, rating: 4.5 },
];

export default (req, res) => {
  res.status(200).json(products);
};
