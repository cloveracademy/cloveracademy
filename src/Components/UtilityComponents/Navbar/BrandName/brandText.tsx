import { FC, PropsWithChildren } from "react";

const BrandText: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <p className="font-bold text-2xl">{children}</p>;
};

export default BrandText;
