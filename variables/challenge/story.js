var noun, verb, adjective, story, place, time;

noun = prompt("Write a noun");
verb = prompt("Write a verb");
adjective = prompt("Write a adjective");
place = prompt("write a place");
time = prompt("write a time");

story = "It’s finally springtime and today my Dad took me on ";
story += "an outdoor adventure to the "+ noun + ". He usually ";
story += "has to work at the " + place + " but today ";
story += "he took a special holiday! We woke up at ";
story += time + " and packed the car with our favorite ";
story += noun + " and"+ noun + ". We said goodbye to ";
story += "Mom and headed to the "+ noun + ", our favorite ";
story += "adventure spot."

document.write(story);
