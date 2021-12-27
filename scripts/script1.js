numarray=[];
// for(let i =0; i<5;i++)
//     numarray[i]=[]
let value=1
let valueIncrement=2
for(let row =0 ; row <5 ;row++){
    numarray[row]=[]
    for(let col =0 ; col <5 ;col++){
        numarray[row][col]=value
        value+=valueIncrement
    }
}

console.log(numarray);