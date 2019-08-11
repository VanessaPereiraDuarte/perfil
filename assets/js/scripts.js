function traduz(lingua){
    removeAtivo();
    if(lingua == 'pt'){
      document.getElementsByClassName("descricao")[0].innerHTML = `<h2>Resumso</h2><p>Olá! Bem vindo! Atualmente estou cursando graduação em Análise e Desenvolvimento de Sistemas, já concluído vários cursos em desenvolvimento Front-End, no momento busco uma oportunidade na área de tecnologia.</p>`;                  
      itemParaAtivar = 1;
    } else if(lingua == 'es') {
      document.getElementsByClassName("descricao")[0].innerHTML = `<h2>Resumen</h2><p>Hola ¡Bienvenido! Actualmente estoy cursando una licenciatura en Análisis y Desarrollo de Sistemas, he completado varios cursos en desarrollo Front End, en este momento estoy buscando una oportunidad en el área de tecnología.</p>`;
      itemParaAtivar = 3;
    } else if(lingua == 'en') {
      document.getElementsByClassName("descricao")[0].innerHTML = `<h2>Resume</h2><p>
      Hello! Welcome! I am currently pursuing a degree in Systems Analysis and Development, I have completed several courses in Front End development, at the moment I am looking for an opportunity in the technology area.</p>`;
      itemParaAtivar = 5;
    }else if (lingua == 'it') {
      document.getElementsByClassName("descricao")[0].innerHTML = `<h2>Sommario</h2><p>Ciao! Benvenuto! Attualmente sto conseguendo una laurea in Analisi dei sistemi e sviluppo, ho completato diversi corsi di sviluppo del front-end, al momento sto cercando un'opportunità nel settore tecnologico.</p>`;
      itemParaAtivar = 7;
    }        
    document.getElementsByClassName("linguas")[0].childNodes[itemParaAtivar].className = 'ativo';  
}

function removeAtivo(){
    document.getElementsByClassName("ativo")[0].className = '';        
}