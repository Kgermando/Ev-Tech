import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  toDay = new Date();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.toDay = new Date();
  }

  openDialog() {
    const dialogRef = this.dialog.open(SnackbarComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
