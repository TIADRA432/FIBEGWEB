import React from 'react';
import { PDFPage, ImageBlock, ReportTitle, Paragraph, List } from './UIComponents';
import { IMAGES } from "../data/images";
import { Calendar, MapPin, User, Star, Mic, PenTool, Mail, Facebook, Instagram, Send, Download, Camera, ExternalLink, Map, Twitter, MessageCircle, Cloud, Zap, Heart, FileText } from 'lucide-react';

const partners = [
    //{ name: "Ministère_de_la_Culture_et_de_l'Artisanat", logo: IMAGES.PARTNERS.MINISTERE_CULTURE_ARTISANAT },
   // { name: "Simandou_2040", logo: IMAGES.PARTNERS.SIMANDOU_2040 },
   // { name: "Groupe_Sonoco", logo: IMAGES.PARTNERS.GROUPE_SONOCO },
   // { name: "FODAC", logo: IMAGES.PARTNERS.FODAC },
   // { name: "Traiteur_By_Issa", logo: IMAGES.PARTNERS.TRAITEUR_BY_ISSA },
   // { name: "Centre_Culturel_Franco_Guinéen", logo: IMAGES.PARTNERS.CENTRE_CULTUREL_FRANCO_GUINEEN },
    //{ name: "Ambassade_du_Japon", logo: IMAGES.PARTNERS.AMBASSADE_JAPON },
   // { name: "Ambassade_de_France", logo: IMAGES.PARTNERS.AMBASSADE_FRANCE },
   // { name: "Ambassade_d'Allemagne", logo: IMAGES.PARTNERS.AMBASSADE_ALLEMAGNE },
   // { name: "EasyCom", logo: IMAGES.PARTNERS.EASYCOM },
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
    { name: "Bingo!", logo: IMAGES.PARTNERS.BINGO }
];
/**
 * COMPOSANT LOCAL : PLACEHOLDER LOGO (Utilisé dans Page 16)
 */
const LogoPlaceHolder: React.FC<{ name: string; color?: string }> = ({ name, color = "bg-gray-100" }) => (
  <div className={`flex items-center justify-center p-4 ${color} text-center font-bold text-gray-800 h-24 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer`}>
    {name}
  </div>
);

/**
 * SECTION : COUVERTURE
 * REUTILISATION : Structure de titre impactante pour tout rapport.
 * PERSONNALISATION : Changer les titres, dates, logos et illustrations.
 */
export const Page1_Cover: React.FC = () => {
  return (
    <PDFPage className="flex flex-col justify-between relative min-h-[297mm] border-4 border-black">
      {/* Header */}
      <div className="text-center mt-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-[#006994] uppercase leading-none font-bangers drop-shadow-md mb-4">
          FESTIVAL INTERNATIONAL<br />
          BULLE D’ENCRE DE GUINÉE
        </h1>
        <div className="w-32 h-2 bg-red-500 mx-auto my-6 transform -rotate-1"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-red-600 uppercase mt-2 font-comic tracking-wider">
          LA BANDE DESSINÉE ET LE DESSIN DE PRESSE
        </h2>
        <div className="text-right mt-6 pr-4">
          <span className="text-4xl md:text-5xl font-black text-gray-900 rotate-[-5deg] inline-block bg-yellow-300 px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            #FIBEG2025
          </span>
        </div>
      </div>

      {/* Top Left Logo Placeholder */}
      <div className="hidden md:block absolute top-12 left-8 w-40 h-40 transform -rotate-6 bg-white p-2 border-2 border-black shadow-md">
        <img
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-0.jpg"
          alt="Logo Festival Bulle D'Encre"
          className="w-full h-full object-contain"
        />
        <p className="text-xs text-center font-bold text-blue-900 mt-2 font-comic leading-none">FESTIVAL<br/>BULLE D'ENCRE<br/>DE GUINÉE</p>
      </div>

      {/* Center Title */}
      <div className="text-center my-16 z-10">
        <div className="inline-block bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none font-bangers">
            Rapport<br />du FIBEG2025
            </h1>
        </div>
        <div className="mt-8">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 font-comic bg-white/90 inline-block px-6 py-3 rounded-lg border-2 border-dashed border-gray-400">
            Du 19 au 21 décembre 2025<br />
            au CCFG - Conakry
            </h3>
        </div>
      </div>

      {/* Illustration Area with Bubble */}
      <div className="flex justify-center md:justify-end mb-16 relative z-10 px-6">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
           <img
            src="media/mascotee.png"
            alt="Illustration FIBEG"
            className="rounded-full border-[6px] border-black bg-orange-100 shadow-xl"
           />
           {/* Speech bubble */}
           <div className="absolute -bottom-6 -left-6 md:bottom-8 md:right-64 bg-white border-2 border-black p-6 rounded-[50%_50%_0_50%] text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 w-48">
             <p className="text-sm font-bold uppercase font-comic">bienvenue oooh<br/>au</p>
             <p className="text-2xl font-black text-red-600 font-bangers">#FIBEG2025</p>
           </div>

        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-4 border-black pt-6 pb-6 bg-white mt-auto">
        <div className="flex justify-between items-end px-6">
           <div>
             <p className="font-bold text-base uppercase font-comic border-b-2 border-black">Programme<br/>Simandou<br/>2040</p>
           </div>
           <div className="text-red-600 font-black font-bangers text-4xl">Guinée</div>
        </div>
        <div className="bg-gray-900 text-white text-center py-3 text-sm md:text-base font-bold mt-4 font-mono">
          Tél: 00224 - 622 91 60 74 / 661 94 90 21 / e-mail : barryyoussoufben@gmail.com
        </div>
        <div className="text-center text-[#006994] font-black text-sm md:text-base mt-2 uppercase font-comic tracking-wide">
          Bande Dessinée - Dessin de presse - Peinture - Edition - Formation
        </div>
      </div>
    </PDFPage>
  );
};

/**
 * SECTION : INTRODUCTION
 * REUTILISATION : Bloc de texte narratif.
 * STYLE : Fond clair, typographie lisible pour lecture dense.
 */
export const Page2_Intro: React.FC = () => {
  return (
    <PDFPage>
      <ReportTitle>INTRODUCTION</ReportTitle>
      
      <div className="bg-white p-8 border-2 border-gray-200 shadow-inner rounded-lg">
          <Paragraph>
            L’événement culturel et artistique de la 7ème édition du festival international de la bande dessinée, du dessin de presse et de la caricature, a finalement eu lieu après quatre longues années d’interruption.
          </Paragraph>
          <Paragraph>
            Avec un nouveau concept dans un nouvel environnement très favorable, le <span className="font-black italic text-red-600">#FIBEG2025</span> (Festival International Bulle d’encre de Guinée) a donné une nouvelle dimension sous régionale, africaine et mondiale à la bande dessinée et au dessin de presse guinéens.
          </Paragraph>

          <Paragraph>
            Grâce à un soutien institutionnel et appuyé de l’Etat guinéen (<span className="font-bold font-comic text-blue-800">Ministère de la Culture, le Fodac</span>) et de nos partenaires (<span className="font-bold italic text-gray-700">Groupe Sonoco, Direction Générale des Impôts, Ministère de l’Economie et des Finances, l’ambassade du Japon, les Chapiteaux By Issa, l’ambassade de France, l’ambassade d’Allemagne, le CCFG, l’agence EasyCom, la RTG1 et RTG2, Figuira, SelectPub, Institut Français de Guinée, Groupe de presse Afric-Vision, CiviCom, Afrikinfo médias, Ngata Print, Autoécole Amsy, les instituts nationaux ISIC de Kountia, ISAMK de Dubreka, l’Harmattan Guinée, les éditions Gandall, Guinéematin.com, ONPA ...</span>), la relance de la 7ème édition du FIBEG a été possible en cette fin d’année de décembre 2025. Qu’ils en soient tous remerciés du fond de coeur.
          </Paragraph>

          <Paragraph>
            Débuté par une conférence de presse à la Maison de Presse de la Minière, et animée par l’invité de marque <span className="font-bold">Daniel Couriol</span> expert consultant culturel (ex Directeur du Centre culturel franco-guinéen), <span className="font-bold">Miss Nana Diaby</span> dite Phiphi (en provenance de Bamako), <span className="font-bold">Ibrahima Ahmed Barry</span> journaliste (Commissaire général adjoint du FIBEG) et <span className="font-bold">Oscar Ben Barry</span>, Commissaire général du festival, ce grand événement de la BD et dessin de presse est partie sur des chapeaux de roue. Le sponsor leader du FIBEG2025 en l’occurrence le <span className="font-bold text-blue-900">Groupe SONOCO</span> a marqué sa présence en offrant aux journalistes présents beaucoup de boisson de sa célèbre marque <span className="font-bold text-blue-900">SALAM</span>.
          </Paragraph>

          <div className="border-l-8 border-yellow-400 pl-6 my-8 bg-yellow-50 p-6 rounded-r-lg">
            <Paragraph>
              <span className="font-black text-2xl font-comic block mb-3 text-yellow-600">Vendredi 19 décembre</span>
              Premier jour du festival, le <span className="font-bold">CCFG</span> (qui abrite le festival depuis sa fondation) brillait déjà de milles feux aux couleurs du <span className="font-bold">festival Bulle d’encre</span>.
            </Paragraph>
            <Paragraph>
              Hébergés à l’<span className="font-bold">hotel ONOMO</span> par les soins du <span className="font-bold">FODAC</span>, les sept (7) invités étaient déjà bien arrivées à Conakry.
            </Paragraph>
            <Paragraph>
              Il ont pour noms : <span className="font-bold text-gray-900">Phiphi Nana Diaby</span> du Mali, <span className="font-bold text-gray-900">Daniel Couriol</span> de la France, <span className="font-bold text-gray-900">John Grant Curtis</span> de l’Angleterre, <span className="font-bold text-gray-900">Seydina Issa Sow</span> du Sénégal, <span className="font-bold text-gray-900">Atsin Gauthier Martial</span> de la Côte d’ivoire, <span className="font-bold text-gray-900">Michael Tetteh dit Tylapia</span> du Ghana et <span className="font-bold text-gray-900">Paul Monthey Yombi</span> du Cameroun.
            </Paragraph>
          </div>

          <Paragraph>
            <span className="font-bold bg-black text-white px-3 py-1 text-base rounded mr-3 inline-block transform -rotate-1">De 11h à 12h</span>
            Après l’accueil et l’installation des invités et le public, le célèbre <span className="font-bold">Ballet « Sourakhata »</span> a offert une prestation de danse et percussion très originales au public.
          </Paragraph>

          <Paragraph>
            Avec le duo des célèbrissimes impresario <span className="font-bold">Ibrahima Ahmed Barry</span> et de <span className="font-bold">Phiphi</span> de Bamako, le décor a été planté. Suivront les discours de bienvenue des deux directrices du CCFG <span className="font-bold">Mme Diariou Bah</span> et <span className="font-bold">Louise Touya</span>. Le discours-bilan du Commissaire général <span className="font-bold">Oscar</span>, du mot de reconnaissance de l’ancien Directeur du CCFG <span className="font-bold">Daniel Couriol</span>, de son Excellence monsieur l’ambassadeur du Japon en Guinée <span className="font-bold">Kato Ryuichi</span> et enfin du très important discours inaugural de son excellence monsieur le Ministre de la Culture et de l’Artisanat <span className="font-bold">Moussa Moïse Sylla</span>.
          </Paragraph>

          <div className="border border-red-200 bg-red-50 p-6 rounded-lg shadow-sm">
            <Paragraph className="mb-0">
                Le jeune et très dynamique Ministre de la Culture, dans un langage solennel, a promis de corriger l’<span className="font-bold text-red-600">injustice faite au Festival Bulle d’encre</span> depuis sa création. Parce qu’il a appris que c’était la première fois que l’Etat guinéen soutenait financièrement ce festival. Il a déclaré publiquement qu’il va signer une <span className="font-bold text-red-600">convention-cadre avec le FIBEG</span> immédiatement. Ce fut un moment de grande joie dans la salle, nourri d’un tonnerre d’applaudissements.
            </Paragraph>
          </div>
      </div>
    </PDFPage>
  );
};

/**
 * SECTION : SUITE ÉVÉNEMENTS
 * REUTILISATION : Chronologie d'activités.
 */
export const Page3_Events: React.FC = () => {
  return (
    <PDFPage>
      <div className="space-y-8">
          <div className="bg-white p-6 border-2 border-black shadow-[6px_6px_0px_0px_#ddd]">
            <Paragraph className="mb-0">
                Moment solennel du FIBEG2025, fut la présentation officielle de la <span className="font-black uppercase text-green-700">fresque géante du Programme Simandou2040</span> dessinée par les membres dessinateurs de Bulle d’encre. Cette fresque qui illustre en détails les enjeux de prospérité du Programme Simandou2040 est offerte comme <span className="font-bold">contribution pour la sensibilisation des populations</span>, au Gouvernement Guinéen par l‘Association <span className="font-bold">Bulle d’encre de Guinée</span>.
            </Paragraph>
          </div>

          <Paragraph>
            Place au <span className="font-bold italic">vernissage</span> des expositions BD, des caricatures et autres produits dans les stands des partenaires, des invités et des membres de Bulle d’encre par Monsieur le Ministre de la Culture accompagné de l’ambassadeur du Japon en Guinée.
          </Paragraph>
          
          <div className="flex items-start gap-6 bg-gray-50 p-4 rounded-lg">
             <div className="text-5xl">🎨</div>
             <Paragraph className="mb-0">
                Suivra le lancement du <span className="font-black text-xl">Concours national de Dessin</span> par le Comité d’organisation avec plus d’une soixantaine de candidats au total.
             </Paragraph>
          </div>

          <Paragraph>
            Deux <span className="font-bold">atelier professionnels de webtoon</span> sont animés dans deux salles différentes du Ccfg. Le premier dans la grande salle de spectacle avec <span className="font-bold">John Curtis</span>, le deuxième dans la salle d’animation pour les professionnels de Bulle d’encre avec l’ivoirien <span className="font-bold">Atsin Gauthier Martial</span> dit « <span className="font-bold italic">leBlanc</span> ».
          </Paragraph>
          <Paragraph>
            Cet atelier avec Atsin était techniquement important, car il liait les techniques d’animation d’une bande dessinée et l’<span className="font-bold text-purple-700">usage de l’Intelligence Artificielle</span> dans la conception.
          </Paragraph>
          <Paragraph>
            Pendant que certains membres de Bulle d’encre croquaient les portraits des visiteurs, <span className="font-bold">Tiekwei Souomou</span>, l’un des dessinateurs du <span className="font-bold">journal satirique Bingo</span>, a procédé à la dédicace de ses livres BD qui traite de la scolarisation des jeunes filles avec le titre « <span className="font-bold italic">Heureux destin de Gopou</span> » et « <span className="font-bold italic">Amara le Djobeur</span> ».
          </Paragraph>
          
          <div className="bg-blue-50 border-l-8 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <Paragraph>
                A partir de 18 heures, l’ambassadeur du Japon en Guinée <span className="font-bold">SEM Kato Ryuichi</span>, a offert un grand et copieux cocktail à sa résidence de la cité ministérielle de Donka à l’honneur du <span className="font-bold">FIBEG2025</span>.
            </Paragraph>
            <Paragraph className="mb-0">
                Après les discours de bienvenue et de remerciement de Monsieur l’ambassadeur et d’<span className="font-bold">Oscar</span>, le buffet a été ouvert pour les invités, suivi d’une magnifique prestation de danse et percussion du <span className="font-bold">ballet Sourakhata</span> jusqu’à 20h, fin de la cérémonie.
            </Paragraph>
          </div>

          <div className="mt-12 relative">
             <span className="absolute -top-5 -left-2 bg-yellow-300 px-4 py-2 font-black font-comic border-2 border-black transform -rotate-2 text-lg shadow-sm">Samedi 20 décembre 2025</span>
             <div className="border-2 border-black pt-10 p-6 bg-white shadow-lg">
                <Paragraph>
                    Suite des ateliers d ’animation et de webtoon.
                </Paragraph>
                <Paragraph>
                    A partir de <span className="font-bold">10h30</span>, la première conférence - débat est lancée avec le thème: « <span className="font-bold italic">La bande dessinée, un puissant outil de la littérature, un vecteur important de l’information et de la communication en faveur du changement de comportement dans la société</span> » animée avec brio par le journaliste conseiller politique au CNT <span className="font-bold">Fodé Tass Sylla</span> et <span className="font-bold">Akin Saliou</span> Secrétaire général de l’Association des Ecrivain de Guinée AEG.
                </Paragraph>
                <Paragraph>
                    La deuxième journée du concours national du Dessin a enregistré plus 40 candidats. Ils étaient un vingtaine la veille.
                </Paragraph>
                <Paragraph className="mb-0">
                    A partir de 14h30, une série de dédicaces des BD de l’auteur Oscar a eu lieu dans le hall du CCFG. Ces BD sont : « <span className="font-bold italic">Madina séri (ou la vente et l’usage de faux médicaments</span> », « <span className="font-bold italic">Soriba et Bangaly (satire populaire)</span> ». <span className="font-bold">Paul Monthé</span> du Cameroun et <span className="font-bold">Seydina Issa Sow</span> du Sénégal ont aussi dédicacé leurs livres.
                </Paragraph>
             </div>
          </div>

          <div className="mt-12 relative">
             <span className="absolute -top-5 -left-2 bg-red-300 px-4 py-2 font-black font-comic border-2 border-black transform rotate-1 text-lg shadow-sm">Dimanche 21 décembre</span>
             <div className="border-2 border-black pt-10 p-6 bg-white shadow-lg">
                <Paragraph>
                    Pour la journée de <span className="font-bold">Dimanche 21 décembre</span>, dernier jour du festival, les ateliers de webtoon et animations ont continué avec <span className="font-bold">John Curtis</span> et <span className="font-bold">Atsin Gauthier Martial</span>. Le dernier virage du Concours national de dessin a vu la réunion du grand jury dans la salle d’animation pour délibérer. Le jury était composé de : <span className="font-bold">John Curtis, Paul Monthé, Fadil Camara, Seydina Issa Sow, Boris du festival Otaku, Tylapia du Ghana, Mohamed Papy Camara</span> et <span className="font-bold">Amara Soumah</span> de Bulle d’encre.
                </Paragraph>
                <Paragraph className="mb-0">
                    Deux catégories sont présentées: <span className="font-bold text-blue-800">les juniors (10 à 16 ans)</span> et <span className="font-bold text-blue-800">les seniors (20 à 45 ans)</span>. Cinq gagnants sont sélectionnés dans chaque catégorie.
                </Paragraph>
             </div>
          </div>
      </div>
    </PDFPage>
  );
};

/**
 * SECTION : GAGNANTS JUNIORS
 * REUTILISATION : Liste de résultats et galerie.
 * RESPONSIVE : Grille 1 col mobile, 3 cols desktop.
 */
export const Page4_WinnersJuniors: React.FC = () => {
  return (
    <PDFPage>
      <div className="bg-yellow-50 p-8 border-2 border-black mb-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
        <h2 className="font-bangers text-4xl mb-8 text-center text-blue-900 tracking-wide">🏆 PALMARÈS DU CONCOURS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="mb-8 md:mb-0">
                <p className="font-black text-2xl italic mb-6 border-b-4 border-blue-200 inline-block font-comic">Pour les juniors :</p>
                <ul className="list-none space-y-4 font-comic text-gray-800 text-lg">
                <li>🥇 1er Prix <span className="font-bold">Alpha Amadou Diallo</span> 10 ans <br/><span className="text-base text-gray-500 font-mono">(626 92 40 00)</span></li>
                <li>🥈 2è Prix <span className="font-bold">Rachelle Hawa Koumassado</span> 8 ans <br/><span className="text-base text-gray-500 font-mono">(628 39 18 79)</span></li>
                <li>🥉 3è Prix <span className="font-bold">Nina Haba Cecilia</span> 8 ans <br/><span className="text-base text-gray-500 font-mono">(623 19 42 22)</span></li>
                <li>4è Prix <span className="font-bold">Mamadou Cherif Bah</span> 13 ans <br/><span className="text-base text-gray-500 font-mono">(626 92 40 00)</span></li>
                <li>5è Prix <span className="font-bold">Jean Michel Haba</span> 10 ans <br/><span className="text-base text-gray-500 font-mono">(623 19 42 22)</span></li>
                </ul>
            </div>

            <div>
                <p className="font-black text-2xl italic mb-6 border-b-4 border-blue-200 inline-block font-comic">Pour les grands candidats :</p>
                <ul className="list-none space-y-4 font-comic text-gray-800 text-lg">
                <li>🥇 1er Prix <span className="font-bold">Saa Adrien Tolno</span> <br/><span className="text-base text-gray-500 font-mono">(627 66 83 15)</span></li>
                <li>🥈 2è Prix <span className="font-bold">Alhousseine Bangoura</span> 20 ans <br/><span className="text-base text-gray-500 font-mono">(622 58 88 53)</span></li>
                <li>🥉 3è Prix <span className="font-bold">Kadiatou Mawuli Soumah</span> <br/><span className="text-base text-gray-500 font-mono">(663 04 15 93)</span></li>
                <li>4è Prix <span className="font-bold">Saa Martin Koumassadouno</span> (1981) <br/><span className="text-base text-gray-500 font-mono">621 30 35 22</span></li>
                <li>5è prix <span className="font-bold">Abdoul Goudoussy Souaré</span> 22 ans <br/><span className="text-base text-gray-500 font-mono">(626 10 89 94)</span></li>
                </ul>
            </div>
        </div>
      </div>

      {/* Grid for Junior Drawings */}
      <h3 className="text-center font-bold text-2xl mb-6 uppercase font-comic bg-blue-100 py-2 border-y-2 border-black">Les œuvres des Juniors</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-9.jpg"
          alt="Dessin Alpha Amadou Diallo" 
          caption="1er Prix Alpha Amadou Diallo"
          imgClassName="h-72 w-full"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-10.jpg"
          alt="Dessin Rachelle Hawa" 
          caption="2e Prix Rachelle Hawa Koumassado"
          imgClassName="h-72 w-full"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-11.jpg"
          alt="Dessin Nina Haba Cecilia" 
          caption="3è Prix Nina Haba Cecilia"
          imgClassName="h-72 w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/4 mx-auto">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-12.jpg"
          alt="Dessin Mamadou Cherif Bah" 
          caption="4è Prix Mamadou Cherif Bah"
          imgClassName="h-72 w-full"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-13.jpg"
          alt="Dessin Jean Michel Haba" 
          caption="5è Prix Jean Michel Haba"
          imgClassName="h-72 w-full"
        />
      </div>
    </PDFPage>
  );
};

/**
 * SECTION : GAGNANTS SENIORS
 * RESPONSIVE : Images pleines largeur sur mobile.
 */
export const Page5_WinnersSeniors: React.FC = () => {
  return (
    <PDFPage>
      <ReportTitle>Œuvres des Seniors</ReportTitle>
      
      {/* Top Image - Saa Adrien Tolno (1st prize senior) */}
      <div className="flex justify-center mb-10">
        <div className="w-full relative p-2 bg-white border border-gray-200 shadow-md">
            <span className="absolute top-0 left-0 z-10 bg-yellow-400 text-black font-black font-bangers px-4 py-2 text-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-6">1er PRIX</span>
            <ImageBlock 
            src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-14.jpg"
            alt="Dessin Saa Adrien Tolno" 
            caption="Saa Adrien Tolno"
            className="w-full mb-0"
            imgClassName="w-full h-auto"
            />
        </div>
      </div>

      {/* Middle Row - Portraits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-15.jpg"
          alt="Portrait Homme" 
          className="w-full"
          imgClassName="w-full h-auto grayscale"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-16.jpg"
          alt="Portrait Femme" 
          className="w-full"
          imgClassName="w-full h-auto"
        />
      </div>

      {/* Bottom Row - Scene and Hand */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-17.jpg"
          alt="Dessin Scène" 
          className="w-full"
          imgClassName="w-full h-auto"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/DESSINS/Rapport FIBEG2025-18.jpg"
          alt="Dessin Main Papillon" 
          className="w-full"
          imgClassName="w-full h-auto grayscale"
        />
      </div>
    </PDFPage>
  );
};

/**
 * SECTION : RÉSULTATS & CLÔTURE
 */
export const Page6_ResultsClosing: React.FC = () => {
  return (
    <PDFPage className="relative">
      <div className="mb-10 p-8 bg-white border border-gray-300 shadow-lg">
        <p className="font-black text-xl italic mb-6 uppercase font-comic text-gray-500 border-b-2 border-gray-200 pb-2">Rappel du Palmarès Grands Candidats :</p>
        <List items={[
            "- 1er Prix Saa Adrien Tolno (627 66 83 15)",
            "- 2è Prix Alhousseine Bangoura (622 58 88 53) 20 ans",
            "- 3è Prix Kadiatou Mawuli Soumah (663 04 15 93)",
            "- 4è Prix Saa Martin Koumassadouno (né en 1981) 621 30 35 22",
            "- 5è prix Abdoul Goudoussy Souaré 22 ans (626 10 89 94)"
        ]} />
      </div>

      <Paragraph>
        La proclamation des résultats du Concours national de Dessin, la remise des satisfecits et trophées aux lauréats, aux invités et aux officiels ont eu lieu dans la grande salle des fêtes du CCFG, dans une ambiance d’apothéose. Animée avec maestria par les célèbres journalistes <span className="font-bold italic">Phiphi Nana Diaby</span> de Bamako et <span className="font-bold italic">Ibrahima Ahmed Barry</span> de Guinée. Ils ont d’abord rendu un vibrant hommage aux <span className="font-bold text-blue-800">SPONSORS</span> et <span className="font-bold text-blue-800">PARTENAIRES</span> du festival avant de procéder à la proclamation des résultats définitifs du Concours.
      </Paragraph>
      <Paragraph>
        Sur les dix (10) <span className="font-bold italic">lauréats</span> des deux catégories, <span className="font-bold italic text-purple-600">trois (3) étaient des filles</span>. Comme quoi, le FIBEG encourage sérieusement la professionnalisation des filles dans le métier de la BD et Dessin de Presse.
      </Paragraph>
      <Paragraph>
        Après les discours de clôture vers 18h, les <span className="font-bold italic">Ballets Sourakhata</span> ont une nouvelle fois réchauffé la salle de spectacles du CCFG avec des numéros de percussion et de danse à tout casser.
      </Paragraph>
      <Paragraph>
        Le <span className="font-bold italic">festival FIBEG2025</span> a été clôturé par un cocktail savoureux offert par les « <span className="font-bold italic">Chapiteaux By ISSA</span> » jusqu’à 20h.
      </Paragraph>

      <div className="mt-16 text-center font-bold text-gray-800 bg-green-50 p-10 border-4 border-dashed border-green-500 rounded-xl transform rotate-1">
        <p className="text-2xl md:text-3xl font-comic mb-4">Merci infiniment à toutes et à tous pour la réussite de cette édition.</p>
        <p className="text-4xl md:text-5xl font-bangers text-green-700">Rendez-vous en 2026.</p>
      </div>

      <div className="mt-10 text-right font-bold italic text-gray-700 font-serif text-lg">
        <p>Conakry, le 23 décembre 2025</p>
        <p>Le Comité d’organisation du FIBEG2025</p>
      </div>

      <div className="flex justify-center mt-16 pb-8">
        <div className="relative w-72 h-72">
           <img 
            src="media/mascotee.png"
            alt="Illustration FIBEG"
            className="rounded-full border-[6px] border-orange-200 shadow-xl"
           />
           <div className="absolute top-0 left-8 bg-red-600 text-white font-bold px-3 py-1 rounded transform -rotate-12 font-bangers border-2 border-white text-xl shadow-md">
             #FIBEG
           </div>
           <div className="absolute bottom-4 right-20 bg-white border-2 border-black p-3 rounded-xl text-center shadow-lg">
             <p className="text-sm font-bold uppercase font-comic">bienvenue oooh<br/>au</p>
             <p className="text-xl font-black text-red-600 font-bangers">#FIBEG2025</p>
           </div>
           <div className="absolute top-1/2 left-4 bg-yellow-300 px-2 py-1 border-2 border-black transform -rotate-12 font-comic text-sm font-bold shadow-sm">
             SIMANDOU<br/>2040
           </div>
        </div>
      </div>
    </PDFPage>
  );
};

export const Page7_Images1: React.FC = () => {
  return (
    <PDFPage>
      <ReportTitle>Le FIBEG 2025 en images</ReportTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-27.png"
          alt="Arrivée des officiels" 
          caption="Vendredi 19 décembre: arrivée de leurs excellences Messieurs le Ministre de la Culture et l’ambassadeur du Japon au CCFG"
          className="col-span-1"
          imgClassName="h-72 w-full"
        />
         <div className="flex flex-col gap-6">
             <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-29.png"
              alt="Discours Ministre" 
              caption="Discours du Ministre de la Culture Moussa Moise Sylla"
              imgClassName="h-48 w-full"
            />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-23.png"
          alt="Conférence de presse" 
          className="col-span-1"
          imgClassName="h-72 w-full"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-25.png"
          alt="Discours Ambassadeur" 
          caption="Discours de l’ambassadeur du Japon en Guinée M.Kato Ryuichi"
          imgClassName="h-72 w-full"
        />
      </div>

      <div className="mt-10 p-6 bg-gray-100 border-t-4 border-b-4 border-black">
        <h3 className="text-2xl font-bold text-center mb-6 font-comic">Conférence de presse du 18 décembre 2025 à la MDP de la Minière</h3>
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-31.png"
          alt="Conférence de presse groupe" 
          imgClassName="w-full h-auto"
        />
      </div>
    </PDFPage>
  );
};

export const Page8_Images2: React.FC = () => {
  return (
    <PDFPage>
      <div className="flex justify-center mb-10">
         <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-35.png"
          alt="Scène de groupe" 
          imgClassName="w-full h-auto"
        />
      </div>

      <div className="text-center mb-8 bg-yellow-100 p-6 border-4 border-dashed border-blue-300 rounded-2xl transform -rotate-1 shadow-sm">
         <p className="font-bold text-xl md:text-2xl text-blue-900 leading-tight font-comic">
           Présentation officielle de la fresque sur le méga projet et le<br/>
           Programme Simandou2040 à l'ouverture du festival
         </p>
      </div>

      <div className="mb-10">
         <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-39.png"
          alt="Fresque Simandou" 
          imgClassName="w-full h-auto border-8 border-double border-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-33.png"
          alt="Photo de famille ambassade" 
          caption="Photo de famille à la résidence de l’ambassadeur\ndu Japon à la cité ministérielle.\nAu premier plan, à partir de la gauche\nMme l’ambassadrice de l’Allemagne"
          imgClassName="h-56 w-full"
        />
         <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-37.png"
          alt="Présentation invités" 
          caption="Présentation des invités en provenance du\nSénégal, de la France, du Cameroun, du Ghana,\nde l’Angleterre, du Mali et de la Côte d’ivoire"
          imgClassName="h-56 w-full"
        />
      </div>
    </PDFPage>
  );
};

export const Page9_Comics: React.FC = () => {
  return (
    <PDFPage>
      <div className="bg-black text-white p-6 mb-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
        <h2 className="text-2xl md:text-3xl font-bold text-center uppercase font-bangers tracking-wider leading-snug">
            Quelques BANDES DESSINÉES, conçues et éditées par le FESTIVAL BULLE D’ENCRE<br/>(Décembre 2025)
        </h2>
      </div>
      
      <div className="flex justify-center mb-8">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-41.jpg"
          alt="BD Covers Group" 
          imgClassName="w-full h-auto max-w-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-42.jpg"
          alt="BD Cover 1" 
          imgClassName="w-full h-auto shadow-md"
        />
        <div className="grid grid-cols-1 sm:grid-rows-2 gap-8">
           <ImageBlock 
            src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-43.jpg"
            alt="BD Cover 2" 
            imgClassName="w-full h-64 sm:h-full object-cover shadow-md"
          />
           <ImageBlock
            src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-44.jpg"
            alt="BD Cover 3"
            imgClassName="w-full h-64 sm:h-full object-cover shadow-md"
          />
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-gray-50 p-8 border-4 border-black">
         <div>
           <h3 className="text-3xl font-black mb-6 font-comic underline decoration-wavy decoration-red-400">Auteurs des BD :</h3>
           <ul className="text-2xl italic space-y-3 font-comic text-gray-800">
             <li>- Oscar</li>
             <li>- Tiekwei</li>
             <li>- Ivan</li>
             <li>- Fadil</li>
             <li>- Papy</li>
           </ul>
         </div>
         <ImageBlock 
            src="media/Rapport%20FIBEG2025IMG.pdf/Rapport%20FIBEG2025-41.jpg"
            alt="BD Collage" 
            imgClassName="w-full h-auto"
          />
      </div>
    </PDFPage>
  );
};

export const Page10_Images3: React.FC = () => {
  return (
    <PDFPage>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-56.png"
          alt="Kato Ryuichi" 
          caption="L’intervention de son excellence Monsieur KATO RYUICHI Ambassadeur du Japon en Guinée"
          imgClassName="h-72 w-full object-cover"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-47.png"
          alt="Ministre et Phiphi" 
          caption="Son excellence Monsieur le Ministre de la Culture Moussa Moïse Sylla avec la journaliste malienne Phiphi Nana Diaby"
          imgClassName="h-72 w-full object-cover"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-49.png"
          alt="DG Fodac" 
          caption="Le Directeur général du FODAC Monsieur Malich Kébé exhibant les BD produites et éditées par les auteurs guinéens"
          imgClassName="h-72 w-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="md:col-span-2">
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-51.png"
              alt="Ambassadrice Allemagne" 
              caption="SE Mme l'amabassadrice de l'Allemagne en compagnie de Monsieur l'ambassadeur\nde l'Union Européenne en Guinée"
              imgClassName="h-72 w-full object-cover"
            />
         </div>
         <div className="md:col-span-1">
             {/* Simandou logo from screenshot */}
            <div className="h-72 bg-gray-200 border-2 border-black flex items-center justify-center text-center p-6 shadow-md">
              <span className="font-bold text-gray-500 font-bangers text-3xl">SIMANDOU 2040<br/>Un pont vers la prospérité!</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="md:col-span-2">
             <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-53.png"
              alt="Groupe table" 
              imgClassName="h-72 w-full object-cover"
            />
         </div>
         <div className="md:col-span-1">
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-55.jpg"
              alt="Monsieur Tarui" 
              caption="Intervention de Monsieur TARUI de l’ambassade du Japon lors des conférences - débats"
              imgClassName="h-72 w-full object-cover"
            />
         </div>
      </div>
    </PDFPage>
  );
};

export const Page11_Images4: React.FC = () => {
  return (
    <PDFPage>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-60.png"
          alt="Groupe Seydina Oscar" 
          caption="Seydina Issa Sow du Sénégal, Oscar et\nAhmed Barry autour du DG de Fodac Malick Kébé"
          className="h-full justify-end"
          imgClassName="h-64 md:h-full w-full object-cover"
        />
        <div className="flex flex-col gap-8">
           <ImageBlock 
            src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-64.png"
            alt="Conférence débat" 
            caption="Pendant les conférences - débats"
            imgClassName="h-56 w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="flex flex-col justify-center bg-white p-6 border border-gray-200 shadow-sm">
            <h3 className="text-center font-bold mb-6 font-comic uppercase text-xl">Quelques membres de l'Association<br/>Bulle d'encre de Guinée</h3>
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-58.png"
              alt="Membres association" 
              imgClassName="w-full h-auto"
            />
         </div>
         <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-66.jpg"
          alt="Remise trophée impots" 
          caption="Remise de trophée et satisfecit à la\nreprésentante de Mme la Directrice\nGénérale des impôts, marraine du\nfestival FIBEG2025"
          imgClassName="h-[450px] w-full object-cover"
        />
      </div>

      <div className="mt-8 border-t-4 border-black pt-6">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-62.png"
          alt="Bandeau groupe bas" 
          imgClassName="w-full h-56 object-cover"
        />
      </div>
    </PDFPage>
  );
};

export const Page12_Images5: React.FC = () => {
  return (
    <PDFPage>
      <div className="mb-8">
         <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-69.png"
          alt="Fresque large" 
          imgClassName="w-full h-72 md:h-96 object-cover shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
         <div className="md:col-span-2">
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-67.png"
              alt="Scène groupe" 
              imgClassName="w-full h-72 object-cover"
            />
         </div>
         <div className="md:col-span-1 md:row-span-2">
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-71.jpg"
              alt="Oscar et Fodé Tass Sylla" 
              caption="Oscar avec le journaliste Fodé Tass Sylla, pendant sa conférence - débat"
              imgClassName="w-full h-[450px] md:h-[550px] object-cover"
            />
         </div>
         <div className="md:col-span-2">
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-72.png"
              alt="Exposition BD" 
              imgClassName="w-full h-56 object-cover"
            />
         </div>
      </div>
    </PDFPage>
  );
};

export const Page13_Images6: React.FC = () => {
  return (
    <PDFPage>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-84.png"
          alt="Lauréats juniors" 
          caption="Les 10 lauréats seniors et juniors"
          imgClassName="w-full h-56 object-cover"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-86.png"
          alt="Lauréats et fondateurs" 
          caption="Les 10 lauréats entourés des deux co fondateurs du FIBEG Daniel Couriol et Oscar Ben Barry"
          imgClassName="w-full h-56 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-79.png"
          alt="Stand livres" 
          imgClassName="w-full h-72 object-cover"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-87.png"
          alt="Kadiatou dessin" 
          caption="Kadiatou Mawuli Camara 3ème prix du concours national de dessin"
          imgClassName="w-full h-72 object-cover"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-74.png"
          alt="Table ronde livres" 
          imgClassName="w-full h-72 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-81.jpg"
          alt="Groupe salle" 
          imgClassName="w-full h-72 object-cover"
        />
        <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-82.png"
          alt="John Curtis" 
          caption="L’anglais John Curtis avec son trophée"
          imgClassName="w-full h-72 object-cover"
        />
      </div>
      <div className="flex justify-center gap-6 mt-10">
         <span className="font-black text-red-600 text-4xl font-bangers transform -rotate-3 border-b-8 border-yellow-400 pb-2">#FIBEG2025</span>
      </div>
    </PDFPage>
  );
};

export const Page14_Images7: React.FC = () => {
  return (
    <PDFPage>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2 relative border-4 border-black p-2 bg-white shadow-lg">
             <div className="flex gap-1">
                <img src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-89.png" className="w-1/2 h-64 object-cover border-r-2 border-black" alt="Phiphi" />
                <img src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-91.png" className="w-1/2 h-64 object-cover" alt="Ahmed" />
             </div>
             <p className="text-center font-bold text-base absolute top-6 left-0 w-full bg-white/10 p-3 font-comic border-y-2 border-none">
               Le duo Phiphi Diaby et Ibrahima Ahmed Barry<br/>les maîtres de la cérémonie<br/>en pleine ambiance<br/>d'animation
             </p>
        </div>
        <div className="md:col-span-1">
           <ImageBlock 
            src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-101.png"
            alt="Remise trophée" 
            caption="Daniel Couriol et Ahmed Barry reçoivent leurs trophées"
            imgClassName="w-full h-56 object-cover"
           />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         <ImageBlock 
            src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-93.png"
            alt="Papy Camara" 
            caption="Mohamed PAPY\nCAMARA"
            imgClassName="w-full h-72 object-cover"
           />
         <ImageBlock 
            src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-95.png"
            alt="John Curtis Seydina Daniel" 
            caption="John Curtis, Seydina Issa Sow et Daniel Couriol"
            imgClassName="w-full h-72 object-cover"
           />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <ImageBlock 
            src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-97.png"
            alt="Paul Monthé" 
            caption="Paul Monthé du Cameroun avec ses BD"
            imgClassName="w-full h-72 object-cover"
           />
         <ImageBlock 
            src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-99.png"
            alt="Groupe scène fin" 
            caption="Oscar, Daniel Couriol, Phiphi et Kevin Boa"
            imgClassName="w-full h-72 object-cover"
           />
      </div>
    </PDFPage>
  );
};

export const Page15_Workshop: React.FC = () => {
  return (
    <PDFPage>
      <div className="bg-gray-800 text-white p-6 mb-10 border-4 border-gray-900 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center uppercase font-mono tracking-widest">
            Atelier technique d’animation et webtoon - CCFG
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         <div className="md:row-span-2">
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-116.png"
              alt="Atelier photo 1" 
              imgClassName="w-full h-[500px]  "
            />
         </div>
         <div className="flex flex-col gap-6">
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-110.png"
              alt="Screen 1" 
              imgClassName="w-full h-40  border-4 border-green-0"
            />
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-112.png"
              alt="Screen 2" 
              imgClassName="w-full h-40 object-cover border-4 border-green-0"
            />
         </div>
      </div>

      <h3 className="text-center font-bold mb-6 font-comic bg-yellow-200 inline-block px-6 py-2 border-2 border-black transform -rotate-1 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Atelier animé par Atsin Gauthier de la Côte d’ivoire</h3>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-8">
         <ImageBlock src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-114.png" alt="Screen 3" imgClassName="w-full h-48 object-cover" />
         <ImageBlock src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-118.png" alt="Screen 4" imgClassName="w-full h-48 object-cover" />
         <ImageBlock src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-108.png" alt="Screen 5" imgClassName="w-full h-48 object-cover" />
         <ImageBlock src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-103.png" alt="Screen 6" imgClassName="w-full h-48 object-cover" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <ImageBlock src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-105.png" alt="Atelier groupe 1" imgClassName="w-full h-56 object-cover" />
         <ImageBlock src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-107.png" alt="Atelier groupe 2" imgClassName="w-full h-56 object-cover" />
      </div>
    </PDFPage>
  );
};

export const Page16_Partners: React.FC = () => {
  return (
    <PDFPage>
      <ReportTitle>PARTENAIRES</ReportTitle>

      <div className="mb-8">
          <ImageBlock src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-132.jpg" alt="Atelier groupe 1" imgClassName="w-full h-72 md:h-96 object-cover shadow-lg" />
      </div>

        <section id="partners" className="py-20 px-4 bg-white border-t-4 border-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="bg-white border-4 border-black p-4 flex items-center justify-center shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all duration-300 ease-in-out group h-32 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pattern-dots"></div>
                            <img src={partner.logo} alt={partner.name} className="max-h-20 max-w-full object-contain relative z-10  group-hover:grayscale-0 transition-all duration-300 ease-in-out group-hover:scale-110" />
                        </div>
                    ))}
                </div>
            </div>



        </section>





    </PDFPage>
  );
};

export const Page17_Footer: React.FC = () => {
  return (
    <PDFPage className="flex flex-col justify-between">
      <div>
         <ImageBlock 
          src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-168.png"
          alt="Joie des lauréats" 
          caption="Joie des lauréats et invités du FIBEG2025"
          className="mb-10"
          imgClassName="w-full h-72 object-cover"
         />
         <div className="flex flex-col md:flex-row justify-between gap-8">
            <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-170.png"
              alt="Ballet scène" 
              className="w-full md:w-1/2"
              imgClassName="w-full h-56 object-cover"
             />
             <ImageBlock 
              src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-172.png"
              alt="Ballet tambour" 
              className="w-full md:w-1/2"
              imgClassName="w-full h-56 object-cover"
             />
         </div>
         <p className="text-center font-bold text-2xl mt-6 font-comic text-gray-800">Prestations des Ballets Sourakhata</p>
      </div>

      <div className="flex flex-col items-end mt-16 pr-8 md:pr-16 relative">
         <p className="text-right font-bold text-gray-800 text-xl font-serif leading-relaxed">
           Le Commissaire Général du<br/>
           #FIBEG2025<br/>
           <span className="text-4xl font-black font-signature text-blue-900 block mt-2">Oscar</span><br/>
           <span className="italic text-lg">Youssouf Ben Barry</span>
         </p>
         {/* Fake signature stamp */}
         <div className="mt-4 w-40 h-40  rounded-full flex items-center justify-center transform rotate-12 opacity-75 mix-blend-multiply bg-blue-100/30 absolute bottom-0 right-0 md:right-10 pointer-events-none">
            <p className=" text-center text-blue-800 font-bold uppercase leading-tight font-mono tracking-widest">
                <ImageBlock
                    src="media/Rapport FIBEG2025IMG.pdf/Rapport FIBEG2025-167.jpg"
                    alt="signature"
                    //className="w-full md:w-1/2"
                   // imgClassName="w-full h-56 object-cover"
                />
            </p>
         </div>
      </div>

      <div className="mt-16 bg-blue-50 p-6 text-center text-sm text-gray-600 font-bold border-t-4 border-black font-mono leading-relaxed">
         <p>Agrément régional n° 000086 / MADT / VC / CAB / DRATD du 29 mai 2024</p>
         <p>Siège social : BBG - Agence, Avenue du port (mifergui) face douanes - Commune de Kaloum- Conakry Guinée</p>
         <p>Compte bancaire : Accesbank n°: 036 001 0100002176 95</p>
      </div>
    </PDFPage>
  );
};