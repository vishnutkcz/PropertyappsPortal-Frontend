import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent, LogModel } from '../../modals/login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $("#flip").click(function () {
        $("#panel").slideDown("slow");
      });
    });
    $(document).ready(function () {
      $('.menu-toggle').click(function () {
        $('.header__navbar').toggleClass('active');
      });
    });
    $(document).ready(function () {
      $('.close-navbar').click(function () {
        $('.header__navbar').removeClass('active');
      })
    })
  }
  OpenLoginModal() {
    const obj: LogModel = { Message: 'Test' }
    const popModal = this.dialog.open(LoginModalComponent, {
      data: obj,
      width: '60%'

    });
  }

}


