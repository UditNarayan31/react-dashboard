import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

// Navigation Data
const navigation = [
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

export default function HorizontalNav() {
  return (
    <Disclosure as="nav" className="relative bg-(--bg-dark)">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-(--primary-color)focus:outline-none">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

        
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
                alt="logo"
              />
            </div>

            <div className="hidden sm:flex sm:ml-6 space-x-4">
              <h5 className="text-white">DASHBOARD</h5>
            </div>
          </div>

        
          <div className="flex items-center gap-5">
            {/* Search */}
            <button className="text-(--text-gray) hover:text-(--primary-color)">
              <MagnifyingGlassIcon className="size-6" />
            </button>

            {/* Notification */}
            <button className="text-(--text-gray) hover:text-(--primary-color)">
              <BellIcon className="size-6" />
            </button>

            {/* Profile */}
            <Menu as="div" className="relative">
              <MenuButton className="flex rounded-full focus:outline-none">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  className="size-8 rounded-full"
                  alt=""
                />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-48 rounded-md bg-gray-800 py-2 shadow-lg">
                <MenuItem>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                    Profile
                  </button>
                </MenuItem>

                <MenuItem>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                    Settings
                  </button>
                </MenuItem>

                <MenuItem>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <DisclosureButton
                key={item.title}
                as="a"
                href="#"
                className="flex items-center gap-3 text-gray-300 hover:text-(--primary-color) hover:bg-white/5 rounded-md px-3 py-2 text-base font-medium"
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
