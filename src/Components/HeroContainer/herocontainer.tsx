import { FC } from "react";
import SmartClass from "../../assets/images/smartclass.avif";
import { Alert, Divider } from "@mantine/core";

const HeroContainer: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full py-12">
      <div className="flex flex-col w-full h-3/5 items-center gap-2">
        <h1 className="text-5xl text-center font-semibold">
          Empower minds, inspire futures
        </h1>
        <small className="text-lg text-left">
          – your education, reimagined
        </small>
        <img src={SmartClass} alt="smartclass" className="rounded pt-8" />
        <Divider
          orientation="horizontal"
          size={"md"}
          className="w-3/5 rounded"
          color="#4DB6AC"
        />
        <div className="h-full w-full mt-8">
          <div className="flex flex-row w-full h-full items-start justify-center gap-4">
            <Alert variant="light" color="blue" className="w-2/5">
              <p className="text-lg">
                <span className="text-2xl font-semibold">We</span> provide
                after-school and weekend school enrichment programs for talented
                students from grades IV - VII.
              </p>
            </Alert>
            <Alert variant="light" color="blue" className="w-2/5">
              <p className="text-lg">
                <span className="text-2xl font-semibold">We</span> provide
                after-school and weekend school enrichment programs for talented
                students from grades IV - VII.
              </p>
            </Alert>
            <Alert variant="light" color="blue" className="w-2/5 grow h-full">
              <p className="text-lg">
                <span className="text-2xl font-semibold">We</span> architect,
                build and deploy solutions that is unique to each customer based
                on their requirements.
              </p>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
