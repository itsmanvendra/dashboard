import SideNavBar from "@/components/SideNavBar"
import Main from "@/components/Main"
export default function Home() {
  return (
    <div className="flex min:h-screen">
      <SideNavBar />
      <div className="w-full bg-slate-50">
        <Main />
      </div>
    </div>
  )
}
