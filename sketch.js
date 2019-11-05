let x, y;
let w = 0;
let z = 0;
let dim = 80.0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight)
 //canvas.parent("p5")
  background(0);
  strokeWeight(10);
  //frameRate(13);
      x = width / 2;
  y = height/2;
    textSize(width/20);
    
    
    
    //noLoop()
     let quotes = ['“Above all, dont lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love. -Fyodor Dostoevsky',
                   
                   
     '“But how could you live and have no story to tell?”― Fyodor Dostoevsky', 
                  
    '““To love someone means to see them as God intended them.”― Fyodor Dostoyevsky',

     '“Nothing in this world is harder than speaking the truth, nothing easier than flattery.”― Fyodor Dostoevsky',
                   
    'Doin nothings a dangerous occupation. -Robert Bolt',
                   
    'Even at our birth, death does but stand aside a little. And every day he looks toward us and muses somewhat to himself whether that day or the next he will draw nigh. - Robert Bolt',
                   
    'True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so, wants nothing. -Seneca',
                   
    'They lose the day in expectation of the night, and the night in fear of the dawn. -Seneca ',
                   
    'It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult. -Seneca',
                   
    'Luck is what happens when preparation meets opportunity. -Seneca',
                   
    'Begin - to begin is half the work, let half still remain; again begin this, and thou wilt have finished. -Marcus Aurelius',
                   
    'It is not death that a man should fear, but he should fear never beginning to live. -Marcus Aurelius',
                   
    'The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane. -Marcus Aurelius',
    
    'Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig. -Marcus Aurelius',
    
    '“It seems as though the goal of my work has always been to dissolve myself completely into the sensations of the surroundings in order to then integrate this into a coherent painterly form.” - Ernst Ludwig Kirchner',
    
    '“Those parts of yourself that you desperately want to hide and destroy will gain power over you. The best thing to do is face and own them, because they are forever a part of you.”― Janet Mock',
    
    'If you bring forth what is within you, what you bring forth will save you. If you do not bring forth what is within you, what you do not bring forth will destroy you. -Jesus Christ',
    
    'Know whats weird? Day by day, nothing seems to change. But pretty soon, everythings different. -Bill Watterson',
    
    'The wide world is all about you: you can fence yourselves in, but you cannot forever fence it out. -J. R. R. Tolkien',
    
    'You can hold yourself back from the sufferings of the world, that is something you are free to do and it accords with your nature, but perhaps this very holding back is the one suffering you could avoid. -Franz Kafka',
    
    'Im kind of known for something thats not so great to be known for. -Monica Lewinsky',
    
    'Youre only given a little spark of madness. You mustnt lose it. -Robin Williams',
    
    '“You are a divine being. You matter, you count. You come from realms of unimaginable power and light, and you will return to those realms.”- Terence Mckenna',
  ];
    
 quote = random(quotes); // select random quote
}

function draw() {
    
    //background woosh
    push()
    
  for (let i = 0; i < width; i++) {
    let r = random(255);
    stroke(r, i, 250, i);
      strokeWeight(20);
    line(i-200+r, r/i, i*r, r*r/2);
  
      pop()
  }
    push()
     strokeWeight(2)
      stroke(1)
      noFill()
   
      w = w - 5;
  // If the text goes off the canvas, reload ( is there goto equivalent?)
  if (w < -height*2) {
      //>height + dim
      window.location.reload(true)
   // w = -dim;
  }

  translate(50 - dim / 2, w);  
text(quote, 50,  height, width - 50, height - 50); 
    pop()
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight)
}