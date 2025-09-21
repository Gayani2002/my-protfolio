import { Project } from '../types/types';
import Image from "next/image";

export const projects: Project[] = [
  {
    title: 'Garage24',
    description: 'Developed a platform that users can track their vehicle services progress, appointment booking & pay online with managing garage side operations smoothly.',
    tech: ['React', 'ExpressJs', 'NodeJs','MongoDB','Stripe'],
    github: 'https://github.com/orgs/Bytebuilder2-0/repositories' ,
    image: '/images/garage.jpeg',
    status: 'Completed'
  },
   {
    title: 'Accessible',
     description: 'Developed a platform connecting people with disabilities to accessible locations and caregivers for travel support',
    tech: ['React', 'Ballerina'],
    github: 'https://github.com/HKSahanTharaka/iwb25-354-jrsharks' ,
    image: '/images/access.png',
    status: 'Completed'
  },
  {
    title: 'Budget Tracking System',
    description: 'Built a budget management app that tracks income and expenses, categorizes spending, and helps users make better financial decisions.',
    tech: ['React', 'PostgreSQL', 'ExpressJs', 'NodeJs','PostgreSQL'],
    github: 'https://github.com/Gayani2002/Financial-Tracking-App' ,
    image: '/images/Budget.png',
    status: 'In Progress'
  },
   
  {
    title: 'Bus Management System',
     description: 'This developed for make bus travel easier to passengers.Also bus owners can manage their buses & conductors can check passengers who go that bus.',
    tech: ['Typescript', 'NextJs', 'React', 'TailwindCSS','Express Js', 'Node Js','MongoDB'],
    github: 'https://github.com/orgs/BusPilot-v1/repositories' ,
    image: '/images/bus.png',
    status: 'In Progress'
  },
  {
    title: 'Tic-Tac-Toe Game',
     description: 'A modern, sensor-based Tic-Tac-Toe game designed to enhance the traditional game with interactive LED display, different game modes and real-time features.',
    tech: ['Arduino', 'ESP 32', 'Firebase' ],
    github: '#' ,
    image: '/images/tic-tac-toe.jpeg',
    status: 'Completed'
  },
   {
    title: 'My Portfolio Website',
     description: 'A modern, responsive portfolio website showcasing my projects and skills.',
    tech: ['NextJs', 'TailwindCSS', 'TypeScript','Nodemailer'],
    github: 'https://github.com/Gayani2002/my-protfolio.git' ,
    image: '/images/Portfolio.png',
    status: 'Completed'
  }

  
]