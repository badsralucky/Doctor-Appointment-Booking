// import heroImage01 from "../assests/images/hero-img01.png"
// import heroImage02 from "../assests/images/hero-img02.png"
// import heroImage03 from "../assests/images/hero-img03.png"
import icon01 from "../assests/images/icon01.png";
import icon02 from "../assests/images/icon02.png";
import icon03 from "../assests/images/icon03.png";
import featureImg from "../assests/images/feature-img.png";
import videoIcon from "../assests/images/video-icon.png";
import avatarIcon from "../assests/images/avatar-icon.png";
import faqImg from "../assests/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/Faqlist";
import Testimonial from "../components/Testimonial/Testimonial";
const Home = () => {
  return (
    <>

      {/*======hero section======  */}

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex-col lg-flex-row gap-[90px] items-center justify-between">
            {/* ======hero content===== */}
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
                md:leading-[70px]"
                >
                  Our Pledge is to keep patients to live a healthy ,longer life
                </h1>
                <p className="text_para">
                 The prestigious medical facility available in your area with the world class dcotor . Our best is something we strive for each day, caring for our patients-not looking back at what we accomplished but towards what we can do tomrrow.Providing the best.
                </p>

              <Link to ='/doctors/1'>
                <button className="btn">Request an Appointment
                </button>
                </Link>
              </div>

              {/* =======Hero Counter======== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] tetx-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] tetx-headingColor">
                    45+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] tetx-headingColor">
                    1500+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Satisfied Patients </p>
                </div>
              </div>
            </div>

            {/* ======hero content===== */}
            {/* <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImage01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImage02} alt="" className="w-full mb-[30px]" />
                <img src={heroImage03} alt="" className="w-full " />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/*======hero section end======  */}


      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className=" heading text-center mt-10">
              Providing the best medical services
            </h2>
            <p className="text_para text-center ">
              World-Class care for everyone.Our health system offers unmatched ,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 
                text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  {" "}
                  World class facility ,provides you a options to find the docotrs of your requirments .
                  You can search from different docotrs with thier specialtity to treat you well
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Near By Clinic
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  {" "}
                No need to go anywhere .Medicare is a step away from you .Search a nearby clinic just on one click.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  {" "}
                  Worls class Doctors are waiting for you .Just book an appointment to get treat with our Doctors
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* ==========Services section start======= */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center mt-8">Our Medical Services</h2>
            <p className="text_para text-center">
              World class care for Everyone.Our health system offers umatched
              ,expert health care
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* ==========Services section end======= */}
      {/*=======Feature section start =====  */}

      <section>
        <div className="container">
          <div className="flex item-center justify-between flex-col lg:flex-row">
            {/* Feautre Content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text_para">
                  2. Search for Your Physician here , and contact their office.{" "}
                </li>
                <li className="text_para">
                  3.Veiw our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* ========Feature Image========= */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue ,24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10 :00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg-px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px[10px] text-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4
               rounded-full"
                >
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg-mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wyan Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=======Feature section end ======  */}
      {/* =======Our great doctors========= */}
      <br />{" "}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text_para text-center">
              World class care for Everyone.Our health system offers umatched
              ,expert health care
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* =======Our great doctors end========= */}


      {/* ======Faq Section start===== */}
            <br /><br />
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block"><img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2 ">
            <h2 className="heading"> Most questions by our beloved patients
            </h2>
            <FaqList/>
            </div>

          </div>
        </div>
      </section>
      {/* ======Faq Section end ===== */}


      {/* ======= testimonial ======= */}
      <section>
        <br />
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center mt-8">What our patients says</h2>
            <p className="text_para text-center">
              World class care for Everyone.Our health system offers umatched
              ,expert health care
            </p>
          </div>

          <Testimonial/>
        </div>
      </section>
      {/* ======= testimonial end ======= */}
    </>
  );
};

export default Home;
