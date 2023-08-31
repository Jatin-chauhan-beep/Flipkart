let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Listening on port ${port}!`));

let mobiles = [
  {
    id: "M1",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 8 (Sapphire Blue, 64 GB)",
    img: "https://i.ibb.co/vzy2NfL/mi-redmi-8-mzb8253in-original-imafhyacjwjwxmsx.jpg",
    rating: 4.5,
    ratingDesc: "95082 Rating & 9727 Reviews",
    details: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "12MP + 2MP | 8MP Front Camera",
      "5000 mAh Battery",
      "Qualcomm Snapdragon 439 Processor",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 7999,
    assured: true,
    prevPrice: 10999,
    discount: 27,
    EMI: "No Cost EMI",
    exchange: "Upto 7700 on Exchange",
    ram: 4,
    popularity: 76670,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M18",
    category: "Mobiles",
    brand: "RealMe",
    name: "Realme XT (Pearl Blue, 64 GB)",
    img: "https://i.ibb.co/sQg5Bqd/realme-xt-rmx1921-original-imafk8h2gbyatyyr.jpg",
    rating: "4.4",
    ratingDesc: "43,120 Ratings & 3,440 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 8900,
    discount: 26,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 4,
    popularity: 76670,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M2",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 8 (Ruby Red, 64 GB)",
    img: "https://i.ibb.co/4W96nDZ/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpg",
    rating: 4.5,
    ratingDesc: "95348 Rating & 9727 Reviews",
    details: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "12MP + 2MP | 8MP Front Camera",
      "5000 mAh Battery",
      "Qualcomm Snapdragon 439 Processor",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 7999,
    assured: true,
    prevPrice: 10999,
    discount: 27,
    EMI: "No Cost EMI",
    exchange: "Upto 7700 on Exchange",
    ram: 4,
    popularity: 76070,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M46",
    category: "Mobiles",
    brand: "Apple",
    name: "Apple iPhone XR (Black, 64 GB)",
    img: "https://i.ibb.co/c3mDqg3/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpg",
    rating: "4.6",
    ratingDesc: "6,360 Ratings & 554 Reviews",
    details: [
      "15.49 cm (6.1 inch) Display",
      "64 GB ROM |",
      "12MP Rear Camera | 7MP Front Camera",
      "A12 Bionic Chip Processor",
      "Brand Warranty of 1 Year",
      "iOS 13 Compatible",
    ],
    price: 47900,
    prevPrice: 49900,
    discount: 4,
    emi: "",
    assured: true,
    exchange: "Upto ₹10,800 Off on Exchange",
    ram: 64,
    popularity: 6360,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M3",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 8A (Ocean Blue, 32 GB)",
    img: "https://i.ibb.co/BLx04L2/mi-redmi-8a-mzb8458in-original-imafkmhycvhcsrzm.jpg",
    rating: 4.5,
    ratingDesc: "95082 Rating & 9727 Reviews",
    details: [
      "3 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Qualcomm Snapdragon 439 Processor",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6999,
    assured: true,
    prevPrice: 8999,
    discount: 22,
    EMI: "No Cost EMI",
    exchange: "Upto ₹6950 on Exchange",
    ram: 3,
    popularity: 76670,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M4",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 8A (Midnight Black, 32 GB)",
    img: "https://i.ibb.co/nQRQhJj/mi-redmi-8a-mzb8298in-original-imafkmhqztfbabww.jpg",
    rating: "4.4",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months",
    ],
    price: 6499,
    prevPrice: 7999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 2,
    popularity: 76670,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M33",
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A10 (Stainless Steel, 32 GB)",
    img: "https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg",
    rating: "4.4",
    ratingDesc: "50,597 Ratings & 5,185 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 9999,
    prevPrice: 11999,
    discount: 17,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 4,
    popularity: 76670,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M5",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 8A (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
    rating: "4.4",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 7999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 2,
    popularity: 97083,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M6",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 7A (Matte Blue, 32 GB)",
    img: "https://i.ibb.co/DKtd3h6/mi-redmi-7a-mzb8008in-original-imafg27hramfktfs.jpg",
    rating: "4.4",
    ratingDesc: "4.32,39,949 Ratings & 17,990 Reviews",
    details: [
      "6 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "13.84 cm (5.45 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6199,
    prevPrice: 13999,
    discount: 11,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 6,
    popularity: 97083,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M7",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 8A (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/NZN04Ss/mi-redmi-note-7s-mzb7742in-original-imafe48ru3s66sjd.jpg",
    rating: "4.3",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 12499,
    prevPrice: 13999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 2,
    popularity: 76670,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M8",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 8A (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/NZN04Ss/mi-redmi-note-7s-mzb7742in-original-imafe48ru3s66sjd.jpg",
    rating: "4.4",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 10499,
    prevPrice: 14999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 2,
    popularity: 97083,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M9",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 8 (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/J3p0Cdz/mi-redmi-note-7-pro-na-original-imafe4bddnr7n5vb.jpg",
    rating: "4.4",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 7999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 2,
    popularity: 97083,
  },
  {
    id: "M10",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi 8 (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
    rating: "4.2",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "6 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 7999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 6,
    popularity: 97083,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M11",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi Note (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
    rating: "4.4",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 7999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 2,
    popularity: 97083,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M12",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi Note (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
    rating: "4.2",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 7999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 2,
    popularity: 76670,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M13",
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi Poco F1 (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
    rating: "4",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 7999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 2,
    popularity: 97083,
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
  },
  {
    id: "M14",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi Poco F1 (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
    rating: "4",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "6 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 7999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 6,
    popularity: 97083,
  },
  {
    id: "M15",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi Note 5 (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
    rating: "4.4",
    ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
    details: [
      "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 7999,
    discount: 18,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 2,
    popularity: 97083,
  },
  {
    id: "M16",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Mi",
    name: "Redmi Note 5 (Sunset Red, 32 GB)",
    img: "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
    rating: "4.4",
    ratingDesc: "43,156 Ratings & 3,440 Reviews",
    details: [
      "6 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 89999,
    prevPrice: 10999,
    discount: 18,
    emi: "",
    assured: false,
    exchange: "",
    ram: 6,
    popularity: 76670,
  },
  {
    id: "M17",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "RealMe",
    name: "Realme XT (Pearl White, 64 GB)",
    img: "https://i.ibb.co/3sCg6NQ/realme-xt-rmx1921-original-imafk8h2dnnubezk.jpg",
    rating: "4.1",
    ratingDesc: "43,156 Ratings & 3,440 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 7499,
    prevPrice: 8999,
    discount: 16,
    emi: "No Cost EMI",
    assured: true,
    exchange: "Upto ₹7,350 Off on Exchange",
    ram: 4,
    popularity: 76670,
  },
  {
    id: "M19",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "RealMe",
    name: "Realme 5 (Pearl Blue, 64 GB)",
    img: "https://i.ibb.co/3sCg6NQ/realme-xt-rmx1921-original-imafk8h2dnnubezk.jpg",
    rating: "4.3",
    ratingDesc: "43,156 Ratings & 3,440 Reviews",
    details: [
      "3 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 7099,
    prevPrice: 9999,
    discount: 29,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 3,
    popularity: 67700,
  },
  {
    id: "M20",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "RealMe",
    name: "Realme 5 (Pearl White, 64 GB)",
    img: "https://i.ibb.co/sQg5Bqd/realme-xt-rmx1921-original-imafk8h2gbyatyyr.jpg",
    rating: "4.4",
    ratingDesc: "43,156 Ratings & 3,440 Reviews",
    details: [
      "3 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 8499,
    prevPrice: 8999,
    discount: 5,
    emi: "No Cost EMI",
    assured: false,
    exchange: "Upto ₹7,350 Off on Exchange",
    ram: 3,
    popularity: 76670,
  },
  {
    id: "M21",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "RealMe",
    name: "Realme C2 (Pearl Blue, 64 GB)",
    img: "https://i.ibb.co/3sCg6NQ/realme-xt-rmx1921-original-imafk8h2dnnubezk.jpg",
    rating: "4.4",
    ratingDesc: "43,120 Ratings & 3,440 Reviews",
    details: [
      "6 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 7499,
    prevPrice: 8499,
    discount: 11,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 6,
    popularity: 76670,
  },
  {
    id: "M22",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "RealMe",
    name: "Realme C2 (Pearl Blue, 64 GB)",
    img: "https://i.ibb.co/sQg5Bqd/realme-xt-rmx1921-original-imafk8h2gbyatyyr.jpg",
    rating: "4.5",
    ratingDesc: "43,156 Ratings & 3,440 Reviews",
    details: [
      "6 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 6499,
    prevPrice: 7299,
    discount: 11,
    emi: "No Cost EMI",
    assured: false,
    exchange: "",
    ram: 6,
    popularity: 76670,
  },
  {
    id: "M23",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "RealMe",
    name: "Realme C2 (Pearl Blue, 64 GB)",
    img: "https://i.ibb.co/3sCg6NQ/realme-xt-rmx1921-original-imafk8h2dnnubezk.jpg",
    rating: "4.4",
    ratingDesc: "43,120 Ratings & 3,440 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 7099,
    prevPrice: 7899,
    discount: 10,
    emi: "No Cost EMI",
    assured: true,
    exchange: "Upto ₹7,350 Off on Exchange",
    ram: 4,
    popularity: 67000,
  },
  {
    id: "M24",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "RealMe",
    name: "Realme C2 (Pearl Blue, 64 GB)",
    img: "https://i.ibb.co/sQg5Bqd/realme-xt-rmx1921-original-imafk8h2gbyatyyr.jpg",
    rating: "4.6",
    ratingDesc: "43,156 Ratings & 3,440 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 7499,
    prevPrice: 8999,
    discount: 17,
    emi: "No Cost EMI",
    assured: true,
    exchange: "Upto ₹7,350 Off on Exchange",
    ram: 4,
    popularity: 76670,
  },
  {
    id: "M25",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy M10S (Metallic Blue, 32 GB)",
    img: "https://i.ibb.co/bLShFsJ/samsung-galaxy-m10s-sm-m107fmbdins-original-imafh8wsfsghgwav.jpg",
    rating: "4.4",
    ratingDesc: "83,156 Ratings & 4,440 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 10999,
    prevPrice: 14999,
    discount: 26,
    emi: "No Cost EMI",
    assured: true,
    exchange: "Upto ₹8,350 Off on Exchange",
    ram: 4,
    popularity: 50597,
  },
  {
    id: "M26",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy M10S (Stainless Steel, 32 GB)",
    img: "https://i.ibb.co/9GMGvZN/galaxy-a20s-64-a-sm-a207fzkgins-samsung-4-original-imafkx2d6qnvdfgh.jpg",
    rating: "4.6",
    ratingDesc: "50,597 Ratings & 5,185 Reviews",
    details: [
      "6 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 9799,
    prevPrice: 10999,
    discount: 11,
    emi: "No Cost EMI",
    assured: true,
    exchange: "Upto ₹7,350 Off on Exchange",
    ram: 6,
    popularity: 67000,
  },
  {
    id: "M27",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A20 (Stainless Steel, 32 GB)",
    img: "https://i.ibb.co/bLShFsJ/samsung-galaxy-m10s-sm-m107fmbdins-original-imafh8wsfsghgwav.jpg",
    rating: "4.4",
    ratingDesc: "43,120 Ratings & 3,440 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 8999,
    prevPrice: 12999,
    discount: 31,
    emi: "No Cost EMI",
    assured: true,
    exchange: "Upto ₹7,350 Off on Exchange",
    ram: 4,
    popularity: 76670,
  },
  {
    id: "M28",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A20 (Stainless Steel, 64 GB)",
    img: "https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg",
    rating: "4.4",
    ratingDesc: "83,156 Ratings & 4,440 Reviews",
    details: [
      "6 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 12999,
    prevPrice: 14999,
    discount: 13,
    emi: "No Cost EMI",
    assured: true,
    exchange: "Upto ₹8,350 Off on Exchange",
    ram: 6,
    popularity: 50597,
  },
  {
    id: "M29",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A70 (Stainless Steel, 32 GB)",
    img: "https://i.ibb.co/9GMGvZN/galaxy-a20s-64-a-sm-a207fzkgins-samsung-4-original-imafkx2d6qnvdfgh.jpg",
    rating: "4.6",
    ratingDesc: "50,597 Ratings & 5,185 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 11999,
    prevPrice: 14999,
    discount: 20,
    emi: "",
    assured: false,
    exchange: "",
    ram: 4,
    popularity: 76670,
  },
  {
    id: "M30",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A70 (Stainless Steel, 64 GB)",
    img: "https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg",
    rating: "4.4",
    ratingDesc: "43,120 Ratings & 3,440 Reviews",
    details: [
      "6 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 12999,
    prevPrice: 13999,
    discount: 7,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 6,
    popularity: 67000,
  },
  {
    id: "M31",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A40 (Stainless Steel, 32 GB)",
    img: "https://i.ibb.co/9GMGvZN/galaxy-a20s-64-a-sm-a207fzkgins-samsung-4-original-imafkx2d6qnvdfgh.jpg",
    rating: "4.4",
    ratingDesc: "43,120 Ratings & 3,440 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 9999,
    prevPrice: 12999,
    discount: 23,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 4,
    popularity: 76670,
  },
  {
    id: "M32",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A40 (Stainless Steel, 64 GB)",
    img: "https://i.ibb.co/bLShFsJ/samsung-galaxy-m10s-sm-m107fmbdins-original-imafh8wsfsghgwav.jpg",
    rating: "4.5",
    ratingDesc: "83,156 Ratings & 4,440 Reviews",
    details: [
      "6 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 8999,
    prevPrice: 11999,
    discount: 25,
    emi: "",
    assured: false,
    exchange: "",
    ram: 6,
    popularity: 67000,
  },
  {
    id: "M33",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A10 (Stainless Steel, 32 GB)",
    img: "https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg",
    rating: "4.4",
    ratingDesc: "50,597 Ratings & 5,185 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 9999,
    prevPrice: 11999,
    discount: 17,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 4,
    popularity: 76670,
  },
  {
    id: "M34",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A10 (Stainless Steel, 64 GB)",
    img: "https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg",
    rating: "4.4",
    ratingDesc: "43,120 Ratings & 3,440 Reviews",
    details: [
      "6 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 8999,
    prevPrice: 11999,
    discount: 25,
    emi: "No Cost EMI",
    assured: true,
    exchange: "",
    ram: 6,
    popularity: 67000,
  },
  {
    id: "M35",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A50 (Stainless Steel, 32 GB)",
    img: "https://i.ibb.co/9GMGvZN/galaxy-a20s-64-a-sm-a207fzkgins-samsung-4-original-imafkx2d6qnvdfgh.jpg",
    rating: "4.5",
    ratingDesc: "83,156 Ratings & 4,440 Reviews",
    details: [
      "4 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 10999,
    prevPrice: 13999,
    discount: 21,
    emi: "",
    assured: true,
    exchange: "Upto ₹7,350 Off on Exchange",
    ram: 4,
    popularity: 76670,
  },
  {
    id: "M36",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Samsung",
    name: "Samsung Galaxy A50 (Stainless Steel, 64 GB)",
    img: "https://i.ibb.co/bLShFsJ/samsung-galaxy-m10s-sm-m107fmbdins-original-imafh8wsfsghgwav.jpg",
    rating: "4.4",
    ratingDesc: "50,597 Ratings & 5,185 Reviews",
    details: [
      "6 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
      "15.8 cm (6.22 inch) HD+ Display",
      "Qualcomm Snapdragon 439 Processor",
      "12MP Rear Camera | 8MP Front Camera",
      "5000 mAh Battery",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 7999,
    prevPrice: 12999,
    discount: 38,
    emi: "",
    assured: true,
    exchange: "Upto ₹7,350 Off on Exchange",
    ram: 6,
    popularity: 76670,
  },
  {
    id: "M37",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "OPPO",
    name: "OPPO F11 (Marble Green, 128 GB)",
    img: "https://i.ibb.co/6s69BZy/oppo-f11-cph1911-original-imafght4kvkhnzzg.jpg",
    rating: "4.4",
    ratingDesc: "50,597 Ratings & 5,185 Reviews",
    details: [
      "4 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "16.59 cm (6.53 inch) Display",
      "48MP + 5MP | 16MP Front Camera",
      "4020 mAh Battery",
      "MTK MT6771V (P70) Processor",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 21900,
    prevPrice: 22999,
    discount: 5,
    emi: "No Cost EMI",
    assured: false,
    exchange: "",
    ram: 4,
    popularity: 50597,
  },
  {
    id: "M38",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "OPPO",
    name: "OPPO F11 (Fluorite Purple, 128 GB)",
    img: "https://i.ibb.co/nmKVgN3/oppo-f11-cph1911-original-imafght4bbcxzmgc.jpg",
    rating: "4.4",
    ratingDesc: "50,597 Ratings & 5,185 Reviews",
    details: [
      "4 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "16.59 cm (6.53 inch) Display",
      "48MP + 5MP | 16MP Front Camera",
      "4020 mAh Battery",
      "MTK MT6771V (P70) Processor",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 18999,
    prevPrice: 20999,
    discount: 9,
    emi: "",
    assured: false,
    exchange: "",
    ram: 4,
    popularity: 50597,
  },
  {
    id: "M39",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "OPPO",
    name: "OPPO F11 (Fluorite Purple, 128 GB)",
    img: "https://i.ibb.co/nmKVgN3/oppo-f11-cph1911-original-imafght4bbcxzmgc.jpg",
    rating: "4.4",
    ratingDesc: "50,597 Ratings & 5,185 Reviews",
    details: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "16.59 cm (6.53 inch) Display",
      "48MP + 5MP | 16MP Front Camera",
      "4020 mAh Battery",
      "MTK MT6771V (P70) Processor",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 17999,
    prevPrice: 22999,
    discount: 22,
    emi: "",
    assured: false,
    exchange: "Upto ₹10,800 Off on Exchange",
    ram: 6,
    popularity: 40597,
  },
  {
    id: "M40",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "OPPO",
    name: "OPPO F11 (Marble Green, 128 GB)",
    img: "https://i.ibb.co/6s69BZy/oppo-f11-cph1911-original-imafght4kvkhnzzg.jpg",
    rating: "4.4",
    ratingDesc: "50,597 Ratings & 5,185 Reviews",
    details: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "16.59 cm (6.53 inch) Display",
      "48MP + 5MP | 16MP Front Camera",
      "4020 mAh Battery",
      "MTK MT6771V (P70) Processor",
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    ],
    price: 14999,
    prevPrice: 16999,
    discount: 12,
    emi: "No Cost EMI",
    assured: false,
    exchange: "",
    ram: 6,
    popularity: 80597,
  },
  {
    id: "M41",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Apple",
    name: "Apple iPhone 8 Plus (Gold, 256 GB)",
    img: "https://i.ibb.co/drVHVJZ/apple-iphone-8-plus-mq8j2hn-a-original-imaexsfmnxjcfc8t.jpg",
    rating: "4.6",
    ratingDesc: "3,231 Ratings & 352 Reviews",
    details: [
      "13.97 cm (5.5 inch) Retina HD Display",
      "256 GB ROM |",
      "12MP + 12MP | 7MP Front Camera",
      "A11 Bionic Chip with 64-bit Architecture, Neural Engine, Embedded M11 Motion Coprocessor Processor",
      "Brand Warranty of 1 Year",
      "",
    ],
    price: 59490,
    prevPrice: 86308,
    discount: 31,
    emi: "",
    assured: false,
    exchange: "Upto ₹7,350 Off on Exchange",
    ram: 256,
    popularity: 3231,
  },
  {
    id: "M42",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Apple",
    name: "Apple iPhone 8 Plus (Space Grey, 256 GB)",
    img: "https://i.ibb.co/NT05Bfz/apple-iphone-8-plus-mq8g2hn-a-original-imaexsfhxepbngdq.jpg",
    rating: "4.6",
    ratingDesc: "3,231 Ratings & 352 Reviews",
    details: [
      "13.97 cm (5.5 inch) Retina HD Display",
      "256 GB ROM |",
      "12MP + 12MP | 7MP Front Camera",
      "A11 Bionic Chip with 64-bit Architecture, Neural Engine, Embedded M11 Motion Coprocessor Processor",
      "Brand Warranty of 1 Year",
      "",
    ],
    price: 64900,
    prevPrice: 84900,
    discount: 23,
    emi: "",
    assured: false,
    exchange: "",
    ram: 256,
    popularity: 3231,
  },
  {
    id: "M44",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Apple",
    name: "Apple iPhone 7 Plus (Red, 128 GB)",
    img: "https://i.ibb.co/02HBg2F/apple-iphone-7-plus-mn4v2hn-a-original-imaeswuk6ecvqhb5.jpg",
    rating: "4.4",
    ratingDesc: "18,655 Ratings & 2,128 Reviews",
    details: [
      "13.97 cm (5.5 inch) Retina HD Display",
      "128 GB ROM |",
      "12MP + 12MP | 7MP Front Camera",
      "Apple A10 Fusion 64-bit processor and Embedded M10 Motion Co-processor",
      "Brand Warranty of 1 Year",
      "iOS 13 Compatible",
    ],
    price: 59990,
    prevPrice: 59990,
    discount: 0,
    emi: "",
    assured: true,
    exchange: "",
    ram: 128,
    popularity: 18655,
  },
  {
    id: "M45",
    offers: [
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "10% Cashback* on HDFC Bank Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail:
          "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Extra 5% off* with Axis Bank Buzz Credit Card",
      },
      {
        img: "https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png",
        type: "Bank Offer",
        detail: "Get upto ₹10800 off on exchange",
      },
      {
        img: "https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png",
        type: "Bank Offer",
        detail: "Special Price",
      },
      {
        img: "https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png",
        type: "Bank Offer",
        detail: "No Cost EMI",
      },
    ],
    category: "Mobiles",
    brand: "Apple",
    name: "Apple iPhone XR (White, 64 GB)",
    img: "https://i.ibb.co/27rSms4/apple-iphone-xr-mry52hn-a-original-imafa6zkfgwpnsgz.jpg",
    rating: "4.6",
    ratingDesc: "6,360 Ratings & 554 Reviews",
    details: [
      "15.49 cm (6.1 inch) Display",
      "64 GB ROM |",
      "12MP Rear Camera | 7MP Front Camera",
      "A12 Bionic Chip Processor",
      "Brand Warranty of 1 Year",
      "iOS 13 Compatible",
    ],
    price: 47900,
    prevPrice: 49900,
    discount: 4,
    emi: "No Cost EMI",
    assured: true,
    exchange: "Upto ₹10,800 Off on Exchange",
    ram: 64,
    popularity: 6360,
  },
];
let reviews = [
  {
    id: 1,
    mobileId: "M1",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Not good",
        description: "Front camera is the worst so far",
        author: "Abhi Sahay",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Average.",
        author: "Sunil Sunil b",
      },
      {
        star: 5,
        title: "Wonderful",
        description: "Best👍💯",
        author: "SATYENDRA MEENA",
      },
      {
        star: 3,
        title: "Does the job",
        description:
          "Screen over camera is bit dim. Informed the same to flipkart. They showed very reluctant attitude and refused to replace it.",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 2,
    mobileId: "M2",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 3,
    mobileId: "M3",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 4,
    mobileId: "M4",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 5,
    mobileId: "M5",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 6,
    mobileId: "M6",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 7,
    mobileId: "M7",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 8,
    mobileId: "M8",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 9,
    mobileId: "M9",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 10,
    mobileId: "M10",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 11,
    mobileId: "M11",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 12,
    mobileId: "M12",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 13,
    mobileId: "M13",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 14,
    mobileId: "M14",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 15,
    mobileId: "M15",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 16,
    mobileId: "M16",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 17,
    mobileId: "M17",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 18,
    mobileId: "M18",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 19,
    mobileId: "M19",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 20,
    mobileId: "M20",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 21,
    mobileId: "M21",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 22,
    mobileId: "M22",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 23,
    mobileId: "M23",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 24,
    mobileId: "M24",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 25,
    mobileId: "M25",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 26,
    mobileId: "M26",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 27,
    mobileId: "M27",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 28,
    mobileId: "M28",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 29,
    mobileId: "M29",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 30,
    mobileId: "M30",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 31,
    mobileId: "M31",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 32,
    mobileId: "M32",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 33,
    mobileId: "M33",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 34,
    mobileId: "M34",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 35,
    mobileId: "M35",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 36,
    mobileId: "M36",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 37,
    mobileId: "M37",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 38,
    mobileId: "M38",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 39,
    mobileId: "M39",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 40,
    mobileId: "M40",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 41,
    mobileId: "M41",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 42,
    mobileId: "M42",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 43,
    mobileId: "M43",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 44,
    mobileId: "M44",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 45,
    mobileId: "M45",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
  {
    id: 46,
    mobileId: "M46",
    ratings: [
      {
        star: 1,
        title: "Not recommended at all",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Useless product",
        description: "",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Nice product",
        description: "Great display.",
        author: "Gyana Jena",
      },
      {
        star: 5,
        title: "Best in the market!",
        description: "👌👌 good product",
        author: "Suraj Kumbhakar",
      },
      {
        star: 1,
        title: "Very poor",
        description: "Speaker not working after 7days",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Slightly disappointed",
        description: "speaker problem",
        author: "Samala Pradee",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Camera performance very bad",
        author: "Sumangal Mondal",
      },
      {
        star: 5,
        title: "Classy product",
        description: "The poco M2pro mobile is very👍 nice I love this phone",
        author: "Moumita Nandy",
      },
      {
        star: 1,
        title: "Useless product",
        description:
          "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description: "Microphone not working",
      },
      {
        star: 4,
        title: "Very poor",
        description: "Thanks to Flipkart for fast delivery",
        author: "Ha Ri",
      },
      {
        star: 3,
        title: "Fair",
        description:
          "All over good, some time get hanged in simple task like what's app message and calling time",
        author: "MUKHTIAR RAM",
      },
      {
        star: 5,
        title: "Classy product",
        description: "Good👍",
        author: "Mani Manikandan",
      },
      {
        star: 4,
        title: "Good choice",
        description: "Good",
        author: "Puja Pal",
      },
      {
        star: 4,
        title: "Nice product",
        description:
          "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
        author: "Mitesh W",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "Best phone i have had.",
        author: "Swetasri Pal",
      },
      {
        star: 1,
        title: "Waste of money!",
        description:
          "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Horrible",
        description: "Don't buy this mobile it has speaker issue",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Terrible product",
        description:
          "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Utterly Disappointed",
        description: "My m2pro has yearspaker problem",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Not recommended at all",
        description: "miui is not good in poco mobile",
        author: "Flipkart Customer",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Nice phone ...blindly go for it",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Must buy!",
        description:
          "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
        author: "Flipkart Customer",
      },
      {
        star: 5,
        title: "Worth every penny",
        description: "I m happy 😁😊",
        author: "Anita Patwal",
      },
      {
        star: 3,
        title: "Just okay",
        description: "It's good phone but battery performance is poor...",
        author: "Sanjay Singh",
      },
      {
        star: 4,
        title: "Value-for-money",
        description: "Good 🥳🥳🥳🥳",
        author: "SANTANU MALIK",
      },
      {
        star: 5,
        title: "Just wow!",
        description: "Good",
        author: "Flipkart Customer",
      },
      {
        star: 2,
        title: "Bad quality",
        description:
          "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
        author: "Manoj Patel",
      },
      {
        star: 2,
        title: "Bad quality",
        description: "Feels like a Brick",
        author: "Ashutosh Tyagi",
      },
      {
        star: 3,
        title: "Decent product",
        description: "Ok product",
        author: "Momin Azharoddin",
      },
      {
        star: 3,
        title: "Just okay",
        description: "Normal but not awesome performance",
        author: "Saran mukesh Choudhary",
      },
      {
        star: 2,
        title: "Expected a better product",
        description: "Network quality is bad",
        author: "Flipkart Customer",
      },
      {
        star: 3,
        title: "Fair",
        description: "Good but tower problem and voice mic not clear",
        author: "Flipkart Customer",
      },
      {
        star: 1,
        title: "Worst experience ever!",
        description:
          "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
        author: "Flipkart Customer",
      },
    ],
  },
];
let users = [
  {
    fname: "Rahul",
    lname: "Kumar",
    gender: "Male",
    number: "0123456789",
    address: "noida 123, street 22",
    addresstype: "Home",
    pincode: "110050",
    locality: "Noida",
    city: "Noida",
    state: "Delhi NCR",
    email: "admin@test.com",
    password: "admin123",
  },
];
let address = [
  {
    name: "Rahul Kumar",
    number1: "0123456789",
    number2: "",
    landmark: "",
    address: "noida 123, street 22",
    addresstype: "Home",
    pincode: "110050",
    locality: "Noida",
    city: "Noida",
    state: "Delhi NCR",
  },
];
let pincodes = [
  {
    pincode: 201304,
    mobileList: [
      { id: "M1", display: "Delivery in 4-5 days" },
      { id: "M29", display: "Delivery in 2-3 days" },
      { id: "M30", display: "Delivery in 2-3 days" },
      { id: "M2", display: "Delivery in 7-9 days" },
      { id: "M24", display: "Delivery in 2-3 days" },
    ],
  },
  {
    pincode: 110001,
    mobileList: [
      { id: "M2", display: "Delivery in 2-3 days" },
      { id: "M28", display: "Delivery in 2-3 days" },
      { id: "M31", display: "Delivery in 7-9 days" },
      { id: "M4", display: "Delivery in 2-3 days" },
      { id: "M3", display: "Delivery in 2-3 days" },
    ],
  },
  {
    pincode: 110025,
    mobileList: [
      { id: "M3", display: "Delivery in 7-9 days" },
      { id: "M27", display: "Delivery in 2-3 days" },
      { id: "M32", display: "Delivery in 2-3 days" },
      { id: "M5", display: "Delivery in 7-9 days" },
      { id: "M22", display: "Delivery in 2-3 days" },
    ],
  },
  {
    pincode: 110035,
    mobileList: [
      { id: "M4", display: "Delivery in 2-3 days" },
      { id: "M26", display: "Delivery in 7-9 days" },
      { id: "M33", display: "Delivery in 2-3 days" },
      { id: "M6", display: "Delivery in 2-3 days" },
      { id: "M21", display: "Delivery in 7-9 days" },
    ],
  },
  {
    pincode: 201102,
    mobileList: [
      { id: "M5", display: "Delivery in 2-3 days" },
      { id: "M25", display: "Delivery in 7-9 days" },
      { id: "M34", display: "Delivery in 2-3 days" },
      { id: "M7", display: "Delivery in 2-3 days" },
      { id: "M39", display: "Delivery in 2-3 days" },
    ],
  },
  {
    pincode: 201301,
    mobileList: [
      { id: "M6", display: "Delivery in 4-5 days" },
      { id: "M24", display: "Delivery in 2-3 days" },
      { id: "M35", display: "Delivery in 2-3 days" },
      { id: "M8", display: "Delivery in 2-3 days" },
      { id: "M38", display: "Delivery in 4-5 days" },
    ],
  },
  {
    pincode: 122301,
    mobileList: [
      { id: "M7", display: "Delivery in 4-5 days" },
      { id: "M24", display: "Delivery in 2-3 days" },
      { id: "M36", display: "Delivery in 2-3 days" },
      { id: "M9", display: "Delivery in 2-3 days" },
      { id: "M37", display: "Delivery in 7-9 days" },
    ],
  },
  {
    pincode: 110089,
    mobileList: [
      { id: "M8", display: "Delivery in 4-5 days" },
      { id: "M23", display: "Delivery in 4-5 days" },
      { id: "M37", display: "Delivery in 2-3 days" },
      { id: "M10", display: "Delivery in 2-3 days" },
      { id: "M36", display: "Delivery in 4-5 days" },
    ],
  },
  {
    pincode: 131089,
    mobileList: [
      { id: "M9", display: "Delivery in 2-3 days" },
      { id: "M22", display: "Delivery in 2-3 days" },
      { id: "M38", display: "Delivery in 4-5 days" },
      { id: "M11", display: "Delivery in 4-5 days" },
      { id: "M35", display: "Delivery in 2-3 days" },
    ],
  },
  {
    pincode: 124105,
    mobileList: [
      { id: "M10", display: "Delivery in 2-3 days" },
      { id: "M21", display: "Delivery in 2-3 days" },
      { id: "M39", display: "Delivery in 4-5 days" },
      { id: "M12", display: "Delivery in 4-5 days" },
      { id: "M34", display: "Delivery in 2-3 days" },
    ],
  },
  {
    pincode: 122010,
    mobileList: [
      { id: "M11", display: "Delivery in 2-3 days" },
      { id: "M20", display: "Delivery in 2-3 days" },
      { id: "M40", display: "Delivery in 7-9 days" },
      { id: "M13", display: "Delivery in 2-3 days" },
      { id: "M33", display: "Delivery in 7-9 days" },
      { id: "M41", display: "Delivery in 2-3 days" },
    ],
  },
  {
    pincode: 110078,
    mobileList: [
      { id: "M12", display: "Delivery in 2-3 days" },
      { id: "M19", display: "Delivery in 2-3 days" },
      { id: "M41", display: "Delivery in 7-9 days" },
      { id: "M14", display: "Delivery in 2-3 days" },
      { id: "M32", display: "Delivery in 7-9 days" },
    ],
  },
  {
    pincode: 131028,
    mobileList: [
      { id: "M13", display: "Delivery in 2-3 days" },
      { id: "M18", display: "Delivery in 2-3 days" },
      { id: "M42", display: "Delivery in 4-5 days" },
      { id: "M15", display: "Delivery in 4-5 days" },
      { id: "M31", display: "Delivery in 4-5 days" },
    ],
  },
  {
    pincode: 124505,
    mobileList: [
      { id: "M14", display: "Delivery in 4-5 days" },

      { id: "M17", display: "Delivery in 4-5 days" },
      { id: "M3", display: "Delivery in 4-5 days" },
      { id: "M16", display: "Delivery in 4-5 days" },
      { id: "M19", display: "Delivery in 4-5 days" },
    ],
  },
  {
    pincode: 110030,
    mobileList: [
      { id: "M15", display: "Delivery in 4-5 days" },
      { id: "M16", display: "Delivery in 4-5 days" },
      { id: "M1", display: "Delivery in 4-5 days" },
      { id: "M17", display: "Delivery in 4-5 days" },
      { id: "M18", display: "Delivery in 4-5 days" },
    ],
  },
];
app.get("/products/:category/:brand?", (req, res) => {
  let { category } = req.params;
  let { assured, ram, rating, price, sort, page = 0, brand } = req.query;
  let arr = mobiles;
  if (category) arr = arr.filter((f) => f.category === category);
  if (brand) {
    let Brand = brand.split(",");
    arr = arr.filter((f) => Brand.find((b) => b === f.brand));
  }
  if (assured) arr = arr.filter((f) => f.assured);
  if (ram) {
    let Ram = ram.split(",");
    arr = arr.filter((mobile) => {
      return Ram.some((condition) => {
        const operator = condition.charAt(0);
        const value = parseInt(condition.charAt(2));
        if (operator === ">" && mobile.ram >= value) {
          return true;
        } else if (operator === "<" && mobile.ram <= value) {
          return true;
        }
        return false;
      });
    });
  }
  if (rating) {
    let Rating = rating.split(",");
    arr = arr.filter((mobile) => {
      return Rating.some((condition) => {
        const operator = condition.charAt(0);
        const value = parseInt(condition.charAt(1));
        if (operator === ">" && mobile.rating > value) {
          return true;
        } else if (operator === "<" && mobile.rating < value) {
          return true;
        }
        return false;
      });
    });
  }
  if (price) {
    let splitIndex = price.indexOf("-");
    let Plusindex = price.indexOf(">");
    let Price = [];
    if (splitIndex !== -1) {
      let firstPart = price.substring(0, splitIndex);
      let secondPart = price.substring(splitIndex + 1, price.length);
      Price.push(firstPart);
      Price.push(secondPart);
    }
    arr = arr.filter((mobile) => {
      if (Plusindex >= 0) {
        return mobile.price >= Price[0];
      } else {
        return mobile.price >= Price[0] && mobile.price <= Price[1];
      }
    });
  }
  if (sort == "asc") {
    arr = arr.sort((p1, p2) => p1.price - p2.price);
  }
  if (sort == "desc") {
    arr = arr.sort((p1, p2) => p2.price - p1.price);
  }
  if (sort == "popularity") {
    arr = arr.sort((p1, p2) => p1.popularity - p2.popularity);
  }
  if (page !== 0) {
    let size = 10;
    let startIndex = (+page - 1) * size;
    let endIndex = Math.min(startIndex + size, arr.length);

    let arr1 = arr.slice(startIndex, endIndex);
    res.send({
      pageNum: +page,
      item: arr1.length,
      items: arr.length,
      startIndex: startIndex,
      endIndex: endIndex,
      data: arr1,
    });
  }
  if (page === 0) {
    res.send({ data: arr });
  }
});

app.get("/deals", (req, res) => {
  let arr = mobiles;
  arr = arr.slice(11, 25);
  res.send(arr);
});

app.get("/reviews", (req, res) => {
  let { page = 0 } = req.query;
  if (page !== 0) {
    let size = 10;
    let startIndex = (+page - 1) * size;
    let endIndex = Math.min(startIndex + size, reviews.length);

    let arr1 = reviews.slice(startIndex, endIndex);
    res.send({
      pageNum: +page,
      item: arr1.length,
      items: reviews.length,
      startIndex: startIndex,
      endIndex: endIndex,
      review: arr1,
    });
  } else res.send({ review: reviews });
});

app.get("/allreviews/:id", (req, res) => {
  let id = req.params.id;
  let arr = reviews.find((f) => f.mobileId === id).ratings;
  let { page = 0 } = req.query;
  if (page !== 0) {
    let size = 10;
    let startIndex = (+page - 1) * size;
    let endIndex = Math.min(startIndex + size, arr.length);

    let arr1 = arr.slice(startIndex, endIndex);
    res.send({
      pageNum: +page,
      item: arr1.length,
      items: reviews.length,
      startIndex: startIndex,
      endIndex: endIndex,
      review: arr1,
    });
  } else res.send({ review: reviews });
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;
  let user = users.find((f) => f.email === email && f.password === password);
  if (user) res.send({ name: user.fname });
  else res.status(404).send("error Login");
});

app.get("/details/:name", (req, res) => {
  let name = req.params.name;
  let user = users.find((f) => f.fname === name);
  if (user) res.send(user);
  else res.status(404).send("Error");
});

app.put("/details/:name", (req, res) => {
  let name = req.params.name;
  let index = users.findIndex((f) => f.fname === name);
  if (index >= 0) {
    users[index] = { ...users[index], ...req.body };
    res.send(req.body);
  } else res.status(404).send("Error");
});

app.get("/address/:name", (req, res) => {
  res.send(address);
});
app.delete("/address/:index", (req, res) => {
  let index = req.params.index;
  address.splice(+index, 1);
  res.send("deleted");
});
app.post("/address", (req, res) => {
  address.push(req.body);
  res.send(req.body);
});

app.get("/pincode/:code/:id", (req, res) => {
  let code = req.params.code;
  let id = req.params.id;
  let pincode = pincodes.find((f) => f.pincode === +code);

  if (pincode) {
    let check = pincode.mobileList.find((f) => f.id === id);
    if (check) res.send({ delivery: check.display });
    else res.status(404).send("Not deliverable");
  } else res.status(404).send("Not deliverable");
});
