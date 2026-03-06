import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SectionTitle from './components/SectionTitle';
import ComicCard from './components/ComicCard';
import CountDown from './components/CountDown';
import { Guest, DaySchedule } from './types';
import { Calendar, MapPin, User, Star, Mic, PenTool, Mail, Facebook, Instagram, Send, Download, Camera, ExternalLink, Map, Twitter, MessageCircle, Cloud, Zap, Heart, FileText } from 'lucide-react';

// --- DATA ---
import { IMAGES } from "./data/images";

// --- REPORT COMPONENTS ---
import {
  Page1_Cover,
  Page2_Intro,
  Page3_Events,
  Page4_WinnersJuniors,
  Page5_WinnersSeniors,
  Page6_ResultsClosing,
  Page7_Images1,
  Page8_Images2,
  Page9_Comics,
  Page10_Images3,
  Page11_Images4,
  Page12_Images5,
  Page13_Images6,
  Page14_Images7,
  Page15_Workshop,
  Page16_Partners,
  Page17_Footer
} from './components/ReportPages';

const guests: Guest[] = [
  { id: '1', name: 'Daniel COURIOL', country: 'France', role: 'Auteur / Consultant', imageUrl: IMAGES.DANIEL, bio: `Diplômé de l'Institut d'études politiques de Lyon et Licencié en Histoire, il a été
attaché de presse au Festival Berlioz de Lyon et à la Biennale de la danse de Lyon,
directeur de la communication de l'Opéra National de Lyon, de l'Opéra-Théâtre de
Saint-Etienne, du Festival Massenet. Daniel Couriol a dirigé la Maison de la Culture
Le Corbusier de Firminy tout en étant directeur de la culture puis directeur des
services à la population de la Ville de Firminy. Il a ainsi coordonné la mise en place du
dossier de classement du deuxième site mondial Le Corbusier au Patrimoine mondial
de l'Humanité.(Unesco). De 1987 jusqu'en 2006, il a été chargé de cours à l'Université de Saint-
Etienne. il a été Consultant en stratégie culturelle et création d'événements à Paris de 2006 à Août
2011 comme fondateur de Couriol Consulting tout en étant Professeur d'Université associé à l'Ecole
Nationale d'Ingénieurs de Saint-Etienne en Lettres et Sciences Humaines jusqu'en Août 2011. Il a
occupé les fonctions de directeur du Centre culturel franco-guinéen à Conakry du mois de Septembre
2011 jusqu'au mois de Septembre 2016 pour le compte du Ministère français des Affaires Etrangères.
Il est membre de l'Association des Ecrivains de Guinée, membre de la SACEM. En Novembre 2022, il est
nommé Conseiller pour le dialogue interculturel dans le cadre du DenimClub du G100 et,en Avril 2025,
Global Partner Mother's Army All Ladie League. Officier des Palmes Académiques, Médaillé d'Honneur
du Ministère français des Affaires étrangères, de la Grande Pologne, il a remporté les Guinée Music
Awards en 2012 et reçu en 2016 l'Attestation de Reconnaissance de l'Organisation internationale de la
Francophonie pour son travail sur le Théâtre en Guinée. En Décembre 2022, il reçoit l'Award
Exceptional Leaders of Excellence décerné par le Women Economic Forum 2022 - New Delhi - G100- All
Ladies League - Woman's Indian Chamber of Commerce and Industry. En Mars 2023, il se voit décerner
la médaille du Leadership pour son action au sein du Lions Club International. En Mai 2025, le Maire de
Saly Portudal Mr Ousmane Gueye lui remet un Satisfecit pour sa contribution au rayonnement
artistique de cette ville du Sénégal.` },
  { id: '2', name: 'John Grant CURTIS', country: 'Angleterre', role: 'Caricaturiste', imageUrl: IMAGES.CURTIS, bio: `John est un dessinateur politique sud-africain, vivant actuellement au Royaume-Uni.
Son travail a été publié dans la plupart des grandes publications d'information en
ligne et imprimée en Afrique du Sud et exposé dans des villes d'Afrique, d'Europe et
des États-Unis. Il a remporté deux fois le « Sikuvile Journalism Award » du meilleur
dessinateur sud-africain pour son travail collaboratif avec Chip et le Dr Jack
respectivement avec qui, il a également reçu le prix DWJN 2003 en Allemagne.
Curtis a co-écrit deux anthologies de dessins animés avec Andy Mason (en 2009 et 2010), et son travail
a été publié dans des dizaines de livres publiés dans le monde entier. En 2008, John et sa femme
Michelle ont fondé Africartoons ; une plate-forme pour soutenir et mettre en valeur les meilleurs
dessinateurs du continent. Il continue d'être directeur exécutif de l'organisation. Aujourd'hui,
Africartoons représente des centaines de dessinateurs de toutes les disciplines du métier et bénéficie
de plus d'un million d'abonnés sur ses pages sociales. En 2025, John Curtis a été nommé au conseil
d'administration de Cartoonists Rights, un réseau international basé aux États-Unis..` },
  { id: '3', name: 'Jean Paul MONTHE YOUMBI', country: 'Cameroun', role: 'Dessinateur', imageUrl: IMAGES.MONTHE, bio: `Né en 1983, Paul est autodidacte. Il rencontre Michel E. Pekoua en
2006 qui l'embauche comme caricaturiste, ensuite Willy Valdès
Kengne qui lui enseigne les techniques de base du dessin et l'invite à
découvrir le FESCARHY en 2008, où il est invité. Il participe grâce à
Joëlle Epée Mandengue à l'album collectif "Rio dos Camaroes". Il connu
Wladimir Lentzy qui a repéré son travail dans l'album collectif. C'est le
début d'une belle collaboration qui mène à la création de "Moabi", la
collection de webtoons africains éditée par Dupuis. Il est le premier dessinateur africain
recruté avec "La Saga de Balla" scénario de Wladimir. Visite du musée Hergé, du musée royal
de l'Afrique centrale. Il est lauréat du prix le "Mont d'or de la caricature 2020". 2ème du
concours international d'auteurs professionnels du FIBDA 2025. Il est membre fondateur
de l'Association des Bédéistes du Cameroun (ABC).` },
  { id: '4', name: 'Atsin Martial GAUTHIER', country: "Côte d'Ivoire", role: 'Dessinateur / Scénariste / Animateur', imageUrl: IMAGES.GAUTHIER, bio: `Né en 1990 à Odienné, est dessinateur de presse, un scénariste, réalisateur et animateur 2D.
Il fait ses débuts dans la caricature dans le journal bol’kotch et notre voie où il apprend les codes du dessin de presse auprès de Carlos Guédéguen en 2012. Il apprend parallèlement l’animation à Arobasse studio en 2013 à 2016. En 2018 il rejoint l’équipe de Gbich édition où il travaille en tant dessinateur et scénariste de jo’bleck, Djossy city, phylos zoff… il intervient sur le site de Gbich avec des caricatures quotidiennes durant 3 ans. En 2021 il rejoint l’équipe de Ratelcat Studios comme animateur 2D où il réalise LES AVENTURES DE POPO, travaille sur la série à succès LADJAGA et MOMOLAND.
Il est aussi Directeur artistique dans le magazine pour enfant BAKAN et en 2025 il crée ses propres séries LYCÉE KOUTOUBOU et MAÎTRE CHAO BANG publié sur la chaîne Bakanime2D : https://www.youtube.com/@bakanime-n8p` },
  { id: '5', name: 'Seydina ISSA SOW', country: 'Sénégal', role: 'Auteur', imageUrl: IMAGES.SEYDINA, bio: `Auteur, illustrateur et éditeur de bande dessinée, Seydina Issa
SOW est multi-diplômé en Administration, Commerce et
Management des Affaires Internationales (Masters des
Universités Paris 12 Créteil, Lille 1 et de l'Ecole Supérieure
Polytechnique de Dakar). Il est auteur des bandes dessinées Sidy
(paru en 2019), Cayor (3 tomes parus entre 2019et 2021) et Sadio
(paru en 2023). En octobre 2023, Seydina Issa SOW a eu l'honneur
d'être convié au Musée International du manga de Kyoto (Japon), où désormais est exposé le
buste moulé de sa main à côté d'autres mains de « mangakas » (auteurs de manga) de grande
renommée.` },
  { id: '6', name: 'Nana Diaby Alias « Phiphi »', country: 'Mali', role: 'CEO / Productrice / Coach', imageUrl: IMAGES.NANA, bio: `Ceo De L’agence Phiphi + Communications, Productrice Et Présentatrice Du Talk-Show Phiphi Show, Coach En Développement Personnel, Maîtresse De Cérémonie.
Nana Diaby alias « Phiphi » est une figure de la Communication rodée aux émissions audiovisuelles, activités institutionnelles et Consultante Média Senior en Afrique, Europe et Asie. Productrice de son propre talk-show mensuel (PHIPHI SHOW) portant sur l’emploi des jeunes, le leadership et les questions sociétales qui était diffusé à la télévision publique malienne, son initiative lui donna la surnom de « Oprah Winfrey du Mali ».
Titulaire d’un Master II en Management et Stratégies des Entreprises option Communication & Marketing en France à l'IFSAIG Paris, et d'un Master en Business et Entreprenariat à l'Université Notre Dame aux USA. Elle a été "la jeune femme média 2016" de l'Afrique et bénéficiaire de la bourse Mandela Washington Fellowship.
Phiphi est une maîtresse de cérémonie incontournable que l'on ne peut se lasser d'écouter et une conférencière avisée des thématiques portant sur la motivation ou l’entrepreneuriat féminin.` },
];

const localAuthors = [
  { name: 'Fadil', img: 'https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/fqdil.png' },
  { name: 'Ahmed', img: 'https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/ibra.png' },
  { name: 'Oscar', img: 'https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/oscar.jpeg' },
  { name: 'Tiekweï', img: 'https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/tiekwei.png' },
  { name: 'Ivan', img: 'https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/Ivan.png' },
  { name: 'Papy', img: 'https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/papy.png' },
  { name: 'Yattara', img: 'https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/yattara.png' },
  { name: 'Sacko', img: 'https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/sacko.png' },
  { name: 'Amara', img: 'https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/amara.png' }
];

const schedule: DaySchedule[] = [
  {
    date: "19 Déc 2025",
    dayName: "Vendredi",
    events: [
      { time: "09:00", title: "Accueil et installation" },
      { time: "11:00", title: "Prestation artistique et culturelle", description: "Ballet & percussions" },

      {
        time: "12:30",
        title: "Discours officiels",
        description:
          "Directrice du CCFG, Commissaire Général Oscar, Ex-Directeur CCFG Daniel Couriel, Ambassadeur du Japon, Ambassadeur de France, Ministre Moussa Moïse Sylla",
        highlight: true
      },

      { time: "14:00", title: "Présentation des invités", description: "Projection d’un film du FIBEG" },

      {
        time: "15:00",
        title: "Inauguration de la fresque Simandou2040",
        description: "Inauguration officielle",
        highlight: true
      },

      { time: "15:30", title: "Vernissage des expositions" },
      { time: "15:30", title: "Lancement du Concours national de dessin" },
      { time: "15:30", title: "Atelier Webtoon", description: "Pour les professionnels" },
      {
        time: "15:30",
        title: "Portraits croqués en direct",
        description: "Membres Bulle d’encre & invités du FIBEG"
      },

      {
        time: "15:30",
        title: "Dédicace : « Heureux destin de Gopou » & « Amara le djobeur »",
        description: "Auteur : Tiekwei Souomou"
      },

      {
        time: "16:00",
        title: "Dédicace : « N’FA (fils de Kankoula) »",
        description: "Auteur : Sansy Kaba Diakité – Harmattan Guinée"
      },

      {
        time: "16:30",
        title: "Dédicace des livres de Mohamed Fadil Camara"
      },

      {
        time: "18:00",
        title: "Cocktail d'inauguration",
        description: "Résidence de l'Ambassade du Japon – Sur invitation"
      }
    ]
  },

  // ------------------------------------------------------
  {
    date: "20 Déc 2025",
    dayName: "Samedi",
    events: [
      { time: "09:00", title: "Ouverture des stands" },
      { time: "10:00", title: "Atelier Webtoon", description: "Suite – Pour les professionnels" },

      {
        time: "10:30",
        title: "Conférence-débat",
        description:
          "Thème : « La bande dessinée, outil littéraire et vecteur d’information » — Fodé Tass Sylla, Malick Kébé, Akin Saliou"
      },

      { time: "10:30", title: "Concours national de dessin", description: "Épreuves du concours" },

      {
        time: "11:30",
        title: "Master-class : Histoire des Manga & BD africaines",
        description: "Avec John Curtis – Africartoonist (Londres)",
        highlight: true
      },

      { time: "14:00", title: "Pause déjeuner" },

      {
        time: "14:30",
        title: "Dédicaces",
        description:
          "« Madina Séri – Faux médicaments », « Le sinistre des passeurs », « Soriba et Bangaly » – Auteur : Ben Youssouf Oscar"
      },

      { time: "17:00", title: "Fin de la journée" }
    ]
  },

  // ------------------------------------------------------
  {
    date: "21 Déc 2025",
    dayName: "Dimanche",
    events: [
      { time: "09:00", title: "Ouverture du Festival" },

      { time: "10:00", title: "Atelier Webtoon", description: "Suite & fin – Pour les professionnels" },

      { time: "10:30", title: "Concours national de dessin", description: "Suite et fin" },

      {
        time: "11:00",
        title: "Conférence-débat : Simandou2040",
        description:
          "Enjeux, défis et perspectives socio-économiques — Ibrahima Ahmed Barry, Moussa Iboune Conté",
        highlight: true
      },

      {
        time: "14:00",
        title: "Cérémonie de clôture",
        description:
          "Remerciements, proclamation des résultats du concours, remise de prix, satisfecits, discours officiels, prestation des Ballets percussion",
        highlight: true
      },

      { time: "17:00", title: "Cocktail de clôture", description: "Offert par la société By Issa" }
    ]
  }
];


const conferences = [
  { title: "La bande dessinée : Outil de littérature & vecteur d'information", speakers: ["Fodé Tass Sylla", "Malick Kébé", "Akin Saliou"] },
  { title: "Simandou2040 : Enjeux, défis et perspectives", speakers: ["Ibrahima Ahmed Barry", "Moussa Iboune Conté"] }
];

const partners = [
  { name: "Ministère_de_la_Culture_et_de_l'Artisanat", logo: IMAGES.PARTNERS.MINISTERE_CULTURE_ARTISANAT },
  { name: "Simandou_2040", logo: IMAGES.PARTNERS.SIMANDOU_2040 },
  { name: "Groupe_Sonoco", logo: IMAGES.PARTNERS.GROUPE_SONOCO },
  { name: "FODAC", logo: IMAGES.PARTNERS.FODAC },
  { name: "Traiteur_By_Issa", logo: IMAGES.PARTNERS.TRAITEUR_BY_ISSA },
  { name: "Centre_Culturel_Franco_Guinéen", logo: IMAGES.PARTNERS.CENTRE_CULTUREL_FRANCO_GUINEEN },
  { name: "Ambassade_du_Japon", logo: IMAGES.PARTNERS.AMBASSADE_JAPON },
  { name: "Ambassade_de_France", logo: IMAGES.PARTNERS.AMBASSADE_FRANCE },
  { name: "Ambassade_d'Allemagne", logo: IMAGES.PARTNERS.AMBASSADE_ALLEMAGNE },
  { name: "EasyCom", logo: IMAGES.PARTNERS.EASYCOM },
  { name: "N'Gata_Print", logo: IMAGES.PARTNERS.NGATA_PRINT },
  { name: "RTG", logo: IMAGES.PARTNERS.RTG },
  { name: "Institut_Français_Guinée", logo: IMAGES.PARTNERS.INSTITUT_FRANCAIS_GUINEE },
  { name: "Afri_Guinée_Vision", logo: IMAGES.PARTNERS.AFRI_GUINEE_VISION },
  { name: "Fiquira", logo: IMAGES.PARTNERS.FIQUIRA },
  { name: "Select_Pub", logo: IMAGES.PARTNERS.SELECT_PUB },
  { name: "ISIC", logo: IMAGES.PARTNERS.ISIC },
  { name: "ISAMK/D", logo: IMAGES.PARTNERS.ISAMKD },
  { name: "Groupe_Automosy", logo: IMAGES.PARTNERS.GROUPE_AUTOMSY },
  { name: "Salam", logo: IMAGES.PARTNERS.SALAM },
  { name: "Le_Diplomate", logo: IMAGES.PARTNERS.LE_DIPLOMATE },
  { name: "L'Harmattan", logo: IMAGES.PARTNERS.L_HARMATTAN },
  { name: "Ratoma", logo: IMAGES.PARTNERS.RATOMA },
  { name: "Galaxie_94.5", logo: IMAGES.PARTNERS.GALAXIE_94_5 },
  { name: "Guineematin.com", logo: IMAGES.PARTNERS.GUINEEMATIN_COM },
  { name: "Civi-Com", logo: IMAGES.PARTNERS.CIVICOM },
  { name: "ONPA", logo: IMAGES.PARTNERS.ONPA },
  { name: "Orange", logo: IMAGES.PARTNERS.ORANGE },
  { name: "Fondation_Guinée", logo: IMAGES.PARTNERS.ORANGE },
  { name: "Bingo!", logo: IMAGES.PARTNERS.BINGO }
];

function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [showProgram, setShowProgram] = useState(false);
  const [showReport, setShowReport] = useState(false);

  // --- REPORT VIEW ---
  if (showReport) {
    return (
      <div className="min-h-screen py-8 px-2 md:px-0 bg-[#525252] bg-opacity-90 relative overflow-y-auto">
        <button
          onClick={() => setShowReport(false)}
          className="fixed top-4 right-4 z-50 bg-fibeg-red text-white font-comic-header text-xl px-6 py-2 border-4 border-black shadow-comic hover:scale-110 transition-transform cursor-pointer flex items-center gap-2"
        >
          <XCircle size={24} /> FERMER LE RAPPORT
        </button>
        <div className="min-h-screen py-8 px-2 md:px-0 bg-[#525252] bg-opacity-90">
          <div className="mx-auto">
            <Page1_Cover />
            <Page2_Intro />
            <Page3_Events />
            <Page4_WinnersJuniors />
            <Page5_WinnersSeniors />
            <Page6_ResultsClosing />
            <Page7_Images1 />
            <Page8_Images2 />
            <Page9_Comics />
            <Page10_Images3 />
            <Page11_Images4 />
            <Page12_Images5 />
            <Page13_Images6 />
            <Page14_Images7 />
            <Page15_Workshop />
            <Page16_Partners />
            <Page17_Footer />
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN APP VIEW ---
  return (
    <div className="min-h-screen font-comic-body text-gray-900 overflow-x-hidden relative pt-20">
      <Navbar onProgramClick={() => setShowProgram(true)} />

      {/* --- HERO SECTION --- */}
      <section
  id="home"
  className="relative py-20 px-4 border-b-4 border-black overflow-hidden"
  style={{
    background: `
      linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
      url('https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/mascoteNotoFont.png')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-fibeg-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-fibeg-red rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white border-4 border-black p-2 transform -rotate-2 shadow-comic mb-6">
            <span className="font-comic-header text-2xl md:text-3xl px-4 py-1 text-black">
              19 AU 21 DÉCEMBRE 2025
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-comic-header text-white stroke-black drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-4 leading-tight">
            FIBEG 2025
          </h1>
          
          <p className="font-comic-header text-2xl md:text-4xl text-black mb-8 max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-4 border-2 border-black rounded-lg transform rotate-1">
            "Bulle d'encre pour le bonheur des tout-petits"
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <div className="bg-white px-6 py-3 border-2 border-black shadow-comic flex items-center gap-2">
              <MapPin className="text-fibeg-red" />
              <span className="font-bold text-lg">CCFG - Conakry</span>
            </div>
            <div className="bg-fibeg-yellow px-6 py-3 border-2 border-black shadow-comic flex items-center gap-2">
              <Star className="text-black" />
              <span className="font-bold text-lg">Thème: Simandou 2040</span>
            </div>
          </div>

          <CountDown />

          {/* Changement : on utilise 'flex-row' au lieu de 'flex-col' et on retire le wrap si on veut une ligne stricte */}
          <div className="mt-12 flex flex-row flex-nowrap gap-4 justify-center items-center overflow-x-auto pb-4">

            <a
                href="https://docs.google.com/forms/d/..."
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap group flex items-center gap-2 bg-blue-600 text-white font-comic-header text-2xl px-5 py-2 border-4 border-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all transform hover:rotate-1 animate-pulse hover:animate-none"
            >
              <PenTool className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              JE M'INSCRIS
            </a>

            <button
                onClick={() => setShowProgram(true)}
                className=" animate-pulse whitespace-nowrap bg-fibeg-red text-white font-comic-header text-2xl px-3 py-1 border-4 border-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all transform hover:rotate-1"
            >
              PROGRAMME
            </button>

            <a
                href="medias/Rapport FIBEG2025.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className=" animate-pulse whitespace-nowrap flex items-center gap-2 bg-fibeg-yellow text-black font-comic-header text-2xl px-5 py-2 border-4 border-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all transform hover:-rotate-1"
            >
              <Download className="w-6 h-6" />
             RAPPORT PDF
            </a>

            {/* CONTAINER DU BOUTON RAPPORT + ARCHIVE */}
            <div className="relative group flex flex-row gap-4 items-center">
              {/* Silhouette */}
              <div className="absolute -top-14 -right-6 w-24 h-24 pointer-events-none z-0">
                <img
                    src={IMAGES.MASCOT}
                    alt="Silhouette"
                    className="w-full h-full object-contain filter brightness-0 opacity-40 transform rotate-12"
                />
              </div>

              <div className="absolute inset-0 bg-yellow-400 transform rotate-3 rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <button
                  onClick={() => setShowReport(true)}
                  className=" animate-pulse whitespace-nowrap relative z-10 flex items-center gap-2 bg-white text-black font-comic-header text-2xl px-5 py-2 border-4 border-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all transform hover:rotate-2 cursor-pointer"
              >
                <FileText className="w-6 h-6" />
                RAPPORT FIBEG 2025
              </button>

              <button
                  onClick={() => window.open('/bingo', '_blank', 'noreferrer')}
                  className="
      /* Layout & Style */
      relative z-10 flex items-center gap-2 px-5 py-2
      bg-white text-black font-comic-header text-2xl
      border-4 border-black shadow-comic cursor-pointer whitespace-nowrap

      /* ANIMATIONS ÉPIQUES */
      animate-[wiggle_0.5s_ease-in-out_infinite] /* Secousse permanente */
      hover:animate-[ping_10.5s_cubic-bezier(0,0,0.2,1)_infinite] /* Effet d'écho au survol */
      hover:scale-5 hover:-rotate-1 /* Grow + Tilt au survol */
      active:scale-5 /* Effet de pression */

      /* Effet de couleur arc-en-ciel en background */
      before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-yellow-400 before:via-red-500 before:to-blue-500
      before:bg-[length:100%_2%] before:animate-[gradient_20s_linear_infinite]
    "
              >
                <FileText className="w-6 h-6 animate-bounce" />
                <span className="relative">BINGO - ARCHIVE</span>

                {/* Styles injectés pour les animations spécifiques */}
                <style dangerouslySetInnerHTML={{ __html: `
    @keyframes wiggle {
      0%, 100% { transform: rotate(-2deg); }
      50% { transform: rotate(2deg); }
    }
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}} />
              </button>

              {/* Badge Sticker */}
              <div className="absolute -top-4 -left-4 bg-fibeg-red text-white font-bangers tracking-widest text-sm px-3 py-1 border-2 border-white shadow-sm transform -rotate-12 animate-pulse z-20">
                DISPONIBLE !
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* --- PROGRAM SECTION --- */}
      {showProgram && (
        <section id="program" className="relative py-20 px-4 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 text-gray-200 rotate-12 animate-float">
             <Calendar size={120} />
          </div>
          <div className="absolute bottom-20 right-10 text-fibeg-orange opacity-10 -rotate-12 animate-float-delayed">
             <Star size={150} />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-50 rounded-full blur-3xl opacity-50 -z-10"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <SectionTitle title="La Programmation" subtitle="3 Jours de Festivités" color="red" />
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {schedule.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`
                    px-6 py-3 text-xl font-comic-header border-4 border-black shadow-comic transition-all
                    ${activeDay === index ? 'bg-fibeg-orange text-white scale-110 -rotate-1' : 'bg-white text-gray-500 hover:bg-gray-100'}
                  `}
                >
                  {day.dayName}
                </button>
              ))}
            </div>

            <div className="grid gap-6">
              {schedule[activeDay].events.map((event, idx) => (
                <ComicCard key={idx} className={`${event.highlight ? 'bg-yellow-50 border-fibeg-orange' : ''} flex flex-col md:flex-row gap-4 items-start`}>
                  <div className="bg-black text-white px-4 py-2 font-comic-header text-xl border-2 border-white shadow-[2px_2px_0_rgba(0,0,0,0.5)] whitespace-nowrap">
                    {event.time}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-comic-header text-black">{event.title}</h3>
                    {event.description && <p className="text-lg text-gray-700 mt-1 font-semibold italic">{event.description}</p>}
                    {event.location && (
                      <div className="inline-flex items-center gap-1 mt-2 text-sm bg-gray-200 px-2 py-1 rounded border border-black">
                        <MapPin size={14} /> {event.location}
                      </div>
                    )}
                  </div>
                  {event.highlight && (
                    <div className="hidden md:block">
                      <Star className="text-fibeg-orange fill-current animate-pulse" size={32} />
                    </div>
                  )}
                </ComicCard>
              ))}
            </div>
          </div>
        </section>
    )}

      {/* --- GUESTS SECTION --- */}
      <section id="guests" className="py-20 px-4 bg-white border-y-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
        {/* Animated blobs behind guests */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-fibeg-orange rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-fibeg-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle title="Invités & Auteurs" subtitle="Des talents d'ici et d'ailleurs" color="yellow" />

          {/* International Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {guests.map((guest) => (
              <ComicCard key={guest.id} className="text-center group">
                <div className="relative inline-block mb-4">
                  <img 
                    src={guest.imageUrl} 
                    alt={guest.name} 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-black mx-auto bg-gray-200"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-fibeg-yellow border-2 border-black px-2 py-1 text-xs font-bold transform rotate-3">
                    {guest.country}
                  </div>
                </div>
                <h3 className="text-2xl font-comic-header leading-none mb-2">{guest.name}</h3>
                <p className="text-fibeg-red font-bold uppercase text-sm mb-2">{guest.role}</p>
                <p className="text-gray-600 text-sm italic border-t-2 border-dashed border-gray-300 pt-2 line-clamp-3 hover:line-clamp-none transition-all">"{guest.bio}"</p>
              </ComicCard>
            ))}
          </div>

          {/* Local Authors List */}
          <div className="mt-24 relative">
             <div className="absolute top-0 right-10 -mt-10 animate-wiggle hidden md:block">
                 <Zap size={64} className="text-fibeg-red" />
             </div>
             
             <div className="text-center mb-8">
               <h3 className="text-4xl font-comic-header text-fibeg-orange drop-shadow-[2px_2px_0_rgba(0,0,0,1)] transform -rotate-1 inline-block bg-white px-6 py-2 border-4 border-black shadow-comic">
                  Galerie Bulle d'Encre
               </h3>
               <p className="text-xl font-bold mt-2 text-gray-700 uppercase tracking-widest">Les Héros Locaux</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 max-w-6xl mx-auto">
                {localAuthors.map((author, idx) => (
                  <div key={idx} className="bg-white p-3 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex flex-col items-center">
                    <img src={author.img} alt={author.name} className="w-20 h-20 rounded-full border-2 border-black mb-2 object-cover bg-gray-200" />
                    <span className="font-comic-header text-lg text-center leading-none">{author.name}</span>
                    <span className="text-xs font-bold text-gray-500 uppercase mt-1">Guinée</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section id="gallery" className="py-20 px-4 bg-fibeg-yellow border-b-4 border-black relative overflow-hidden">
         {/* Floating Frames Background */}
         <div className="absolute top-10 left-10 w-32 h-24 bg-white border-2 border-gray-200 rotate-6 opacity-30 animate-float"></div>
         <div className="absolute bottom-20 right-20 w-40 h-32 bg-white border-2 border-gray-200 -rotate-3 opacity-30 animate-float-delayed"></div>
         
         <div className="max-w-7xl mx-auto relative z-10">
           <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-3 transform rotate-1 border-4 border-white shadow-comic mb-4">
                <Camera className="w-8 h-8" />
                <h2 className="text-4xl md:text-5xl font-comic-header uppercase">Souvenirs du Festival</h2>
             </div>
             <p className="text-xl font-bold">Retour en images sur les éditions précédentes</p>
           </div>

           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
             {IMAGES.GALLERY.map((src, idx) => (
               <div key={idx} className="break-inside-avoid">
                 <div className="border-4 border-black bg-white p-2 shadow-comic hover:rotate-1 transition-transform duration-300">
                    <img src={src} alt={`Galerie FIBEG ${idx}`} className="w-full h-auto border-2 border-black grayscale hover:grayscale-0 transition-all duration-500" />
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* --- CONFERENCES --- */}
      <section id="conferences" className="py-20 px-4 relative overflow-hidden">
        {/* Background bubbles */}
        <div className="absolute top-20 left-4 md:left-20 w-16 h-16 rounded-full border-4 border-gray-200 animate-float"></div>
        <div className="absolute bottom-40 right-4 md:right-20 w-24 h-24 rounded-full border-4 border-gray-200 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 opacity-50">
            <MessageCircle size={300} strokeWidth={0.5} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <SectionTitle title="Conférences" subtitle="Débats & Réflexions" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {conferences.map((conf, idx) => (
               <ComicCard key={idx} className="bg-blue-50">
                 <div className="flex justify-center mb-4">
                   <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                     <Mic />
                   </div>
                 </div>
                 <h3 className="text-xl md:text-2xl font-comic-header text-center mb-4 min-h-[60px] flex items-center justify-center">
                   {conf.title}
                 </h3>
                 <div className="border-t-2 border-black pt-4">
                   <p className="font-bold mb-2 underline decoration-wavy decoration-fibeg-orange">Intervenants:</p>
                   <ul className="list-disc list-inside space-y-1">
                     {conf.speakers.map((s, i) => (
                       <li key={i}>{s}</li>
                     ))}
                   </ul>
                 </div>
               </ComicCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS --- */}
      <section id="partners" className="py-20 px-4 bg-white border-t-4 border-black relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.4\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')" }}></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
           <h2 className="text-4xl font-comic-header mb-12 uppercase">Nos Précieux Partenaires</h2>
           
          {/* VIPs avec cadres BD améliorés */}
          <div className="grid md:grid-cols-3 gap-8 mb-14 items-start">

            {/* Parrainage */}
            <div
              className="bg-yellow-100 border-4 border-black rounded-xl p-6 shadow-comic hover:shadow-comic-hover transition-all relative overflow-hidden group h-full"
            >
              <h3 className="font-comic-header text-2xl mb-6 text-center underline decoration-wavy decoration-fibeg-orange">Sous le parrainage de</h3>
              
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-black shadow-sm overflow-hidden mx-auto hover:rotate-2 transition-transform">
                    <img
                      src="https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/Mourana-Soumah001.jpg"
                      alt="Mourana SOUMAH"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold mt-2 text-lg">Mourana SOUMAH</p>
                  <p className="text-xs text-gray-600 mt-1 px-2 italic">Directeur Général du Trésor et de la Comptabilité Publique</p>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-black shadow-sm overflow-hidden mx-auto hover:-rotate-2 transition-transform">
                    <img
                      src="https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/MARAINE.jpg"
                      alt="Fatoumata Foulá DIALLO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold mt-2 text-lg">Fatoumata Foulá DIALLO</p>
                  <p className="text-xs text-gray-600 mt-1 px-2 italic">Directrice Générale des Impôts</p>
                </div>
              </div>
            </div>

            {/* Invité d'Honneur (CENTER PIECE) */}
            <div
              className="bg-fibeg-orange/20 border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_#000] hover:-translate-y-2 transition-all relative overflow-hidden group h-full transform scale-105 z-10"
            >
               <div className="absolute top-0 right-0 bg-fibeg-red text-white font-comic-header px-4 py-1 border-l-4 border-b-4 border-black text-sm">VIP</div>
               
              <h3 className="font-comic-header text-3xl mb-6 text-center text-fibeg-red drop-shadow-md">Invité d'Honneur</h3>
              
              <div className="text-center flex flex-col items-center justify-center h-full pb-8">
                <div className="w-48 h-48 bg-white rounded-full border-4 border-black shadow-comic overflow-hidden mx-auto mb-4 hover:scale-105 transition-transform ring-4 ring-fibeg-yellow ring-offset-4">
                  <img
                    src={IMAGES.FACINET}
                    alt="Facinet SYLLA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-comic-header text-2xl">Facinet SYLLA</h4>
                <p className="font-bold text-gray-700 bg-white px-3 py-1 mt-2 border-2 border-black inline-block rounded-lg shadow-sm">Ministre du Budget</p>
              </div>
            </div>

            {/* Ministères */}
            <div
              className="bg-blue-100 border-4 border-black rounded-xl p-6 shadow-comic hover:shadow-comic-hover transition-all relative overflow-hidden group h-full"
            >
              <h3 className="font-comic-header text-2xl mb-6 text-center underline decoration-wavy decoration-blue-500">Ministères</h3>

              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-black shadow-sm overflow-hidden mx-auto flex items-center justify-center hover:rotate-2 transition-transform">
                    <img
                      src="https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/MoiseSylla001.png"
                      alt="Moussa Moïse SYLLA"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <p className="font-bold mt-2 text-lg leading-tight">Moussa Moïse SYLLA</p>
                  <p className="text-xs text-gray-600 mt-1 px-2 italic">Ministre de la Culture, du Tourisme et de l'Artisanat</p>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-black shadow-sm overflow-hidden mx-auto hover:-rotate-2 transition-transform">
                    <img
                      src="https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/FANA_SUMA.jpg"
                      alt="Fana SOUMAH"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold mt-2 text-lg leading-tight">Fana SOUMAH</p>
                  <p className="text-xs text-gray-600 mt-1 px-2 italic">Ministre de l'Information et de la Communication</p>
                </div>
              </div>
            </div>
          </div>


           {/* Logos Grid */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {partners.map((partner, idx) => (
                <div key={idx} className="bg-white border-4 border-black p-4 flex items-center justify-center shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all duration-300 ease-in-out group h-32 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pattern-dots"></div>
                  <img src={partner.logo} alt={partner.name} className="max-h-20 max-w-full object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out group-hover:scale-110" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- CONTACT & REGISTER --- */}
      <section id="contact" className="py-20 px-4 bg-fibeg-dark text-white border-t-4 border-black relative overflow-hidden">
        {/* Animated Stars */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-fibeg-yellow rounded-full animate-pulse-slow delay-700"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse-slow delay-300"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-fibeg-orange rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse-slow delay-500"></div>
        
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
             <Cloud size={400} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
            {/* Contact Info */}
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-fibeg-orange" size={32} />
                <h2 className="text-3xl font-comic-header text-fibeg-orange">Contactez-nous</h2>
              </div>
              <p className="mb-6">Pour les partenariats, la presse ou plus d'informations.</p>
              
              <div className="bg-gray-800 p-6 border-2 border-gray-600 rounded-lg mb-8 w-full hover:border-fibeg-yellow transition-colors">
                <p className="flex items-center justify-center gap-2 mb-2"><User size={18}/> Commissariat Général</p>
                <p className="flex items-center justify-center gap-2 mb-2"><MapPin size={18}/> CCFG, Conakry, Guinée</p>
                <p className="flex items-center justify-center gap-2"><Mail size={18}/> fibeg2025@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <a href="https://www.facebook.com/fibeg2025" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-2 border-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <Facebook size={24} />
                </a>
                <a href="https://whatsapp.com/channel/0029Vb7eJCm30LKGUfXGQC2j" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-2 border-white shadow-[0_0_15px_rgba(219,39,119,0.5)]">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/fibeg2025" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-2 border-white shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                  <Send size={24} />
                </a>
              </div>
          </div>

          {/* Map Placeholder */}
         <div className="w-full h-96 bg-gray-800 border-4 border-white shadow-comic relative overflow-hidden group rounded-lg">
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
    <div className="bg-fibeg-dark/80 p-6 rounded-xl border-2 border-gray-600 backdrop-blur-sm relative z-10 group-hover:border-fibeg-red transition-colors duration-500">
      <Map className="w-16 h-16 text-fibeg-red mx-auto mb-4 animate-bounce" />
      
      <h3 className="text-3xl font-comic-header text-white mb-2">Plan d'Accès</h3>
      <p className="text-xl text-gray-300 mb-4">Centre Culturel Franco-Guinéen (CCFG)</p>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
        <MapPin size={16} />
        <span>Conakry, Guinée</span>
      </div>

      {/* Lien Google Maps */}
      <a
        href="https://www.google.com/maps?q=Centre+Culturel+Franco-Guinéen+Conakry"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-2 bg-white text-black font-comic-header text-lg rounded-full hover:bg-fibeg-yellow transition-colors hover:scale-105 transform"
      >
        Voir sur Google Maps
      </a>
    </div>

    {/* Background visual texture */}
    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-150 group-hover:scale-110 transition-transform duration-1000"></div>
  </div>
</div>


        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-center py-6 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © 2025 Festival Bulle d'Encre de Guinée. Tous droits réservés.
        </p>
      </footer>

      {/* --- FLOATING MASCOT & SOCIALS --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
        {/* Socials Stack */}
        <div className="flex flex-col gap-3">
           <a 
              href="https://whatsapp.com/channel/0029Vb7eJCm30LKGUfXGQC2j" 
              aria-label="WhatsApp" 
              className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center border-2 border-black shadow-comic hover:scale-110 hover:-translate-y-1 transition-all"
            >
              <MessageCircle size={24} />
           </a>
           <a 
              href="https://www.facebook.com/fibeg2025" 
              aria-label="Twitter / X" 
                            target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center border-2 border-white shadow-comic hover:scale-110 hover:-translate-y-1 transition-all"
            >
              <Twitter size={24} />
           </a>
           <a 
              href="https://www.facebook.com/fibeg2025" 
              aria-label="Facebook" 
                            target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center border-2 border-black shadow-comic hover:scale-110 hover:-translate-y-1 transition-all"
            >
              <Facebook size={24} />
           </a>
        </div>
        
        {/* Mascot */}
        <a 
          href="#program" 
          onClick={(e) => { e.preventDefault(); setShowProgram(true); document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="relative group cursor-pointer block"
        >
           {/* Speech Bubble Tooltip */}
           <div className="absolute bottom-full right-full mb-2 mr-2 bg-white border-2 border-black p-2 rounded-lg shadow-comic whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="font-comic-header text-black">Voir le Programme !</span>
              {/* Little triangle for bubble */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-black"></div>
           </div>
           
           <img 
             src={IMAGES.MASCOT} 
             alt="Mascotte FIBEG"
             className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all bg-white animate-[bounce_3s_infinite]" 
           />
        </a>
      </div>

    </div>
  );
}

// Helper XCircle component if not imported or available
const XCircle = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);


export default App;