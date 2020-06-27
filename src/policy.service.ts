import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from './policy.model';

@Injectable()
export class PolicyService {

  constructor(
    private firestore: AngularFirestore
    ) { 
    /
  }

}

/* export class PolicyService {
} */