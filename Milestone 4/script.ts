// Get references to the form and display area

var form = document.getElementById('resume-form') as HTMLFormElement;
var resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Handle form submission

form.addEventListener('submit', (event: Event) =>  {
    event.preventDefault(); //Prevent Page Reload

    // Collect input values
    var name = (document.getElementById("name") as HTMLTextAreaElement).value
    var email = (document.getElementById("email") as HTMLTextAreaElement).value
    var phone = (document.getElementById("phone") as HTMLTextAreaElement).value
    var education = (document.getElementById("education") as HTMLTextAreaElement).value
    var experience = (document.getElementById("experience") as HTMLTextAreaElement).value
    var skills = (document.getElementById("skills") as HTMLTextAreaElement).value


    // Generate the resume content dynamically

    var resumeHTML = `
    <h2><b>Editable Resume</b><h2>
    <h3>Personal Information<h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.');
    }

});

// HTMLInputElement