import BookiCover from '../my-portfolio//assets/projects/booki.png';
import BluelCover from '../assets/projects/sophiebluel.png';
import KasaCover from '../assets/projects/kasa.png';
import PortfolioCover from '../assets/projects/portfolio.png';
import EteindezCover from '../assets/projects/eteindez.png';

import booki01 from '../my-portfolio//assets/projects/booki01.png';
import booki02 from '../assets/projects/projects/booki02.png';

import sophiebluel01 from '../my-portfolio//assets/projects/sophiebluel01.png';
import sophiebluel02 from '../my-portfolio//assets/projects/sophiebluel02.png';
import sophiebluel03 from '../my-portfolio//assets/projects/sophiebluel03.png';
import sophiebluel04 from '../my-portfolio//assets/projects/sophiebluel04.png';
import sophiebluel05 from '../my-portfolio//assets/projects/sophiebluel05.png';
import sophiebluel06 from '../my-portfolio//assets/projects/sophiebluel06.png';
import sophiebluel07 from '../my-portfolio//assets/projects/sophiebluel07.png';

import kasa01 from '../assets/projects/kasa01.png';
import kasa02 from '../assets/projects/kasa02.png';
import kasa03 from '../assets/projects/kasa03.png';
import kasa04 from '../assets/projects/kasa04.png';

import portfolio01 from '../assets/projects/portfolio01.png';
import portfolio02 from '../assets/projects/portfolio02.png';
import portfolio03 from '../assets/projects/portfolio03.png';

import eteindez01 from '../assets/projects/eteindez01.png';
import eteindez02 from '../assets/projects/eteindez02.png';
import eteindez03 from '../assets/projects/eteindez03.png';
import eteindez04 from '../assets/projects/eteindez04.png';


export default [
	{
		"id": "2b",
		"title": "OpenClassrooms - Projet n°2",
		"subtitle": "Création d'une page d'accueil d'une agence de voyage avec HTML & CSS",
		"cover": BookiCover,
		"pictures": [
			booki01,
			booki02
		],
		"description": "Intégration responsive de la maquette de Booki, site d'agence de voyage.",
		"skills": ["HTML5", "CSS3", "Responsive Design"],
		"pagelink": "https://gizmopedia1.github.io/OpenClassrooms-Project02/",
		"github": "https://github.com/Gizmopedia1/OpenClassrooms-Project02",
		"objectives": [
			"Intégration du contenu selon la maquette",
			"Mise en place du responsive design"		
		]
	},
	{
		"id": "3c",
		"title": "OpenClassrooms - Projet n°3",
		"subtitle": "Création d'une page web dynamique avec JavaScript",
		"cover": BluelCover,
		"pictures": [
			sophiebluel01,
			sophiebluel02,
			sophiebluel03,
			sophiebluel04,
			sophiebluel05,
			sophiebluel06,
			sophiebluel07
		],
		"description": "Développement de la page de présentation des travaux d'une architecte, de la page de connexion administrateur et d'une modale permettant d'uploader de nouveaux médias.",
		"skills": ["HTML5", "CSS3", "Javascript"],
		"github": "https://github.com/Gizmopedia1/OpenClassrooms-Project03",
		"objectives": [
			"Affichage dynamique des travaux depuis une API",
			"Ajout dynamique de filtres d'affichage des travaux",
			"Intégration d'une page de formulaire et authentification de l'utilisateur",
			"Création d'une fenêtre modale permettant l'ajout et la suppression de travaux à l'API"
		]
	},
	{
		"id": "5e",
		"title": "OpenClassrooms - Projet n°5",
		"subtitle": "Création d'une application web de location immobilière avec React",
		"cover": KasaCover,
		"pictures": [
			kasa01,
			kasa02,
			kasa03,
			kasa04
		],
		"description": "Création d'une application web avec React pour un site de location d'appartements. L'affichage de chaque location est dynamique.",
		"skills": ["React.js", "Vite", "Sass", "Responsive Design"],
		"pagelink": "https://gizmopedia1.github.io/OpenClassrooms-Project05/",
		"github": "https://github.com/Gizmopedia1/OpenClassrooms-Project05",
		"objectives": [
			"Création du routeur",
			"Création des différentes pages de l'appication",
			"Création d'un carrousel dans la page de logement",
			"Gestion des erreurs et de la page 404",
			"Mise en place du responsive design"
		]
	},
	{
		"id": "6f",
		"title": "Mon portfolio",
		"cover": PortfolioCover,
		"pictures": [
			portfolio01,
			portfolio02,
			portfolio03
		],
		"description": "Réalisation de mon portfolio dans le cadre de la fin de ma formation.",
		"pagelink": "https://gizmopedia1.github.io/my-portfolio/",
		"github": "https://github.com/Gizmopedia1/my-portfolio",
		"skills": ["React.js", "Vite", "Sass", "Adobe Photoshop", "Responsive Design"],
		"objectives": [
			"Création du routeur",
			"Création de la modale",
			"Création d'un carrousel dans la modale de projet",
			"Mise en place du responsive design"
		]

	},
	{
		"id": "7g",
		"title": "Eteindez la lumière",
		"subtitle": "Podcast sur le cinéma",
		"cover": EteindezCover,
		"pictures": [
			eteindez01,
			eteindez02,
			eteindez03,
			eteindez04		
		],
		"description": "Projet personnel. Je suis co-créateur et co-animateur de ce podcast depuis 2016. J'ai conçu ce site avec l'outil CMS de Wordpress afin de répertorier tous les épisodes réalisés ainsi que des blogs, des vidéos et autres créations.",
		"pagelink": "https://eteindezlalumiere.com/",
		"skills": ["Wordpress", "Adobe Photoshop", "Adobe Audition", "Adobe Premiere Pro", "Responsive Design"]
	}
]