/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
  ];

// Punto 1
const prices = calculatePrice()

// Punto 2
const beersWithFileName = insertLabel()

// Punto 3
const orderedBeersByType = sortByType()


function sortByType() {
  let aux = [...beers]
  return aux.sort((a, b) => (a.type > b.type) ? 1 : -1)
}

function insertLabel() {
  return beers.map(function(beer) {
    let label = getLabel(beer.label)
    return {...beer, file_name: label}
  })
}

function getLabel(label) {
  let result = label.split('/')
  return result[result.length - 1]
}

function calculatePrice() {
  return beers.map(function(beer){
      return getPrice(beer.name, beer.abv)
  })
}

function getPrice(name, amount) {
  if (name === "Purple Iris") {
    return 320
  }

  if (amount < 5) {
    return 300
  } else {
    return 350
  }
}