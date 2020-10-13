   var cont =0;
   var a=0;
   var b=0;

    function bt0(){
        var valor = document.getElementById("btn0").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;


            }


                function bt1(){
        var valor = document.getElementById("btn1").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;




            }
                function bt2(){
        var valor = document.getElementById("btn2").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;




            }
                function bt3(){
        var valor = document.getElementById("btn3").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;




            }
                function bt4(){
        var valor = document.getElementById("btn4").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;




            }
                function bt5(){
        var valor = document.getElementById("btn5").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;




            }
                function bt6(){
        var valor = document.getElementById("btn6").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;




            }
                function bt7(){
        var valor = document.getElementById("btn7").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;




            }
                function bt8(){
        var valor = document.getElementById("btn8").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;




            }
                        function bt9(){
        var valor = document.getElementById("btn9").value;
        var elemento = document.getElementById('voto');
elemento.value+= valor;




            }


           function img1(){

            	
            }

            function checar(){



            	if(document.getElementById("voto").value == "25"){

            	 
            		document.getElementById("urna").src = "img/man.png";
            		cont++;
            		a++;


            	}
            		else if(document.getElementById("voto").value == "15"){

            	 
            		document.getElementById("urna").src = "img/girl.png";

            		cont++;
            		b++;
            	}
            	if(cont>=2){

            	alert('Candidato nº 25 :' + a+'  Candidato nº15 :'+b);
            	cont =0;
            	a=0;
            	b=0;
            }
            }

            

            function corrige(){

          document.getElementById("voto").value ="";
          alert('Digite  seu voto novamente!');

            }