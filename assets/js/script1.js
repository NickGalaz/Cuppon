alert("Esta prueba es desde el archivo script.js");
console.log("Estamos probando mensajes en la consola");

100
0.5
"Hola a todos"

var numero = 100;
var numero2 = 0.5;
var frase = "Hola a todos";

var nombre= prompt("Ingresa tu nombre");
var apellido= prompt("Ingresa tu apellido");
var carrera= prompt("Ingresa el nombre de tu carrera");

var curso1 = prompt("Ingresa el nombre del curso");

var nota1Curso1 = prompt("Ingresa nota 1 " + curso1 + ":");
var nota2Curso1 = prompt("Ingresa nota 2 " + curso1 + ":");
var nota3Curso1 = prompt("Ingresa nota 3 " + curso1 + ":");
nota1Curso1 = parseFloat(nota1Curso1)
nota2Curso1 = parseFloat(nota2Curso1)
nota3Curso1 = parseFloat(nota3Curso1)
var promediocurso1 = (nota1Curso1+nota2Curso1+nota3Curso1)/3

var curso2 = prompt("Ingresa el nombre del curso");

var nota1Curso2 = prompt("Ingresa nota 1 " + curso2 + ":");
var nota2Curso2 = prompt("Ingresa nota 2 " + curso2 + ":");
var nota3Curso2 = prompt("Ingresa nota 3 " + curso2 + ":");
nota1Curso2 = parseFloat(nota1Curso2)
nota2Curso2 = parseFloat(nota2Curso2)
nota3Curso2 = parseFloat(nota3Curso2)
var promediocurso2 = (nota1Curso2+nota2Curso2+nota3Curso2)/3

var curso3 = prompt("Ingresa el nombre del curso");

var nota1Curso3 = prompt("Ingresa nota 1 " + curso3 + ":");
var nota2Curso3 = prompt("Ingresa nota 2 " + curso3 + ":");

nota1Curso3 = parseFloat(nota1Curso3)
nota2Curso3 = parseFloat(nota2Curso3)
var nota3Curso3 = parseFloat(0)

var promediocurso3 = (nota1Curso3+nota2Curso3+nota3Curso3)/3

var notaParaArpobar = (12-nota1Curso3-nota2Curso3)

documento.write('<header class="row justify-content-between align-items-center">');
document.write('<div class="col-6"><p class="display-4"><strong> Notas finales </strong></p></div>');
document.write('<div class="col-4"><img src="assets/img/Desafio-Latam.jpg" alt="" srcset=""></div>');
document.write('</header>')
document.write('<h3 class="mt-5 py-3 font-weight-bold mx-5>Notas Finales</h3>');
    document.write('<string class=mx-5 text-left font-weight-bold>Nombre</string><span class=mx-5 px-5  text-left>"+nombre+"</span><span class=text-right px-5 mx-5 w-100></span><span class=text-right px-5 mx-5 w-100><img  src=assets/img/logolatam.jpg></span><br>');
    document.write('<string class=mx-5 text-left font-weight-bold>Carrera</string><span class=mx-5 px-5  text-left>"+carrera+"</span>');
    document.write('<div class=contain bt-5 mt-5>');
    document.write('<div class=row text-white text-left mx-5>');
    document.write('<div class=col-lg-2 font-weight-bold bg-dark>');
    document.write('        <span>Ramo</span>');
    document.write('      </div>');
    document.write('       <div class=col-lg-2 bg-dark>');
    document.write('            <span>Nota 1</span>');
    document.write('       </div>');
    document.write('        <div class=col-lg-2 bg-dark>');
    document.write('           <span>Nota 2</span>');
    document.write('       </div>');
    document.write('       <div class=col-lg-2 bg-dark>');
    document.write('            <span>Nota 3</span>');
    document.write('        </div>)');
    document.write('        <div class=col-lg-2 bg-dark >');
    document.write('           <span>Promedio</span>');
    document.write('        </div>  ');
    document.write('    </div>');
    document.write('   <div class=row bg-custom text-black text-left mx-5>');
    document.write('        <div class=col-lg-2 bg-success text-white font-weight-bold>');
    document.write("            <span>"+ramo1+"</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("           <span>"+notar11+"</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("            <span>"+notar12+"</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("            <span>"+notar13+"</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("            <span>"+promedio1.toFixed(2)+"</span>");
    document.write("       </div> ");
    document.write("    </div>");
    document.write("   <div class='row bg-custom text-black text-left mx-5'>");
    document.write("        <div class='col-lg-2 bg-success text-white font-weight-bold'>");
    document.write("            <span>"+ramo2+"</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("            <span>"+notar21+"</span>");
    document.write("        </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("            <span>"+notar22+"</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("            <span>"+notar23+"</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("            <span>"+promedio2.toFixed(2)+"</span>");
    document.write("       </div>");
    document.write("   </div>");
    document.write("   <div class='row bg-custom text-black text-left mx-5'>");
    document.write("       <div class='col-lg-2 bg-success text-white font-weight-bold'>");
    document.write("           <span>"+ramo3+"</span>");
    document.write("        </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("           <span>"+notar31+"</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("            <span>"+notar32+"</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("           <span>-</span>");
    document.write("       </div>");
    document.write("       <div class='col-lg-2 bg-secondary text-white'>");
    document.write("            <span></span>");
    document.write("       </div> ");  
    document.write("    </div>");
    document.write("</div>");
    document.write("<p class='mx-5 text-left py-5'>Para aprobar el ramo javascript con nota 4, necesitas obtener un "+notarequerida+" en la nota 3</p>");