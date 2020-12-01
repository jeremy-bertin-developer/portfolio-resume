import { LinkSideNavbar } from './models/link-side-navbar';
import { ResumeCardTestimonies } from './models/resume-card-testimonies';
import { ResumeCardLanguages } from './models/resume-card-languages';
import { HobbiesLogo } from './models/hobbies-logo';
import { ResumeCardStudies } from './models/resume-card-studies';
import { ProgrammingLanguagesLogo } from './models/programming-languages-logo';
import { ResumeCardCoursesTrainings } from './models/resume-card-courses-trainings';
import { CardResumeProfesionalExperiences } from './models/card-resume-profesional-experiences';
import { ResumeTitle } from './models/resume-title';
import { ProfileAvatar } from './models/profile-avatar';
import { ProfileSkills } from './models/profile-skills';
import { Constants } from './constants';
import { Image } from './models/image';
import { Project } from './models/project';

export class DataBase {
  public static logosLanguage: Image[] = [
    {
      src: 'assets/images/logo-js.png',
      alt: 'Javascript Logo',
      type: Constants.PORJECT_TYPE_JAVASCRIPT
    },
    {
      src: 'assets/images/logo-html-css.png',
      alt: 'Html & Css logo',
      type: Constants.PORJECT_TYPE_HTML_CSS
    },
    {
      src: 'assets/images/logo-jquery.png',
      alt: 'jQuery Logo',
      type: Constants.PROJECT_TYPE_JQUERY
    },
    {
      src: 'assets/images/logo-bootstrap.png',
      alt: 'Bootstrap Logo',
      type: Constants.PROJECT_TYPE_BOOTSTRAP
    },
    {
      src: 'assets/images/logo-react.png',
      alt: 'React Logo',
      type: Constants.PROJECT_TYPE_REACT
    },
    {
      src: 'assets/images/logo-angular.png',
      alt: 'Angular Logo',
      type: Constants.PROJECT_TYPE_ANGULAR
    },
    {
      src: 'assets/images/logo-java.png',
      alt: 'Java Logo',
      type: Constants.PROJECT_TYPE_JAVA
    },
    {
      src: 'assets/images/logos-php.png',
      alt: 'Php Logo',
      type: Constants.PROJECT_TYPE_PHP
    },
    {
      src: 'assets/images/logos-api.png',
      alt: 'Api Logo',
      type: Constants.PROJECT_TYPE_API
    }
  ];

  public static projects: Project[] = [
    {
      alt: 'Picture of a Youtube Browser Clone',
      title: 'Youtube Clone',
      projectType: [
        Constants.PROJECT_TYPE_REACT,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP,
        Constants.PROJECT_TYPE_API
      ],
      class: 'card card-project card-project-youtube-clone',
      isShown: null
    },
    {
      alt: 'Picture of an Interface to generate randomly a password',
      title: 'Random Password Generator',
      projectType: [
        Constants.PROJECT_TYPE_REACT,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP,
        Constants.PROJECT_TYPE_API
      ],
      class: 'card card-project card-project-random-password',
      isShown: null
    },
    {
      alt: 'Picture of an Interface for chat messenger',
      title: 'Chatbox',
      projectType: [Constants.PROJECT_TYPE_REACT, Constants.PORJECT_TYPE_HTML_CSS, Constants.PROJECT_TYPE_BOOTSTRAP],
      class: 'card card-project card-project-chat-box',
      isShown: null
    },
    {
      alt: 'Picture of an Interface for species classification',
      title: 'Species Classification',
      projectType: [
        Constants.PROJECT_TYPE_REACT,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP,
        Constants.PROJECT_TYPE_API
      ],
      class: 'card card-project card-project-species',
      isShown: null
    },
    {
      alt: 'Picture of the Simpson family',
      title: 'The Simpsons',
      projectType: [
        Constants.PROJECT_TYPE_REACT,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP,
        Constants.PROJECT_TYPE_API
      ],
      class: 'card card-project card-project-simpsons',
      isShown: null
    },
    {
      alt: 'Picture of an interface to generate random groups',
      title: 'Random Groups Generator',
      projectType: [Constants.PROJECT_TYPE_REACT, Constants.PORJECT_TYPE_HTML_CSS, Constants.PROJECT_TYPE_BOOTSTRAP],
      class: 'card card-project card-project-random-group',
      isShown: null
    },
    {
      alt: 'Picture of an interface that is a clone of Yelp website',
      title: 'Ravenous Yelp Clone',
      projectType: [Constants.PORJECT_TYPE_HTML_CSS, Constants.PROJECT_TYPE_REACT, Constants.PROJECT_TYPE_API],
      class: 'card card-project card-project-ravenous',
      isShown: null
    },
    {
      alt: 'Picture of the interface from the website Unsplash',
      title: 'Unsplash Clone',
      projectType: [
        Constants.PORJECT_TYPE_JAVASCRIPT,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP,
        Constants.PROJECT_TYPE_API
      ],
      class: 'card card-project card-project-unsplash-clone',
      isShown: null
    },
    {
      alt: 'A snake game',
      title: 'Snake game',
      projectType: [Constants.PORJECT_TYPE_JAVASCRIPT],
      class: 'card card-project card-project-snake',
      isShown: null
    },
    {
      alt: 'Picture from New York City',
      title: '1980 House Recordings',
      projectType: [
        Constants.PORJECT_TYPE_JAVASCRIPT,
        Constants.PROJECT_TYPE_JQUERY,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP
      ],
      class: 'card card-project card-project-1980',
      isShown: null
    },
    {
      alt: 'Picture of a canvas',
      title: 'Canvas',
      projectType: [Constants.PORJECT_TYPE_HTML_CSS],
      class: 'card card-project card-project-canvas-tag',
      isShown: null
    },
    {
      alt: 'Picture of a Burger',
      title: 'Gogi Burger',
      projectType: [Constants.PORJECT_TYPE_JAVASCRIPT, Constants.PORJECT_TYPE_HTML_CSS, Constants.PROJECT_TYPE_BOOTSTRAP],
      class: 'card card-project card-project-gogi-burger',
      isShown: null
    },
    {
      alt: 'Picture of a Woman Smiling',
      title: 'Laetitia Hypnose',
      projectType: [
        Constants.PORJECT_TYPE_JAVASCRIPT,
        Constants.PROJECT_TYPE_JQUERY,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP
      ],
      class: 'card card-project card-project-laetitia-hypnose',
      isShown: null
    },
    {
      alt: 'Picture of the interface from the website Giphy',
      title: 'Giphy Clone',
      projectType: [
        Constants.PORJECT_TYPE_JAVASCRIPT,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP,
        Constants.PROJECT_TYPE_API
      ],
      class: 'card card-project card-project-giphy-clone',
      isShown: null
    },
    {
      alt: 'Picture of the interface to generate random quotes from Chuck Norris',
      title: 'Chuck Norris Quotes',
      projectType: [
        Constants.PORJECT_TYPE_JAVASCRIPT,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP,
        Constants.PROJECT_TYPE_API
      ],
      class: 'card card-project card-project-chuck-norris-quotes',
      isShown: null
    },
    {
      alt: 'Picture of the interface to generate random quotes',
      title: 'Random Quotes',
      projectType: [
        Constants.PORJECT_TYPE_JAVASCRIPT,
        Constants.PORJECT_TYPE_HTML_CSS,
        Constants.PROJECT_TYPE_BOOTSTRAP,
        Constants.PROJECT_TYPE_API
      ],
      class: 'card card-project card-project-random-quotes',
      isShown: null
    },
    // {
    //   alt: 'Picture of a man djing',
    //   title: 'PB DJ',
    //   projectType: [Constants.PROJECT_TYPE_JQUERY, Constants.PORJECT_TYPE_HTML_CSS, Constants.PROJECT_TYPE_BOOTSTRAP],
    //   class: 'card card-project card-project-philippe-beaulieu',
    //   isShown: null
    // },
    {
      alt: 'Picture of a map',
      title: 'World Bucket List',
      projectType: [Constants.PORJECT_TYPE_HTML_CSS, Constants.PROJECT_TYPE_BOOTSTRAP, Constants.PROJECT_TYPE_API],
      class: 'card card-project card-project-world-bucket-list',
      isShown: null
    },
    {
      alt: 'Picture of a form',
      title: 'Form',
      projectType: [Constants.PORJECT_TYPE_HTML_CSS, Constants.PROJECT_TYPE_BOOTSTRAP, Constants.PROJECT_TYPE_PHP],
      class: 'card card-project card-project-form',
      isShown: null
    },
    {
      alt: 'Picture of five actresses',
      title: 'Top 5 Actresses',
      projectType: [Constants.PORJECT_TYPE_HTML_CSS, Constants.PROJECT_TYPE_JQUERY],
      class: 'card card-project card-project-top-five-actresses',
      isShown: null
    },
    {
      alt: 'Picture of an interface to look for travels',
      title: 'Travel Agency',
      projectType: [Constants.PORJECT_TYPE_HTML_CSS],
      class: 'card card-project card-project-travel-agency',
      isShown: null
    },
    {
      alt: 'Picture of an interface that is showing forcast',
      title: 'Wanderlust Forecast',
      projectType: [Constants.PORJECT_TYPE_HTML_CSS, Constants.PORJECT_TYPE_JAVASCRIPT, Constants.PROJECT_TYPE_API],
      class: 'card card-project card-project-wanderlust',
      isShown: null
    }
  ];

  public static profileSkills: ProfileSkills[] = [
    {
      paragraph: 'Creative'
    },
    {
      paragraph: 'Eager to learn'
    },
    {
      paragraph: 'Patient'
    },
    {
      paragraph: 'Solution Oriented'
    },
    {
      paragraph: 'Team Worker and motivated by the results.'
    }
  ];

  public static profileAvatars: ProfileAvatar[] = [
    {
      src: '../assets/images/logo.avatar.creative.png'
    },
    {
      src: '../assets/images/logo.avatar.patient.png'
    },
    {
      src: '../assets/images/logo.avatar.solution.oriented.png'
    },
    {
      src: '../assets/images/logo.avatar.motivated.team.player.png'
    }
  ];

  public static resumeTitle: ResumeTitle[] = [
    {
      componentName: 'profile',
      titleLogo: {
        titleName: 'Profile',
        src: '../assets/images/logo.avatar.me.png'
      }
    },
    {
      componentName: 'profesionalXp',
      titleLogo: {
        titleName: 'Profesional Experiences',
        src: 'assets/images/logo.prof.xp.png'
      }
    },
    {
      componentName: 'coursesTrainings',
      titleLogo: {
        titleName: 'Courses & Trainings',
        src: 'assets/images/logo.courses.trainings.png'
      }
    },
    {
      componentName: 'programmingLanguages',
      titleLogo: {
        titleName: 'Programming Languages & Technical Skills',
        src: 'assets/images/logo.code.png'
      }
    },
    {
      componentName: 'studies',
      titleLogo: {
        titleName: 'Studies',
        src: 'assets/images/logo.studies.png'
      }
    },
    {
      componentName: 'hobbiesInterests',
      titleLogo: {
        titleName: 'Hobbies & Interests',
        src: 'assets/images/logo.hobbies.png'
      }
    },
    {
      componentName: 'languages',
      titleLogo: {
        titleName: 'Languages',
        src: 'assets/images/logo.languages.png'
      }
    },
    {
      componentName: 'testimonies',
      titleLogo: {
        titleName: 'Testimonies',
        src: 'assets/images/logo.testimonies.png'
      }
    }
  ];

  public static cardResumeProfesionalExperiencesColLeft: CardResumeProfesionalExperiences[] = [
    {
      cardClass: 'card border-0 shadow-lg mb-4 rbi-bg',
      imgSrc: 'assets/images/logo.laptop.png',
      header: 'Trainee Frontend Software Engineer',
      paragraphItalic: 'Raifeisen Bank International, 1190 Vienna',
      paragraph: 'March 2020 - Now'
    },
    {
      cardClass: 'card d-lg-none d-xl-none border-0 shadow-lg mb-4',
      imgSrc: 'assets/images/logo.restaurant.png',
      header: 'Restaurant Manager',
      paragraphItalic: 'MIDI Café &amp; Bistrot, 1010 Vienna',
      paragraph: 'September 2017 - December 2018'
    },
    {
      cardClass: 'card border-0 shadow mb-4',
      imgSrc: 'assets/images/logo.cocktail.png',
      header: 'Bar Manager',
      paragraphItalic: 'Steigenberger Hotel ****, 1010 Vienna',
      paragraph: 'June 2016 - August 2017'
    },
    {
      cardClass: 'card d-lg-none d-xl-none border-0 shadow-lg mb-4',
      imgSrc: 'assets/images/logo.cocktail.png',
      header: 'Bar Manager',
      paragraphItalic: 'IQ Bar, 1010 Vienna',
      paragraph: 'June 2015 - May 2016'
    },
    {
      cardClass: 'card border-0 shadow mb-4',
      imgSrc: 'assets/images/logo.cocktail.png',
      header: 'Barkeeper',
      paragraphItalic: 'Le Zefire Stadtpark & The Ring Hotel ****, 1010 Vienna',
      paragraph: 'April 2014 - May 2015'
    },
    {
      cardClass: 'card d-lg-none d-xl-none border-0 shadow-lg mb-4',
      imgSrc: 'assets/images/logo.skis.png',
      header: 'Skishop Manager',
      paragraphItalic: 'Hotel des Neiges ***, Courchevel, France - Every Winter Seasons',
      paragraph: 'December 2013 — March 2014'
    },
    {
      cardClass: 'card border-0 shadow mb-4',
      imgSrc: 'assets/images/logo.tshirt.png',
      header: 'Specialised saler in thermal underwear and sportswear',
      paragraphItalic: 'Odlo Shop, Courchevel, France - Every Winter Seasons',
      paragraph: 'December 2010 — March 2013'
    },
    {
      cardClass: 'card d-lg-none d-xl-none border-0 shadow-lg mb-4',
      imgSrc: 'assets/images/logo.tshirt.png',
      header: 'Specialised saler in thermal underwear and sportswear',
      paragraphItalic: 'Topscore Shop, Montpellier - Every Sommer Seasons',
      paragraph: 'Mai 2011 — Septembre 2013'
    },
    {
      cardClass: 'card border-0 shadow mb-4',
      imgSrc: 'assets/images/logo.house.png',
      header: 'Sales Manager, Specialised Saler',
      paragraphItalic: 'Brico Depot Rouen, Rennes, France',
      paragraph: '2001 - 2010'
    }
  ];

  public static cardResumeProfesionalExperiencesColRight: CardResumeProfesionalExperiences[] = [
    {
      cardClass: 'card d-none d-sm-none d-md-none d-lg-block d-xl-block border-0 shadow mb-4',
      imgSrc: 'assets/images/logo.restaurant.png',
      header: 'Restaurant Manager',
      paragraphItalic: 'MIDI Café &amp; Bistrot, 1010 Vienna',
      paragraph: 'September 2017 - December 2018'
    },
    {
      cardClass: 'card d-none d-sm-none d-md-none d-lg-block d-xl-block border-0 shadow mb-4',
      imgSrc: 'assets/images/logo.cocktail.png',
      header: 'Bar Manager',
      paragraphItalic: 'IQ Bar, 1010 Vienna',
      paragraph: 'June 2015 - May 2016'
    },
    {
      cardClass: 'card d-none d-sm-none d-md-none d-lg-block d-xl-block border-0 shadow mb-4',
      imgSrc: 'assets/images/logo.skis.png',
      header: 'Skishop Manager',
      paragraphItalic: 'Hotel des Neiges ***, Courchevel, France - Every Winter Seasons',
      paragraph: 'December 2013 — March 2014'
    },
    {
      cardClass: 'card d-none d-sm-none d-md-none d-lg-block d-xl-block border-0 shadow mb-4',
      imgSrc: 'assets/images/logo.tshirt.png',
      header: 'Specialised saler in thermal underwear and sportswear',
      paragraphItalic: 'Topscore Shop, Montpellier - Every Sommer Seasons',
      paragraph: 'Mai 2011 — Septembre 2013'
    }
  ];

  public static cardResumeCoursesTrainings: ResumeCardCoursesTrainings[] = [
    {
      header: 'Codemaster Bootcamp - Talent Garden - Vienna',
      imgSrc: 'assets/images/TAG.logo.png',
      paragraphItalic: 'November 2019 - Februar 2020'
    },
    {
      header: 'Web & Software Development Courses, Udemy',
      imgSrc: 'assets/images/udemy.logo.copie.png',
      paragraphItalic: '2018 - Now'
    },
    {
      header: 'Web Development Courses, Freecodecamp',
      imgSrc: 'assets/images/freecodecamp.logo.copie.png',
      paragraphItalic: '2018 - Now'
    },
    {
      header: 'Full Stack Web Development Course, Codecademy',
      imgSrc: 'assets/images/logo.codecademy.png',
      paragraphItalic: '2018 - Now'
    }
  ];

  public static programmingLanguagesLogos: ProgrammingLanguagesLogo[] = [
    {
      imgSrc: 'assets/images/logo-angular.png',
      header: 'Angular'
    },
    {
      imgSrc: 'assets/images/logo-react.png',
      header: 'React'
    },
    {
      imgSrc: 'assets/images/logo-js.png',
      header: 'javaScript'
    },
    {
      imgSrc: 'assets/images/logo-typescript.png',
      header: 'TypeScript'
    },
    {
      imgSrc: 'assets/images/logo.rxjs.png',
      header: 'RxJs'
    },
    {
      imgSrc: 'assets/images/logo-html-css.png',
      header: 'Html & CSS'
    },
    {
      imgSrc: 'assets/images/logo-jquery.png',
      header: 'jQuery'
    },
    {
      imgSrc: 'assets/images/logo-bootstrap.png',
      header: 'Bootstrap'
    },
    {
      imgSrc: 'assets/images/logo.angular.material.png',
      header: 'Angular Material'
    },
    {
      imgSrc: 'assets/images/logo-java.png',
      header: 'Java'
    },
    {
      imgSrc: 'assets/images/logos-php.png',
      header: 'Php'
    },
    {
      imgSrc: 'assets/images/logo-mocha.png',
      header: 'Mocha'
    },
    {
      imgSrc: 'assets/images/logo.jasmine.copie.png',
      header: 'Jasmine'
    },
    {
      imgSrc: 'assets/images/logo.git.copie.png',
      header: 'Git'
    },
    {
      imgSrc: 'assets/images/github.png',
      header: 'GitHub'
    },
    {
      imgSrc: 'assets/images/logo.npm.png',
      header: 'npm'
    },
    {
      imgSrc: 'assets/images/logo.cmd.line.png',
      header: 'Cmd Line'
    },
    {
      imgSrc: 'assets/images/logos-api.png',
      header: 'Api Integration'
    },
    {
      imgSrc: 'assets/images/logo.responsive.png',
      header: 'Responsive Web Design'
    },
    {
      imgSrc: 'assets/images/logo.ui.ux.png',
      header: 'UI / UX Principles'
    },
    {
      imgSrc: 'assets/images/logo.seo.png',
      header: 'SEO & Speed Optimisation'
    },
    {
      imgSrc: 'assets/images/logo.jira.png',
      header: 'Jira'
    },
    {
      imgSrc: 'assets/images/logo.confluence.png',
      header: 'Confluence'
    },
    {
      imgSrc: 'assets/images/logo.bitbucket.png',
      header: 'Bitbucket'
    }
  ];

  public static resumeCardStudies: ResumeCardStudies[] = [
    {
      imgSrc: 'assets/images/logo.carpentry.png',
      headerTitle: 'Artist Profession School Specialised in Carpentry',
      paragraphOne: 'St Quentin, France',
      paragraphTwo: 'September 1999 - June 2000'
    },
    {
      imgSrc: 'assets/images/logo.carpentry.png',
      headerTitle: 'Carpentry School and Related Materials',
      paragraphOne: 'Rouen, France',
      paragraphTwo: 'May 1997 - June 1999'
    }
  ];

  public static resumeHobbiesLogos: HobbiesLogo[] = [
    {
      imgSrc: 'assets/images/logo.programming.png',
      headerTitle: 'Programming'
    },
    {
      imgSrc: 'assets/images/logo.new.techno.png',
      headerTitle: 'Discovering new technologies'
    },
    {
      imgSrc: 'assets/images/logo.design.png',
      headerTitle: 'Design'
    },
    {
      imgSrc: 'assets/images/logo.gaming.png',
      headerTitle: 'Gaming'
    },
    {
      imgSrc: 'assets/images/logo.records.png',
      headerTitle: 'Records Collector'
    },
    {
      imgSrc: 'assets/images/logo.djing.png',
      headerTitle: 'Djing'
    },
    {
      imgSrc: 'assets/images/logo.music.png',
      headerTitle: 'Music production'
    },
    {
      imgSrc: 'assets/images/logo.reading.png',
      headerTitle: 'Reading'
    },
    {
      imgSrc: 'assets/images/logo.bartending.png',
      headerTitle: 'Mixology & Barkeeping'
    },
    {
      imgSrc: 'assets/images/logo.helping.png',
      headerTitle: 'Helping others'
    },
    {
      imgSrc: 'assets/images/logo.learning.png',
      headerTitle: 'Learning new things'
    },
    {
      imgSrc: 'assets/images/logo.travelling.png',
      headerTitle: 'Travelling'
    }
  ];

  public static resumeCardLanguages: ResumeCardLanguages[] = [
    {
      srcImg: 'assets/images/logo.france.png',
      paragraph: 'Mother tongue'
    },
    {
      srcImg: 'assets/images/logo.england.png',
      paragraph: 'Fluent'
    },
    {
      srcImg: 'assets/images/logo.austria.png',
      paragraph: 'Between B1 & B2'
    },
    {
      srcImg: 'assets/images/logo.russia.png',
      paragraph: 'Currently learning A1'
    }
  ];

  public static resumeCardTestimonies: ResumeCardTestimonies[] = [
    {
      imgSrc: 'assets/images/valentin.buisson.jpeg',
      headerTitle: 'Valentin Buisson',
      paragraphOne: 'Frontend Application Architect Senior Software Engineer',
      paragraphTwo:
        'Jérémy is really motivated and proactive. He is always eager to learn new things and improve himself. I have known him when he was starting to get into computer science and I am impressed by how fast he was learning as he was constantly doing and showing me more and more complex projects he worked on. I really think that kind of attitude will make him a really valuable resource for any company',
      link: 'https://www.linkedin.com/in/valentinbuisson/'
    },
    {
      imgSrc: '../../../assets/images/philippe.beaulieu.jpeg',
      headerTitle: 'Philippe Beaulieu',
      paragraphOne: 'Guest & Service and Quality ManagerThe Ring Hotel Vienna',
      paragraphTwo: 'Jeremy has been always somebody engaged and creative into his work',
      link: 'https://www.linkedin.com/in/philippe-beaulieu-3b458a35/'
    },
    {
      imgSrc: '../../../assets/images/markus.posch.jpg',
      headerTitle: 'Markus Posh',
      paragraphOne: 'Barmanager Steigenberg Hotel',
      paragraphTwo: 'I ve learned interested and creative things with Jeremy',
      link: ''
    },
    {
      imgSrc: '../../../assets/images/harry.mitchell.jpeg',
      headerTitle: 'Harry Mitchell',
      paragraphOne: 'Corporate Leadership TraineeHyatt Regency Sydney',
      paragraphTwo: 'Jeremy helped me to have a good and efficient organisation at work',
      link: 'https://www.linkedin.com/in/harrymitchell10/'
    },
    {
      imgSrc: '../../../assets/images/logo.avatar.max.png',
      headerTitle: 'Maximilian Schegolev',
      paragraphOne: 'General Manager, IQ Bar Wien',
      paragraphTwo: 'Jeremy was very creative, very friendly and was always ready to learn new things',
      link: ''
    },
    {
      imgSrc: '../../../assets/images/americo.da.silva.jpeg',
      headerTitle: 'Americo Da Silva',
      paragraphOne: 'Barmanager Le Zefire Bar – The Ring Hotel Wien',
      paragraphTwo:
        'Mr. Bertin has great leadership, teamwork and organisation skills that he gave in to his work. He showed also great resilience on deadline pressure',
      link: 'https://www.linkedin.com/in/am%C3%A9rico-jos%C3%A9-peixoto-da-silva-a92610a4/'
    }
  ];

  public static linksSideNavbar: LinkSideNavbar[] = [
    {
      sectionId: 'profile',
      linkName: 'Profile'
    },
    {
      sectionId: 'profesional-xp',
      linkName: 'Profesional Experiences'
    },
    {
      sectionId: 'courses-trainings',
      linkName: 'Courses & Trainings'
    },
    {
      sectionId: 'programming-languages',
      linkName: 'Programming Languages & Technical Skills'
    },
    {
      sectionId: 'studies',
      linkName: 'Studies'
    },
    {
      sectionId: 'languages',
      linkName: 'Languages'
    },
    {
      sectionId: 'hobbies-interests',
      linkName: 'Hobbies'
    },
    {
      sectionId: 'testimonies',
      linkName: 'Testimonies'
    }
  ];
}
