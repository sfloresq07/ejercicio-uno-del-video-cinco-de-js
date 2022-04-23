const a = 12;
const b = 22;
const c = 110;

if (a === b || a === c || c === b) {
  console.log("los tres números deben ser distintos");
} else if(a > b && a > c) {
   if (b > c) {
      console.log(`El orden de mayor a menor es: ${a}, ${b}, ${c}`);
    }else{
console.log(`El orden de mayor a menor es: ${a}, ${c}, ${b}`);
    }
}else if(b>a && b > c){
    if (a>c){
        console.log(`El orden de mayor a menor es: ${b}, ${a}, ${c}`);
    }else{
        console.log(`El orden de mayor a menor es: ${b}, ${c}, ${a}`);
    }
}else if(c>a && c>b){
    if(a>b){
        console.log(`El orden de mayor a menor es ${c}, ${a}, ${b}`);
    }else{
        console.log(`El orden de mayor a menor es ${c}, ${b}, ${a}`);
    }
}

/* (a > b && a > c) {
        
        if(b>c){
            console.log(`el mayor es a: ${a}, le sigue b: ${b} y el menor es c: ${c}`)
        }else{
            console.log(`el mayor es a: ${a}, le sigue c: ${c} y el menor es b: ${b}`)
        }
    } else if(b < c) {
       
        if(a>b){
            console.log(`el mayor es c: ${c}, luego a: ${a} y el menor es b: ${b} `)
        } else{
            console.log(`el mayor es c: ${c}, le sigue b: ${b} y el menor es a: ${a}`)
        }
    } else {
        
        if(a>c){
            console.log(`el mayor es b: ${b}, le sigue a: ${a} y el menor es c: ${c}`)
        }else{
            console.log(`el mayor es b: ${b}, le sigue c: ${c} y el menor es a: ${a}`)
        }
    }

}
 */
