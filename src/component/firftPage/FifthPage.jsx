import React from "react";
import "./fifthPage.css";

const FifthPage = () => {
  //input hello world ==> dlrow olleh
  //"olleH droW".
  //   const reverseFunction = (str) => {
  //     console.log("str ==>", str);

  //     let splitedString = str.split(" ");
  //     console.log("splitedString ==>", splitedString);
  //     let array = [];
  //     for (let words of splitedString) {
  //       console.log(words);
  //       let reverseWorld = words.split("");
  //       let word = reverseWorld.reverse().join("");
  //       console.log("word ==>", word);
  //       array.push(word);
  //     }

  //     return array.join(" ");
  //   };

  //   console.log(reverseFunction("Hello World"));

//   let obj = {
//     name: "ranjit",
//     student: {
//       class: 12,
//       degeree: "mechnaical eng",
//     },
//   };

//   let obj2 = obj;

//   let obj3 = JSON.parse(JSON.stringify(obj));
//   console.log("obj3 ==>", obj3);
//   obj2.student.class = 50;

//   console.log("origanl obj", obj);
//   console.log("duplicate obj", obj2);



function calling() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
}

calling()
  return <div>FifthPage</div>;
};

export default FifthPage;
