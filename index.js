function shout(string) {
    return string.toUpperCase();
}
console.log(shout('hello'));

function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper('HELLO'));

function logShout(string) {
   return console.log(string.toUpperCase());
}
logShout('have at thee!');

function logWhisper(string) {
    return console.log(string.toLowerCase());
}
logWhisper('I think we should be quiet');


function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === string.toUpperCase()) return "YES INDEED!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
}
console.log(sayHiToGrandma("hello"));