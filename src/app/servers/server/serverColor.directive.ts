import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBold]'
})
export class ServerColorDirective implements OnInit {
    @Input() textColor: String;
    @Input() backgroundCol: String;

    @HostBinding('style.backgroundColor') backgroundColor: String = 'white';
    @HostBinding('style.color') color: String = this.textColor;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'normal');
        this.color = this.textColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = this.backgroundCol;
        this.color = 'white';

    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = 'white';
        this.color = this.textColor;
    }
}
