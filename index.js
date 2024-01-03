// script.js
document.addEventListener("DOMContentLoaded", function() {
    function scrollToProjects() {
        let projectsSection = document.getElementById("projects");
        if (projectsSection) {
            let projectsSectionTop = projectsSection.offsetTop;
            window.scrollTo({
                top: projectsSectionTop,
                behavior: "smooth"
            });
        }
    }
    let myWorkButton = document.querySelector(".bt1");
    if (myWorkButton) {
        myWorkButton.addEventListener("click", function() {
            scrollToProjects();
        });
    }
    function scrollToQualification(){
        let qualification = document.getElementById("qualification");
        if(qualification){
            let qualificationTop = qualification.offsetTop;
            window.scrollTo({
                top:qualificationTop,
                behavior:"smooth"
            })
        }
    }
    let myQualificationButton = document.querySelector(".bt2");
    if(myQualificationButton){
        myQualificationButton.addEventListener("click",function(){
            scrollToQualification();
        })
    }
});


