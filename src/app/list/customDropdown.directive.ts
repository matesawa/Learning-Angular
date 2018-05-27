import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';
@Directive({
  selector: '[appCustomdropdown]'
})
export class CustomDropdownDirective {

    private isOpen: Boolean = false;
    constructor(private _el: ElementRef) {}

    @HostBinding('class.show') get opened() {
        return this.isOpen;
    }
    @HostListener('click') open() {
        this.isOpen = true;
        this._el.nativeElement.querySelector('.dropdown-menu').classList.add('show');
    }

    @HostListener('mouseleave') mouseleave() {
        this.isOpen = false;
        this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
    }
}
