import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalService {
    private hostUrl: string = '';
    constructor() {
        this.hostUrl = 'http://localhost/university-api/';
    }

    getApiRestUrl() {
        return this.hostUrl + 'web/';
    }

    getApiSoapUrl() {
        return this.hostUrl + 'web/api/';
    }

}
