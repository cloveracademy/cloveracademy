import { Button, Card, Divider, NavLink } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { FC, useState } from "react";
import { Courses, CoursesByClass } from "../../../SharedTypes/types";

type CourseCardProps = {
  className: string;
  classKey: string;
  selectedClass: string | undefined;
  classSelectHandler: (value: string) => void;
};

type CourseNavItem = {
  label: string;
  rightSection: JSX.Element;
};

const CourseViewer: FC = (): JSX.Element => {
  const [selectedClass, setSelectedClass] = useState<string | undefined>(
    undefined
  );
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(
    undefined
  );
  const coursesByClass: CoursesByClass[] = [
    {
      className: "4th Grade",
      key: "4g",
      courseList: [
        {
          courseLabel: "Advance Science",
          key: "advsc",
          programs: [
            "Water Cycle",
            "Earth Materials",
            "Human Body",
            "Atoms and Elements",
            "Plant Cell",
            "Animal Cell",
            "Energy",
            "Solar System",
            "States of Matter",
            "Photosynthesis",
            "Electricity",
          ],
          description: "Advanced Physics/Chemistry/Biology",
          info: "",
        },
        {
          courseLabel: "Advanced Computer Programming",
          key: "advcmp",
          programs: [
            "Introduction to Scratch",
            "Create Your Own Sprite",
            "Create a Scratch Story",
            "Create Games",
            "Introduction to World Wide Web",
          ],
          description: "Advanced Computer Programming",
          info: "",
        },
        {
          courseLabel: "Advanced & Enrichment Mathematics",
          key: "advmath",
          programs: [
            "Place Value of Whole Numbers",
            "Whole Number Operations: Addition and Subtraction",
            "Whole Number Operations: Multiplication and Division",
            "Fractions, Decimals, and Percent",
            "Data Analysis and Probability",
            "Geometry",
            "Algebraic Thinking",
            "Measurement",
            "Time and Temperature",
            "Problem Solving",
          ],
          description: "Advanced & Enrichment Mathematics",
          info: "",
        },
      ],
    },
    {
      className: "5th Grade",
      key: "5g",
      courseList: [
        {
          courseLabel: "Advance Science",
          key: "advsc",
          programs: [
            "Water Cycle",
            "Earth Materials",
            "Human Body",
            "Atoms and Elements",
            "Plant Cell",
            "Animal Cell",
            "Energy",
            "Solar System",
            "States of Matter",
            "Photosynthesis",
            "Electricity",
          ],
          description: "Advanced Physics/Chemistry/Biology",
          info: "",
        },
        {
          courseLabel: "Advanced Computer Programming",
          key: "advcmp",
          programs: [
            "Basic knowledge of Computer Hardware & Software",
            "Introduction to Computer Programming",
            "Learn HTML & CSS",
            "Learn BootStrap",
            "Learn Python",
            "Learn Fundamentals of JavaScript",
          ],
          description: "Advanced Computer Programming",
          info: "",
        },
        {
          courseLabel: "Advanced & Enrichment Mathematics",
          key: "advmath",
          programs: [
            "Place Value",
            "Adding/Subtracting Whole Numbers and Decimals",
            "Multiplication of Whole Numbers and Decimals",
            "Division of Whole Numbers and Decimals",
            "Algebraic Thinking",
            "Measurement (Length, Weight, Capacity, and Time)",
            "Metric Systems",
            "Problem Solving",
            "Expressions and Equations",
            "The Number System",
            "Ratio and Proportional Relationships",
            "Statistics",
            "Area, Volume and Surface Area",
            "Rational Numbers and the Coordinate Plane",
            "Inequalities and their Graphs",
          ],
          description: "Advanced & Enrichment Mathematics",
          info: "",
        },
      ],
    },
    {
      className: "6th Grade",
      key: "6g",
      courseList: [
        {
          courseLabel: "Advance Science",
          key: "advsc",
          programs: [
            "Water Cycle",
            "Earth Materials",
            "Human Body",
            "Atoms and Elements",
            "Plant Cell",
            "Animal Cell",
            "Energy",
            "Solar System",
            "States of Matter",
            "Photosynthesis",
            "Electricity",
          ],
          description: "Advanced Physics/Chemistry/Biology",
          info: "",
        },
        {
          courseLabel: "Advanced Computer Programming",
          key: "advcmp",
          programs: [
            "BootStrap in Detail",
            "JavaScript in Detail",
            "Python in Detail",
            "Learn the Command Line",
            "Introduction to SQL",
            "SQL Table Formation",
            "Make a Website",
            "Deploy a Website",
          ],
          description: "Advanced Computer Programming",
          info: "",
        },
        {
          courseLabel: "Advanced & Enrichment Mathematics",
          key: "advmath",
          programs: [
            "Problem Solving",
            "Expressions and Equations",
            "The Number System",
            "Ratio and Proportional Relationships",
            "Statistics",
            "Area, Volume and Surface Area",
            "Rational Numbers and the Coordinate Plane",
            "Inequalities and their Graphs",
            "Integers and Expressions",
            "Solving Equations",
            "Decimals and Equations",
            "Number Theory",
            "Rational Numbers and Expressions",
            "Equations and Inequalities",
          ],
          description: "Advanced & Enrichment Mathematics",
          info: "",
        },
      ],
    },
    {
      className: "7th Grade",
      key: "7g",
      courseList: [
        {
          courseLabel: "Advance Science",
          key: "advsc",
          programs: [
            "Water Cycle",
            "Earth Materials",
            "Human Body",
            "Atoms and Elements",
            "Plant Cell",
            "Animal Cell",
            "Energy",
            "Solar System",
            "States of Matter",
            "Photosynthesis",
            "Electricity",
          ],
          description: "Advanced Physics/Chemistry/Biology",
          info: "",
        },
        {
          courseLabel: "Advanced Computer Programming",
          key: "advcmp",
          programs: [
            "BootStrap in Detail",
            "JavaScript in Detail",
            "Python in Detail",
            "Learn the Command Line",
            "Introduction to SQL",
            "SQL Table Formation",
            "Make a Website",
            "Deploy a Website",
          ],
          description: "Advanced Computer Programming",
          info: "",
        },
        {
          courseLabel: "Advanced & Enrichment Mathematics",
          key: "advmath",
          programs: [
            "Expressions and Equations",
            "Integers",
            "Fractions",
            "Ratios, Rates, and Proportions",
            "Percent and Percent Applications",
            "Geometry",
            "Geometric Measurement",
            "Probability",
            "Statistics",
            "Inequalities",
            "Patterns, Graphs, and Functions",
          ],
          description: "Advanced & Enrichment Mathematics",
          info: "",
        },
      ],
    },
    {
      className: "7th Grade Advance",
      key: "7gadv",
      courseList: [
        {
          courseLabel: "Advanced & Enrichment Mathematics",
          key: "advmath",
          programs: [
            "Decimals and Equations",
            "Number Theory, Fractions and Exponents",
            "Ratio, Proportion, Percent",
            "Equations, Inequalities and Functions",
            "Geometry: Lines, Angles and Polygons",
            "Linear Functions and Graphing",
            "Introduction to Algebra",
            "Working with Real Numbers",
            "Solving Equations and Problems",
            "Polynomials",
            "Factoring Polynomials",
            "Fractions and Applying Fractions",
            "Linear Equations and Systems",
            "Introduction to Functions",
            "Rational and Irrational Numbers",
            "Quadratic Functions",
          ],
          description: "Advanced & Enrichment Mathematics",
          info: "",
        },
      ],
    },
    {
      className: "8th Grade",
      key: "8g",
      courseList: [
        {
          courseLabel: "Advance Science",
          key: "advsc",
          programs: [
            "Water Cycle",
            "Earth Materials",
            "Human Body",
            "Atoms and Elements",
            "Plant Cell",
            "Animal Cell",
            "Energy",
            "Solar System",
            "States of Matter",
            "Photosynthesis",
            "Electricity",
          ],
          description: "Advanced Physics/Chemistry/Biology",
          info: "",
        },
      ],
    },
  ];

  const classSelectHandler = (value: string) => {
    setSelectedClass(value);
  };

  let data: CourseNavItem[] = [];

  if (selectedClass) {
    const courseList = coursesByClass.filter(
      (item: CoursesByClass) => item.key === selectedClass
    )[0].courseList;
    data = courseList.map((item) => {
      return {
        label: item.courseLabel,
        rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
      };
    });
  }

  const programs: { key: string; value: string }[] = [];
  if (selectedCourse && selectedClass) {
    const courses = coursesByClass.filter(
      (item: CoursesByClass) => item.key === selectedClass
    )[0].courseList;
    console.log("courseList", courses);
    courses.forEach((item: Courses) => {
      if (selectedCourse === item.courseLabel) {
        item.programs.forEach((item: string, index: number) => {
          programs.push({ key: index.toString(), value: item });
        });
      }
    });
  }

  return (
    <div className="flex flex-col h-full w-full items-center gap-2 border rounded-lg py-4">
      {selectedClass && (
        <Button
          color="blue"
          radius="md"
          mt={"md"}
          onClick={() => {
            setSelectedClass(undefined);
            setSelectedCourse(undefined);
          }}
        >
          All classes
        </Button>
      )}
      <div className="flex flex-row w-full justify-center gap-10 py-16 px-4">
        {coursesByClass.map((item: CoursesByClass) => {
          return (
            <CourseCard
              key={item.key}
              className={item.className}
              selectedClass={selectedClass}
              classSelectHandler={classSelectHandler}
              classKey={item.key}
            />
          );
        })}
        {selectedClass && <Divider size="xs" orientation="vertical" />}
        {selectedClass && (
          <div className="flex flex-col h-full items-start">
            {data.map((item) => (
              <NavLink
                key={item.label}
                active={item.label === selectedCourse}
                label={item.label}
                rightSection={item.rightSection}
                onClick={() => setSelectedCourse(item.label)}
              />
            ))}
          </div>
        )}
        {selectedClass && <Divider size="xs" orientation="vertical" />}
        {selectedCourse && (
          <div className="flex flex-row h-8 w-full justify-start gap-4 flex-wrap pb-4">
            {programs.map((item: { key: string; value: string }) => (
              <p key={item.key} className="border rounded-md p-2">
                {item.value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CourseCard: FC<CourseCardProps> = ({
  className,
  selectedClass,
  classSelectHandler,
  classKey,
}): JSX.Element => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="h-auto"
      style={{
        display: selectedClass
          ? selectedClass !== classKey
            ? "none"
            : "block"
          : "block",
      }}
    >
      <Card.Section className="py-5 text-center">{className}</Card.Section>
      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => classSelectHandler(classKey)}
      >
        View Courses
      </Button>
    </Card>
  );
};

export default CourseViewer;
