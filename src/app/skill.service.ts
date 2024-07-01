import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SkillService 
{
  constructor() { }
  getSkills() 
  {
    return ['HTML', 'CSS', 'JavaScript', 'Angular'];
  }
}