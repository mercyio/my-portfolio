import { UserNav } from "../../components/dashboard/user-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16">
          <nav className="flex items-center justify-between h-full">
            <h1 className="text-white font-semibold">Dashboard</h1>
            <UserNav />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">{children}</main>
    </div>
  );
}
