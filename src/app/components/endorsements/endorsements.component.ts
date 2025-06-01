import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-endorsements',
  templateUrl: './endorsements.component.html',
  styleUrls: ['./endorsements.component.scss'],
  imports: [CommonModule] // ✅ Add this line
})

export class EndorsementsComponent {
  endorsements = [
    {
      title: 'Letter of Recommendation  Unit Director -EIU',
      description: '',
      // icon: 'assets/icons/recommendation.svg',
      link: 'assets/LetterOfRecommendationByJohn.pdf',
      delay: '0.5s'
    },
    {
      title: 'Letter of Recommendation Food Area Supervisor -EIU',
      description: '',
      // icon: 'assets/icons/promotion.svg',
      link: 'assets/LetterOfRecommendation-ChrisCoffey.pdf',
      delay: '1s'
    },
    {
      title: 'Best Student - Technical Assistant',
      link: 'assets/LetterOfAppreciation.pdf',
      delay: '1.5s'
    },
    {
      title: 'PAT on Back',
      link: 'assets/PATonBack.png',
      delay: '2s'
    },
    {
      title: 'Letter of Recommendation Professor, Jeff S Cranstoun',
      link: 'assets/AkashChatlaLetterofRecommendation.pdf',
      delay: '2.5s'
    },
    {
      title: 'Letter of Recommendation Instructor, Naima T Israr',
      link: 'assets/LORfromInstructor.pdf',
      delay: '3s'
    },
    {
      title: 'Introduction to Generative AI-Google Badge ',
      link: 'assets/GoogleCloudBadge.pdf',
      delay: '3s'
    },
    {
      title: 'Certificate of Completion Ms in Tech',
      link: 'assets/Ms-Certificate.pdf',
      delay: '3s'
    }
  ];

  selectedImage: string | null = null;
  openModal(image: string): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
