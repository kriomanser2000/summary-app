import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ExperienceService 
{
  constructor() { }
  getExperience() 
  {
    return '3 years in development';
  }
}