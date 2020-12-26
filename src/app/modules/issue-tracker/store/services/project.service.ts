import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

import firebase from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';

import { EMPTY, Observable, of } from 'rxjs';

import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projectsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.projectsCollection = this.afs.collection('projects');
  }

  select(): Observable<any> {
    return this.projectsCollection.valueChanges();
  }

  create(project: Project): Observable<Project> {
    let id = uuidv4();

    project = {
      id: id,
      ...project,
      userId: firebase.auth().currentUser?.uid,
      createDate: firebase.firestore.FieldValue.serverTimestamp(),
    };

    //    this.projectsCollection.add(project);

    this.projectsCollection
      .doc(id)
      .set(project)
      .then(() => {
        console.log('Create Success');
      })
      .catch(() => {
        console.log('Create Error');
      });

    return of(project);
  }

  update(project: Project): Observable<Project> {
    //    return EMPTY;

    return of(project);
  }

  delete(id: string): Observable<string> {
    this.projectsCollection
      .doc(id)
      .delete()
      .then(() => {
        console.log('Delete Success');
      })
      .catch(() => {
        console.log('Delete Error');
      });

    return of(id);
  }
}