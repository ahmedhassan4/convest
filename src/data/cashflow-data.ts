export const cashflowData = [
  {
    id: "023653413",
    date: "2023-08-07T12:30:00.000Z",
    totalAmount: 1500,
    orderSize: 5,
    status: "Paid",
    order: [
      {
        id: "0o12345601",
        lateFee: "0",
        orderAmount: 200000, // random value between 100000 and 1000000
        paymentStatus: "Paid", // new field
        products: [
          {
            id: "0o11111111",
            name: "Stylish Denim Jacket",
            category: "Jacket",
            image:
              "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/8.webp",
            color: "Blue",
            size: "md",
            receiveIn: Math.floor(Math.random() * 12) + 1, // random value between 1 and 12
            price: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000, // random value between 100000 and 1000000
          },
          {
            id: "0o22222222",
            name: "Elegant Silk Scarf",
            category: "Scarf",
            image:
              "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/9.webp",
            color: "Red",
            size: "One Size",
            receiveIn: Math.floor(Math.random() * 12) + 1, // random value between 1 and 12
            price: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000, // random value between 100000 and 1000000
          },
        ],
      },
      {
        id: "0o12345602",
        lateFee: "200",
        orderAmount: 350000, // random value between 100000 and 1000000
        paymentStatus: "Due", // new field
        products: [
          {
            id: "0o33333333",
            name: "Classic White Sneakers",
            category: "Footwear",
            image:
              "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp",
            color: "White",
            size: "lg",
            receiveIn: Math.floor(Math.random() * 12) + 1, // random value between 1 and 12
            price: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000, // random value between 100000 and 1000000
          },
          {
            id: "0o44444444",
            name: "Premium Leather Belt",
            category: "Accessory",
            image:
              "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/11.webp",
            color: "Brown",
            size: "L",
            receiveIn: Math.floor(Math.random() * 12) + 1, // random value between 1 and 12
            price: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000, // random value between 100000 and 1000000
          },
        ],
      },
    ],
  },
  {
    id: "023655413",
    date: "2023-08-08T14:45:30.000Z",
    totalAmount: 2000,
    orderSize: 8,
    status: "Due",
    order: [
      {
        id: "0o23456701",
        lateFee: "200",
        orderAmount: 500000, // random value between 100000 and 1000000
        paymentStatus: "Paid", // new field
        products: [
          {
            id: "0o55555555",
            name: "Modern Backpack",
            category: "Bag",
            image:
              "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/12.webp",
            color: "Black",
            size: "Large",
            receiveIn: Math.floor(Math.random() * 12) + 1, // random value between 1 and 12
            price: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000, // random value between 100000 and 1000000
          },
          {
            id: "0o66666666",
            name: "Sporty Cap",
            category: "Hat",
            image:
              "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/13.webp",
            color: "Gray",
            size: "One Size",
            receiveIn: Math.floor(Math.random() * 12) + 1, // random value between 1 and 12
            price: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000, // random value between 100000 and 1000000
          },
        ],
      },
      {
        id: "0o23456702",
        lateFee: "300",
        orderAmount: 700000, // random value between 100000 and 1000000
        paymentStatus: "Due", // new field
        products: [
          {
            id: "0o77777777",
            name: "Trendy Sunglasses",
            category: "Accessory",
            image:
              "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/14.webp",
            color: "Black",
            size: "Medium",
            receiveIn: Math.floor(Math.random() * 12) + 1, // random value between 1 and 12
            price: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000, // random value between 100000 and 1000000
          },
          {
            id: "0o88888888",
            name: "Casual T-Shirt",
            category: "T-Shirt",
            image:
              "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp",
            color: "White",
            size: "lg",
            receiveIn: Math.floor(Math.random() * 12) + 1, // random value between 1 and 12
            price: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000, // random value between 100000 and 1000000
          },
        ],
      },
    ],
  },
  // Additional objects updated similarly
];
