import { cache } from "react"
import { redirect } from "next/navigation"

// import { User } from "@prisma/client"

// import { authOptions } from "@/lib/auth"
// import { db } from "@/lib/db"
// import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { EmptyPlaceholder } from "@/components/EmptyPlaceholder"
import { DashboardHeader } from "@/components/Header"
import { PostCreateButton } from "@/components/PostCreateButton"
// import { PostItem } from "@/components/PostItem"
import { DashboardShell } from "@/components/Shell"
import { buttonVariants } from "@/components/ui/Button"

export const metadata = {
  title: "Dashboard",
}

// const getPostsForUser = cache(async (userId: User["id"]) => {
//   return await db.post.findMany({
//     where: {
//       authorId: userId,
//     },
//     select: {
//       id: true,
//       title: true,
//       published: true,
//       createdAt: true,
//     },
//     orderBy: {
//       updatedAt: "desc",
//     },
//   })
// })

export default async function DashboardPage() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }

  // const posts = await getPostsForUser(user.id)
  const posts = []

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
            {/* {posts.map((post) => ( */}
            {/*   <PostItem key={post.id} post={post} /> */}
            {/* ))} */}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-slate-900"
              )}
            />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
