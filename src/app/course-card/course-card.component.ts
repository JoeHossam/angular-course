import {
  Component,
  Input,
  EventEmitter,
  Output,
  TemplateRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Course } from "../model/course";
import { CourseImageComponent } from "./course-image/course-image.component";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [CommonModule, CourseImageComponent],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course;

  @Input({ required: true })
  noImgTpl: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onViewCourse(id: number) {
    console.log("viewing Course ", id);
    this.courseSelected.emit(this.course);
  }
  cardClasses() {
    const classeMapper = {
      BEGINNER: "beginner",
    };
    if (classeMapper[this.course.category]) {
      return classeMapper[this.course.category];
    }
  }

  cardStyles() {
    return {};
  }
}
