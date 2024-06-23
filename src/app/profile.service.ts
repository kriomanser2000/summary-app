import { Injectable } from '@angular/core';
import { MOCK_PROFILE } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getProfile() {
    return MOCK_PROFILE;
  }
}
