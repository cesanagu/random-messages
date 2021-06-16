const messages = [
  "Con perseverancia lo vas a lograr, sigue adelante",
  "Hoy será un excelente día para superarte en lo que te propongas",
  "Si nadie cree en ti, lo importante es que tu creas en ti, tu eres el dueño de tu futuro",
  "Eres el mejor, no te compares, tu eres la mejor version de ti",
  "¿qué harias si no sintieras miedo? ACTUA",
  "Todos los dias haz un pequeño esfuerzo para llegar a tus objetivos, escribe tus objetivos y ten claro a donde quieres llegar",
  "Muchas personas se burlaran de ti en el proceso o camino que recorres para tus objetivos, esfuerzate para que tu rias en la cima",
  "Criticar es facíl, por eso siempre enfocate en lo que estas por lograr y no escuches a las personas que solo se dedican a vivir la vida de otras personas",
  "La mente puede ser tu mejor aliado o tu peor enemigo, siempre se positivo aunque sea en el peor momento, mirale el lado bueno a la vida",
  "Algun dia habrás cumplido tu objetivo y te reiras del proceso, enamorate del proceso o el camino que tomas y aprende cada dia un poco más"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()* messages.length)];
  console.log(message)
};

module.exports = { randomMsg };