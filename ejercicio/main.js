a=[1,2,3,4,5,6,7]
arregloCadena= [a.leng]
for (let i = 0; i < a.length; i=i+2) {
    //console.log(a[i]);
    
    aux1=a[i];
    aux2=a[i+1];
    //console.log(aux1);
    //console.log(aux2);

    arregloCadena[i+1]= parseInt(aux1)
    arregloCadena[i]=parseInt(aux2)
}

console.log(arregloCadena);

console.log("A tu casa francis");