
let sentence = "The night outside is dark"

let rData = RiTa.tokenize(sentence)

let newSentence = rData.join(' ')

let sentences = [
  "The night outside is dark",
  "The night outside is dark",
  "The night outside is dark",
  "The night outside is dark",
  "The night outside is dark"
]

console.log(rData)
console.log(newSentence)

function setup() {
  createCanvas(800, 600)

  let sentenceData = []

sentences.forEach(sent => sentenceData.push(RiTa.tokenize(sentence)))

  background(64)

  fill(255)
  textSize(32)

sentenceData.forEach((data, i) => {
  data[4] = RiTa.randomWord({
    pos: RiTa.pos(data[4])[0]
  })
  
  data[1] = RiTa.randomWord({
    pos: RiTa.pos(data[1])[0]
  })

  let newSentence = data.join(' ')

  text(newSentence, 50, 100+ 50*i)
})
}

// function draw() {
//   background(64)

//   fill(255)
//   textSize(32)
//   sentences.forEach((sentence, i) => {
//     text(newSentence, 50, 100+ 50*i)
//   });
//   // text(newSentence, 50, 100)
// }
