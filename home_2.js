var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
     sumPrice  : price,
      Mux : maxPrice,
      Min : minPrice
    };

    services['Розбити скло'] = "200 грн";


    services.sumPrice();
    services.Mux();
    services.Min();

    function price(){
        var y=0;
        for (const i in this){
       if (typeof this[i] === 'string')
        y=y+Number.parseInt(this[i]);
        }
        console.log("Загальна вартість всіх послуг " + y +" грн");
      }


    function maxPrice(){
        var  y=0; m=0;
        for (const i in this) { 
          if (typeof this[i] === 'string')
          y=(Number.parseInt(this[i]));
           if (y>m) { m = y; 
                 }
                    else {m = m;
                      }     
              }
       
        console.log( "Максимальна ціна послуги " + m +" грн");
      }
  

    function minPrice(){
        var y=0; n=100000;
        for (const i in this) { 
          if (typeof this[i] === 'string')
          y=(Number.parseInt(this[i]));
           if (y<n) { n = y; 
           }
            else {n = n;
            }     
         }
      
        }
        console.log("Мінімальна ціна послуги " + n +" грн");
    