//
//
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
//import { XmlParser } from '@angular/compiler';

//
//
@Component({
                    selector: 'app-catastro',
                    templateUrl: './catastro.component.html',
                    styleUrls: ['./catastro.component.css']
            })

//
//
export class CatastroComponent implements OnInit {

    //
    resultados!: Object[];

    //
    constructor(private httpClient: HttpClient) { 
        this.resultados = [];
    }

    //
    ngOnInit(): void {
        this.getMarkilo();
    }

    /* 

    */
    async getMarkilo() {

        let url!: string;

        let httpHeaders: HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'text/xml; charset=utf-8')
            .set('Accept', 'text/xml')
            .set('Access-Control-Allow-Methods', 'GET');

        let httpParams = new HttpParams()
            .set('SRS', 'EPSG:4258')
            .set('Coordenada_X', 0.8396144176106677)
            .set('Coordenada_Y', 40.9255828349979);

        url = 'http://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/Consulta_RCCOOR_Distancia';

        console.log('0 0 0 0 0 0 0 0 0 0 0 0 0 0');
        let r = await this._getMarkilo(url, httpHeaders, httpParams);
        console.log('1 1 1 1 1 1 1 1 1 1 1 1 1 1');
        console.log(r);
    }

    /* 
    
    */
    _getMarkilo(url: string, httpHeaders: HttpHeaders, httpParams: HttpParams) {

        let promesa = new Promise((resolve, reject) => {

            this.httpClient.get(url, { headers: httpHeaders, params: httpParams }).toPromise().then(
                res => {
                    console.log(res.toString());
                    //resolve();
                    resolve;
                }
            );
        });
        return promesa;
    }
}
