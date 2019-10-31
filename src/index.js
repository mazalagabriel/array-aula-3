/* Destructuring Assigment - Atribuição via desestruturação

  Server para interar (interable) de uma forma mais fácil elementos
de um array (interáveis) ou Objects (interáveis).
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao */

//New Array
const arr = ["Gabriel ", "Mazala ", "RJ ", "Brasil"];

//Destructuring Arrays
const [nome, sobrenome, cidade, pais] = arr;


//Print
document.write(nome, sobrenome, cidade, pais);
document.write("<br/><br/>");

//New Object
const data = {
  name: "Gabriel",
  surname: "Mazala",
  city: "RJ",
  site: "georgebezerra.dev",
  social: {
    instagram: "@mazalagabriel",
    linkedin: "gabrielmazala"
  }
};

//Processo default
/*(const name = data.name
document.write(name)
document.write("<br/><br/>");

const surname = data.surname
document.write(surname)
document.write("<br/><br/>")

const instagram = data.social.instagram
document.write(instagram)
document.write("<br/><br/>") */

////Destructuring Objects - desestruturação objeto
/*Obs.: { } = não é um bloco lógico e sim 
a sixtaxe do destructuring*/
const { name, surname } = data;
document.write(name);
document.write(surname);
document.write("<br/><br/>");

//Destructuring - Object indentado
const {instagram, linkedin } = data.social;
document.write(instagram);
document.write("<br/><br/>");
document.write(linkedin);
document.write("<br/><br/>");

//Renomeando o valor da variavel - LINKEDIN
const { linkedin: IN } = data.social;
document.write(IN);
document.write("<br/><br/>");

/*Definindo um valor default para uma variavel que não existe,
inserir este valor para dentro*/
const { estado = "Rio de janeiro" } = data
document.write(estado);
document.write("<br/><br/>");

/* React - similar ao Destructuring
import { react } from "react" */

/* Quiz - Crie uma forma de trocar os valores das 2 variáveis entre si  "b" passe a ser o "a" passe a ser o "b" */
 let a = 42;
 let b = 21;

 document.write("a : ", a);
 document.write(", b : ", b);
 document.write("<br/><br/>");

 //Processo default - Swap Variables
/*   let temp;

  temp = a;
  a = b;
  b = temp;

 document.write("a : ", a);
 document.write(", b : ", b);
 document.write("<br/><br/>");
 */

 //Destructuring swap
 [a, b] = [b, a];
 document.write("a : ", a);
 document.write(", b : ", b);
 document.write("<br/><br/>");

