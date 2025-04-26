

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// HERE ALL THE DATA FROM THE WEB PAGE WILL BE INSERTED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
    // Hi, my name is....
    // yourName: "Udit Gupta", // Insert your name
    yourName: "Udit Gupta",
    roles: [
        "Software Developer",
        "Tech Enthusiast",
        "Problem Solver",

    ],
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",  // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Email",  // label name
            url: "#contact"  //  url of the Social Network
        },
        {
            icon: "fa fa-linkedin-square", // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Linkedin",
            url: "https://www.linkedin.com/in/uditnow/"
        },
        {
            icon: "fa fa-github-alt",   // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Github",
            url: "https://github.com/uditdotcom"
        }


    ],

    // Page session direction
    nav: [
        {
            optionNav: "About me",
            idSection: "about"    // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Skills",
            idSection: "skills"   // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Projects",
            idSection: "projects"  // If it changes, check the session id in <index.html> ;
        }


    ]

}


//=========================================
//                ABOUT ME
//=========================================
export const aboutMeData = {
    title: "About Me",
    description: "Hi, I'm Udit Gupta, a software developer with a solid foundation in both front-end and back-end technologies. I'm passionate about building efficient, user-friendly, and scalable applications. My skill set includes C, Java, SQL, JavaScript, HTML, and CSS, allowing me to work across a wide range of development tasks. I'm constantly learning, growing, and looking for new challenges to push my limits as a developer.",
    titleURL: "View CV",
    urlCV: "https://drive.google.com/file/d/16H0DT5fUYyK0KqYkamqq6VB60YWGSdot/view?usp=sharing"
}





//=========================================
//                 SKILLS 
//=========================================
export const skillsData = [


    {
        img: "assets/c-1.svg",  // card image  > insert the svg image in the assets folder
        nameSkill: "C"      //  card name
    },
    {
        img: "assets/java.svg",
        nameSkill: "Java"
    },
    {
        img: "assets/js.svg",
        nameSkill: "JavaScript"
    },
    {
        img: "assets/mysql-logo-pure.svg",
        nameSkill: "SQL"
    }

]
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
    {
        title: "Auto Entry Guard Cum Smart Park Access",    // card image  > insert the svg image in the assets folder
        describe: `Technologies: Python, EasyOCR, YOLO, Python, Node.js, Express.js, SQL, HTML, CSS, JavaScript
Developed a system to detect vehicle number plates using OCR and YOLO, log entry/exit times, and
manage records in a SQL database.
Built a responsive admin interface for monitoring using Node.js and Express.js.
Automated processes, reducing manual intervention and enhancing customer experience.`,
        url: "#",  // url of the Github repository
        img: "assets/Screenshot 2024-12-03 010703.png"  //image Project
    },
    {
        title: "Library Management System",
        describe: `Technologies: Java, Java Swing, SQL
Designed and implemented a system for managing books and user authentication.
Integrated a robust backend with SQL for efficient database management.
Delivered a user-friendly interface, streamlining library operations.`,
        url: "https://lnkd.in/gzzQpxA4",
        img: "assets/Screenshot 2024-09-05 031636.png"
    },
    {
        title: "Basic Amazon Clone",
        describe: `Technologies: HTML, CSS
Developed a clone of Amazon’s website, replicating its UI/UX design.
Improved proficiency in web development by focusing on page responsiveness and layout consistency.`,
        url: "http://heartfelt-cucurucho-b40b59.netlify.app/",
        img: "assets/image.png"
    }
]








