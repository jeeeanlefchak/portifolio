import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  profile: any;
  form = { name: '', email: '', message: '' };
  submitted = false;

  constructor(private portfolioService: PortfolioService) {
    this.profile = this.portfolioService.getProfile();
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.form.name && this.form.email && this.form.message) {
      this.submitted = true;
      console.log('Form submitted:', this.form);
      setTimeout(() => {
        this.form = { name: '', email: '', message: '' };
        this.submitted = false;
      }, 3000);
    }
  }

  getWhatsAppLink(): string {
    const phone = this.profile.phone.replace(/\D/g, '');
    return `https://wa.me/55${phone}`;
  }
}
