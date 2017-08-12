/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Malolan Vasu",
    role: "Software Developer",
    contacts: {
      mobile: "640-444-4445",
      email: "amalolan@gmail.com",
      github: "amalolan",
      twitter: "@amalolan",
      location: "Bangalore, India"
    },
    bioPic: "images/fry.jpg",
    welcomeMsg: "Hello my friends! I am very nice and I will be very nice to all of you!",
    skills: ["Artificial Intelligence", "Python", "Front-end Web development", "Nice guy"]
  },
  projects = {
    projects: [{
        title: "Portfolio",
        dates: "1999-2000",
        description: "Very nice Portfolio. Got a very nice job thanks to it!",
        images: ["images/fry.jpg"]
      },
      {
        title: "Resume",
        dates: "2001-2002",
        description: "Very nice resume. Got me my first resume!!",
        images: ["images/kitten.jpg", "images/amalolan.svg"]
      }
    ]
  },

  work = {
    jobs: [{
        employer: "Udacity",
        title: "Very Nice Course Developer",
        location: "Mountain View, California, USA",
        dates: "in progress",
        description: "Very nice! I developed the FEND course for them along with Cameron. Was very nice working with Cameron. Hopefully, now I get to work side by side with Thrun! :)"
      },
      {
        employer: "Google",
        title: "Very Nice Developer",
        location: "Mountain View, California, USA",
        dates: "2001-2019",
        description: "I think this is very nice and even they think I'm very nice! I made a lot of very nice websites. They gave me a lot of very nice money. Would rate 5/7!"
      }
    ]
  },

  education = {
    schools: [{
        name: "PSSBLLA",
        degree: "High School",
        location: "Bangalore, India",
        dates: "2006-2019",
        url: "https://psbbacademy.org",
        majors: ["High School"]
      },

      {
        name: "MIT",
        degree: "B.S.",
        location: "Cambridge, MA, USA",
        dates: "2019-2023",
        url: "https://web.mit.edu/",
        majors: ["CS", "Math"]

      }
    ],

    onlineCourses: [{
        title: "Udacity Front-End Web Developer Nanodegree",
        school: "Udacity",
        dates: "Aug'17-Sept'17",
        url: "https://udacity.com"
      },
      {
        title: "Artificial Intelligence edx",
        school: "ColumbiaX",
        dates: "Jan'17-Apr'17",
        url: "https://edx.org"
      }
    ]
  };

// Now for the functions
// Display the bio
bio.display = function() {
  // Format all the attributes and declare a few variables
  var formattedName = HTMLheaderName.replace("%data%", bio.name),
      formattedRole = HTMLheaderRole.replace("%data%", bio.role),
      formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic),
      formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg),
      skillsStart = HTMLskillsStart,
      formattedskills = [],
      formattedcontacts = [],
      contact,
      formattedcontact,
      formattedskill;
  // Finishing up the arrays
  // Using jQuery.each to create a contact arrray using HTMLcontactGeneric
  $.each(bio.contacts, function(key, value){
    contact = HTMLcontactGeneric.replace("%contact%", key);
    formattedcontact = contact.replace("%data%", bio.contacts[key]);
    formattedcontacts.push(formattedcontact);
  });
  // Using for each to create a skill array
  bio.skills.forEach( function(value) {
    formattedskill = HTMLskills.replace("%data%", value);
    formattedskills.push(formattedskill);
  });
  // It's time to add everything to the HTML
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedbioPic);
  $("#header").append(formattedwelcomeMsg);
  $("#header").append(skillsStart);
  // Loop through skill array and add to html
  formattedskills.forEach( function(skill) {
    $("#skills").append(skill);
  });
  // Add contacts to the topContactsand footerContacts
  formattedcontacts.forEach( function(contact) {
    $("#topContacts").append(contact);
    $("#footerContacts").append(contact);
  });
};
bio.display();

// Display the work
work.display = function() {
  // Declare a few variables
  $("#workExperience").append(HTMLworkStart);
  // Since work is an array of lists, it would be more
  // readable if we add the formatted variables right after we make them unlike
  // how we did it in bio.display()

  work.jobs.forEach( function(job) {
    // Format and declare the variables
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%",job.employer),
        formattedworkTitle = HTMLworkTitle.replace("%data%", job.title),
        formattedworkDates = HTMLworkDates.replace("%data%", job.dates),
        formattedworkDescription = HTMLworkDescription.replace("%data%", job.description),
        formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
    // Add them to the HTML

    $(".work-entry").append(formattedworkEmployer + formattedworkTitle);
    $(".work-entry").append(formattedworkLocation);
    $(".work-entry").append(formattedworkDates);
    $(".work-entry").append(formattedworkDescription);

  });
  // And that's it!!
};
work.display();

// Display the Projects just like work.display()
projects.display = function () {
  $("#projects").append(HTMLprojectStart);
  // Format and declare the variables except for images
  projects.projects.forEach( function(project) {
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title),
        formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates),
        formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
    // Add them to the HTML
    $(".project-entry").append(formattedprojectTitle);
    $(".project-entry").append(formattedprojectDates);
    $(".project-entry").append(formattedprojectDescription);
    project.images.forEach( function(image) {
      // Note: In the helper file, I added the class project-images to these images to later format in the css file
      // Format and add the images
      formattedimage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry").append(formattedimage);
    });
  });
  // And that's it!!
};
projects.display();

// And finally the education
education.display =  function() {
  $("#education").append(HTMLschoolStart);
  // For each of the schools, add to the HTML
  education.schools.forEach( function(school) {
    // Declare all the variables except for majors
    var formattedschoolName = HTMLschoolName.replace("%data%", school.name),
        formattedDegree = HTMLschoolDegree.replace("%data%", school.degree),
        formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates),
        formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    // Add them to the HTML
    $(".education-entry").append(formattedschoolName + formattedDegree);
    $(".education-entry").append(formattedschoolDates);
    $(".education-entry").append(formattedschoolLocation);
    school.majors.forEach( function(major) {
      var formattedmajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry").append(formattedmajor);
    });
  });
  // Once the schools are over, time for online courses
  $(".education-entry").append(HTMLonlineClasses);
  education.onlineCourses.forEach( function(course) {
    // Declare and format
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title),
        formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school),
        formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates),
        formatttedonlineURL = HTMLonlineURL.replace("%data%", course.url);

    //Add them to the HTML
    $(".education-entry").append(formattedonlineTitle);
    $(".education-entry").append(formattedonlineSchool);
    $(".education-entry").append(formattedonlineDates);
    $(".education-entry").append(formatttedonlineURL);
  });
};
education.display();

//finally append the google maps string
$("#mapDiv").append(googleMap);
// THE END!!
