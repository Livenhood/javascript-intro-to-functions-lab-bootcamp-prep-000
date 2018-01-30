function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log("HELLO")
}
function logWhisper(string) {
  console.log("hello")
}

function say(lowerCase){
  console.log('I can\'t hear you!')
  return `${lowerCase}!`
}

var uppercase = "HELLO"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello'

lowercase.toLowerCase() === lowercase
