import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

import { Storage } from '@capacitor/storage';

const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root',
})
export class AunthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    null
  );
  id = '';

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  async loadToken() {
    const id = await Storage.get({ key: TOKEN_KEY });
    if (id && id.value) {
      console.log('set id: ', id.value);
      this.id = id.value;
      this.isAuthenticated.next(true);
    } else {
      console.log('no token');
      this.isAuthenticated.next(false);
    }
  }

  async getToken(){
    const id = await Storage.get({ key: TOKEN_KEY });
    return id;
  }

  login(credentials: { username; password }): Observable<any> {
    return this.http.get("http://localhost:8091/v1/departamento/gerencia/usuario/findByUsername/" + credentials.username).pipe(
      map((data: any) => data.id),
      switchMap((id) => {
        return from(Storage.set({ key: TOKEN_KEY, value: id }));
      }),
      tap((_) => {
        this.isAuthenticated.next(true);
      })
    );
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({ key: TOKEN_KEY });
  }
}
