import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';

// providedIn: 'root' is a shortcut to adding it to providers in the app module
@Injectable({providedIn: 'root'})
export class UserService {
    activatedEmitter = new Subject<boolean>();
}