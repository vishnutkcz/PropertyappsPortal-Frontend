
import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PropertyappsPortal';

  ngOnInit(): void {
    $(function () {
      $(".heart").on("click", function () {
        $(this).toggleClass("is-active");
      });
    });
  }
}
