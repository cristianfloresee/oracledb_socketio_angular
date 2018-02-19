import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    navigation = [
        { link: 'about', label: 'About' },
        { link: 'features', label: 'Features' },
        { link: 'examples', label: 'Examples' }
    ];

    constructor() { }

    ngOnInit() {
    }

}
