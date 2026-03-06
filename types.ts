import React from 'react';

export interface Guest {
  id: string;
  name: string;
  role: string;
  country: string;
  bio?: string;
  imageUrl: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description?: string;
  location?: string;
  highlight?: boolean;
}

export interface DaySchedule {
  date: string;
  dayName: string;
  events: ScheduleEvent[];
}

export interface Partner {
  name: string;
  logoUrl: string;
  tier: 'gold' | 'silver' | 'bronze' | 'media' | 'institutional';
}

export interface ImageCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
}

export interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
}