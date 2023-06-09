import { notFound } from "next/navigation"

import { dashboardConfig } from "@/config/dashboard"
// import { getCurrentUser } from "@/lib/session"
import { MainNav } from "@/components/MainNav"
import { DashboardNav } from "@/components/Nav"

// import { UserAccountNav } from "@/components/UserAccountNav"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const user = await getCurrentUser()
  const user = {
    name: "Ocean Bao",
    image: "/next.svg",
    email: "ocean@bao.com",
  }

  // if (!user) {
  //   return notFound()
  // }

  return (
    <div className="mx-auto flex flex-col space-y-6">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainNav items={dashboardConfig.mainNav} />
          {/* <UserAccountNav */}
          {/*   user={{ */}
          {/*     name: user.name, */}
          {/*     image: user.image, */}
          {/*     email: user.email, */}
          {/*   }} */}
          {/* /> */}
        </div>
      </header>
      <div className="container grid gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
