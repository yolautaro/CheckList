// Set up the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#222222";
ctx.lineWith = 2;


// Set up mouse events for drawing
var drawing = false;
var mousePos = { x:0, y:0 };
var lastPos = mousePos;
canvas.addEventListener("mousedown", function (e) {
        drawing = true;
  lastPos = getMousePos(canvas, e);
}, false);
canvas.addEventListener("mouseup", function (e) {
  drawing = false;
}, false);
canvas.addEventListener("mousemove", function (e) {
  mousePos = getMousePos(canvas, e);
}, false);

// Get the position of the mouse relative to the canvas
function getMousePos(canvasDom, mouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top
  };
}

// Get a regular interval for drawing to the screen
window.requestAnimFrame = (function (callback) {
        return window.requestAnimationFrame || 
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimaitonFrame ||
           function (callback) {
        window.setTimeout(callback, 1000/60);
           };
})();



// Draw to the canvas
function renderCanvas() {
  if (drawing) {
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    lastPos = mousePos;
  }
}

// Allow for animation
(function drawLoop () {
  requestAnimFrame(drawLoop);
  renderCanvas();
})();


// Set up touch events for mobile, etc
canvas.addEventListener("touchstart", function (e) {
        mousePos = getTouchPos(canvas, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}



// Prevent scrolling when touching the canvas
document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);





function clearCanvas() {
    canvas.width = canvas.width;
}      
			
		



		function Descargar() {    
		        var Aclaracion=document.forms.MiFormulario3.Aclaracion.value;
				
				var canvas = document.getElementById("canvas");
				var dataUrl = canvas.toDataURL(); // obtenemos la imagen como png
				//window.open(dataUrl, "Ejemplo", "width=400, height=400");
				//La linea superior habre una ventana con el dibujo	
				
				//Variable para la firma del responsable
				var Espacio = "<br>";
				var texto="<img id='ImgFirma' src='"+dataUrl+"'alt='Imagen' />";			
				
				//Variables de la cabecera del reporte
				var nombre=document.forms.MiFormulario.nombre.value;
				var FechaV=document.forms.MiFormulario.FechaV.value;
				var Mes=document.forms.MiFormulario.mes.value;
				var Edificio=document.forms.MiFormulario.Edificio.value;
				var Direccion=document.forms.MiFormulario.Direccion.value;
				var Localidad=document.forms.MiFormulario.Localidad.value;
				

                //Variables del cuerpo sector electricidad
                var Electricidad1=document.getElementById("Electricidad1").value;
				var Electricidad2=document.getElementById("Electricidad2").value;
				var Electricidad3=document.getElementById("Electricidad3").value;
				var Electricidad4=document.getElementById("Electricidad4").value;
				var Electricidad5=document.getElementById("Electricidad5").value;
				
				
				
				
				
				
                //////////////////////////////////////
				//Comienso de la cabecera del reporte
				/////////////////////////////////////
				document.write("<div style='background-color:;width:100%;height:150px;'>");	
                  //Sector izquierdo de la cabecera del reporte			  
				  document.write("<h2 style='background-color:#000;color:#fff;font-size:18px;text-align:center;width:100%;'>Check List Mensual De Verificacion </h2>");
				  				  
					document.write("<div style='background-color:;width:50%;float:left;'>");	
						document.write("<h3 style='font-size:13px;background-color:#ccc'>Empresa</h3>"+nombre);					   
						   
						document.write("<h3 style='font-size:13px;background-color:#ccc'>Fecha de visita</h3>"+FechaV); 
						   
						document.write("<h3 style='font-size:13px;background-color:#ccc;'>Corresponde a Mes</h3>"+Mes);
						   
					document.write("</div>");	
                    
					//Sector Derecho de la cabecera del reporte
					document.write("<div style='background-color:;width:50%;float:left;'>");
						document.write("<h3 style='font-size:13px;background-color:#ccc'>Edificio</h3>"+Edificio);  
						   
						document.write("<h3 style='font-size:13px;background-color:#ccc'>Direccion</h3>"+Direccion); 
						
						document.write("<h3 style='font-size:13px;background-color:#ccc'>Localidad</h3>"+Localidad); 
						   
					document.write("</div>");	   
				document.write("<div style='clear:both;'>");
				document.write("</div>");		
                ///////////////////////////////////				
				//Fin de la cabecera del reporte
				//////////////////////////////////
				
				
				//////////////////////////////////////////////////				
				//Comienzo de la cuerpo del reporte (electricidad)
				//////////////////////////////////////////////////
				document.write("<div id='CuerpoReporte'>");
				    document.write("<h2 style='background-color:#000;color:#fff;font-size:14px;text-align:center;width:100%;'id='H2Reporte'>1- Electricidad</h2>");
				    
					document.write("<h3 style='font-size:13px;background-color:#ccc'>a- Carteles y marquesinas, funcionamiento de todas las luminarias,reemplazo de tubos o lampara incluido:</h3>"+Electricidad1);
					document.write("<h3 style='font-size:13px;background-color:#ccc'>b- Funcionamiento, buen estado y limpieza de filtros lavables(Mensual):</h3>"+Electricidad2);
					document.write("<h3 style='font-size:13px;background-color:#ccc'>c- Funcionamiento, buen estado detomas electricos (reemplazo de ser necesario):</h3>"+Electricidad3);
					document.write("<h3 style='font-size:13px;background-color:#ccc'>d- Funcionamiento, buen estado y limpieza de tableros de iluminacion y tomas (Mensual):</h3>"+Electricidad4);
					document.write("<h3 style='font-size:13px;background-color:#ccc'>e- Entrega de termografia de tableros (Anual):</h3>"+Electricidad5);
					
					// imagenes del cuerpo
                    document.write("<h2 style='background-color:#000;color:#fff;font-size:14px;text-align:center;width:100%;'id='H2Reporte'>Observaciones</h2>");
                    
					
					
					
				document.write("</div>");
				//////////////////////////////////////////////////////				
				//fin de la cuerpo del reporte (electricidad)
				/////////////////////////////////////////////////////
				
				
							
				
                
				document.write("<h2 style='background-color:#000;color:#fff;font-size:14px;text-align:center;width:100%;'id='H2Reporte'>Firma Del Responsable</h2>");
				
				document.writeln(Espacio);				 
				document.writeln(texto);
				
				
				document.write("<h3 style='font-size:12px;'>"+Aclaracion+"</h3>"); 
				document.write("<h3 style='font-size:12px;border-top:solid;width:250px;'>Aclaracion</h3>");
				
					
            }
			
			
			
            
			
	