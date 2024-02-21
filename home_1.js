function getInfo (){
    for (const i in this) { 
      if (typeof this[i] === 'string')
   console.log(i +" " + this[i]);
  }
}

var car = {
    brend: "Audi",
    model: "A 4",
    year: "2023",
    mileag: "1300 km",
    Info: getInfo
}

car.price = "52000 $";
car.Info();