const vetorDiaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const hoje = new Date();
const diaSemana = vetorDiaSemana[hoje.getDay()];

document.write(`<p>Hoje é ${diaSemana}.</p>`);