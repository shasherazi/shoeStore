import {
  SiAdidas,
  SiFila,
  SiJordan,
  SiNike,
  SiPuma,
  SiReebok,
} from "react-icons/si";

export const CompaniesBanner = () => {
  return (
    <div className="companiesBanner flex h-24 items-center justify-around text-5xl text-gray-700 border-t-2 border-b-2 border-gray-200">
      <div className="companyLogo">
        <SiNike />
      </div>
      <div className="companyLogo">
        <SiAdidas />
      </div>
      <div className="companyLogo">
        <SiPuma />
      </div>
      <div className="companyLogo">
        <SiReebok />
      </div>
      <div className="companyLogo">
        <SiJordan />
      </div>
      <div className="companyLogo">
        <SiFila />
      </div>
    </div>
  );
};
