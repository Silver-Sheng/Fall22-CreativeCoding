let hue

function setup() {
  createCanvas(800, 600)
  let one = chroma(180, 0.9, 0.5, 'hsl').darken().rgb()

  let two = chroma.blend('4CBBFC', 'EEEE22', 'multiply').hex()

  hue = chroma.mix(one, two, 0.2).rgb()

  hue = chroma.random().rgb()


  hue = chroma.scale(['red', 'blue'])

  console.log(hue)
}

function draw() {
  background(hue((Math.sin(frameCount/100)+1) /2).rgb())
}
