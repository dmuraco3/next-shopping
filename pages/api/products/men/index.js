const manlyClothes = [
  {
    title: "this is a clothe",
    description: "this is a description",
    uid: 0,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Nh6zPD3LJSq-VyvxcGdWqN-33aazKn1AEQ:https://www.aspshop.eu/data/product/1024_1024/vento-man-pant-black-6200p4112-b.png&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Nh6zPD3LJSq-VyvxcGdWqN-33aazKn1AEQ:https://www.aspshop.eu/data/product/1024_1024/vento-man-pant-black-6200p4112-b.png&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Nh6zPD3LJSq-VyvxcGdWqN-33aazKn1AEQ:https://www.aspshop.eu/data/product/1024_1024/vento-man-pant-black-6200p4112-b.png&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Nh6zPD3LJSq-VyvxcGdWqN-33aazKn1AEQ:https://www.aspshop.eu/data/product/1024_1024/vento-man-pant-black-6200p4112-b.png&usqp=CAU"
    ],
    sizes: [
      { size: 28, quantity: 20 },
      { size: 30, quantity: 20 },
      { size: 32, quantity: 20 },
      { size: 34, quantity: 20 },
      { size: 36, quantity: 20 },
      { size: 38, quantity: 20 },
      { size: 40, quantity: 20 },
      { size: 42, quantity: 20 },
      { size: 44, quantity: 0 },
      { size: 46, quantity: 0 }
    ],
    reviews: []
  },
  {
    title: "this is a clothe",
    description: "this is a description",
    uid: 0,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Nh6zPD3LJSq-VyvxcGdWqN-33aazKn1AEQ:https://www.aspshop.eu/data/product/1024_1024/vento-man-pant-black-6200p4112-b.png&usqp=CAU"
    ],
    sizes: [
      { size: 28, quantity: 20 },
      { size: 30, quantity: 20 },
      { size: 32, quantity: 20 },
      { size: 34, quantity: 20 },
      { size: 36, quantity: 20 },
      { size: 38, quantity: 20 },
      { size: 40, quantity: 20 },
      { size: 42, quantity: 20 },
      { size: 44, quantity: 0 },
      { size: 46, quantity: 0 }
    ],
    reviews: []
  },
  {
    title: "this is a clothe",
    description: "this is a description",
    uid: 0,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Nh6zPD3LJSq-VyvxcGdWqN-33aazKn1AEQ:https://www.aspshop.eu/data/product/1024_1024/vento-man-pant-black-6200p4112-b.png&usqp=CAU"
    ],
    sizes: [
      { size: 28, quantity: 20 },
      { size: 30, quantity: 20 },
      { size: 32, quantity: 20 },
      { size: 34, quantity: 20 },
      { size: 36, quantity: 20 },
      { size: 38, quantity: 20 },
      { size: 40, quantity: 20 },
      { size: 42, quantity: 20 },
      { size: 44, quantity: 0 },
      { size: 46, quantity: 0 }
    ],
    reviews: []
  }
];

export default function handler(req, res) {
  res.status(200).json(manlyClothes);
}
