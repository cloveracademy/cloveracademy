import { FC, useRef } from "react";
import BrandText from "../UtilityComponents/Navbar/BrandName/brandText";
import Courses from "../Courses/courses";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/contact";
import HeroContainer from "../HeroContainer/herocontainer";

const MainPage: FC = (): JSX.Element => {
  const coursesRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const navOptions: { key: string; value: string }[] = [
    { key: "courses", value: "Courses" },
    { key: "pricing", value: "Pricing" },
    { key: "contact", value: "Contact Us" },
    { key: "loginsignup", value: "Login/ Signup" },
  ];

  const handleScroll = (key: string) => {
    switch (key) {
      case "courses":
        coursesRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "pricing":
        pricingRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
    }
  };

  return (
    <div className="flex flex-col h-full items-center">
      <div className="h-20 border-b shadow-md border-b-teal-200 w-full my-auto">
        <div className="flex h-full w-full items-center justify-center px-2">
          <div className="flex flex-row w-full justify-start">
            <BrandText>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                CloverAcademy
              </p>
            </BrandText>
            <div className="ml-auto">
              <div className="flex flex-row w-full justify-center gap-6">
                {navOptions.map((item: { key: string; value: string }) => {
                  return (
                    <div
                      className="h-8 w-auto rounded-md  hover:text-teal-400 p-2 font-semibold cursor-pointer"
                      key={item.key}
                      onClick={() => handleScroll(item.key)}
                    >
                      {item.value}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grow w-4/5 h-full px-4 pb-4">
        <div className="flex h-full w-full">
          <HeroContainer />
        </div>
        <div
          className="flex h-full w-full"
          ref={(el) => (coursesRef.current = el)}
        >
          <Courses />
        </div>
        <div
          className="flex h-full w-full mt-24"
          ref={(el) => (pricingRef.current = el)}
        >
          <Pricing />
        </div>
        <div
          className="flex h-full w-full mt-24"
          ref={(el) => (contactRef.current = el)}
        >
          <Contact />
        </div>
      </div>
      <div className="h-auto border-t shadow-md w-full my-auto mt-8 border-t-teal-200">
        <div className="flex flex-col h-full w-full items-center gap-4">
          <div className="flex flex-row w-full justify-center gap-4 py-2 px-4">
            <div className="flex flex-col h-full w-auto gap-1 mx-auto">
              <p className="text-lg font-semibold">Reach us at</p>
              <p className="mt-2">
                <span>Zip Code: </span> 08536
              </p>
              <p>
                <span>Country: </span> USA
              </p>
              <p>
                <span>Telephone: </span> +1 (732) 421-4042
              </p>
              <p>
                <span>Telephone: </span> +1 (267) 886-4559
              </p>
            </div>
            <div className="flex flex-col h-full w-auto gap-1 mx-auto">
              <p className="text-lg font-semibold">Office Address</p>
              <p className="mt-2">317 Cleveland Avenue,</p>
              <p>Highland Park,</p>
              <p>NJ - 08904</p>
            </div>
            <div className="flex flex-col h-full w-auto gap-1 mx-auto">
              <p className="text-lg font-semibold">Email Us</p>
              <p className="text-lg text-blue-500">info@polytera.com</p>
            </div>
          </div>
          <p className="text-lg font-semibold">
            &copy; 2009-2011 PolyTera · All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
