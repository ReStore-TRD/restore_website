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
    <div className=" flex justify-between items-center px-28 h-56 text-sm font-thin">
      <div className="flex flex-col gap-5">
        In collaboration with
        <Image src={sitLogo} alt={""} />
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-4">
          <Image src={instagramLogo} alt={""} />
          @restore.trdxals
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={facebookLogo} alt={""} />
          ReStore TRD
        </div>
      </div>
      <div>
        <p>Prestekrageveien 14</p>
        <p className="mb-4">1050 Trondheim, Norway</p>
        <p>info@restore.no</p>
      </div>
    </div>
  );
};

export default Footer;
