import { Component, OnInit } from '@angular/core'
import { ClassServiceAuth } from '../Shared/autorize.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'comidas',
    templateUrl: './comidas.component.html',
    styleUrls: ['./comidas.component.css']
})

export class ClaseComidasPage implements OnInit{
    public comidasMenu: any
    constructor(private auth: ClassServiceAuth, private actro: ActivatedRoute){}

    ngOnInit(){
        this.comidasMenu=this.auth.getComidaList();
    }

}
