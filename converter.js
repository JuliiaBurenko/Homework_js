let x = 5 ;
let y = "кг";
switch (y){
    case y = "км":
        console.log(x +" " + y + " це" +" " + x * 1000 + " м")
        break;
    case y = "год": 
        console.log(x +" " + y + " це" +" " + x * 60 + " хв")
        break;
    case y = "кг": 
        console.log(x +" " + y + " це" +" " + x * 1000 + " г")
        break;
    default: console.log("Неправильна одиниця виміру, введіть: год, або кг, або км")

}