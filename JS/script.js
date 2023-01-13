
function home(){
    var oculta = document.getElementById("oculta");
    var infos = document.getElementById("infos");
    var name = document.getElementById("name");
    var texto = document.getElementById("text");
    console.log("home");
    infos.style.background = 'rgba(147,112,219,0.7)';   
    name.style.color = 'white' ;
    texto.style.color = 'white' ;
    texto.innerHTML = 'Home';
    grad.style.color = 'white';
}
function projects(){
    console.log("projects");
    var name = document.getElementById("name");
    var texto = document.getElementById("text");
    var infos = document.getElementById("infos");
    var grad = document.getElementById("grad");
    infos.style.background = 'rgba(255,255,255,0.7)';
    text.style.color = 'black' ;
    texto.innerHTML = 'Projects: Game of bombs e Calculadora(HTML-CSS-JAVASCRIPT)' ;
    grad.style.color = 'black';
}
function summary(){
    console.log("summary");
    var name = document.getElementById("name");
    var texto = document.getElementById("text");
    var infos = document.getElementById("infos");
    infos.style.background = 'rgba(220,20,60,0.7)';
    name.style.color = 'white' ;
    texto.style.color = 'white' ;
    texto.innerHTML = "Summary: I'm Nathan Santos Ataliba, form in ";
    grad.style.color = 'white';
}
function contacts(){
    console.log("contacts");
    var name = document.getElementById("name");
    var texto = document.getElementById("text");
    var infos = document.getElementById("infos");
    infos.style.background = 'rgba(240,230,140,0.7)';
    name.style.color = 'black';
    texto.style.color = 'black' ;
    texto.innerHTML = 'Contacts: Wathzap: (35) 997636358';
    grad.style.color = 'black';
}