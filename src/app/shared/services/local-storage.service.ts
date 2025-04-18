import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 // Set a value in local storage
 setItem(key: string, value: string): void {
  localStorage.setItem(key, value);
}

// Get a value from local storage
getItem(key: string): string | null {
  return localStorage.getItem(key);
}

// Clear all items from local storage
clear(): void {
  localStorage.clear();
}
}
