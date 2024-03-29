
products = [
  {
    id: 1, //required for FIXTURE
    title:'Flint',
    price: 99,
    description: 'Flint is...',
    isOnSale:true,
    image: '/images/flint.png',
    reviews: [100,101],
    crafter: 200
  },
  {
    id: 2, // required for FIXTURE
    title:'Kindling',
    price: 249,
    description: 'Easily...',
    isOnSale: false,
    image: '/images/kindling.png',
    crafter: 201
  }];
  
contacts = [
  {
    id: 200,
    name: 'Giamia',
    about: 'Although Giamia came from a humble spark of lightning, he quickly grew to be a great craftsman, providing all the warming instruments needed by those close to him.',
    avatar: 'images/giamia.png',
    products: [1]
  },
  {
    id: 201,
    name: 'Anostagia',
    about: 'Knowing there was a need for it, Anostagia drew on her experience and spearheaded the Flint & Flame storefront. In addition to coding the site, she also creates a few products available in the store.',
    avatar: 'images/anostagia.png',
    products: [2]
  }
];

reviews = [
  {
    id: 100,
    product: 1,
    text: "Started a fire in no time!"
  },{
    id: 101,
    product: 1,
    text: "Not the brightest flame, but warm!"
}];