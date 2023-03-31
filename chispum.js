function chispum(any){

    if(any % 3 == 0 && any % 5 == 0){
        return "chispum"
    }else if(any % 5 == 0){
        return "pum";
    }else if(any % 3 == 0 ){
        return "chis";
    }
    else{
        return any;
    }
}

console.log("hola mundo");

console.log("Mandamos un 3 => " + chispum(3));
console.log("Mandamos un 5 => " + chispum(5));
console.log("Mandamos un 15 => " + chispum(15));
console.log("Mandamos un 16 => " + chispum(16));

module.exports = chispum;