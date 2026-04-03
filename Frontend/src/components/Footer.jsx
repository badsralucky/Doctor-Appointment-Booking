import { Link } from 'react-router-dom'
import logo from '../../assests/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const socialLinks = [
  {
    path: "https://www.youtube.com/@luckybadsra",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.github.com/badsralucky",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/luckybadsra/",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/luckybadsra/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/doctors/1",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/doctors/1",
    display: "Get an Opininon",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear()
  return <footer>
    <div className="container mt-12">
      <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
        <div>
          <img src={logo} alt="" />
          <p className="text-[16px] leading-7 font-[400]
           flex-col md:flex-row flex-wrap text-textColor mt-4">
            Copyright © {year} developed by  Lucky Badsra all Rights Reserved
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link, index) => <Link to={link.path} key={index} className="w-9 h-9 mb-12 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">{link.icon}</Link>)}
          </div>
        </div>

        <div>
          <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
            Quick Links
          </h2>
          <ul>
            {
              quickLinks.map((item, index) =>
                <li key={index}
                  className="mb-8">
                  <Link to ={item.path}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>)
            }
          </ul>
        </div>

        <div>
          <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
            I want to:
          </h2>
          <ul>
            {
              quickLinks02.map((item, index) =>
                <li key={index}
                  className="mb-8">
                  <Link to ={item.path}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>)
            }
          </ul>
        </div>
        <div>
          <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
            Support
          </h2>
          <ul>
            {
              quickLinks03.map((item, index) =>
                <li key={index}
                  className="mb-8">
                  <Link to ={item.path}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>)
            }
          </ul>
        </div>

      </div>
    </div>
  </footer>

};

export default Footer;
