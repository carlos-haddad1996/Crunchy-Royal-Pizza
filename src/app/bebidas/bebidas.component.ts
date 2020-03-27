import { Component, OnInit } from '@angular/core'
import { ClassServiceAuth } from '../Shared/autorize.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'bebidas',
    templateUrl: './bebidas.component.html',
    styleUrls: ['./bebidas.component.css']
})

export class ClaseBebidasPage implements OnInit{
    public bebidasMenu: any
    constructor(private auth: ClassServiceAuth, private actro: ActivatedRoute){}

    ngOnInit(){
        this.bebidasMenu=this.auth.getBebidasList();
    }

}
