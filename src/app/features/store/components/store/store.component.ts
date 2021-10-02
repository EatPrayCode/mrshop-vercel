import { FiltersComponent } from '../filters/filters.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { SidenavService } from '../../sidenav.service';
import { ChooseCategoriesComponent } from '../choose-categories/choose-categories.component';
import { onSideNavChange, animateText, onMainContentChange } from '../../animations/animations';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  animations: [onSideNavChange, animateText, onMainContentChange]
})
export class StoreComponent implements OnInit {

  public onSideNavChange: boolean = false;
  public sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
  public sort: any;

  constructor(
    private _sidenavService: SidenavService,
    private observer: BreakpointObserver,
    public dialog: MatDialog,
  ) {
    this._sidenavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
    this.sort = this.sortings[0];
  }

  public changeSorting(sort: any) {
    this.sort = sort;
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {

        } else {

        }
      });
  }

  gotoPacks() {

  }

  gotoServices() {

  }

  openPackSummaryDialog(pack: any): void {
    let dialogRef = this.dialog.open(ChooseCategoriesComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '50%',
      position: {
        right: '0px',
        bottom: '0px',
      },
      data: {
        pack: pack
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
