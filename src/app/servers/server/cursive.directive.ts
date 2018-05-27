import { Directive, ElementRef, OnInit } from '@angular/core';

// tak się nie robi!
@Directive({
    selector: '[appCursive]'
})
export class CursiveDirective implements OnInit {

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.fontStyle = 'italic';
    }

}
