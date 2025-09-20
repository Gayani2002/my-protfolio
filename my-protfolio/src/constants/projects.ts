import { Project } from '../types/types';
import Image from "next/image";

export const projects: Project[] = [
  {
    title: 'Garage24',
    description: 'Developed a platform that users can track their vehicle services progress, appointment booking & pay online. Also, it manages garage side operations smoothly & ensure efficient communicate with customers.',
    tech: ['React', 'ExpressJs', 'NodeJs','MongoDB','Stripe'],
    github: 'https://github.com/orgs/Bytebuilder2-0/repositories' ,
    image: '/images/garage.jpeg'
  },
  {
    title: 'Budget Tracking System',
    description: 'Built a budget management app that tracks income and expenses, categorizes spending, and helps users make better financial decisions.',
    tech: ['React', 'PostgreSQL', 'ExpressJs', 'NodeJs','PostgreSQL'],
    github: 'https://github.com/Gayani2002/Financial-Tracking-App' ,
    image: '/images/bus.png'
  },
    {
    title: 'Accessible',
     description: 'Developed a platform connecting people with disabilities to accessible locations and caregivers for travel support',
    tech: ['React', 'Ballerina'],
    github: '#' ,
    image: '/images/c (2).png'
  },
  {
    title: 'Bus Management & Booking System',
     description: 'This developed for make bus travel easier Passengers can find buses & book seats.Bus owners can manage their buses & conductors can check passengers who go that bus.',
    tech: ['Typescript', 'NextJs', 'React', 'TailwindCSS','Express Js', 'Node Js','MongoDB'],
    github: 'https://github.com/orgs/BusPilot-v1/repositories' ,
    image: '/images/bus.png'
  },
  {
    title: 'My Portfolio',
     description: 'Showcasing my projects and skills as a developer',
    tech: ['React', 'TypeScript'],
    github: 'https://github.com/yourusername/your-portfolio',
    image: '/images/Protfolio.jpg'
  }, 

]