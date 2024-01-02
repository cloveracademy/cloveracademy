import { FC } from "react";
import { Table } from "@mantine/core";
import SectionHeading from "../UtilityComponents/Section/sectionHeading";

const Pricing: FC = (): JSX.Element => {
  const gradeThreeRates = [
    {
      categories: "Basic Package",
      details: "One Subject (Math / Science / Computer Programming)",
      rate: "$ 120",
    },
    {
      categories: "Standard Package",
      details: "Two Subjects or with a sibling",
      rate: "$ 200",
    },
    {
      categories: "Premium Package",
      details: "All three Subjects or with a sibling",
      rate: "$ 275",
    },
  ];
  const middleSchoolRates = [
    {
      categories: "Basic Package",
      details: "One Subject (Math / Science / Computer Programming)",
      rate: "$ 140",
    },
    {
      categories: "Standard Package",
      details: "Two Subjects or with a sibling",
      rate: "$ 250",
    },
    {
      categories: "Premium Package",
      details: "All three Subjects or with a sibling",
      rate: "$ 325",
    },
  ];
  const rowsGradeThree = gradeThreeRates.map((element, index: number) => (
    <Table.Tr key={index}>
      <Table.Td className="text-start w-auto">{element.categories}</Table.Td>
      <Table.Td className="text-start w-auto">{element.details}</Table.Td>
      <Table.Td className="text-start w-auto">{element.rate}</Table.Td>
    </Table.Tr>
  ));

  const rowMiddleSchool = middleSchoolRates.map((element, index: number) => (
    <Table.Tr key={index}>
      <Table.Td className="text-start w-auto">{element.categories}</Table.Td>
      <Table.Td className="text-start w-auto">{element.details}</Table.Td>
      <Table.Td className="text-start w-auto">{element.rate}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="flex flex-col h-full w-full items-center gap-4 pt-4">
      <SectionHeading>Pricing</SectionHeading>
      <div className="flex flex-row w-full justify-center gap-4 py-4">
        <div className="flex flex-col h-full w-full items-start gap-2">
          <p className="text-lg font-semibold">Rates for Grades III - V</p>
          <Table withTableBorder withRowBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Categories</Table.Th>
                <Table.Th>Details</Table.Th>
                <Table.Th>Rate</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rowsGradeThree}</Table.Tbody>
          </Table>
        </div>
        <div className="flex flex-col h-full w-full items-start gap-2">
          <p className="text-lg font-semibold">Rates for Middle School</p>
          <Table withTableBorder withRowBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Categories</Table.Th>
                <Table.Th>Details</Table.Th>
                <Table.Th>Rate</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rowMiddleSchool}</Table.Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
