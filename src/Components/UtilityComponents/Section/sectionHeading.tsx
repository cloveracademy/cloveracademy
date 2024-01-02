import { FC, PropsWithChildren } from "react";

const SectionHeading: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <p className="font-semibold text-center text-2xl">{children}</p>;
};

export default SectionHeading;
