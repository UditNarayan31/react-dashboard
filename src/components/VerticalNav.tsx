import React, { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { title: "Dashboard", icon: HomeIcon },
  {
    title: "Users",
    icon: UsersIcon,
    children: ["All Users", "Add User", "User Roles"],
  },
  {
    title: "Settings",
    icon: Cog6ToothIcon,
    children: ["Profile", "Security"],
  },
  { title: "Reports", icon: DocumentTextIcon },
  { title: "Logout", icon: ArrowLeftOnRectangleIcon },
];

type SidebarProps = {
  bgColor: string;
};

const Sidebar: React.FC<SidebarProps> = ({ bgColor }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="group w-20 hover:w-60 h-screen text-white transition-all duration-300 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <ul className="space-y-2 mt-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <li key={index}>
              <div
                onClick={() => item.children && toggleDropdown(index)}
                className="relative right-5 flex items-center justify-between p-3 rounded cursor-pointer hover:bg-black/20"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 min-w-[24px]" />

                  <span className="whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300">
                    {item.title}
                  </span>
                </div>

                {item.children && (
                  <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300">
                    {openIndex === index ? "-" : "+"}
                  </span>
                )}
              </div>

              {item.children && openIndex === index && (
                <ul className="ml-10 mt-1 space-y-1">
                  {item.children.map((child, i) => (
                    <li
                      key={i}
                      className="p-2 text-sm rounded hover:bg-black/20 cursor-pointer"
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;