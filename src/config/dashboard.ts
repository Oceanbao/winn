import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Posts",
      href: "/",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/billing",
      icon: "billing",
    },
    {
      title: "Products",
      href: "/product",
      icon: "settings",
    },
  ],
}
