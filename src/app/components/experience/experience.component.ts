import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

interface WorkExperience {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    {name: "Java", src: "./assets/technologies/java.png"},
    {name: "Spring Boot", src: "./assets/technologies/spring-boot.png"},
    {name: "Kafka", src: "./assets/technologies/kafka.png"},
    {name: "Cpp", src: "./assets/technologies/cpp.webp"},
    {name: "MySQL", src: "./assets/technologies/mysql.png"},
    {name: "PostgreSQL", src: "./assets/technologies/postgresql.png"},
    {name: "Javascript", src: "./assets/technologies/js.png"},
    {name: "Typescript", src: "./assets/technologies/ts.png"},
    {name: "Angular", src: "./assets/technologies/angular.png"},
    {name: "HTML", src: "./assets/technologies/html.png"},
    {name: "CSS", src: "./assets/technologies/css.png"},
    {name: "Bootstrap", src: "./assets/technologies/bootstrap.png"},
    {name: "Kubernetes", src: "./assets/technologies/kubernetes.png"},
    {name: "Docker", src: "./assets/technologies/docker.png"},
    {name: "GIT", src: "./assets/technologies/git.png"},
  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }

  public workExperiences: WorkExperience[] = [
    {
      title: "SDE Intern",
      company: "Espyr.io",
      date: "Jun 2025 - Aug 2025",
      location: "Remote",
      description: [
        "Built a full-stack coding platform with an AI mentor, reducing candidate problem-solving time by 40%.",
        "Developed a multi-agent AI system for context-aware mentoring, real-time feedback, and evaluation.",
        "Implemented RESTful APIs for Session and User management using Spring Boot.",
      ]
    }
  ]
}
