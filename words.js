/* Eleni Zapata*/

function Words()
{ /*these are my variables*/
    var Word1 = document.getElementById("1stWord").value;
   
    document.getElementById("Word1Display").innerHTML = "You Input "  + Word1 ;

    
    var Word2 = Word1;

/*This ismy reverse code*/
    Word2 = Word1.split("");
document.getElementById("ResultUpdate").innerHTML = "SPLIT " + Word2 ;
Word2 = Word2.reverse();
document.getElementById("ResultUpdate").innerHTML = "REVERSE " + Word2 ;
Word2 = Word2.join("")
document.getElementById("ResultUpdate").innerHTML = "JOIN " + Word2 ;

/* This is my if, if else*/

if ((Word2 == Word1) )
    {
        document.getElementById("Outcome").innerHTML = "This is a Parindrome";
    }
  else if  (Word2 != Word1)
    {
        document.getElementById("Outcome").innerHTML = "LOSER";
    }

    }

    
    
    






    

