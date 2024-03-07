import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "course-image",
  standalone: true,
  templateUrl: "./course-image.component.html",
})
export class CourseImageComponent implements OnInit {
  @Input({ required: true, alias: "src" })
  imgUrl: string;

  constructor() {}

  ngOnInit(): void {}
}
