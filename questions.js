const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"Which operator is used for addition in Java?",
options:["+","-","*","/"],
answer:"+",
hint:"Used to add two numbers"
},

{
type:"mcq",
question:"Which operator is used to check equality?",
options:["==","=","!=","<"],
answer:"==",
hint:"Comparison operator"
},

{
type:"mcq",
question:"What is the result of 10 % 3?",
options:["1","2","3","0"],
answer:"1",
hint:"Remainder operator"
},

{
type:"mcq",
question:"Which operator is used for logical AND?",
options:["&&","||","!","&"],
answer:"&&",
hint:"Both conditions must be true"
},

{
type:"mcq",
question:"Which operator is used for logical OR?",
options:["||","&&","!","|"],
answer:"||",
hint:"At least one condition true"
},

{
type:"mcq",
question:"Which operator is used for NOT?",
options:["!","&&","||","~"],
answer:"!",
hint:"Reverses boolean value"
},

{
type:"mcq",
question:"Which operator is used to assign value?",
options:["=","==","!=","<"],
answer:"=",
hint:"Assignment operator"
},

{
type:"mcq",
question:"What does i++ mean?",
options:["Increment by 1","Decrement by 1","Multiply by 1","Divide by 1"],
answer:"Increment by 1",
hint:"Post increment"
},

{
type:"mcq",
question:"Which operator has higher precedence?",
options:["*","+","-","="],
answer:"*",
hint:"Multiplication first"
},

{
type:"mcq",
question:"What is the result of true && false?",
options:["false","true","error","none"],
answer:"false",
hint:"AND needs both true"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Write a Java program to add two numbers",

required:["int","+","system.out.println"],

hint:"Use + operator",

solution:`class Add {
  public static void main(String[] args){
    int a = 10;
    int b = 5;

    int result = a + b;

    System.out.println(result);
  }
}`
},

{
type:"code",
question:"Write a program to check if a number is even or odd using modulus operator",

required:["%","if","system.out.println"],

hint:"Use num % 2",

solution:`class EvenOdd {
  public static void main(String[] args){
    int num = 10;

    if(num % 2 == 0){
      System.out.println("Even");
    } else {
      System.out.println("Odd");
    }
  }
}`
},

{
type:"code",
question:"Write a program to compare two numbers and print which is greater",

required:[">","if","system.out.println"],

hint:"Use > operator",

solution:`class Compare {
  public static void main(String[] args){
    int a = 10;
    int b = 20;

    if(a > b){
      System.out.println("A is greater");
    } else {
      System.out.println("B is greater");
    }
  }
}`
},

{
type:"code",
question:"Write a program using logical AND (&&) to check if a number is between 1 and 100",

required:["&&","if","system.out.println"],

hint:"Use num > 1 && num < 100",

solution:`class RangeCheck {
  public static void main(String[] args){
    int num = 50;

    if(num > 1 && num < 100){
      System.out.println("Within range");
    } else {
      System.out.println("Out of range");
    }
  }
}`
},

{
type:"code",
question:"Write a program to demonstrate increment operator",

required:["++","system.out.println"],

hint:"Use i++",

solution:`class Increment {
  public static void main(String[] args){
    int i = 5;

    i++;

    System.out.println(i);
  }
}`
}

]