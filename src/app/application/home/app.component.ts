import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Fundamentos de Diseño UX/UI',
      description: 'Aprende los principios fundamentales del diseño de experiencia de usuario',
      category: 'Diseño',
      level: 'Principiante',
      duration: '8 semanas',
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: {
        name: 'Ana Martínez',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
    },
    {
      id: 2,
      title: 'Desarrollo Web Full Stack',
      description: 'Domina el desarrollo web moderno con JavaScript y Node.js',
      category: 'Programación',
      level: 'Intermedio',
      duration: '12 semanas',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: {
        name: 'Carlos Ruiz',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
    },
    {
      id: 3,
      title: 'Marketing Digital Avanzado',
      description: 'Estrategias avanzadas de marketing digital y análisis de datos',
      category: 'Marketing',
      level: 'Avanzado',
      duration: '10 semanas',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: {
        name: 'Laura Sánchez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Lógica de inicialización (si es necesaria)
  }
}
