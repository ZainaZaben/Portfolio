document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelector('.projects');
    const projectItems = document.querySelectorAll('.project');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const totalProjects = projectItems.length;

    function showProject(index) {
        const projectWidth = projectItems[0].getBoundingClientRect().width;
        projects.style.transform = `translateX(-${index * projectWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalProjects - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        showProject(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalProjects - 1; 
        }
        showProject(currentIndex);
    });

    window.addEventListener('resize', () => {
        showProject(currentIndex); 
    });
});



// Download CV Action 

function downloadCV() {
    var downloadUrl =
      "https://drive.google.com/file/d/11z8XYv5n7p4SDQk7Zgh7Uy4xHf5bqabt/view?usp=sharing";
    var anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = "CV.pdf"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }



