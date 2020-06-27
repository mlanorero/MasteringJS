 const rapid = (str) => 
    { for(let i = 0; i < str.length; i++){
        return str.replace("o", "").toUpperCase();
    }}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));
   