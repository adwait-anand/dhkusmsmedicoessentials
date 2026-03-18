import { useState } from "react";
import { useAdmin } from "@/hooks/useAdmin";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import CoachingNotesTable from "@/components/admin/CoachingNotesTable";
import FastrackBooksTable from "@/components/admin/FastrackBooksTable";
import { BookOpen, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const { loading, signOut } = useAdmin();
  const [activeTab, setActiveTab] = useState("coaching");

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-card/80 backdrop-blur-lg px-4">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-display text-lg font-semibold text-foreground">Admin Panel</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={signOut} className="gap-2 text-muted-foreground">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </header>
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            {activeTab === "coaching" && <CoachingNotesTable />}
            {activeTab === "fastrack" && <FastrackBooksTable />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
