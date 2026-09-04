import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  profile: any;
  hasImage = true;

  constructor(private portfolioService: PortfolioService) {
    this.profile = this.portfolioService.getProfile();
  }

  ngOnInit(): void {
  }

  onImageError(): void {
    this.hasImage = false;
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getWhatsAppLink(): string {
    const phone = this.profile.phone.replace(/\D/g, '');
    return `https://wa.me/55${phone}`;
  }
}
