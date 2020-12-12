var back_img;
var click_s;
var save_button;
var logo;

//Body
var body1;   var body2;   var body3;   var body4;
let a = 0;
//Head
var head1;   var head2;   var head3;   var head4;
let b = 0;
//Eyes
var eyes1;   var eyes2;   var eyes3;   var eyes4;   
let c = 0;
//mouth
var mouth1;   var mouth2;   var mouth3;   var mouth4;
let d = 0;
//accesory
var ac1;   var ac2;   var ac3;   var ac4;
let e = 0;
//landscape
var land1;   var land2;   var land3;   var land4;
var land5;   var land6;   var land7;   var land8;
var land9;   var land10;  var land11;  var land12;
var land13;  var land14;  var land15;  var land16;
f = 0;


function preload(){
  back_img = loadImage("gameback2.png");
  click_s = loadSound("Clicking-sound-effect.mp3");
  save_button = loadImage("save button.png");
  logo = loadImage("logo.png");
  //body
  body1 = loadImage("*body/body1.png");    
  body2 = loadImage("*body/body2.png");
  body3 = loadImage("*body/body3.png");    
  body4 = loadImage("*body/body4.png");
  //head
  head1 = loadImage("*head/head1.png");    
  head2 = loadImage("*head/head2.png");
  head3 = loadImage("*head/head3.png");    
  head4 = loadImage("*head/head4.png");
  //eyes
  eyes1 = loadImage("*eyes/eyes1.png");    
  eyes2 = loadImage("*eyes/eyes2.png");
  eyes3 = loadImage("*eyes/eyes3.png");    
  eyes4 = loadImage("*eyes/eyes4.png");
  //mouth
  mouth1 = loadImage("*mouth/mouth1.png");    
  mouth2 = loadImage("*mouth/mouth2.png");
  mouth3 = loadImage("*mouth/mouth3.png");    
  mouth4 = loadImage("*mouth/mouth4.png");
  //accesory
  ac1 = loadImage("*acc/ac1.png");    
  ac2 = loadImage("*acc/ac2.png");
  ac3 = loadImage("*acc/ac3.png");    
  ac4 = loadImage("*acc/ac4.png");
  //landscape
  land1 = loadImage("*land/land1.png");    
  land2 = loadImage("*land/land2.png");    
  land3 = loadImage("*land/land3.png");
  land4 = loadImage("*land/land4.png");    
  land5 = loadImage("*land/land5.png");    
  land6 = loadImage("*land/land6.png");
  land7 = loadImage("*land/land7.png");    
  land8 = loadImage("*land/land8.png");    
  land9 = loadImage("*land/land9.png");
  land10 = loadImage("*land/land10.png");  
  land11 = loadImage("*land/land11.png");  
  land12 = loadImage("*land/land12.png");
  land13 = loadImage("*land/land13.png");  
  land14 = loadImage("*land/land14.png");  
  land15 = loadImage("*land/land15.png");
  land16 = loadImage("*land/land16.png");

}

function setup() {
  createCanvas(windowWidth, windowWidth/1.40);
  noStroke();
}

function draw() {
  background(220);
  //button rect
  rect(windowWidth/1.215,height/2.9 ,windowWidth/22.6667,windowWidth/46.6667)
  rect(windowWidth/1.215,height/2.3 ,windowWidth/22.6667,windowWidth/46.6667)
  rect(windowWidth/1.215,height/1.95 ,windowWidth/22.6667,windowWidth/46.6667)
  rect(windowWidth/1.215,height/1.65 ,windowWidth/22.6667,windowWidth/46.6667)
  rect(windowWidth/1.215,height/1.45 ,windowWidth/22.6667,windowWidth/46.6667)
  rect(windowWidth/1.215,height/1.27 ,windowWidth/22.6667,windowWidth/46.6667)
  //turnip rect

  new_width = windowWidth;
  new_height=windowWidth/1.40;
  const window_size = 6;
  
  
  //landscape///////////////////////////////////////////////////////////////////////////////////////
  if (f == 0) {
    image(land1,0,0,new_width,new_height);
  } else if (f == 1) {
    image(land2,0,0,new_width,new_height);
  } else if (f == 2) {
    image(land3,0,0,new_width,new_height);
  } else if (f == 3) {
    image(land4,0,0,new_width,new_height);
  } else if (f == 4) {
    image(land5,0,0,new_width,new_height);
  } else if (f == 5) {
    image(land6,0,0,new_width,new_height);
  } else if (f == 6) {
    image(land7,0,0,new_width,new_height);
  } else if (f == 7) {
    image(land8,0,0,new_width,new_height);
  } else if (f == 8) {
    image(land9,0,0,new_width,new_height);
  } else if (f == 9) {
    image(land10,0,0,new_width,new_height);
  } else if (f == 10) {
    image(land11,0,0,new_width,new_height);
  } else if (f == 11) {
    image(land12,0,0,new_width,new_height);
  } else if (f == 12) {
    image(land13,0,0,new_width,new_height);
  } else if (f == 13) {
    image(land14,0,0,new_width,new_height);
  } else if (f == 14) {
    image(land15,0,0,new_width,new_height);
  } else if (f == 15) {
    image(land16,0,0,new_width,new_height);
  }
   //head ///////////////////////////////////////////////////////////////////////////////////////
  if (b == 0) {
    image(head1,0,0,new_width,new_height);
  } else if (b == 1) {
    image(head2,0,0+10,new_width,new_height);
  } else if (b == 2) {
    head3.loadPixels();
    image(head3,0,0,new_width,new_height);
  } else if (b == 3) {
    image(head4,0,0,new_width,new_height);
  }
  
      //body 
  if (a == 0) {
    image(body1,0,0,new_width,new_height);
  } else if (a == 1) {
    image(body2,0,0,new_width,new_height);
  } else if (a == 2) {
    image(body3,0,0,new_width,new_height);
  } else if (a == 3) {
   image(body4,0,0,new_width,new_height);
  }
  
  //eyes ///////////////////////////////////////////////////////////////////////////////////////
  if (c == 0) {
    image(eyes1,0,0,new_width,new_height);
  } else if (c == 1) {
    image(eyes2,0,0,new_width,new_height);
  } else if (c == 2) {
    image(eyes3,0,0,new_width,new_height);
  } else if (c == 3) {
    image(eyes4,0,0,new_width,new_height);
  }
  
  //mouth ///////////////////////////////////////////////////////////////////////////////////////
  if (d == 0) {
    image(mouth1,0,0,new_width,new_height);
  } else if (d == 1) {
    image(mouth2,0,0,new_width,new_height);
  } else if (d == 2) {
    image(mouth3,0,0,new_width,new_height);
  } else if (d == 3) {
    image(mouth4,0,0,new_width,new_height);
  }
//accesory ///////////////////////////////////////////////////////////////////////////////////////
  if (e == 0) {
    
  } else if (e == 1) {
    image(ac1,0,0,new_width,new_height);
  } else if (e == 2) {
    image(ac2,0,0,new_width,new_height);
  } else if (e == 3) {
    image(ac3,0,0,new_width,new_height);
  } else if (e == 4) {
    image(ac4,0,0,new_width,new_height);
  }
  
  image(back_img,0,0,width,height);
  image(save_button, windowWidth/1.68674699, windowWidth/1.707317, windowWidth/15.555555, windowWidth/15.555555);
  image(logo,windowWidth/1.44777663,windowWidth/17.5,windowWidth/4.82758621,windowWidth/4.82758621);
  
}

function touchStarted() {
  //body
  if (a >= 3) {
    a = -1;
  } let k = dist(mouseX, mouseY, windowWidth/1.215+((windowWidth/22.6667)/2),height/2.7);
  if (k < windowWidth/40.6667) {
    a++;
    click_s.play();
  }
   //head
  if (b >= 3) {
    b = -1;
  } let l = dist(mouseX, mouseY, windowWidth/1.215+((windowWidth/22.6667)/2),height/2.1);
  if (l < windowWidth/40.6667) {
    b++;
    click_s.play();
  }
  //eyes
  if (c >= 3) {
    c = -1;
  } let m = dist(mouseX, mouseY, windowWidth/1.215+((windowWidth/22.6667)/2),height/1.85);
  if (m < windowWidth/40.6667) {
    c++;
    click_s.play();
  }
    //mouth
  if (d >= 3) {
    d = -1;
  } let n = dist(mouseX, mouseY, windowWidth/1.215+((windowWidth/22.6667)/2),height/1.60);
  if (n < windowWidth/40.6667) {
    d++;
    click_s.play();
  }
  //accesory
  if (e >= 4) {
    e = -1;
  } let o = dist(mouseX, mouseY, windowWidth/1.215+((windowWidth/22.6667)/2),height/1.40);
  if (o < windowWidth/40.6667) {
    e++;
    click_s.play();
  }
  //landscape
  if (f >= 16) {
    f = -1;
  } let p = dist(mouseX, mouseY, windowWidth/1.215+((windowWidth/22.6667)/2),height/1.23);
  if (p < windowWidth/40.6667) {
    f++;
    click_s.play();
  }
  //save button
  let save_dist = dist(mouseX, mouseY, windowWidth/1.68674699, windowWidth/1.70731707);
  if (save_dist < windowWidth/17.5) {
    click_s.play();
    let to_save = get(windowWidth/5.38461538, windowWidth/6.666666, windowWidth/2.47787611, windowWidth/2.37288136);
    to_save.save("your turnip.png");
  }
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth/1.40);

}