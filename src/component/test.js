const users = [
  {
    _id: ObjectId("60c72b2f4f1a4e3d2e6f1a1a"),
    name: "Alice Johnson",
    email: "alice@example.com",
    address: {
      street: "123 Maple St",
      city: "Springfield",
      state: "IL",
      zip: "62704",
    },
    joinedDate: ISODate("2021-01-15T08:00:00Z"),
  },
  {
    _id: ObjectId("60c72b2f4f1a4e3d2e6f1a1b"),
    name: "Bob Smith",
    email: "bob@example.com",
    address: {
      street: "456 Oak St",
      city: "Lincoln",
      state: "NE",
      zip: "68508",
    },
    joinedDate: ISODate("2020-03-22T10:00:00Z"),
  },
  {
    _id: ObjectId("60c72b2f4f1a4e3d2e6f1a1c"),
    name: "Carol Williams",
    email: "carol@example.com",
    address: {
      street: "789 Pine St",
      city: "Denver",
      state: "CO",
      zip: "80203",
    },
    joinedDate: ISODate("2019-07-11T12:00:00Z"),
  },
];

const products = [
  {
    _id: ObjectId("60c72b494f1a4e3d2e6f1a1d"),
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    stock: 50,
  },
  {
    _id: ObjectId("60c72b494f1a4e3d2e6f1a1e"),
    name: "Smartphone",
    category: "Electronics",
    price: 699.99,
    stock: 100,
  },
  {
    _id: ObjectId("60c72b494f1a4e3d2e6f1a1f"),
    name: "Desk Chair",
    category: "Furniture",
    price: 89.99,
    stock: 200,
  },
];

const orders = [
  {
    _id: ObjectId("60c72b674f1a4e3d2e6f1a20"),
    userId: ObjectId("60c72b2f4f1a4e3d2e6f1a1a"),
    productIds: [
      ObjectId("60c72b494f1a4e3d2e6f1a1d"),
      ObjectId("60c72b494f1a4e3d2e6f1a1e"),
    ],
    totalAmount: 1699.98,
    orderDate: ISODate("2021-06-12T14:00:00Z"),
  },
  {
    _id: ObjectId("60c72b674f1a4e3d2e6f1a21"),
    userId: ObjectId("60c72b2f4f1a4e3d2e6f1a1b"),
    productIds: [ObjectId("60c72b494f1a4e3d2e6f1a1f")],
    totalAmount: 89.99,
    orderDate: ISODate("2021-05-15T09:00:00Z"),
  },
  {
    _id: ObjectId("60c72b674f1a4e3d2e6f1a22"),
    userId: ObjectId("60c72b2f4f1a4e3d2e6f1a1c"),
    productIds: [ObjectId("60c72b494f1a4e3d2e6f1a1d")],
    totalAmount: 999.99,
    orderDate: ISODate("2021-04-20T11:00:00Z"),
  },
];
