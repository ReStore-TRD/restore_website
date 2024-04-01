import Link from "next/link";
import Button from "../Button";
import Logo from "../Logo";
import SidebarLine from "../../../assets/navigation_bar/sidebar.svg";
import CloseIcon from "../../../assets/navigation_bar/close-button.svg";
import Image from "next/image";

interface SidebarProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

function Sidebar({ toggleSidebar, isOpen }: SidebarProps) {
  return (
    <div className="flex justify-between items-center p-6">
      <Logo />
      <button onClick={() => toggleSidebar()}>
        <Image
          src={SidebarLine}
          alt="sidebar"
          objectFit="contain"
          className="mix-blend-multiply"
        />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={
          isOpen
            ? "fixed top-0 right-0 z-50 h-screen w-4/5 bg-background"
            : "hidden"
        }
      >
        <div className="flex flex-col text-center">
          <div className="flex justify-end p-6 mt-3">
            <Image
              src={CloseIcon}
              alt={""}
              width={40}
              height={40}
              onClick={() => toggleSidebar()}
              className=""
            />
          </div>
          <div className="flex flex-col gap-10 justify-center my-auto text-2xl ">
            <Link href="/about" onClick={() => toggleSidebar()}>
              About
            </Link>
            <Link href="/projects" onClick={() => toggleSidebar()}>
              Projects
            </Link>
            <Link href="/faq" onClick={() => toggleSidebar()}>
              FAQ
            </Link>
            <div className="text-white text-2xl">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
