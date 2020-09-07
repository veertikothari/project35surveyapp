var button;
var greeting;

function setup(){
  canvas=createCanvas(displayWidth,displayHeight); 
//q1
greeting=createElement("h3");
greeting.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
greeting.position(500,100);
button=createButton("YES");
button.position(500,150);
button.mouseClicked(vote1);
button=createButton("NO");
button.position(500,200);
button.mouseClicked(vote1);
//q2
greeting=createElement("h3");
greeting.html("Would you be willing to pay contribute a small amount every month for such a program?");
greeting.position(500,250);
button=createButton("YES");
button.position(500,300);
button.mouseClicked(vote2);
button=createButton("NO");
button.position(500,350);
button.mouseClicked(vote2);
//q3
greeting=createElement("h3");
greeting.html("How much per month would you be willing to pay for such a program?");
greeting.position(500,400);

button=createButton("100");
button.position(500,450);
button.mouseClicked(vote3);

button=createButton("500");
button.position(500,500);
button.mouseClicked(vote3);

button=createButton("1000");
button.position(500,550);
button.mouseClicked(vote3);

button=createButton("5000");
button.position(500,600);
button.mouseClicked(vote3);

button=createButton("10000");
button.position(500,650);
button.mouseClicked(vote3);
//name
input=createInput("NAME");
input.position(750,50);
input=createInput("EMAIL ID");
input.position(900,50);

button=createButton("SUBMIT");
button.position(1200,50);

}
function draw(){
  background(rgb,135,206,250);
  greeting=createElement("h2");
  greeting.html("THANK YOU FOR VOTING");
  greeting.position(900,900);
  
  button=createButton("SUBMIT");
  button.position(1000,800);
  button.mouseClicked();
}
function vote1(){
  greeting=createElement("h3");
  greeting.html("VOTED!!!");
  greeting.position(700,150);
}

function vote2(){
  greeting=createElement("h3");
  greeting.html("VOTED!!!");
  greeting.position(700,300);
}

function vote3(){
  greeting=createElement("h3");
  greeting.html("THANKS FOR YOUR DONATION!");
  greeting.position(700,500);
}


/*function vote5(){
  greeting=createElement("h2");
  greeting.html("THANKS FOR YOUR DONATION!");
  greeting.position(2000,1000);
}*/