import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-internship",
  templateUrl: "./internship.component.html",
  styleUrls: ["./internship.component.css"]
})
export class InternshipComponent implements OnInit {
  userDetails;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
      },
      err => {
        console.log(err);
      }
    );
  }

  onNext() {
    this.router.navigate(["/skills"]);
  }
}
