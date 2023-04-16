import { DashboardHeader } from "@/components/Header"
import { PostCreateButton } from "@/components/PostCreateButton"
// import { PostItem } from "@/components/post-item"
import { DashboardShell } from "@/components/Shell"
import { Skeleton } from "@/components/ui/Skeleton"

function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
        <PostItemSkeleton />
        <PostItemSkeleton />
        <PostItemSkeleton />
        <PostItemSkeleton />
        <PostItemSkeleton />
        {/* <PostItem.Skeleton /> */}
        {/* <PostItem.Skeleton /> */}
        {/* <PostItem.Skeleton /> */}
        {/* <PostItem.Skeleton /> */}
        {/* <PostItem.Skeleton /> */}
      </div>
    </DashboardShell>
  )
}
