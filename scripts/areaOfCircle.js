//let userInput= Number(document.getElementById("input1").value)
console.log(`Hoisted ${areaOfCircle()}`);

function areaOfCircle(){
    const pi =Math.PI
    let radius= Number(document.getElementById("input1").value)
    let area =((radius*radius)*pi);
    console.log(`Area of ${area}`);
    document.getElementById("displayForDis").innerHTML=`the area of a triangle is ${area}`;
    return area
}
console.log(`Area of a cycle with ${areaOfCircle()}`)
const longestSide= function(){
    sideA=document.getElementById("sideA").value;
    sideB=document.getElementById("sideB").value;
    aSqur=sideA*sideA
    bSqur=sideB*sideB
    sideC=(Math.sqrt(aSqur+bSqur));
    document.getElementById("displayForDis2").innerHTML=sideC
    return sideC
} 