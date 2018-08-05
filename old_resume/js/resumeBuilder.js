var bio = {
  "name" : "Jiadai Liu",
  "age" : 24,
  "role" : "Front End Web Developer",
  "contacts" : {
    "mobile" : "415-314-2923",
    "email" : "jliuapp@gmail.com",
    "github" : "jiadai777",
    "location" : "San Francisco"
  },
  "biopic" : "images/jiadai.jpg",
  "welcomeMessage" : "I am currently working on my front end wed developer nanodegree.",
  "skills" : ["Java", "HTML5", "CSS", "JavaScript"]
};

var education = {
  "schools" : [
    {
      "name" : "UC Davis",
      "location" : "Davis",
      "degree" : "BS",
      "majors" : ["Managerial Economics"],
      "dates" : "September 2010 - June 2014",
      "url" : "https://www.ucdavis.edu/"
    },
    {
      "name" : "San Francisco State University",
      "location" : "San Francisco",
      "degree" : "MA",
      "majors" : ["English"],
      "dates" : "Januray 2016 - present",
      "url" : "http://www.sfsu.edu/"
    }
  ],
  "onlineCourses" : [
    {
      "name" : "Udacity",
      "title" : "Fron End Web Development",
      "date" : "June 2016 - present",
      "url" : "https://www.udacity.com/"
    }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "Best in class Education",
      "dates" : "May 2016 - present",
      "location" : "San Francisco, CA",
      "title" : "Tutor",
      "description" : "Grade students' homework. Tutor middle school and high school students English and mathematics."
    },
    {
      "employer" : "Mitsubishi UFJ Financial Group",
      "dates" : "September 2014 - October 2015",
      "location" : "Tokyo, Japan",
      "title" : "Sales Associate",
      "description" : "Work at Mitsubishi Tokyo branch and plan sales projects in a sales people group. Attend weekly sales meetings and assist sales manager with administrative tasks."
    },
    {
      "employer" : "UC Davis Student Housing",
      "dates" : "September 2011 - June 2012",
      "location" : "Davis, CA",
      "title" : "Resident Adviser",
      "description" : "Assist new freshman and transfer students with their academic and personal settlements at UC Davis."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Project 1",
      "dates" : "2016",
      "description" : "This is a responsive website of my portfolio that can interact with different screen sizes, such as laptop, iPad, and smartphone.",
      "images" : ["images/project1.png"]
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  if(bio.skills.length > 0) {
  	$("#header").append(HTMLskillsStart);

  	for(var skill = 0; skill < bio.skills.length; skill++) {
  		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  	}
  }

  for(var contact = 0; contact < formattedContactInfo.length; contact++) {
  	$("#topContacts").append(formattedContactInfo[contact]);
  	$("#footerContacts").append(formattedContactInfo[contact]);
  }
};

bio.display();

work.display = function() {
  for (var job = 0; job < work.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
  }
};

work.display();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(var project = 0; project < projects.projects.length; project++) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(var img = 0; img < projects.projects[project].images.length; img++) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var school = 0; school < education.schools.length; school++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
      for (var major = 0; major < education.schools[school].majors.length; major++) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var course = 0; course < education.onlineCourses.length; course++) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};

education.display();

$("#mapDiv").append(googleMap);
