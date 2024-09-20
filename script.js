// // ----------------------------------array square---------------------------------------
// let arr1=[1,2,4,7,6];
// let arra=[];
// arr1.map((ele)=>{
//     let sele=Math.pow(ele,2)
//     arra.push(sele)

// })
// console.log(`Squares of elements in ${arr1}`,arra);




// // -------------------------------------grades of students--------------------------------
// let students1=[
//     {name:"suraj",marks:"90"},
//     {name:"sravan",marks:"40"},
//     {name:"nandan",marks:"70"},
//     {name:"santhos",marks:"99"},
//     {name:"thoufiq",marks:"0"}
// ]
// let grade=[];
// students1.filter((ele1)=>{
//     let mar = ele1.marks
//     if(mar>80){
//         grade.push(ele1.name   +"="+  "A")
//     }else if(mar>70){
//         grade.push(ele1.name   +"="+ "B")

//     }else if(mar>60){
//         grade.push(ele1.name   +"="+ "C")
//     }else if(mar>50){
//         grade.push(ele1.name   +"="+ "D")
//     }else if(mar<50){
//         grade.push(ele1.name   +"="+ "F")
//     }


// })
// console.log(grade);





// // ---------------------------------------car----------------------------------
// let car={
//     Comname:"Nissan",
//     model:"vibraint",
//     year:"2022"
// }
// function change(newyear){
//     car.year=newyear
//     console.log(car.year)
// }
// let nyer=2023;
// change(nyer)
// const {model,year}=car
// console.log("car model: ",model)
// console.log("car man year: ",year)

// // -----------------------------------------------filter prime number-------------------------------
// let arr4=[7,4,9,1,3,17,111,126]
// let arr5=[];
// arr4.filter((ele2)=>{
//     let isprime=true
//     if(ele2<=1){
//         isprime=false
//     }else{
//         for(let i=2;i<ele2;i++){
//             if(ele2%i==0){
//                 isprime=false;
//                 break;
//             }
            
//         }
//         if(isprime==true){
//             arr5.push(ele2)
//         }
//     }
    
   
    
// })
// console.log(arr5)

// // ----------------------------------------------------Map,filter,reduce--------------------------------
// // map:-The map function is used to create a new array by applying a given function to each element of the original array. It does not modify the original array.
// // const numbe = [1, 2, 3, 4];
// // const doubled = numbe.map(num => num * 2);
// // console.log(doubled); 
// // filter:-The filter function is used to create a new array containing only those elements that pass a given test (i.e., the function returns true).
// // const numbe1 = [1, 2, 3, 4, 5];
// // const evenNumbers = numbe1.filter(num => num % 2 === 0);
// // console.log(evenNumbers); 
// // reduce:-The reduce function is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// // const numbers = [1, 2, 3, 4];
// // const sum = numbers.reduce((acc, num) => acc + num, 0);
// // console.log(sum); 


// // --------------------------------------------api fetch--------------------------------------
// let city="nellore"
// let url=`https://wttr.in/${city}?format=3`
// getweather(url)
// function getweather(ur){
//     setTimeout(async()=>{
//     let response=await fetch(ur)
//     let res=await response.text()
//     console.log(res);
//     },5000)
    
// }


// // -------------------------------------------------------nested object--------------------------------
// let person={
//     name:"Thoufiq",
//     contact:{
//         phono:"9392983479",
//         email:"shaikno150@gmail.com"
//     },
//     address:{
//         doorno:"25-13-414",
//         pincode:"524004"
//     }
// }
// console.log(person.contact?.phono)



const getcheese=(Thoufiq)=>{
    setTimeout(()=>{
        let cheese="🧀"
        Thoufiq(cheese)
    },5000)
}
const dough=(cheese,Thoufiq)=>{
    setTimeout(() => {
        let dough=cheese+"🥟"
        Thoufiq(dough)

    }, 5000);
}
const pizza=(dough,Thoufiq)=>{ 
    setTimeout(()=>{
        let pizza=dough+"🍕"
        Thoufiq(pizza)
    },5000)
}
getcheese((cheese)=>{
    console.log("Got the cheese",cheese)
    dough(cheese,(dough)=>{
        console.log("Got the dough",dough)
        pizza(dough,(pizza)=>{
            console.log("Pizza is ready",pizza)
        })
    })
})
