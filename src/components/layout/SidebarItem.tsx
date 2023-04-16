import { FunctionComponent } from "react";
import { IconType } from "react-icons/lib/esm/iconBase";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: FunctionComponent<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="fex flex-row items-center">
      <div
        className="
        relative 
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        hover:bg-slate-400
        hover:bg-oopacity-10
        cursor-pointer
        lg:hidden"
      >
        <Icon size={28} color="white" />
      </div>
    </div>
  );
};

export default SidebarItem;
