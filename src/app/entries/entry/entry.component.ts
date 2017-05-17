import {Component} from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent{
    title: string = 'My Photo';
    photo: string = 'http://placehold.it/800x500?text=AngularBasics';
    description: string = 'A description of the photo';

    comments: any[] = [
        {name: "John", comment: "A pretty good comment"},
        {name: "Sam", comment: "A pretty good comment"},
        {name: "Alex", comment: "A pretty good comment"},
        {name: "Shwe", comment: "A pretty good comment"},
        {name: "Ben", comment: "A pretty good comment"}
        
    ]
}