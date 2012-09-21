AUI().ready('aui-node', function(A){

var d = new Date();

switch (d.getDay()){
case 0:
var dia = "Domingo";
break;

case 1:
var dia = "Lunes";
break;

case 2:
var dia = "Martes";
break;

case 3:
var dia = "Miércoles";
break;

case 4:
var dia = "Jueves";
break;

case 5:
var dia = "Viernes";
break;

case 6:
var dia = "Sábado";
break;
}

switch(d.getMonth()){
case 0:
var mes = "Enero";
break;

case 1:
var mes = "Febrero";
break;

case 2:
var mes = "Marzo";
break;

case 3:
var mes = "Abril";
break;

case 4:
var mes = "Mayo";
break;

case 5:
var mes = "Junio";
break;

case 6:
var mes = "Julio";
break;

case 7:
var mes = "Agosto";
break;

case 8:
var mes = "Septiembre";
break;

case 9:
var mes = "Octubre";
break;

case 10:
var mes = "Noviembre";
break;

case 11:
var mes = "Diciembre";
break;
}

A.one('#fecha').html(dia + ", " + d.getDate() + " de " + mes + " del " + d.getFullYear());

});