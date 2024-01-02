export type Courses = {
  key: string;
  programs: string[];
  courseLabel: string;
  description: string | undefined;
  info: string | undefined;
};

export type CoursesByClass = {
  className: string;
  key: string;
  courseList: Courses[];
};
