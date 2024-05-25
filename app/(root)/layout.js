import Sidebar from "@/components/Home/Sidebar";

export default function RootLayout({ children }) {
  return (
    <main className="w-screen h-screen flex overflow-hidden">
      <div className="flex-auto basis-1/4"><Sidebar/></div>
      <div className="flex-auto basis-3/4">
        {children}
      </div>
    </main>
  );
}
