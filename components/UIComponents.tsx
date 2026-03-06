import React from 'react';
import { ImageCaptionProps, TextBlockProps } from '../types';

/**
 * COMPOSANT CONTENEUR DE PAGE
 * Structure style "Planche de BD" ou "Page de rapport".
 * Responsive : Largeur fixe sur Desktop, 100% sur mobile.
 * Readability: Increased padding for better visual breathing room.
 */
export const PDFPage: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`pdf-page max-w-4xl mx-auto p-6 md:p-12 ${className}`}>
    {children}
  </div>
);

/**
 * BLOC IMAGE AVEC CADRE BD
 * Ajoute une bordure noire et une légende stylisée.
 */
export const ImageBlock: React.FC<ImageCaptionProps> = ({ src, alt, caption, className = "", imgClassName = "" }) => (
  <div className={`flex flex-col items-center mb-8 break-inside-avoid ${className}`}>
    <div className="relative p-1 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
      <img src={src} alt={alt} className={`object-cover block ${imgClassName}`} />
    </div>
    {caption && (
      <div className="mt-4 bg-yellow-100 border border-black px-4 py-2 rounded-tl-xl rounded-br-xl shadow-sm max-w-[90%]">
        <p className="text-center text-base font-bold text-gray-900 whitespace-pre-line leading-snug font-comic">
          {caption}
        </p>
      </div>
    )}
  </div>
);

/**
 * TITRE PRINCIPAL DE SECTION
 * Style "Lettrage BD", majuscules, impact visuel.
 * Readability: Added bottom margin for clear separation.
 */
export const ReportTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative mb-10 text-center">
    <h1 className="relative z-10 text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-wide font-bangers transform -rotate-1">
      {children}
    </h1>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-4 bg-yellow-300 -z-0 opacity-70 rotate-2 rounded-sm"></div>
  </div>
);

/**
 * PARAGRAPHE DE TEXTE
 * Typographie lisible (Roboto) avec un bon interlignage pour la lecture sur écran.
 * Readability: Increased font size and line height (leading).
 */
export const Paragraph: React.FC<TextBlockProps> = ({ children, className = "" }) => (
  <p className={`text-lg md:text-xl text-gray-800 leading-8 md:leading-9 mb-6 text-justify font-medium tracking-normal ${className}`}>
    {children}
  </p>
);

/**
 * LISTE À PUCES
 * Style simple et efficace.
 * Readability: Increased spacing between items.
 */
export const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-none pl-0 mb-6 space-y-3">
    {items.map((item, idx) => (
      <li key={idx} className="text-lg md:text-xl text-gray-800 pl-4 border-l-4 border-red-400 bg-gray-50 p-3 leading-snug">
        {item}
      </li>
    ))}
  </ul>
);