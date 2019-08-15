import { Injectable, Inject, InjectionToken, FactoryProvider } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};

export const baseUrl = 'http://localhost:3002/reserva/';

export const WINDOW = new InjectionToken<Window>('window');

const windowProvider: FactoryProvider = {
    provide: WINDOW,
    useFactory: () => window
};

export const WINDOW_PROVIDERS = [
    windowProvider
];

let user = '';

@Injectable()
export class SessionService {

    correo: Object = {};

    constructor(private httpClient: HttpClient, @Inject(WINDOW) private window: Window) {}

    public logIn(datos): Observable<Object> {
        return this.httpClient.post(baseUrl + 'session/login', datos, httpOptions);
    }

    public getAll(): Observable<Object[]> {
        return this.httpClient.get<Object[]>(baseUrl + 'session/find', httpOptions);
    }

    public enviarMail(email): Observable<Object> {

        this.correo['correo'] = email['correo'];
        this.correo['host'] = this.window.location.origin;

        return this.httpClient.post(baseUrl + 'session/send', this.correo);
    }

    public restablecer(datos): Observable<Object> {
        return this.httpClient.post(baseUrl + 'session/restablecer', datos, httpOptions);
    }

    public setUser(data) {
        user = data;
    }

    public getUser() {
        return user;
    }

    public cleanSession() {
        user = undefined;
    }

}
