let show = document.getElementsByClassName('paradise--student--header');
let step;

for (step = 0; step < show.length; step++) {
  show[step].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let projects = document.querySelectorAll('.project');
let currentProject = 0;
let isEnabled = true;

function changeCurrentProject(n) {
    currentProject = (n + projects.length) % projects.length
}

function hideProject(direction) {
    isEnabled = false;
    projects[currentProject].classList.add(direction);
    projects[currentProject].addEventListener('animationend', function() {
        this.classList.remove('active', direction)
    })
}

function showProject(direction) {
  projects[currentProject].classList.add('next', direction);
  projects[currentProject].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}

function previousProject(n) {
    hideProject('to-right');
    changeCurrentProject(currentProject - 1);
    showProject('from-left');
}


function nextProject(n) {
    hideProject('to-left');
    changeCurrentProject(currentProject + 1);
    showProject('from-right');
}


document.querySelector('.control.left').addEventListener('click', function() {
    if (isEnabled) {
        previousProject(currentProject);
    }
})

document.querySelector('.control.right').addEventListener('click', function() {
    if (isEnabled) {
        nextProject(currentProject);
    }
})

const reflexing = document.getElementById("reflexing");

reflexing.textContent = "Mobile";
let widthWrapper = document.querySelector(".wrapper");
let body = document.querySelector("body");


function toggler(e) {    
    if(e.target === reflexing) {
        let cur = reflexing.textContent;
        reflexing.textContent = cur === "Mobile" ? "Desktop" : "Mobile";
        widthWrapper.style.width = cur === "Mobile" ? 375 + "px" : 1024 + "px";
        body.style.backgroundColor = cur === "Mobile" ? "grey" : null;
    }
}

document.addEventListener('click', toggler);
