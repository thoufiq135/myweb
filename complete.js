// let p=1000;
// let r=0.05;
// let n=12;
// let t=5;
// console.log("principal= ",p );
// console.log("rate of intrest= ",r );
// console.log("no of times instrested is compounded per year= ",n );
// console.log("time(in year)= ",t)
// let c=r/n;
// let d=n*t;
// let e=1+c;
// let z=e**d;
// let A=p*z;

// console.log("The Compound instrest after 5years is= ",Math.floor(A));
// let a=5;
// let b=10;
// if(a%2==0){
//     console.log("The number 5 is even")
// }else{
//     console.log("The number 5 is odd")
// }
// if(b%2==0){
//     console.log("The number 10 is even")
// }else{
//     console.log("The number 10 is odd")
// }
// let a="153"
// console.log("Number= ",a)
// let b = 0
// let c=0
// let k=0
// let u=0
// for(i=0;i<=2;i++){
//     b += Number(a[i])
    
// }
// console.log("Sum of its Digits= ",b)
// for(j=0;j<=2;j++){
//     c += Number(a[j])**3;
// }
// if(c==Number(a)){
//     console.log("Is it an Armstrong number?  Yes")
// }else{
//     console.log("Is it an Armstrong number?  NO")
// }
// b=3;
// let prime=true;
// for(let p=2;p<b;p++){
//     if(b%p==0){
//         prime=false;
//         break;
//     }
// }
// if(prime){
//     console.log("number is a prime number")
// }else{
//     console.log("number is not a prime number")
// }



// let d=Number(a)
// for(k=0;k<=153;k++){

//     if(d%k==0){
//         F=k;
//         console.log("Factors: ",k)
//     }
// }
// let arr=[4,8,2,11,6,7,10];
// let ass=0
// console.log("Array= ",arr)
// const maxnum=maxint(arr)
// const sum=add(arr)
// const odd=ada(arr)
// console.log("Maximum number= ",maxnum)
// console.log("Sum of array elements= ",sum)
// console.log("Count of odd numbers= ",odd)
// function maxint(arr1){
//     let ass=arr1.sort((a,b)=>a-b)
//     return ass[6];
// }
// function add(arr2){
//     let a=0
//     for(let i=0 ; i<arr2.length;i++){
//         a+=arr[i]
//     }
//     return a
        
// }
// function ada(arr3){
//     let b=0
//     for(let i=0 ; i<arr3.length;i++){
//         if(arr3[i]%2!=0){
//             b++
//         }
//     }
//     return b
    
// }
// let c=0
// const div=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(b==0){
//                 reject("0 can not be in denominator")
//             }else{
//                 c=a/b;
//                 resolve(c)
//             }
            
//         }, 5000);
//     })

// }
// div(2,2).then((result)=>{
//     console.log("Divide 2 by 2 ")
//     console.log("Result= ", result)
// }
// ).catch((err)=>{
//     console.log("0 can not be in denominator")
// })
// div(2,0).then((result)=>{
//     console.log("Divide 2 by 0 ")
//     console.log("Result= ", result)
// }
// ).catch((err)=>{
//     console.log("0 can not be in denominator")
// })
// div(232,222).then((result)=>{
//     console.log("Divide 232 by 222 ")
//     console.log("Result= ", result)
// }
// ).catch((err)=>{
//     console.log("0 can not be in denominator")
// })
// div(25,2).then((result)=>{
//     console.log("Divide 25 by 2 ")
//     console.log("Result= ", result)
// }
// ).catch((err)=>{
//     console.log("0 can not be in denominator")
// })
// div(22,11).then((result)=>{
//     console.log("Divide 22 by 11 ")
//     console.log("Result= ", result)
// }
// ).catch((err)=>{
//     console.log("0 can not be in denominator")
// })
// const getcheese=(Thoufiq)=>{
//     setTimeout(()=>{
//         let cheese="🧀"
//         Thoufiq(cheese)
//     },5000)
// }
// const dough=(cheese,Thoufiq)=>{
//     setTimeout(() => {
//         let dough=cheese+"🥟"
//         Thoufiq(dough)

//     }, 5000);
// }
// const pizza=(dough,Thoufiq)=>{ 
//     setTimeout(()=>{
//         let pizza=dough+"🍕"
//         Thoufiq(pizza)
//     },5000)
// }
// getcheese((cheese)=>{
//     console.log("Got the cheese",cheese)
//     dough(cheese,(dough)=>{
//         console.log("Got the dough",dough)
//         pizza(dough,(pizza)=>{
//             console.log("Pizza is ready",pizza)
//         })
//     })
// })

// let para = document.getElementsByTagName('p');

// let inner=document.getElementById('type')
// let submit = document.getElementById('sub')
// let box1=document.getElementById('red')
// let box2=document.getElementById('blue')
// let box3=document.getElementById('green')
// let box4=document.getElementById('black')
// let bred=false;
// let bblue=false;
// let bgreen=false;
// let bblack=false;
// const pri=()=>{
//     para[0].innerText="Hello "+inner.value;
// }
// const re=()=>{
//     if(bred==false){
//         box1.style.backgroundColor="red";
//         bred=true;   
//     }else{
//         box1.style.backgroundColor="White";
//         bred=false;        
//     }
    
// }
// const bl=()=>{
//     if(bblue==false){
//         box2.style.backgroundColor="blue";
//         bblue=true;   
//     }else{
//         box2.style.backgroundColor="White";
//         bblue=false;        
//     }
// }
// const gr=()=>{
//     if(bgreen==false){
//         box3.style.backgroundColor="green";
//         bgreen=true;   
//     }else{
//         box3.style.backgroundColor="White";
//         bgreen=false;        
//     }
// }

// box4.addEventListener('click',()=>{
//     if(bblack==false){
//         box4.style.backgroundColor="black"
//         box4.style.color="White"
//         bblack=true;
//     }else{
//         box4.style.backgroundColor="white"
//         box4.style.color="black"
//         bblack=false
//     }
// })
// let move=document.getElementById('btn')
// let show1=document.getElementById('show')
// move.addEventListener('mouseover',()=>{
//     console.log("over");
//     let hi=Math.random()*100;
//     let wi=Math.random()*100;
//     hi=Math.floor(hi)
//     wi=Math.floor(wi)
//     console.log(show1)
//     move.style.top=hi+'vh'
//     move.style.left=wi+'vw'


// })
// console.log('wait')
// const array=[
//     {name:"Thoufiq" , age:"20" },
//     {name:"sharukh" , age:"17" },
//     {name:"sunio" , age:"12" },
//     {name:"nobita" , age:"15" },
//     {name:"ballu" , age:"30" }
// ]
// array.filter((items,number,arr)=>{
//    if(items.age<18){
//     console.log("MR  you are not eligible for voting 😒")
//    }else{
//     .map((full)=>{
//         console.log(full)
//     })
//    }
// })
// let inter=document.getElementById('enter')
// let btn= document.getElementById('btn1')
// let one= document.getElementById('one')
// let two= document.getElementById('two')
// let three= document.getElementById('three')
// let four= document.getElementById('four')
// let five= document.getElementById('five')
// let six= document.getElementById('six')
// let seven= document.getElementById('seven')
// let eight= document.getElementById('eight')
// let nine= document.getElementById('nine')
// let con=document.querySelectorAll('.all')
// let sir;
// let arrc;
// let li=["one","two","three","four","five","six","seven","eight","nine"]
// btn.addEventListener('click',()=>{
//     sir=inter.value.toUpperCase()
//     show(sir)
    
// })
// let arr1=[
//     {Name:"Thoufiq",roll:"01",per:"85%"} ,
//     {Name:"Sharukh",roll:"02",per:"95%"},
//     {Name:"SRK",roll:"03",per:"90%"},
//     {Name:"Salman",roll:"04",per:"80%"},
//     {Name:"Shinchan",roll:"05",per:"75%"},
//     {Name:"Sunio",roll:"06",per:"45%"},
//     {Name:"Sizukz",roll:"07",per:"85%"},
//     {Name:"Simon",roll:"08",per:"35%"},
//     {Name:"Ballu",roll:"09",per:"49%"}
// ];
// one.innerHTML=`<b>Name:</b>${arr1[0].Name}<br><b>Roll.no:</b>${arr1[0].roll}<br><b>percentage:</b>${arr1[0].per}`
// two.innerHTML=`<b>Name:</b>${arr1[1].Name}<br><b>Roll.no:</b>${arr1[1].roll}<br><bpercentage:</b>${arr1[1].per}`
// three.innerHTML=`<b>Name:</b>${arr1[2].Name}<br><b>Roll.no:</b>${arr1[2].roll}<br><b>percentage:</b>${arr1[2].per}`
// four.innerHTML=`<b>Name:</b>${arr1[3].Name}<br><b>Roll.no:</b>${arr1[3].roll}<br><b>percentage:</b>${arr1[3].per}`
// five.innerHTML=`<b>Name:</b>${arr1[4].Name}<br><b>Roll.no:</b>${arr1[4].roll}<br><b>percentage:</b>${arr1[4].per}`
// six.innerHTML=`<b>Name:</b>${arr1[5].Name}<br><b>Roll.no:</b>${arr1[5].roll}<br><b>percentage:</b>${arr1[5].per}`
// seven.innerHTML=`<b>Name:</b>${arr1[6].Name}<br><b>Roll.no:</b>${arr1[6].roll}<br><b>percentage:</b>${arr1[6].per}`
// eight.innerHTML=`<b>Name:</b>${arr1[7].Name}<br><b>Roll.no:</b>${arr1[7].roll}<br><b>percentage:</b>${arr1[7].per}`
// nine.innerHTML=`<b>Name:</b>${arr1[8].Name}<br><b>Roll.no:</b>${arr1[8].roll}<br><b>percentage:</b>${arr1[8].per}`

// function show(hey){
//     console.log(hey)
    
    
//     for(let i=0;i<arr1.length;i++){
//         arrc=arr1[i].Name.toUpperCase()

//         if(arrc.includes(hey)){
//             con[i].style.display="block";
//         }else{
//             con[i].style.display="none"  ;          }
//     }
        
    
// }
// let c=0;
// let s=0;
// let img1=document.getElementById('im')
// let skip=document.getElementById('minus')
// let add=document.getElementById('plus')
// let name1=document.getElementById('naam')
// let prise=document.getElementById('kit')
// let btn=document.getElementById('btn1')
// let say=document.getElementById('no')
// let tbod=document.getElementById('tabo')
// let kita=document.getElementById('pay')
// let la=document.getElementById('no1')
// add.disabled=true
// let saver=0;
// let pointer=1;
// let store=0;
// let btns=0;

// function picture(count){
//     skip.innerHTML="NEXT"
//     add.disabled=false;
//     add.disabled==false;
//     if(c>3){
//         c=0
//         let src=arr1[c]
//         img1.src=src
//         name1.innerText=arr2[c].service;
//         prise.innerText=arr2[c].price;
//         saver=c;

//         c++
//     }else{
//         let src=arr1[c]
//         img1.src=src
//         name1.innerText=arr2[c].service;
//         prise.innerText=arr2[c].price;
//         saver=c;
//         c++
//     }
// }
// skip.addEventListener('click',()=>picture(c))
// plus.addEventListener('click',()=>picture(c))
// plus.addEventListener('click',()=>picture1(c))



// const arr1=["laundry-cartoon-background-vector.jpg","laundry-service.jpg","laundry-cartoon-background-vector.jpg","dry-cleaning-and-laundry-service-business.webp"];
// const arr2=[
//     {service:"washing",price:"$29"},
//     {service:"Dry washing",price:"$35"},
//     {service:"hyginic washing",price:"$49"},
//     {service:"washing & ironing",price:"$60"}
// ]
// let arr3=[29,35,49,60]

// function picture1(cou){ 
//     btns++
//     skip.innerHTML="NEXT"
//     say.style.display='none'
//     let sum=[];
//     let trow=document.createElement('tr')

//     saver--

//     if(saver<0){
//         console.log(3)
//         saver=3
//         console.log(arr2[3].service)
        
//         let tdo1=document.createElement('td');
//         let tdo2=document.createElement('td');
//         let tdo3=document.createElement('td');
//         tdo1.innerText=pointer;
//         tdo2.innerText=arr2[saver].service
//         tdo3.innerText=arr2[saver].price
//         trow.appendChild(tdo1)
//          trow.appendChild(tdo2)
//         trow.appendChild(tdo3)
//         pointer+=1
//         store+=arr3[saver]
//         console.log(store)
//         kita.innerText="$"+store

//         tbod.appendChild(trow)
//     }else{
//         console.log(saver)
//         console.log(arr2[saver])
//         let tdo1=document.createElement('td');
//         let tdo2=document.createElement('td');
//         let tdo3=document.createElement('td');
//          tdo1.innerText=pointer;
//         tdo2.innerText=arr2[saver].service
//         tdo3.innerText=arr2[saver].price
//         trow.appendChild(tdo1)
//         trow.appendChild(tdo2)
//         trow.appendChild(tdo3)
//         pointer+=1
//         store+=arr3[saver]
//         console.log(store)
//         kita.innerText="$"+store
//         tbod.appendChild(trow)
//         tbod.appendChild(trow)
//     }

// }
// btn.addEventListener('click',()=>{picture3(btns)})
// function picture3(cout){
//     if(cout>0){
//         la.innerText="Your order is placed"
//         la.style.color="green"

//     }else{
//         la.innerText="Please select service"
//         la.style.color="red"
//     }
// }
// th=document.getElementById('serbut')
// target=document.getElementById('con2')
// let b1=document.getElementById('cbtn1')
// let b2=document.getElementById('cbtn2')
// let b3=document.getElementById('cbtn3')
// let b4=document.getElementById('cbtn4')
// let b5=document.getElementById('cbtn5')
// let b6=document.getElementById('cbtn6')
// let chalo=document.getElementById('no')
// let tstr=document.getElementById('body1')
// let btnm=document.getElementById('btn2')
// let head=document.getElementById('thead')
// let mail1=document.getElementById('mail')
// let name2=document.getElementById('name')
// let pnumber=document.getElementById('pho')
// let pointer=1;
// let b11=true;
// let b22=true;
// let b33=true;
// let b44=true;
// let b55=true;
// let b66=true;
// let arr2=[20,30,50,80,90,100]
// let total=0;
// let la=0;
// b1.addEventListener('click',()=>{btna1(b11)})
// b2.addEventListener('click',()=>{btna2(b22)})
// b3.addEventListener('click',()=>{btna3(b33)})
// b4.addEventListener('click',()=>{btna4(b44)})
// b5.addEventListener('click',()=>{btna5(b55)})
// b6.addEventListener('click',()=>{btna6(b66)})
// btnm.addEventListener('click',()=>{ble(la)})
// emailjs.init("tGn3zWJISW_bjyEIr");
// function ble(m){
//     if(m>0){
        
//         let not1=document.getElementById('not')
//         let parem={
//             c1:mail1.value,
//             c2:name2.value,
//             c3:pnumber.value 
//         };
//         if(parem.c1=="" && parem.c2=="" && parem.c3==""){
//         not1.innerText="please fill the form"
//         not1.style.color="red"
//         }else{
//             not1.innerText="Your order is placed"
//             not1.style.color="green"
//             let serid="service_ei4l4mm"
//             let temid="template_yjyw2au"
//             emailjs.send(serid,temid,parem)
//             .then((r)=>{
//                 console.log("success",r)
//             })
//             .catch((e)=>{
//                 console.log("error",e)
//             })
//         }
        

//     }else{
//         let not1=document.getElementById('not')
//         not1.innerText="please add items to cart"
//         not1.style.color="red"
//         chalo.style.display="block"
//     }
// }
// let arr1=[
//     {name:'Dry Cleaning',price:'20'},
//     {name:'Wash and Fold',price:'30'},
//     {name:'Ironing',price:'50'},
//     {name:'Stain Removal',price:'80'},
//     {name:'Leather',price:'90'},
//     {name:'Wedding Dress Cleaning',price:'100'},
// ]

// function btna1(back){
//     if(back==true){
//         b1.innerHTML="Remove item -"
//         b1.style.backgroundColor="#C7253E"
//         b1.style.color="#821131"
//         terakaam(arr1)
//         b11=false;
//         pointer++
//         let t=true
//         let j=0
//         fin(t,j)
//         la++

        

//     }else { 
//         b1.innerHTML="ADD item +"
//         b1.style.backgroundColor="aqua"
//         b1.style.color="white"
//         terakaam(arr1)
//         b11=true;
//         pointer--
//         let t=false
//         let j=0
//         fin(t,j)
//         la--

//     }
// }
// function btna2(back){
//     if(back==true){
//         b2.innerHTML="Remove item -"
//         b2.style.backgroundColor="#C7253E"
//         b2.style.color="#821131"
//         terakaam1(arr1)
//         b22=false;
//         pointer++
//         let t=true
//         let j=1
//         fin(t,j)
//         la++

   
//     }else { 
//         b2.innerHTML="ADD item +"
//         b2.style.backgroundColor="aqua"
//         b2.style.color="white"
//         terakaam1(arr1)
//         b22=true;
//         pointer--
//         let t=false
//         let j=1
//         fin(t,j)
//         la--
   
        
//     }
// }
// function btna3(back){
//     if(back==true){
//         b3.innerHTML="Remove item -"
//         b3.style.backgroundColor="#C7253E"
//         b3.style.color="#821131"
//         terakaam2(arr1)
//         b33=false;
//         pointer++
//         let t=true
//         let j=2
//         fin(t,j)
//         la++
  

//     }else { 
//         b3.innerHTML="ADD item +"
//         b3.style.backgroundColor="aqua"
//         b3.style.color="white"
//         terakaam2(arr1)
//         b33=true;
//         pointer--
//         let t=false
//         let j=2
//         fin(t,j)
//         la--
     
        
//     }
// }
// function btna4(back){
//     if(back==true){
//         b4.innerHTML="Remove item -"
//         b4.style.backgroundColor="#C7253E"
//         b4.style.color="#821131"
//         terakaam3(arr1)
//         b44=false;
//         pointer++
//         let t=true
//         let j=3
//         fin(t,j)
//         la++
       

//     }else { 
//         b4.innerHTML="ADD item +"
//         b4.style.backgroundColor="aqua"
//         b4.style.color="white"
//         terakaam3(arr1)
//         b44=true;
//         pointer--
//         let t=false
//         let j=3
//         fin(t,j)
//         la--
   
        
//     }
// }
// function btna5(back){
//     if(back==true){
//         b5.innerHTML="Remove item -"
//         b5.style.backgroundColor="#C7253E"
//         b5.style.color="#821131"
//         terakaam4(arr1)
//         b55=false;
//         pointer++
//         let t=true
//         let j=4
//         fin(t,j)
//         la++
      

//     }else { 
//         b5.innerHTML="ADD item +"
//         b5.style.backgroundColor="aqua"
//         b5.style.color="white"
//         terakaam4(arr1)
//         b55=true;
//         pointer--
//         let t=false
//         let j=4
//         fin(t,j)
//         la--
       
        
//     }
// }
// function btna6(back){
//     if(back==true){
//         b6.innerHTML="Remove item -"
//         b6.style.backgroundColor="#C7253E"
//         b6.style.color="#821131"
//         terakaam5(arr1)
//         b66=false;
//         pointer++
//         let t=true
//         let j=5
//         fin(t,j)
//         la++
     

//     }else { 
//         b6.innerHTML="ADD item +"
//         b6.style.backgroundColor="aqua"
//         b6.style.color="white"
//         terakaam5(arr1)
//         b66=true;
//         pointer--
//         let t=false
//         let j=5
//         fin(t,j)
//         la--
       
        
//     }
// }

    
    

// function fin(b,j1){
//     if(b==true){
//         let cul1=document.getElementById('cul')
//         total+=arr2[j1]
//         console.log(arr2[j1])
//         cul1.innerText="$"+total
//     }else{
//         let cul1=document.getElementById('cul')
//         total-=arr2[j1]
//         console.log(arr2[j1])
//         cul1.innerText="$"+total

//     }
// }
// function terakaam(arr1){
    
//     if(b11==true){
//        chalo.style.display="none"
//         console.log("added")
//         let trow1=document.createElement('tr')
//         trow1.setAttribute('id','row1')
//         let tdata1=document.createElement('td')
//         let tdata2=document.createElement('td')
//         let tdata3=document.createElement('td')
//         tdata1.innerText=pointer;
//         tdata2.innerText=arr1[0].name;
//         tdata3.innerText="$"+ arr1[0].price;
//         trow1.appendChild(tdata1)
//         trow1.appendChild(tdata2)
//         trow1.appendChild(tdata3)
//         tstr.appendChild(trow1)
       
       

//     }else{
//         let rowt1=document.getElementById('row1')
//         rowt1.remove()
//         updateSerialNumbers(); 
        
//     }
// }


// function terakaam1(arr1){

//     if(b22==true){
//         chalo.style.display="none"

//         console.log("added")
//         let trow2=document.createElement('tr')
//         trow2.setAttribute('id','row2')
//         let tdata01=document.createElement('td')
//         let tdata02=document.createElement('td')
//         let tdata03=document.createElement('td')
//         tdata01.innerText=pointer;
//         tdata02.innerText=arr1[1].name;
//         tdata03.innerText="$"+arr1[1].price;
//         trow2.appendChild(tdata01)
//         trow2.appendChild(tdata02)
//         trow2.appendChild(tdata03)
//         tstr.appendChild(trow2) 

//     }else{
//         let rowt2=document.getElementById('row2')
//         rowt2.remove()
//         updateSerialNumbers(); 
        

//     }
// }

// function terakaam2(arr1){

//     if(b33==true){
//         chalo.style.display="none"

//         console.log("added")
//         let trow3=document.createElement('tr')
//         trow3.setAttribute('id','row3')
//         let tdata001=document.createElement('td')
//         let tdata002=document.createElement('td')
//         let tdata003=document.createElement('td')
//         tdata001.innerText=pointer;
//         tdata002.innerText=arr1[2].name;
//         tdata003.innerText="$"+arr1[2].price;
//         trow3.appendChild(tdata001)
//         trow3.appendChild(tdata002)
//         trow3.appendChild(tdata003)
//         tstr.appendChild(trow3)
       

//     }else{
//         let rowt3=document.getElementById('row3')
//         rowt3.remove()
//         updateSerialNumbers(); 

//     }
// }
// function terakaam3(arr1){
//     chalo.style.display="none"

//     if(b44==true){

//         console.log("added")
//         let trow4=document.createElement('tr')
//         trow4.setAttribute('id','row4')
//         let tdata100=document.createElement('td')
//         let tdata200=document.createElement('td')
//         let tdata300=document.createElement('td')
//         tdata100.innerText=pointer;
//         tdata200.innerText=arr1[3].name;
//         tdata300.innerText="$"+arr1[3].price;
//         trow4.appendChild(tdata100)
//         trow4.appendChild(tdata200)
//         trow4.appendChild(tdata300)
//         tstr.appendChild(trow4)
       

//     }else{
//         let rowt4=document.getElementById('row4')
//         rowt4.remove()
//         updateSerialNumbers(); 

//     }
// }
// function terakaam4(arr1){
//     chalo.style.display="none"

//     if(b55==true){

//         console.log("added")
//         let trow5=document.createElement('tr')
//         trow5.setAttribute('id','row5')
//         let tdata10=document.createElement('td')
//         let tdata20=document.createElement('td')
//         let tdata30=document.createElement('td')
//         tdata10.innerText=pointer;
//         tdata20.innerText=arr1[4].name;
//         tdata30.innerText="$"+arr1[4].price;
//         trow5.appendChild(tdata10)
//         trow5.appendChild(tdata20)
//         trow5.appendChild(tdata30)
//         tstr.appendChild(trow5)
       

//     }else{
//         let rowt5=document.getElementById('row5')
//         rowt5.remove()
//         updateSerialNumbers(); 

//     }
// }
// function terakaam5(arr1){
//     chalo.style.display="none"

//     if(b66==true){

//         console.log("added")
//         let trow6=document.createElement('tr')
//         trow6.setAttribute('id','row6')
//         let tdata12=document.createElement('td')
//         let tdata22=document.createElement('td')
//         let tdata32=document.createElement('td')
//         tdata12.innerText=pointer;
//         tdata22.innerText=arr1[5].name;
//         tdata32.innerText="$"+arr1[5].price;
//         trow6.appendChild(tdata12)
//         trow6.appendChild(tdata22)
//         trow6.appendChild(tdata32)
//         tstr.appendChild(trow6)
       

//     }else{
//         let rowt6=document.getElementById('row6')
//         rowt6.remove()
//         updateSerialNumbers(); 

//     }
// }

// function updateSerialNumbers() {
//     let rows = tstr.getElementsByTagName('tr');
//     for (let i = 0; i < rows.length; i++) {
//         let serialCell = rows[i].getElementsByTagName('td')[0];
//         if (serialCell) {
//             serialCell.innerText = i + 1; 
//         }
//     }
// }


// th.addEventListener('click',()=>{scrol()})
// function scrol(){
//     target.scrollIntoView({behavior:'smooth'});
// }