import { DataBase } from 'src/app/core/util/data-base';
import { LinkSideNavbar } from './../../core/util/models/link-side-navbar';
import { PageService } from './../page.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { Component, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/core/util/constants';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  private _routeSelected: string;

  linksSideNavbar: LinkSideNavbar[];

  constructor(private router: Router, private viewportScroller: ViewportScroller, private pageService: PageService) {}

  public get routeSelected(): string {
    return this._routeSelected;
  }
  @Input()
  public set routeSelected(routeSelected: string) {
    this._routeSelected = routeSelected;
  }

  ngOnInit(): void {
    this.getLinks();
  }

  getLinks(): void {
    this.pageService.getDatas(DataBase.linksSideNavbar).subscribe(x => {
      this.linksSideNavbar = x;
    });
  }

  onClickGoToPage(routeSelected: string): void {
    if (routeSelected === Constants.ROUTE_RESUME) {
      this.router.navigate(['resume']);
    }
    if (routeSelected === Constants.ROUTE_PROJECT) {
      this.router.navigate(['']);
    }
  }

  onClickScroll(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  // @HostListener('document:click', ['$event', 'data-dismiss="drawer"'])
  // onClickTouchDataDismissDrawer(event, drawer) {
  //   this.closeDrawer(event, drawer);
  // }

  // @HostListener('document:click', ['$event', 'data-dismiss="left-drawer"'])
  // onClickTouchDataDismissLeftDrawer(event) {
  //   this.closeDrawer(event, this.getLeftDrawer());
  // }

  // @HostListener('document:click', ['$event', 'data-dismiss="right-drawer"'])
  // onClickTouchDataDismissRightDrawer(event) {
  //   this.closeDrawer(event, this.getRightDrawer());
  // }

  // @HostListener('document:click', ['data-open="drawer"'])
  // onClickTouchDataOpenDrawer() {
  //   this.openDrawer(this.elem.nativeElement.querySelector('.navbar.fixed-top.off-canvas:not(.open)'));
  // }

  // @HostListener('document:click', ['data-open="left-drawer"'])
  // onClickTouchDataOpenLeftDrawer() {
  //   this.openDrawer(this.getLeftDrawer());
  // }

  // @HostListener('document:click', ['data-open="right-drawer"'])
  // onClickTouchDataOpenRightDrawer() {
  //   this.openDrawer(this.getRightDrawer());
  // }

  // @HostListener('document:click', ['$event', 'data-toggle="drawer"'])
  // onClickTouchDataToggleDrawer(event) {
  //   this.toggleDrawer(event, this.elem.nativeElement.querySelector('.navbar.fixed-top.off-canvas'));
  // }

  // @HostListener('document:click', ['$event', 'data-toggle="left-drawer"'])
  // onClickTouchDataToggleLeftDrawer(event) {
  //   this.toggleDrawer(event, this.getLeftDrawer());
  // }

  // @HostListener('document:click', ['$event', 'data-toggle="right-drawer"'])
  // onClickTouchDataToggleRightDrawer(event) {
  //   this.toggleDrawer(event, this.getRightDrawer());
  // }

  // swipeDetect(el, callback) {
  //   let touchsurface = el,
  //     swipedir,
  //     startX,
  //     startY,
  //     dist,
  //     distX,
  //     distY,
  //     threshold = 150, //required min distance traveled to be considered swipe
  //     restraint = 100, // maximum distance allowed at the same time in perpendicular direction
  //     allowedTime = 300, // maximum time allowed to travel that distance
  //     elapsedTime,
  //     startTime,
  //     handleswipe = callback || function (swipedir) {};

  //   touchsurface.addEventListener(
  //     'touchstart',
  //     e => {
  //       const touchobj = e.changedTouches[0];
  //       swipedir = 'none';
  //       dist = 0;
  //       startX = touchobj.pageX;
  //       startY = touchobj.pageY;
  //       startTime = new Date().getTime(); // record time when finger first makes contact with surface
  //       // e.preventDefault()
  //     },
  //     false
  //   );

  //   touchsurface.addEventListener(
  //     'touchmove',
  //     e => {
  //       // e.preventDefault() // prevent scrolling when inside DIV
  //     },
  //     false
  //   );

  //   touchsurface.addEventListener(
  //     'touchend',
  //     e => {
  //       const touchobj = e.changedTouches[0];
  //       distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
  //       distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
  //       elapsedTime = new Date().getTime() - startTime; // get time elapsed
  //       if (elapsedTime <= allowedTime) {
  //         // first condition for awipe met
  //         if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
  //           // 2nd condition for horizontal swipe met
  //           swipedir = distX < 0 ? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
  //         } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
  //           // 2nd condition for vertical swipe met
  //           swipedir = distY < 0 ? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
  //         }
  //       }
  //       handleswipe(swipedir);
  //       // e.preventDefault()
  //     },
  //     false
  //   );
  // }

  //   swipeDetect($(document)[0], function(dir) {

  // });

  // detectDir(dir, event) {
  //   const leftDrawer = this.getLeftDrawer();
  //   const rightDrawer = this.getRightDrawer();

  //   if (dir === 'left') {
  //     if (leftDrawer.length > 0 && this.isOpen(leftDrawer)) {
  //       this.closeDrawer(event, leftDrawer);
  //     } else if (rightDrawer.length > 0) {
  //       this.openDrawer(rightDrawer);
  //     }
  //   } else if (dir === 'right') {
  //     if (rightDrawer.length > 0 && this.isOpen(rightDrawer)) {
  //       this.closeDrawer(event, rightDrawer);
  //     } else if (leftDrawer.length > 0) {
  //       this.openDrawer(leftDrawer);
  //     }
  //   }
  // }

  // isOpen(drawer: any): boolean {
  //   if (drawer.hasAttribute('data-open-drawer') === undefined || drawer.hasAttribute('data-open-drawer') === null) {
  //     console.warn('UNDEFINED');
  //   }
  //   return drawer.hasAttribute('data-open-drawer') === '1' || drawer.classList.contains('open');
  // }

  // anyOpenDrawers(): boolean {
  //   let anyOpen = false;
  //   const elements = this.elem.nativeElement.querySelectorAll('.navbar.fixed-top.off-canvas');
  //   elements.forEach(() => {
  //     if (this.isOpen.bind(this)) {
  //       anyOpen = true;
  //       return false;
  //     }
  //   });
  //   return anyOpen;
  // }

  // openDrawer(drawer: any): void {
  //   if (!this.isOpen(drawer)) {
  //     if (!this.anyOpenDrawers()) {
  //       const p = drawer.parent();
  //       if (p.classList.contains('drawer-push') || p.classList.contains('drawer-slide')) {
  //         p.classList.add('open');
  //         document.querySelector('body').classList.add('drawer-open');
  //       }
  //     }
  //     if (drawer.hasAttribute('data-open-drawer="1"')) {
  //       console.warn('OK');
  //     }
  //     drawer.classList.add('open').hasAttribute('data-open-drawer="1"');
  //   }
  // }

  // closeDrawer(e: Event, drawer: any): void {
  //   if (drawer !== 'undefined') {
  //     console.warn('IT IS UNDEFINED');
  //     const elements = this.elem.nativeElement.querySelector('.navbar.fixed-top.off-canvas.open');
  //     drawer = elements;
  //     if (drawer.length === 0) {
  //       drawer = this.elem.nativeElement.querySelector('.navbar.fixed-top.off-canvas[data-open-drawer="1"]');
  //     }
  //   }

  //   const p = drawer.parent();
  //   drawer.removeClass('open');
  //   drawer.hasAttribute('data-open-drawer', '0');

  //   if (!this.anyOpenDrawers()) {
  //     if (p.classList.contains('drawer-push') || p.classList.contains('drawer-slide')) {
  //       p.removeClass('open');
  //     }
  //     this.elem.nativeElement.querySelector('body').classList.remove('drawer-open');
  //   }
  // }

  // getRightDrawer(): NodeListOf<Element> {
  //   let d = this.elem.nativeElement.querySelectorAll('.navbar.fixed-top.off-canvas.right-drawer');
  //   if (d.length === 0) {
  //     d = this.elem.nativeElement.querySelectorAll('.navbar.fixed-top.off-canvas[data-right-drawer="1"]');
  //   }
  //   if (d.length === 0) {
  //     d = null;
  //   }
  //   return d;
  // }

  // getLeftDrawer() {
  //   const d = this.elem.nativeElement.querySelectorAll('.navbar.fixed-top.off-canvas:not(.right-drawer)');
  //   if (d.length === 0) {
  //     return null;
  //   }

  //   let ld = null;
  //   d.forEach(() => {
  //     if (typeof d.hasAttribute('data-right-drawer') === 'undefined' || d.hasAttribute('data-right-drawer') === '0') {
  //       ld = d;
  //       return false;
  //     }
  //   });

  //   return ld;
  // }

  // toggleDrawer(event, drawer): void {
  //   if (this.isOpen(drawer)) {
  //     this.closeDrawer(event, drawer);
  //   } else {
  //     this.openDrawer(drawer);
  //   }
  // }
}
