import React from "react";
// import Nav from "../../../components/navbar/nav";
import { HiSearch } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import "./landing.css";
import Target1 from "../../../assets/target1.svg";
import Target2 from "../../../assets/target2.svg";
import Target3 from "../../../assets/target3.svg";
import Target4 from "../../../assets/target4.svg";
import connectedAwards from "../../../assets/connected-awards.png";
import celebrated from "../../../assets/celebrated.png";
import RightBg from "../../../assets/right-bg.png";
import LeftBg from "../../../assets/left-bg.png";
import talent1 from "../../../assets/first-talent.png";
import talent2 from "../../../assets/second-talent.png";
import talent3 from "../../../assets/third-talent.png";
// import FooterLogo from "../../../assets/footer-logo.svg";

const Home = () => {
  return (
    <div className="font-pulpdisplay">
      <div className="flex items-center justify-center mb-8">
        <p className="text-[96px] text-center tracking-[-0.06em] w-[60%] leading-[115px] land-res-1">
          First Ever Tech Personality Award For Africans in Europe
        </p>
      </div>
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center justify-between w-[30%] home-search-res">
          <div className="border-[1px] border-[#DBDBDB] rounded-[4px] flex items-center pl-6 py-1 w-[78%]">
            <HiSearch className="text-[#BABABA] text-[20px]" />
            <input
              type="text"
              placeholder="Nominee's Name, Nominee's Category"
              className="outline-none p-2 w-[100%] home-search-res-1"
            />
          </div>
          <button className="bg-[#3E0563] px-8 py-3 rounded-[4px] text-[white] landing-search-button">
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mb-12">
        <span>View all categories</span>{" "}
        <BsArrowRight className="text-[20px] ml-2" />
      </div>
      {/* ----------------------Our Target------------------------------ */}
      <div className="ourtarget pt-16 pb-40 mb-12">
        <h1 className="text-[white] text-[48px] mb-12 text-center">
          Our Target
        </h1>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 w-[75%] self-center res-home-1">
            <div className="border border-[#9E82B1] flex flex-col items-center justify-center p-4 w-[250px] h-[250px] place-self-center res-home-2">
              <img src={Target1} alt="awareness" />
              <p className="text-[white] text-[24px] text-center mt-2">
                Awareness
              </p>
            </div>
            <div className="border border-[#9E82B1] flex flex-col items-center justify-center p-4 w-[250px] h-[250px] place-self-center res-home-2">
              <img src={Target2} alt="competition" />
              <p className="text-[white] text-[24px] text-center">
                Competition
              </p>
            </div>
            <div className="border border-[#9E82B1] flex flex-col items-center justify-center p-4 w-[250px] h-[250px] place-self-center res-home-2">
              <img src={Target3} alt="enterainment" />
              <p className="text-[white] text-[24px] text-center">
                Entertainment
              </p>
            </div>
            <div className="border border-[#9E82B1] flex flex-col items-center justify-center p-4 w-[250px] h-[250px] place-self-center res-home-2">
              <img src={Target4} alt="recognition" />
              <p className="text-[white] text-[24px] text-center mt-4">
                Recognition
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------connected-awards------------------------------ */}
      <div className=" flex items-start justify-between relative mb-32">
        <div className="grid grid-cols-2 gap-4 px-80 award-res-1">
          <img
            src={connectedAwards}
            alt="connected awards"
            className="h-[100%] w-[90%]"
          />

          <div className="flex flex-col w-[90%] award-res-1a">
            <div className=" mb-5">
              <h1 className="text-[36px] text-[#0C0114] w-[100%] mb-[1px] font-semibold">
                The Connected Awards
              </h1>
              <p className="border-b-4 border-b-[#FA9706] w-[15%]"></p>
            </div>
            <p className=" text-justify mb-5">
              The connected is.....It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.
            </p>
            <button className="flex items-center justify-center bg-[#3E0563] py-3 rounded-[4px] text-[white] w-[150px]">
              Learn more
            </button>
          </div>
        </div>

        <img src={RightBg} alt="" className="absolute bottom-0 right-0 " />
      </div>
      {/* -------------------celebrated techie------------------------------ */}

      <div className="flex items-start justify-between relative mb-20  techie-res-0">
        <div className="grid grid-cols-2 gap-4 px-80 techie-res-1">
          <div className="flex flex-col w-[90%] techie-res-1a">
            <div className=" mb-5">
              <h1 className="text-[36px] text-[#0C0114] w-[100%] mb-[1px] font-semibold">
                Celebrated Techies
              </h1>
              <p className="border-b-4 border-b-[#FA9706] w-[15%]"></p>
            </div>
            <p className=" text-justify mb-5">
              The connected is.....It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.
            </p>
            <button className="flex items-center justify-center bg-[#3E0563] py-3 rounded-[4px] text-[white] w-[150px]">
              Learn more
            </button>
          </div>
          <img
            src={celebrated}
            alt="celebrated techies"
            className="h-[100%] w-[90%]"
          />
        </div>

        <img src={LeftBg} alt="" className="absolute bottom-0 left-0" />
      </div>
      {/* -------------------talent----------------------------- */}
      <div className="talent px-80">
        <div className="grid grid-cols-3 gap-3 self-center talent-res">
          <div className="border border-[#9E82B1] flex flex-col items-center justify-center px-4 py-10 w-[90%] h-[320px] place-self-center">
            <img src={talent2} alt="recognition" />
            <p className="text-[#3E0563] text-[25px] text-center mt-4 font-semibold">
              Promising Talent
            </p>
            <p className="text-center text-[16px] mt-4">
              Promising Talent is an individual with less than 5 years
              experience in Nigeria technology ecosystem. Such individual are
              well recognized in their field for impacting with their skills.
            </p>
          </div>
          <div className="border border-[#9E82B1] flex flex-col items-center justify-center px-4 py-10 w-[90%] h-[320px] place-self-center">
            <img src={talent3} alt="recognition" />
            <p className="text-[#3E0563] text-[25px] text-center mt-4 font-semibold">
              Intermediate Talent
            </p>
            <p className="text-center text-[16px] mt-4">
              Promising Talent is an individual with less than 5 years
              experience in Nigeria technology ecosystem. Such individual are
              well recognized in their field for impacting with their skills.
            </p>
          </div>
          <div className="border border-[#9E82B1] flex flex-col items-center justify-center px-4 py-10 w-[90%] h-[320px] place-self-center">
            <img src={talent1} alt="recognition" />
            <p className="text-[#3E0563] text-[25px] text-center mt-4 font-semibold">
              Exceptional Talent
            </p>
            <p className="text-center text-[16px] mt-4">
              Promising Talent is an individual with less than 5 years
              experience in Nigeria technology ecosystem. Such individual are
              well recognized in their field for impacting with their skills.
            </p>
          </div>
        </div>
      </div>
      {/* -------------------footer----------------------------- */}

      {/* <div className="footer pt-16 pb-12 px-80">
        <div className="grid grid-cols-5">
          <div className="flex flex-col">
            <p className="text-[#FA9706] text-[16px] mb-6">About</p>
            <p className="text-[white] text-[16px] mb-6">
              The Connected Magazine
            </p>
            <p className="text-[white] text-[16px] mb-6">Past Editions</p>
            <p className="text-[white] text-[16px] mb-6">Celebrated Techies</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#FA9706] text-[16px] mb-6">Legal</p>
            <p className="text-[white] text-[16px] mb-6">Terms of Service</p>
            <p className="text-[white] text-[16px] mb-6">Privacy Policy</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#FA9706] text-[16px] mb-6">Social</p>
            <p className="text-[white] text-[16px] mb-6">Linkedin</p>
          </div>
          <div className="flex flex-col col-span-2">
            <p className="text-[#FA9706] text-[16px] mb-6">Contact</p>
            <p className="text-[white] text-[16px] mb-6">+23458304823</p>
            <p className="text-[white] text-[16px] mb-6">Past Editions</p>
            <p className="text-[white] text-[16px] mb-6">Celebrated Techies</p>
          </div>
        </div>
        <div className="flex items-end justify-between mt-20">
          <div className="flex flex-col items-center justify-center">
            <img src={FooterLogo} alt="footer logo" />
            <p className="mt-4 text-[white]">Celebrating Techies Globally</p>
          </div>

          <p className="text-[16px] text-[white]">
            &copy; 2022 The Conected Awards - All rights reserved
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
