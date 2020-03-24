import { Component, OnInit } from '@angular/core'
import { ClassServiceAuth } from '../Shared/autorize.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'postres',
    templateUrl: './postres.component.html',
    styleUrls: ['./postres.component.css']
})

export class ClasePostrePage implements OnInit{
    public postreMenu: any
    constructor(private auth: ClassServiceAuth, private actro: ActivatedRoute){}

    ngOnInit(){
        this.postreMenu=this.auth.getPostreList();
    }

}
