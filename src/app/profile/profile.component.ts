import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { ExperienceService } from '../experience.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit 
{ 
  profile = 
  {
    fullName: 'Кузьменко Олександр',
    phones: ['123-456-7890'],
    email: 'kuzsasa05@gmail.com',
    city: 'Kryvyi Rih',
    workExperience: '',
    skills: [],
    imageUrl: 'path/to/image.jpg'
  };
  constructor(
    private skillService: SkillService,
    private experienceService: ExperienceService
  ) { }
  ngOnInit(): void 
  {
    this.profile.skills = this.skillService.getSkills();
    this.profile.workExperience = this.experienceService.getExperience();
  }
}