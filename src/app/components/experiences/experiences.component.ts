import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Experience } from '../../services/portfolio.service';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = [];
  selectedExperience: Experience | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.experiences = this.portfolioService.getExperiences();
    this.selectedExperience = this.experiences[0];
  }

  selectExperience(exp: Experience) {
    this.selectedExperience = exp;
  }
}
