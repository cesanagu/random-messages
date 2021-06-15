const messages = [
  "Buenos dias",
  "Good Morning",
  "Buongiorno",
  "Hola",
  "Hi",
  "Ciao",
  "Guten Morgen"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()* messages.length)];
  console.log(message)
};

module.exports = { randomMsg };