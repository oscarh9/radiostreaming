import { Component, OnInit } from '@angular/core';
import radios from '../data/radio.json';
import { Radio } from './radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent implements OnInit{
title = "RADIO SINGULARS";
radioStation: Radio [] = [];
inputValue!: string;
filterArray!: Radio [];

ngOnInit(): void {
  this.radioStation = radios;
}

searchRadio () {
  this.filterArray = this.radioStation.filter((radio:Radio) =>
    radio.name.includes(this.inputValue))
}
}