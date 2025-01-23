// Q=1

// let score=65;

// if(score>=90){
//     console.log("Grade-A");

// }else if(score>=80 && score<=89){
//     console.log("Grade-B");

// }else if(score>=70 && score<=79){
//     console.log("Grade-C");

// }else if(score<70 && score>=50){
//     console.log("Grade-D");

// }else{
//     console.log("Grade-F");
// }

// Q=2

// let a = 1;
// let b = 1;
// let c = 1;
// if (a < 0 && b < 0 && c < 0) {
//     console.log("invalid");

// } else {
//     if (a == b && b == c && a == c) {
//         console.log("Equilateral triangle.");

//     } else if (a == b && c > 0 || b == c && a > 0 || a == c && b > 0) {
//         console.log("Isosceles triangle.");

//     } else {
//         console.log("Scalene triangle");

//     }
// }


// Q=3

// let a = 67;

// if (a % 2 === 0) {
//     if (a > 50) {
//         console.log("Even and Large");

//     } else {
//         console.log("Even and Small");

//     }

// } else if (a < 30) {

//     console.log("Odd and Small");

// } else {
//     console.log("Odd and Large");

// }


// Q=1
// let a=5;
// for (let i = 1; i <= 10; i++) {
//     console.log("5","X",i,"=",a*i);
// }

// Q=2

// let a=6;
// let temp=0;
// for (let i = 1; i <= a; i++) {
//     temp+=i;
// }
// console.log(temp);

// Q=3

// let a=4;
// for (let i = 1; i <= a; i++) {
//     let row="";
//     for (let j = 1; j <=i; j++) {
//         row+=j;
//     }
//     console.log(row);
// }


// for loop q

// Q=1

// let a=5;
// for (let i = 1; i <=a; i++) {
//     let str="";
//     for (let j = 1; j <=i ; j++) {
//         str+="*";

//     }
//     console.log(str);
// }

// Q=2

// let b=5;
// for (let i = 1; i <=b; i++) {
//     let tstr="";
//     for (let j = b; j >=i; j--) {
//         tstr+="*"

//     }
//     console.log(tstr);

// }

// Q=3

// let c=5;
// for (let i = 1; i <=c; i++) {
//     let row="";
//     for (let j = c-1; j >=i; j--) {
//         row+=" ";

//     }
//     for (let k = 1; k <=2*i-1; k++) {
//         row+="*";

//     }
//     console.log(row);
// }


// Q=4

// let d=5;
// for (let i = 1; i <=d; i++) {
//     let ste_n="";
//     for (let j = 1; j <=i; j++) {
//         ste_n+=j+" "     
//     }
//     console.log(ste_n);   
// }

// Q=5

// let a = 5;
// for (let i = a; i >= 1; i--) { 
//     let str = "";
//     for (let j = a; j >= a-i+1; j--) {
//         str += j+" "; 
//     }
//     console.log(str); 
// }


// Q=6

// let c = 5;
// for (let i = 1; i <= c; i ++) {
//     let row = "";
//     for (let j = c-1; j >= i; j --) {
//         row += " ";
//     }
//     for (let k = 1; k <=2*i-1; k++) {
//         row += "*";
//     }
//     console.log(row);
// }

// for (let i = c-1; i >=1; i --) {
//     let row = "";
//     for (let j = c-1; j >= i; j --) {
//         row += " ";
//     }

//     for (let k = 1; k <=2*i-1; k++) {
//         row += "*";
//     }
//     console.log(row);
// }




// let a=5;
// for (let i = 1; i <=a; i++) {
//     let st="";
//     for (let j = a-1; j >=i; j--) {
//         st+=" ";
        
//     }
//     for (let k = 1; k <=2*i-1; k++) {
//         st+="*"
        
//     }
//     console.log(st);
    
// }

// for (let i = a-1; i >=1; i--) {
//     let st="";
//     for (let j = a-1; j >=i; j--) {
//         st+=" ";
        
//     }
//     for (let k = 1; k <=2*i-1; k++) {
//         st+="*"
        
//     }
//     console.log(st);
    
// }



// Q task=3


// Q=1

// let a=10;
// for (let i = 1; i <=a; i++) {
//         console.log(i);
// }

// let a=20;
// for (let i = 1; i <=a; i++) {
//     if(i%2!==0){
//         console.log(i);     
//     }
// }


// Q=2

// let a=5;
// for (let i = 1; i <=a; i++) { 
//     console.log(i*i); 
// }

// let a=100;
// for (let i = 1; i <=100; i++) {
//     if(i%5==0){
//         console.log(i);   
//     }
// }


// Q=3

// Q=a

// let a = 0, b = 1;

// console.log(a); 
// console.log(b); 

// for (let i = 3; i <= 10; i++) { 
//   let nextTerm = a + b; 
//   a = b; 
//   b = nextTerm;
//   console.log(nextTerm);  
// }


// Q=b

// let a=5;
// for (let i = 1; i <=a; i++) {
//     let row="";
//     for (let j = 1; j <=i; j++) {
//         row+="*";
        
//     }
//     console.log(row);
    
// }

// Q=c

// let a=7;
// for (let i = 1; i <=10; i++) {
//     console.log("7","X",i,"=",i*a);
// }

// Q=d

// const p="anuj";
// for (let i = 0; i <p.length; i++) {
//     console.log(p[i]);  
// }


// Q=e

// let a=50;
// let sum=0;
// for (let i = 1; i <=a; i++) {
//     if(i%2==0){
//         sum+=i;
//     }  
// }
// console.log(sum);

// Q=f

// let a=3;
// for (let i = 1; i <=a; i++) {
//     let st="";

//     for (let l = a-1; l >=i; l--) {
//         st+=" "
        
//     }
  
//     for (let j = 1; j <=i; j++) {
//         st+=j;
        
//     }
   
//     for (let k = i-1; k >=1; k--) {
//         st+=k;   
//     }
//     console.log(st);
// }