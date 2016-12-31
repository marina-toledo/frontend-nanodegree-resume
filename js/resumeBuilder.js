var bio = {
    "name": "Marina Toledo",
    "role": "Web developer",
    "contacts": {
        "mobile": "97776-9940",
        "email": "marina.mi.toledo@hotmail.com",
        "github": "marina-toledo",
        "location": "São Paulo - Brazil"
    },
    "welcomeMessage": "Welcome!",
    "skills": ["web", "Java", "HTML", "CSS", "Javascript", "UML"],
    "bioPic": "images/bioPic.jpg"
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGitHub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", "images/bioPic.jpg");
$("#header").append(formattedBioPic);

var formattedWelcMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcMsg);

if( bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    for( i=0; i < bio.skills.length; i++){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }

}


var work = {
    "jobs":[
    {
        "employer": "Maps",
        "title": "Java developer",
        "dates": "2015-2016",
        "description": "Develop, maintain, test and support for a web pricing software at Maps S.A. company with the technologies: Java, Groovy, IntelliJ, Mercurial, Spring, Mockito, JUnit, Jenkins, XML, Angular, PostgreSQL, Excel, and others. The features demanded front-end and back-end services, agile process management and use of Kanban dashboard."
    },
    {
        "employer": "Laboratório de Sitemas Integráveis Tecnológico (LSI-TEC)",
        "title": "Development analyst (Mobile tester)",
        "dates": "2015",
        "description": "Analyze, test and customize software for mobile phones. Use of technologies: Java, Git, XML and cellular transmission technologies (GSM, SMS / MMS / WAP, 3G)."
    },
    {
        "employer": "LUZ Engenharia Financeira",
        "title": "Risk analyst",
        "dates": "2014",
        "description": "Development of desktop application for credit risk analysis in the Delphi language."
    },
    {
        "employer": "Touch Health",
        "title": "Java web programmer internship",
        "dates": "2012-2013",
        "description": "Internship for creating a medical website with the technologies: Java, Eclipse, Maven, Hudson, Nexus, Liquibase, postgreSQL, Jenkins, with the Spring, Struts, JUnit and Hibernate frameworks in the company Touch Tecnologia e Informática LTDA."
    },
    {
        "employer": "Instituto Nacional de Pesquisas Espaciais (INPE)",
        "title": "Programmer and requirements analyst internship",
        "dates": "2011-2012",
        "description": "Internship for programming in Labview and constructing UML Diagrams in the GLOW project (assembly and creation of satellite launch software) at the National Institute for Space Research."
    }
    ]
};

function displayWork(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

displayWork();


var projects = {
    "projects": [
    {
        "title": "sample project 1",
        "dates": "2016",
        "description": "Resume with Javascript",
        "images": [
                    "https://camo.githubusercontent.com/f4c154444bc91d29cab9f120a480277f673015f5/687474703a2f2f692e696d6775722e636f6d2f7057553158626c2e706e67"]
    },
    {
        "title": "sample project 2",
        "dates": "2017",
        "description": "web projects",
        "images": [
                    "http://fremantledcc.com.au/wp-content/uploads/2014/04/Construction-Tape.jpg"]
    },
    ]
};

function displayProjects(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length > 0){
            for(image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

displayProjects();


var education = {
    "schools":[
    {
        "name": "UNIFESP",
        "city": "São José dos Campos, SP, Brazil",
        "degree": "Bachelor",
        "majors": ["CS"],
        "dates": 2014,
        "url": "http://www.sjc.unifesp.br/portal/"
    },
    {
        "name": "Colégio Objetivo",
        "city": "São José dos Campos, SP, Brazil",
        "degree": "High School",
        "majors": ["High School"],
        "dates": 2008,
        "url": "http://www.objetivo-sjc.com.br"
    },
    ],
    "onlineCourses":[
    {
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": 2014,
        "url": "https://br.udacity.com/course/javascript-basics--ud804/"
    }
    ]
};

function displayEducation(){
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $("#education").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $("#education").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $("#education").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $("#education").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $("#education").append(formattedMajor);
    }

    for(onlineCourse in education.onlineCourses){
        $("#education").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        $("#education").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $("#education").append(formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $("#education").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $("#education").append(formattedURL);
    }
};

displayEducation();


//$("#header").append(internationalizeButton);

function inName(fullName){
    var result = fullName.trim().split(' ');
    result[0] = result[0][0].toUpperCase()+ result[0].slice(1).toLowerCase();
    result[1] = result[1].toUpperCase();
    fullName = result[0] + ' ' + result[1];
    return fullName;
};


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedGitHub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocation);

