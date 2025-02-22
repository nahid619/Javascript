//1st_task done...........
// var first_name = prompt("Enter first name: ")
// var last_name = prompt("Enter last name: ")
// var full_name = first_name +" "+ last_name 
// document.write(full_name+"<br>");
// var len = full_name.length;
// document.write(len+"<br>");
// var up = full_name.toUpperCase();
// document.write(up+ "<br>");
/*** ******/


// c = a*b
// document.write(c,"<br>")
// c = a/b
// document.write(c,"<br>")
// c = a%b
// document.write(c,"<br>")
// c = a**b
// document.write(c,"<br>")
// --c
// document.write(c,"<br>")
// c--
// document.write(c,"<br>")

// let num1 = prompt("Enter 1st number: ")
// let num2 = prompt("Enter 2nd number: ")


// num1 = parseFloat(num1)
// num2 = parseFloat(num2)
// let answer 

// document.write("Value 1 : ", num1 ,"<br>")
// document.write("Value 2 : "+ num2 +"<br>")
// document.write("Addition is : " + (num1+num2)+"<br>")
// document.write("Subtraction is : " + (num1-num2)+"<br>")
// document.write("multiplication is : " + (num1*num2)+"<br>")
// document.write("Division is : " + (num1/num2)+"<br>")
// document.write("Remainder is : " + (num1%num2)+"<br>")
// document.write("Exponential is : " + (num1**num2)+"<br>")

// let a = 5
// let b = 6
// let c = 7
// let d
// // c = a > b
// // document.write(c,"<br>")
// // c = (a==b)
// // document.write(c,"<br>")
// // c = (a!=b)
// // document.write(c,"<br>")
// // d = (a<b) && (a<c)
// // document.write(d,"<br>")
// // d = (a>b) || (a>c)
// // document.write(d,"<br>")
// // d = !(a>b) && (a<c)
// // document.write(d,"<br>")


// /*task 4*/

// let mark= prompt("Enter a number: ")

// if (mark>=80)
//     document.write("CGPA is : 4.00")
// else if(mark<80 && mark>=75)
//     document.write("CGPA is : 3.75")
// else if(mark<75 && mark>=70)
//     document.write("CGPA is : 3.50")
// else if(mark<70 && mark>=65)
//     document.write("CGPA is : 3.25")
// else if(mark<65 && mark>=60)
//     document.write("CGPA is : 3.00")
// else if(mark<60 && mark>=55)
//     document.write("CGPA is : 2.75")
// else if(mark<55 && mark>=50)
//     document.write("CGPA is : 2.50")
// else if(mark<50 && mark>=45)
//     document.write("CGPA is : 2.25")
// else if(mark<45 && mark>=40)
//     document.write("CGPA is : 2.00")
// else
//     document.write("Sorry you are Failed")


//digit spelling

// let digit = prompt("enter a digit (0-9): ")
// digit = parseInt(digit)

// switch(digit)
// {
//     case 0:
//         document.write("Zero");
//         break;
//     case 1:
//         document.write("One");
//         break;
//     case 2:
//         document.write("Two");
//         break;
//     case 3:
//         document.write("Three");
//         break
//     case 4:
//         document.write("Four");
//         break
//     case 5:
//         document.write("Five");
//         break
//     case 6:
//         document.write("Six");
//         break
//     case 7:
//         document.write("Seven");
//         break
//     case 8:
//         document.write("Eight");
//         break
//     case 9:
//         document.write("Nine");
//         break
//     default:
//         document.write("invalid");
    
// }


// const list = ["Kaniz Kani"];
// let a = "Kaniz pagli";


// for(let i=1; i<=10; i=i+1)
// {
//     document.write(i,"<br>");
// }

// let i=1;
// while(i<=10)
// {
//     document.write(i,"<br>");
//     i++
// }

// let sum=0;

// for(let i =1; i<=5;i=i+1)
// {
//     sum+=i;
//     //sum = sum + i
// }

// document.write(sum,"<br>")


// for(let i=1; i<=5; i=i+1)
// {
//     let a = parseFloat(prompt("enter 1st number: "));
//     let b = parseFloat(prompt("enter 2nd number: "));
//     let sum = a+b;
//     document.write(sum,"<br>");
// }


// //task 6
// let i=1;
// let sum=0;

// while(i<=100)
// {
//     if(i%3==0 && i%5==0)
//     {
//         document.write(i+" ")
//         sum = sum+i;
//     }
//     i++;
// }
// document.write("<br>The Answer is: ",sum,".<br>");




// let num1 = Number(prompt("enter 1st number: "));
// let num2 = Number(prompt("enter 2nd number: "));
// let num3 = Number(prompt("enter 3rd number: "));

// let a = num1>num2 && num1>num3? "1st Number is largest" : num2>num1 && num2>num3 ? "2nd Number is largest": "3rd number is the largest";

// document.write(a);


// function add(a,b)
// {
//     let result = a+b;
//     document.write("Addition is: "+result+"<br>");
// }
// function sub(a,b)
// {
//     let result = a-b;
//     document.write("Subtraction is: "+result+"<br>");
// }

// function mul(a,b)
// {
//     let result = a*b;
//     document.write("Multiplication is: "+result+"<br>");
// }

// function div(a,b)
// {
//     let result = a/b;
//     document.write("Division is: "+result+"<br>");
// }

// let a = Number(prompt("Enter 1st number: "));
// let b = Number(prompt("Enter 2nd number: "));
// let c = Number(prompt("Choose what you want to do. 1->Addition, 2->Subtraction, 3-> Multiplication, 4-> Division "));

// switch(c)
// {
//     case 1:
//         add(a,b);
//         break;
//     case 2:
//         sub(a,b);
//         break;
//     case 3:
//         mul(a,b);
//         break;
//     case 4:
//         div(a,b);
//         break;
//     default:
//         document.write("Invalid!<br>")
//         break;
// }

// alert("Thank you for using CalC<br>")
// // sub(a,b);
// // mul(a.b);
// // div(a,b);




// let num1 = Number(prompt("enter 1st number: "));
// let num2 = Number(prompt("enter 2nd number: "));
// (
//     function sum()
//     {
//         let result = 5+9;
//         document.write("SUM is: "+result+"<br>");
//     }
// )();

// const display = function sum()
// {
//     document.write("SUM is bla bla <br>");
// }

// display();


// // let num1 = Number(prompt("enter 1st number: "));
// // let num2 = Number(prompt("enter 2nd number: "));
// // (
// //     function sum()
// //     {
// //         let result = 5+9;
// //         document.write("SUM is: "+result+"<br>");
// //     }
// // )();

// // const display = function sum()
// // {
// //     document.write("SUM is bla bla <br>");
// // }

// // display();


// let arr = new Array(5);
// arr[0] = "abu";
// arr[1] = "sayeed";
// arr[2]= "kani";
// arr[3]="nahid";
// arr[4]="adib";

// let arr2 = new Array(5);
// arr2[0] = "abu";
// arr2[1] = "sayeed";
// arr2[2]= "kani";
// arr2[3]="nahid";
// arr2[4]="adib";

// // let array = arr.concat(arr2);
// // document.write(array);
// // arr.push("sokhina");
// // arr.push("jorina");
// // arr.push("poisa");
// // document.write(arr+"<br>");
// // arr.pop();
// // document.write(arr+"<br>");


// // for(let i=0;i<arr.length;i++)
// // {
// //     document.write(arr[i]+"<br>");
// // }
// // document.write(arr+"<br>");



// let arr = new Array()
// for(let i=1; i<=100; i++)
// {
//     arr.push(i);
// }
// document.write(arr);

// let sum = 0;
// for(let i=0; i<100; i++)
// {
//     sum = sum+arr[i];
// }
// document.write("<br>"+sum);



// let arr = new Array(5);
// arr[0] = "abu";
// arr[1] = "sayeed";
// arr[2]= "kani";
// arr[3]="nahid";
// arr[4]="adib";

// document.write(arr+"<br>")
// arr.splice(5,2,"karim","rahim")
// document.write(arr+"<br>")

// let arr2 = arr.sort()
// document.write(arr2+"<br>");

// document.write(arr2.reverse()+"<br>")

// let number = [20,5,8,65,2,1];
// document.write(number+"<br>")
// number.sort(
// function(a,b)
// {
//     return a-b;
// });

// document.write(number+"<br>")



// function highestScore(scores)
// {
//     let max = scores[0];
//     for( let i = 1; i<scores.length; i++)
//     {
//         if(max<scores[i])
//         {
//             max = scores[i];
//         }
//     }
//     return max;
// }

// let scores = [20,5,8,65,2,1];
// //document.write(scores);

// document.write(highestScore(scores));



// let details = [['Nahid',80],['Sakib',85],['Rahim',90],['karim',100]];

// function highestRunScorer(details)
// {
//     let name = details[0][0];
//     let high = details[0][1];

//     for(let i=1;i<details.length; i++)
//         {
//             if(high < details[i][1])
//             {
//                 high = details[i][1];
//                 name = details[i][0];
//             }   //document.write(details[i][j]);
//         } 
//     return name;       
// }

// let ans = highestRunScorer(details);
// document.write(ans);




// //  /* object */
// // let student = {
// //     name: "Nahid",
// //     age : 24,
// //     cgpa : 3.70,
// //     lang : ['Bangla','English']
// // }

// // /*  object print*/
// //document.write(student.name);

// //   /* constructor */
// function Student(name,age,cgpa,lang)
// {
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;

//     /**  add function in a constructor ***/
//     this.display = function()
//     {
//         document.write(this.name + "<br>");
//         document.write(this.age+ "<br>");
//         document.write(this.cgpa+ "<br>");
//         document.write(this.lang+ "<br>");
//         // document.write("<br>")
//     }
// }

// let student1 = new Student("Nahid",24,3.70,["bangla","english"]);
// let student2 = new Student("Karim",27,3.20,["hindi","english"]);

// /***  print  ********/
// student1.display();
// student2.display();


///*********Math Object********/
// let won = 0;
// let lost = 0;
// for(let i=0; i<5; i++)
// {
//     let generate = Math.floor(Math.random()*5)+1;
//     let guess = parseInt(prompt("Enter your Guess: "));
//     if(guess==generate)
//     {
//         document.write("You have Won. <br>");
//         won++;
//     }
//     else
//     {
//         document.write("You have Lost. <br>");
//         document.write("number is: "+generate+"<br>");
//         lost++;
//     }
// }
// document.write("You have Won: "+won+"<br>");
// document.write("You have Loss: "+lost+"<br>");

// let myvar = document.querySelector("#mypic");
// function mypicture()
// {
//     myvar.src = "pika.jpg";
// }
// function mypicture2()
// {
//     myvar.src = "pika2.jpg";
// }
// function mymessage3()
// {
//     alert('Hello headerrrrrr');
// }



/**** create new html element *****/
// let h3 = document.createElement("h1");
// let txt = document.createTextNode("GG3.0");
// let myDiv = document.getElementById("mydiv");

// h3.appendChild(txt);
// myDiv.appendChild(h3);

// let h2 = document.getElementsByTagName("h1")[1];
// myDiv.removeChild(h2);

// let h0 = document.createElement("h1");
// let txt2 = document.createTextNode("-GG2.0");
// h0.appendChild(txt2);

// let h1 = document.getElementsByTagName("h1")[0];
// myDiv.insertBefore(h0,h1);


// // animation*****************
// function Move()
// {
//     let id=null;
//     const elem = document.getElementById("animate");
//     let pos=0;
//     clearInterval(id);
//     id = setInterval(frame,5);
//     function frame()
//     {
//         if(pos==550)
//         {
//             clearInterval(id);
//         }
//         else
//         {
//             pos++;
//             elem.style.top=pos+'px';
//             elem.style.left=pos+'px';
//         }
//     }
// }



// let photos=["img1.jpg","img2.jpg","img3.jpg"];
// let image = document.querySelector("img");

// let count = 0;
// function prev()
// {
//     count--;
//     if(count<0)
//     {
//         count=photos.length-1;
//         image.src=photos[count];
//     }
//     image.src=photos[count];
// }

// function next()
// {
//     count++;
//     if(count==photos.length)
//     {
//         count=0;
//         image.src=photos[count];
//     }
//     image.src=photos[count];
// }



// let head=document.getElementById("head");
// function addStyle(obj)
// {
//     head.style.color="red";
//     obj.style.backgroundColor="green";
//     obj.style.color="white";
// }
// function removeStyle(obj)
// {
//     head.style.color="";
//     obj.style.backgroundColor="";
//     obj.style.color="";
// }


// let button = document.querySelectorAll(".myClass");
// let head = document.getElementById("head");

// for(let i=0;i<button.length; i++)
// {
//     button[i].addEventListener("click",function(){    
//         let text=this.innerHTML;
//         head.innerHTML = text+" was clicked!";
//     });
// }



// let audio;

// for(let i=0;i<3; i++)
// {
//     let button = document.querySelectorAll(".btn")[i];
//     button.addEventListener("click", function(){
//         let text=this.innerHTML;
//         console.log(text);


//         switch(text){
//             case "a":
//                 audio= new Audio('Tera Ghata - Gajendra Verma.mp3');
//                 audio.play();
//                 console.log("a button working");
//                 break;
//             case "b": 
//                 if(audio)
//                 {
//                     audio.pause();
//                     console.log("b- audio got paused");
//                 }
//                 break;
//             default:
//                 console.log("pressed b or c");
//                 break;
//         }

//     });


// }



// let audio;

// for(let i=0;i<3; i++)
// {
//     let button = document.querySelectorAll(".btn")[i];
//     button.addEventListener("click", function(){
//         let text=this.innerHTML;
//         console.log(text);

//         switch(text){
//             case "a":
//                 audio= new Audio('Tera Ghata - Gajendra Verma.mp3');
//                 audio.play();
//                 console.log("a button working");
//                 break;
//             case "b": 
//                 if(audio)
//                 {
//                     audio.pause();
//                     console.log("b- audio got paused");
//                 }
//                 break;
//             default:
//                 console.log("pressed b or c");
//                 break;
//         }

//         animation(text);

//     });


// }

// function animation(text)
// {
//     let btn= document.querySelector("."+text);
//     btn.classList.add("anim");
//     console.log("animation");


//     setTimeout(function(){
//         btn.classList.remove("anim");
//     },1000);
// }

// let audio;

// document.addEventListener("keypress",function(event){
//     let text = event.key;
//     audioPlay(text);
//     animation(text);

// });

// function animation(text)
// {
//     let btn= document.querySelector("."+text);
//     btn.classList.add("anim");
//     console.log("animation");


//     setTimeout(function(){
//         btn.classList.remove("anim");
//     },1000);
// }

// function audioPlay(text)
// {
//     switch(text){
//         case "a":
//             audio= new Audio('Tera Ghata - Gajendra Verma.mp3');
//             audio.play();
//             console.log("a button working");
//             break;
//         case "b": 
//             if(audio)
//             {
//                 audio.pause();
//                 console.log("b- audio got paused");
//             }
//             break;
//         default:
//             console.log("pressed b or c");
//             break;
//     }
// }



