import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})

export class HeroDetailComponent implements OnInit {
  
@Input() heroData:any;

@Output() oneRemoveEvent = new EventEmitter();

removeEventFire(){
  this.oneRemoveEvent.emit();
}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
