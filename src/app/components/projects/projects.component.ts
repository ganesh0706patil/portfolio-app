import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GitHub Pages', 'Github Actions'],
      src: './assets/projects/Linkedin_bg.png',
      link: 'https://github.com/ganesh0706patil/portfolio',
    },
    {
      name: 'Fake News Detection Using NLP',
      description: 'This project detects fake news by fetching articles from News API and NewsData.io, comparing them with Wikipedia content using BERT embeddings and cosine similarity. It classifies the news as true or fake based on similarity scores.',
      technologies: ["Transformer's  Model", 'Natural Language Processing', 'Python', 'Jupyter Notebook'],
      src: './assets/projects/fakeNews.webp',
      link: 'https://github.com/ganesh0706patil/Fake-News-Detection-Using-NLP-based-Transformers',
    },
    {
      name: 'Banking App Decision Engine',
      description: 'Ever wondered how banks decide on loan approvals? Dive into the code of this project, built with Angular, TypeScript, HTML, SCSS, Java, and Spring Boot, to see a simplified version of the process.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Java', 'Spring Boot', 'H2 Database'],
      src: './assets/projects/bank.png',
      link: 'https://github.com/ganesh0706patil/banking-app',
    },
    {
      name: 'Spell Recommendation System',
      description: 'A Python app with a user-friendly interface for correcting spelling mistakes and providing word suggestions. Built with tkinter, it uses a Trie data structure to efficiently find and suggest words based on a loaded text file. The app allows users to add their own text files and get instant corrections as they type.',
      technologies: ['Python','Tkinter', 'Trie Data Structure', 'Edit Distance Algo'],
      src: './assets/projects/Spell2.webp',
      link: 'https://github.com/ganesh0706patil/Spell-Recommendation-System',
    },
    {
      name: 'Flight Planner',
      description: "Project implements a Flight Planner using Java, featuring two algorithms: Backtracking and Dijkstra's. It helps find the optimal flight paths based on cost and time between cities.",
      technologies: ['Java'],
      src: './assets/projects/flight2.avif',
      link: 'https://github.com/ganesh0706patil/flight-planner-algorithms-java',
    }
  ];
}
