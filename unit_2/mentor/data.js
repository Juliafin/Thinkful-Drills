// data

var dataFactory = function(size) {
  var data = [];
  for(var i=0; i<size; i++) {
    data.push(
      {
        id: i.toString(),
        occupation: 'architect',
        address: {
          street: '123 Main St',
          city: 'CityTown',
          country: 'USA'
        }
      }
    )
  }
  return data;
}

var dataSource1 = [{
    id: '0',
    firstName: 'Juan',
    lastName: 'Doe',
    age: 32
  },
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Doe',
    age: 31
  },
  {
    id: '2',
    firstName: 'Janice',
    lastName: 'Doe',
    age: 30
  },
  {
    id: '3',
    firstName: 'Jake',
    lastName: 'Doe',
    age: 29
  },
];

var dataSource2 = [{
    id: '0',
    occupation: 'architect',
    address: {
      street: '123 Main St',
      city: 'CityTown',
      country: 'USA'
    }
  },
  {
    id: '1',
    occupation: 'architect',
    address: {
      street: '234 Main St',
      city: 'CityTown',
      country: 'USA'
    }
  },
  {
    id: '2',
    occupation: 'architect',
    address: {
      street: '345 Main St',
      city: 'CityTown',
      country: 'USA'
    }
  },
  {
    id: '3',
    occupation: 'architect',
    address: {
      street: '456 Main St',
      city: 'CityTown',
      country: 'USA'
    }
  },
];

module.exports = {
  dataSource1: dataSource1,
  dataSource2: dataSource2,
  dataFactory: dataFactory
};
