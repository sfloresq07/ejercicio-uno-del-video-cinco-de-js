const d = 1;
const e = 2;
const f = 0;

if (d === e || d === f || f === e) {
  console.log("los tres números deben ser distintos");
} else if(d < e && d < f) {
    if (e < f) {
        console.log(`El orden de menor a mayor es: ${d}, ${e}, ${f}`);
    }else{
        console.log(`El orden de menor a mayor es: ${d}, ${f}, ${e}`);
    }
}else if(e < d && e < f){
    if (d < f){
        console.log(`El orden de menor a mayor es: ${e}, ${d}, ${f}`);
    }else{
        console.log(`El orden de menor a mayor es: ${e}, ${f}, ${d}`);
    }
}else if(f < d && f < e){
    if (d < e){
        console.log(`El orden de menor a mayor es: ${f}, ${d}, ${e}`);
    }else{
        console.log(`El orden de menor a mayor es: ${f}, ${e}, ${d}`);
    }
}