import React, { forwardRef } from "react";
import { cn } from "../../Test/cn";

// Sidebar container
const SidebarNav = forwardRef(({ className, ...props }, ref) => (
  <ul ref={ref} {...props} className={cn("flex flex-col", className)} />
));
SidebarNav.displayName = "SidebarNav";

// Sidebar item (user controls full content)
const SidebarNavItem = forwardRef(({ className, ...props }, ref) => (
  <li
    ref={ref}
    {...props}
    className={cn(
      "w-full px-3 pb-8 border-b-2 border-gray-300 cursor-pointer group",
      className
    )}
  />
));
SidebarNavItem.displayName = "SidebarNavItem";

export { SidebarNav, SidebarNavItem };
