export const data = {
  main: {
    name: "Hussein Maziad",
    occupation: "Computer Engineer",
    description:
      "I am passionate about developing complex software using optimized and high performance algorithms ",
    image: "profile-pic.PNG",
    bio:
      "Hussein Maziad has graduate from the Lebanese American University with a B.E in Computer Engineerin. He completed a year-long internship at European Organization for Nuclear Research (CERN) where he worked with international teammates, assisted in multiple projects, and led all IT related issues encountered by his team. Hussein also was an exchange student and went to the United States for an academic year when he was 16 years old and later was invited again to Washington DC where he instructed the next generation of exchange students.",
    contactmessage: "Kindly fill the below details to contact me.",
    email: "husseinmaziad@gmail.com",
    phone: "+96178989864",
    address: {
      street: "",
      city: "Beirut, Lebanon",
      state: "",
      zip: "",
    },
    website: "http://www.husseinmaziad.com",
    resumedownload:
      "https://lauedu74602-my.sharepoint.com/:w:/g/personal/hussein_maziad_lau_edu/EVaZEKgEriRMh52YFuIIirsBOcJcLiUTYqsZDKYo4x22og?e=Kb7wOu",
    social: [
      {
        name: "whatsapp",
        url: "https://wa.me/96178989864",
        className: "fa fa-whatsapp",
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/HMaziad",
        className: "fa fa-facebook",
      },

      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/hmaziad/",
        className: "fa fa-linkedin",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/h.maziad/",
        className: "fa fa-instagram",
      },
      {
        name: "github",
        url: "https://github.com/hmaziad/",
        className: "fa fa-github",
      },
    ],
  },
  resume: {
    skillmessage: "Below are some of the skills that I am proficient in",
    education: [
      {
        school: "Lebanese American University",
        degree: "Bachelor of Engineering in Computer Engineering",
        graduated: "December 2020",
        description: "GPA 3.61",
      },
    ],
    work: [
      {
        company: "European Organization for Nuclear Research - CERN",
        title: "Software Developer / Technical Coordinator",
        years: "06/2018 – 06/2019",
        description:
          "• Software Development: My highest priority task is the maintenance and enhancement of ACT (Activity Coordination Tool), a java written software, which validates, coordinates and organizes access and work requests in the Compact Muon Solenoid (CMS) Experiment. In addition, I monitor and improve ACT processes. I also forecast software risks and threats and work on risk management. Finally, I maintain and develop various websites as the need arises.\n •  Management Coordination: As a coordinator in the Experimental Area Management (EAM) team, I take part in the management of ensuring that all operations, speciﬁcally the coordination of construction projects, outreach endeavors, and data transfer within the team and to non-CERN people (contractors, politicians, universities etc.) are running eﬃciently. I also ensure the timely implementation of all related activities and that deadlines are met.\n •  Partners Relations: As interface between CERN/CMS and Lebanon, I oversee in-house role in High Performance Computing in Lebanon (HPC-Lebanon) project and link with the Lebanese Ministry of Telecommunications, politicians, and other partners. I assist in the revision of the collaboration agreement between CERN and the Lebanese parties. Moreover, I participate and conduct meetings to discuss projects' impediments, assumptions, needed resources or issues/delays in completing the planned tasks.",
      },
      {
        company: "American Councils - US Department of State",
        title: "Instructor for International Exchange Students",
        years: "07/2016 – 07/2016",
        description:
          "• Assist the Orientation Teacher in preparing YES participants for their exchange experience using materials provided by American Councils/DC administrative staff\n • Plan orientation sessions together with the DC orientation team\n • Teach YES students in English about American culture and family life, and the program expectations for YES participants\n • Facilitate the arrival to and departure from Washington Dulles International Airport of large groups of YES students",
      },
      {
        company: "Wahib Darwish and Sons",
        title: "Electrical Technician",
        years: "07/2016 – 07/2016",
        description:
          "• Assemble and install electrical wiring and equipment (Circuit breakers, LED light lamps, internet plugs, and telephone plugs)\n • Assist in planning electrical wiring for well-functioning and effective lighting\n •  Read and interpret drawings, blueprints and schematics.",
      },
    ],
    skills: [
      {
        name: "Java (Data Structures, Algorithms, and Design Patterns)",
        level: "50%",
      },
      {
        name: "ReactJs",
        level: "50%",
      },
      {
        name: "React Native",
        level: "50%",
      },
      {
        name: "NodeJS",
        level: "80%",
      },
      {
        name: "Git",
        level: "60%",
      },
      {
        name: "MongoDB",
        level: "80%",
      },
      {
        name: "MySQL",
        level: "80%",
      },
      {
        name: "Redux",
        level: "80%",
      },
      {
        name: "Raspberry Pi",
        level: "80%",
      },
      {
        name: "PIC18F4550",
        level: "80%",
      },
      {
        name: "Flask",
        level: "80%",
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title:
          "Semi-structured Data Warehousing Application Tool With a Custom Document Comparison and Differencing Tool ",
        category: "Software",
        image: "xml.jpg",
        url: "",
        content: {
          description:
            "Part of a team in implementing an semi-structured document comparison (tree edit distance) and differencing (patching) tool, which can be applied on different kinds of semi-structured documents consisting mainly of textual content (e.g., publications, reports, health records). My main tasks include:",
          list: [
            "Designing the baseline structure of the tool",
            "Experimenting and testing the different approaches using XML dom library in Python",
            "Designing and implementing the GUI using Python's tkinter library",
          ],
          video: "",
          images: [
            "https://drive.google.com/uc?export=download&id=155r_z46uCbDvu32CldLRi0uAVjkpH8B5",
          ],
        },
      },
      {
        title: "Research in Natural Language Understanding",
        category: "Reserach",
        image: "nlp.jpg",
        url: "",
        content: {
          description:
            "Part of a team in finding pre-processing techniques for end-to-end trainable RNN-based conversational AI which is aimed to narrow down to the best technique to represent natural input and output language before being fed to a recurrent neural network. My tasks included:",
          list: [
            "Integrating a knowledge base to the dataset",
            "Running rigorous tests to the compare the different approaches",
          ],
          video: "",
          images: [],
        },
      },
      {
        title: "Pet Rover",
        category: "Hardware",
        image: "pet-rover-preview.jpg",
        url: "",
        content: {
          description:
            "Part of a team in implementing an pet-like rover which detects a colored ball, fetches it, and returns it back to the starting point. The rover uses a Raspberry Pi to process the images and send commands to the PIC, ultra sonic sensors, and the motors. My tasks included:",
          list: [
            "Integrating the LCD with the PIC and programming it to show text",
            "Designing the prototype of the pet rover",
            "Debugging the C code programmed at the PIC and the python code written in the Raspberry Pi",
            "Programming the PIC to act as an Analogue to Digital converter of the data coming from the ultra-sonic sensor",
          ],
          video: "https://www.youtube-nocookie.com/embed/azzAAULS5vo",
          images: [],
        },
      },
      {
        title: "Smart Obviation Sprinkler SOS",
        category: "Full-stack + Hardware",
        image: "sos_preview.jpg",
        url: "",
        content: {
          description:
            "Part of a team in implementing an automated fire sprinkler which shoots water at fire instead of traditional sprinkling. The advantage of the SOS is that not only it protects humans lives, but also protects expensive properties and equipment. My tasks included:",
          list: [
            "Implementing a RESTful API with ExpressJS and NodeJS.",
            "Developing the front-end with ReactJS using a template from 'Creative Tim'",
            "Programming the Raspberry pi to receive commands from front-end and transmit commands to the backend and the hardware components",
            "Programming the PIC to act as an Analogue to Digital converter of the data coming from the smoke sensor",
            "Programming the PIC to forward commands to the buzzer",
            "Integrating all the components together (sensors, raspberry pi, front-end, and back-end",
          ],
          video: "https://www.youtube-nocookie.com/embed/pzXlypCeT68",
          images: [],
        },
      },
      {
        title: "Vidly Virtual Movie Store Website",
        category: "Full-stack",
        image: "vidly_preview.jpg",
        url: "http://vidly.husseinmaziad.com",
        content: {
          description:
            "Independently developed website during spare time to learn full stack web development using modern JavaScript. ExpressJS framework was used to implement the back-end with ReactJS library as the front-end. The personal objectives achieved through the tutorial were :",
          list: [
            "Implementing a RESTful API back-end with ExpressJS.",
            "Performing CRUD operations using NOSQL db (Mongoose).",
            "Applying User authentication and authorization in parallel with data validation.",
            "Handling and logging errors, and unit testing the code with jest library.",
            "Composing components, pagination, ﬁltering, and sorting.",
            "Creating forms, routing, and calling backend services.",
            "Ensuring component reusability and code duplication removal.",
            "Continuously deploying the application on a cloud provider (Heroku).",
          ],
          video: "https://www.youtube-nocookie.com/embed/Py458lM7okw",
          images: [],
        },
      },
      {
        title: "LHCreate - Coordination/Web Development",
        category: "Drupal Website",
        image: "lhcreate-portfolio.jpg",
        url: "http://lhcreate.web.cern.ch/",
        content: {
          description:
            "Part of team in coordinating the LHCreate Event. LHCreate is a 2-day hackathon which brings together CERN personnel (scientists, engineers, admins, …) with design students and challenge them to build prototypes that explain to the public what we do at CERN. My responsibilities were to:",
          list: [
            "Create and design the LHCreate website with Drupal",
            "Specify coordination team requirements and synchronize their activities",
            "Provide operational support and guidance to participating teams.",
            "Conduct pre and post hackathon evaluations and report on outcomes",
          ],
          video: "",
          images: [
            "http://lhcreate.web.cern.ch/lhcreate/sites/lhcreate.web.cern.ch/files/images/2018/4.JPG",
            "http://lhcreate.web.cern.ch/lhcreate/sites/lhcreate.web.cern.ch/files/images/2018/Photos/1.JPG",
            "http://lhcreate.web.cern.ch/lhcreate/sites/lhcreate.web.cern.ch/files/images/2018/Photos/16.jpg",
          ],
        },
      },
      {
        title: "Memory Tile Game - Digital Systems",
        category: "Hardware",
        image: "digital.jpg",
        url: "",
        content: {
          description:
            "Part of team in designing and coding a complete game with PS2 Keyboard as input and VGA as output. The components were coded in VHDL on an FPGA and mapped on Quartus. The Memory Tile Game behaves as follows:",
          list: [
            "Each player has a turn in using the keyboard and as a result each enters their name.",
            "Initially, there are 16 pictures of football players shown for 3 seconds and then hidden. The game starts...",
            "Player 1 begins by opening two hidden boxes and gains 1 point since the pictures are similar. Player 2 takes over, and also gains a point.",
            "If a player does not hit two similar boxes, no score is added and the boxes are hidden again. A Player with a win streak of 3, gains a bonus point.",
          ],
          video: "https://www.youtube-nocookie.com/embed/DHctjGbTBWU",
          images: [],
        },
      },
      {
        title: "Car Parking System - Logic Design:",
        category: "Hardware",
        image: "logic.jpg",
        url: "",
        content: {
          description:
            "Part of a team in designing and implementing a parking system that detects the changes of the number of cars using buttons, switches, logic gates, counters, 7 segment displays. The parking system behaves as follows:",
          list: [
            "Initially, the green led light is lit, signalling that the park is empty. As cars enter, the 7-segment display shows a counter that increments with each car. It cannot decrement below 0.",
            "When the number of cars is 5, the orange light is lit, signalling that the park is semi-full.",
            "When the number of cars reaches 10. The park has no more spaces available. Hence the counter reaches the limit of 10. A red light is lit, and “FULL” is written on a 7-segment.",
          ],
          video: "https://www.youtube-nocookie.com/embed/OSGtJy7JRZ8",
          images: [],
        },
      },
      {
        title: "CMS lift screen website:",
        category: ".Net Project",
        image: "cms-lift.jpg",
        url: "",
        content: {
          description:
            "Independently developed a website which displays information of the day by day schedule, disruptions, and interventions that affects CERN/CMS personnel . Moreover, safety instructions slides and videos are played to continuously remind the personnel what to do in case of emergencies. The website is displayed on 5 screens around the CMS point 5 site. The website was implemented using ASP.NET framework:",
          list: [],
          video: "",
          images: [
            "https://drive.google.com/uc?export=download&id=1wNvYU7_uDSsmseAWvCjFG1BRI9iJUVtJ",
          ],
        },
      },
    ],
  },
  testimonials: {
    testimonials: [
      {
        text:
          "Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
        user: "Kareem Abdul Jabbar",
      },
      {
        text:
          "That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
        user: "Steve Wozniak... impersonator",
      },
    ],
  },
};
