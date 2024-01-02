import { FC } from "react";
import SectionHeading from "../UtilityComponents/Section/sectionHeading";
import CourseViewer from "./CourseViewer/courseviewer";

const Courses: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col h-full w-full items-center gap-4">
      <SectionHeading>Courses</SectionHeading>
      <CourseViewer />
    </div>
  );
};

export default Courses;
