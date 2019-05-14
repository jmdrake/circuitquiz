var quiz = [
    {
        img : "circuit1.svg",
        circuit : "open",
        lighton : "no",
        explain : "There is no path from the battery back to itself."
    },
    {
        img : "circuit2.svg",
        circuit : "closed",
        lighton : "yes",
        explain : "There is path from the battery, through the bulb and back to itself."
    },                
    {
        img : "circuit3.svg",
        circuit : "closed",
        lighton : "yes",
        explain : "There is a path from the battery through the bulb and back to the battery."        
    },
    {
        img : "circuit4.svg",
        circuit : "closed",
        lighton : "yes",
        explain : "There is a path from the battery through the bulb and back to the battery."                
    },                 
    {
        img : "circuit5.svg",
        circuit : "short",
        lighton : "no",
        explain : "There is a path from the battery and back to itself without going through the bulb.  Short circuits do not light."                
    },
    {
        img : "circuit6.svg",
        circuit : "short",
        lighton : "no",
        explain : "There is a path from the battery and back to itself without going through the bulb.  Short circuits do not light."                        
    },                
    {
        img : "circuit7.svg",
        circuit : "open",
        lighton : "no",
        explain : "There is no path from the battery back to itself."        
    },
    {
        img : "circuit8.svg",
        circuit : "short",
        lighton : "no",
        explain : "There is a path from the battery and back to itself without going through the bulb.  Short circuits do not light."                                
    },                                 
];

for(var i = 0; i < quiz.length; i++) {
    var newDiv = $("#tmplQuestion").clone();
    newDiv.find("#diagram").attr("data", "images/" + quiz[i].img);
    newDiv.find("#circuit").attr("id", "circuit" + i);
    newDiv.find("#lighton").attr("id", "lighton" + i);
    newDiv.find("#answer").attr("id", "answer" + i);
    newDiv.find(".quesnumber").html(i+1);
    newDiv.show();
    $("#questions").append(newDiv);
}

function gradeQuiz() {
    var answer = "";
    var score = 0;
    for(var i = 0; i < quiz.length; i++) {
        if(quiz[i].circuit == $("#circuit"+i).val()) {
            answer += "<span class='correct'>" + quiz[i].circuit + "</span>; ";
            score++;
        } else {
            answer += "<span class='incorrect'>" + quiz[i].circuit + "</span>; "
        }
        if(quiz[i].lighton == $("#lighton"+i).val()) {
            answer += "<span class='correct'>" + quiz[i].lighton + "</span>; ";
            score++;
        } else {
            answer += "<span class='incorrect'>" + quiz[i].lighton + "</span> ;"
        }
        $("#answer"+i).html(answer + "<br>" + quiz[i].explain);
        answer = "";
    }
    $("#score").html("Score is " + score + " out of " + quiz.length * 2);
}