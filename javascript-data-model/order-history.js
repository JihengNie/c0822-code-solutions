var orderHistory = [
  {
    orderPlacedDate: 20200804,
    totalCost: 34.00,
    shipToName: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveredDate: 20200808,
    itemsOrdered: [
      {
        itemType: 'book',
        title: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        lastReturnDate: 20200907,
        price: 31.55
      }
    ]
  },
  {
    orderPlacedDate: 20200719,
    totalCost: 44.53,
    shipToName: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    deliveredDate: 20200720,
    itemsOrdered: [
      {
        itemType: 'book',
        title: 'The Timeless Way of Builing',
        author: 'Alexander, Christopher',
        lastReturnDate: 20200819,
        price: 41.33
      }
    ]
  },
  {
    orderPlacedDate: 20200704,
    totalCost: 17.22,
    shipToName: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveredDate: 20200707,
    itemsOrdered: [
      {
        itemType: 'accessory',
        title: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Feature. No Driver and No Lag- Gamecube Adapter',
        lastReturnDate: 20220805,
        price: 15.98
      }
    ]
  },
  {
    orderPlacedDate: 20200703,
    totalCost: 138.93,
    shipToName: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveredDate: 20200705,
    itemsOrdered: [
      {
        itemType: 'accessory',
        title: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        lastReturnDate: 20220804,
        price: 94.95
      },
      {
        itemType: 'book',
        title: 'The Art of Sql',
        author: 'Faroult, Stephane',
        lastReturnDate: 20220804,
        price: 33.99
      }
    ]
  }
];

console.log('The first item in the order history: ', orderHistory[0].itemsOrdered[0]);
console.log('The last item in the order history: ', orderHistory[3].itemsOrdered[1]);
