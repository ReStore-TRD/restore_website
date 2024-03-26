import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import sitLogo from "../../assets/logos/sit.svg";
import instagramLogo from "../../assets/icons/instagram.svg";
import facebookLogo from "../../assets/icons/facebook.svg";

const items = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/restore_trd",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/ReStore.TRD",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/restore-trd",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center pl-8 pb-8 mt-16 md:mt-0 md:pb-0 md:px-16 lg:px-28 md:h-56 text-sm font-thin gap-10 md:gap-0">
      <div className="md:flex md:flex-col order-3 md:order-1 mx-auto md:mx-0">
        In collaboration with
        <a href="https://www.sit.no/bolig" target="_blank">
        <Image src={sitLogo} alt={"Sit logo"} className="mt-5" />
        </a>
      </div>

      <div className="order-2 md:order-2">
        <p className="text-2xl font-medium md:hidden border-b-2 border-b-black inline-block mb-3 pb-4">
          Follow us
        </p>
        <div className="flex gap-6  ">
          <div className="flex flex-col items-center gap-4 w-10 md:w-auto">
            <a href="https://www.instagram.com/restore_trd/" target="_blank">
              <Image src={instagramLogo} alt={""} />
            </a>
            <p className="hidden md:block">@restore_trd</p>
          </div>
          <div className="flex flex-col items-center gap-4 w-10 md:w-auto">
            <a href="https://www.facebook.com/ReStore.TRD" target="_blank">
              <Image src={facebookLogo} alt={""} />
            </a>
            <p className="hidden md:block">ReStore TRD</p>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-3">
        <p className="text-2xl font-medium md:hidden inline-block border-b-2 border-b-black mb-3 pb-4">
          Visit us
        </p>

        <p>Prestekrageveien 14</p>
        <p className="mb-4">7050 Trondheim, Norway</p>
        <p><a href="mailto:info@restore-trd.no" className="text-black">info@restore-trd.no</a></p>
      </div>
    </div>
  );
};

export default Footer;
