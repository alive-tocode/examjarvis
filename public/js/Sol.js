function openAnswer(evt, year) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("each_year_question_answers");
    for(i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(year).style.display = "block";
    evt.currentTarget.classList.add("active");  
}