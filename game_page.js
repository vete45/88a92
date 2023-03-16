player_1_name=localStorage.getItem("player_1_name");

player_2_name=localStorage.getItem("player_2_name");

player_1_score=0;
player_2_score=0;

document.getElementById("player_1_name").innerHTML=player_1_name+":";

document.getElementById("player_2_name").innerHTML=player_2_name+":";

document.getElementById("player_1_score").innerHTML=player_1_score;

document.getElementById("player_2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Turno para preguntar -"+player_1_name;

document.getElementById("player_answer").innerHTML="Turno para contestar -"+player_2_name;

function send()
{
    get_word=document.getElementById("word").value;

    word=get_word.toLowerCase();
    console.log("Palabra en minúsculas="+word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    lenght_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(lenght_divide_2);
    console.log(charAt2);

    lenght_minus_1=word.length-1;
    charAt3=word.charAt(lenght_minus_1);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";

    input_box="<br>Respuesta:<input type='text' id='input_check_box'>";

    check_button="<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";

    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";

}

//definimos dos variables que usaremos para saber quien pregunta y quien responde 
question_turn="player_1";
answer_turn="player_2";

//Definimos la función Check
function check()
{
	//vamos a obtener la palabra de la entrada de la respuesta utilizando el id de la entrada de texto y la vamos a almacenar en la variable.
    get_answer = document.getElementById("input_check_box").value;

    //convertimos todo en minúsculas.
	answer = get_answer.toLowerCase();
	console.log("Respuesta en minúsculas = " + answer);

    //Ahora vamos a utilizar una declaración condicional (if) para comparar la palabra de la pregunta con la respuesta y si estas coinciden, vamos a aumentar el valor del puntaje del jugador que responde
	if(answer == word)	
	{
		if(answer_turn == "player_1")
		{
			//Dentro de la condición, vamos a incrementar el puntaje de los  jugadores por 1 según corresponda.

            player_1_score = player_1_score +1;
		    document.getElementById("player_1_score").innerHTML = player_1_score;
		}
		else 
		{
			player_2_score = player_2_score +1;
		    document.getElementById("player_2_score").innerHTML = player_2_score;
		}
	}

    //Dentro del bloque condicional if, vamos a cambiar el turno de preguntar al jugador 2
	if(question_turn == "player_1")
	{
		question_turn = "player_2"
		document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player_2_name ;
	}
	
    // Si el valor de question_turn no es player1, entrará en el bloque condicional else. Esto significa que el jugador 2 fue quien hizo una pregunta y deberá cambiar el turno al jugador 1
    else 
	{
        question_turn = "player_1"
		document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player_1_name ;
	}

	if(answer_turn == "player_1")
	{
		answer_turn = "player_2"
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player_2_name ;
	}
	else 
	{
		answer_turn = "player_1"
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player_1_name ;
	}
    //Ya casi terminamos con la función para el botón comprobar. Lo único que falta es activarla cuando se haga clic en el botón.
    document.getElementById("output").innerHTML = "";
}

