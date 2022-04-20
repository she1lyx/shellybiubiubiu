let adjectives = ["warm", "sunny", "windy", "rainy", "snowy"];
let times = ["morning", "noon", "afternoon", "evening", "midnight"];
let months = ["January", "March", "June", "August", "November"];
let nouns = ["cherry", "strawberry", "pear slice", "baby carrot", "watermelon chunk"];
let adverbs = ["happily", "joyfully", "peacfully", "merrily", "rejoicingly"];

let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]
let time = times[Math.floor(Math.random()*times.length)]
let month = months[Math.floor(Math.random()*months.length)]
let noun = nouns[Math.floor(Math.random()*nouns.length)]
let adverb = adverbs[Math.floor(Math.random()*adverbs.length)]

let sentence = `It was a ${adjective} ${time} in ${month}, my shiba ate a ${noun} and ran ${adverb}.`

console.log(sentence)
document.write(sentence)