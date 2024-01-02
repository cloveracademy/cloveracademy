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
          – your education, reimagined </br>

          <p>As President Kennedy said, “Change is the law of life. And those who look only to the past or present are certain to miss the future.”
Neither the aspiring ambitious youngsters nor their anxious parents want to miss the opportunity of a golden future. Yet to adapt and strive well in today's remarkably changing educational system is highly challenging and intimidating. </p><p>At Clover academy our experienced faculty try not only to bridge the gap between individual abilities and academic curriculum; one of our major goal is to prepare the young budding minds to meet upcoming challenges and sudden changes that may cross their academic path. Our comprehensive curriculum encompasses US common core, O level and Singapore A level syllabus including preparedness towards  mathematics, and science olympiad.  We emphasize strongly on one to one interaction between students and teacher. Our aim is to prepare our students towards academic excellence and college readiness with intellectual and emotional support.</p>
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
