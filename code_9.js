var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

   
       var resArr=[];
       var re=/(\d|[a-z]){1,}\.?([a-z]|\d){1,}@(gmail|yahoo)\.(com)/gm;
       for (let  i=0;i< 3; i++){
       var  str=arr[i].email;
       var res=resArr.push(str);
    }
      var newStr=resArr.toString();
      var ar=newStr.match(re);
       console.log(ar);
