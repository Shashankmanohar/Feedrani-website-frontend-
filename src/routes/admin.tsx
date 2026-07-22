import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  adminLogin,
  getInquiries,
  updateInquiryStatus,
  deleteInquiry,
  type Inquiry,
} from "../lib/api";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("feedrani_admin_token"));
  const [adminUser, setAdminUser] = useState<string | null>(() => localStorage.getItem("feedrani_admin_user") || "FeedRani Admin");

  // Login state
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  // Load inquiries when authenticated
  const fetchInquiriesData = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await getInquiries(token, searchTerm, selectedStatus);
      if (res && res.inquiries) {
        setInquiries(res.inquiries);
      }
    } catch (err) {
      console.error("Failed to fetch inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchInquiriesData();
    }
  }, [token, selectedStatus]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await adminLogin({ username, password });
      if (res.token) {
        setToken(res.token);
        setAdminUser(res.admin?.name || username);
        localStorage.setItem("feedrani_admin_token", res.token);
        localStorage.setItem("feedrani_admin_user", res.admin?.name || username);
      }
    } catch (err: any) {
      setLoginError(err.message || "Invalid credentials. Use admin / admin123");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("feedrani_admin_token");
    localStorage.removeItem("feedrani_admin_user");
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    if (!token) return;
    await updateInquiryStatus(token, id, newStatus);
    setInquiries((prev) =>
      prev.map((item) => (item.id === id || item._id === id ? { ...item, status: newStatus as any } : item))
    );
    if (selectedInquiry && (selectedInquiry.id === id || selectedInquiry._id === id)) {
      setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus as any } : null));
    }
  };

  const handleDelete = async (id: string) => {
    if (!token) return;
    if (!confirm("Are you sure you want to delete this form submission?")) return;
    await deleteInquiry(token, id);
    setInquiries((prev) => prev.filter((item) => item.id !== id && item._id !== id));
    if (selectedInquiry && (selectedInquiry.id === id || selectedInquiry._id === id)) {
      setSelectedInquiry(null);
    }
  };

  const exportToCSV = () => {
    if (!inquiries.length) return;
    const headers = ["ID", "Name", "Phone", "Location", "Product/Type", "Status", "Date", "Message"];
    const rows = inquiries.map((i) => [
      `"${i.id || i._id}"`,
      `"${i.name}"`,
      `"${i.phone}"`,
      `"${i.location || ""}"`,
      `"${i.product || i.type || ""}"`,
      `"${i.status}"`,
      `"${new Date(i.createdAt).toLocaleString()}"`,
      `"${(i.message || "").replace(/"/g, '""')}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `FeedRani_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics
  const totalCount = inquiries.length;
  const pendingCount = inquiries.filter((i) => i.status === "Pending").length;
  const contactedCount = inquiries.filter((i) => i.status === "Contacted").length;
  const completedCount = inquiries.filter((i) => i.status === "Completed").length;

  const filteredInquiries = inquiries.filter((item) => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q) ||
      (item.location && item.location.toLowerCase().includes(q)) ||
      (item.product && item.product.toLowerCase().includes(q)) ||
      (item.message && item.message.toLowerCase().includes(q))
    );
  });

  // Render Login UI if not logged in
  if (!token) {
    return (
      <div className="min-h-screen bg-slate-900 font-['Plus_Jakarta_Sans'] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-800 border border-slate-700/80 rounded-3xl p-8 shadow-2xl text-white">
          <div className="text-center">
            <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-[#327411] text-2xl font-bold text-white shadow-lg">
              FR
            </div>
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight">FeedRani Admin Portal</h1>
            <p className="mt-1 text-xs text-slate-400">Sign in to access user form submissions &amp; dealer inquiries</p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            {loginError && (
              <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-400 text-center font-medium">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="mt-1.5 w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1.5 w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/40"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full rounded-xl bg-[#327411] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#285e0e] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loginLoading ? "Authenticating..." : "Sign In to Admin Dashboard"}
              </button>
            </div>
          </form>

          <div className="mt-6 border-t border-slate-700/60 pt-4 text-center">
            <p className="text-[11px] text-slate-500">
              Default credentials: <code className="text-slate-300 bg-slate-900 px-1.5 py-0.5 rounded">admin</code> / <code className="text-slate-300 bg-slate-900 px-1.5 py-0.5 rounded">admin123</code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 font-['Plus_Jakarta_Sans'] text-slate-100">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#327411] font-black text-white shadow-md">
              FR
            </div>
            <div>
              <h1 className="text-base font-extrabold text-white leading-tight">FeedRani Admin Panel</h1>
              <span className="text-[10px] font-semibold text-emerald-400">● Live Form Database Active</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 border border-slate-700/60 text-xs">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-300 font-medium">{adminUser}</span>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 transition-all"
            >
              🌐 View Website
            </a>
            <button
              onClick={handleLogout}
              className="rounded-xl bg-rose-600/20 border border-rose-500/30 px-3.5 py-2 text-xs font-semibold text-rose-300 hover:bg-rose-600/30 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Metric Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Submissions</span>
            <div className="mt-2 flex items-baseline justify-between">
              <h2 className="text-3xl font-black text-white">{totalCount}</h2>
              <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-400">All Forms</span>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-amber-950/10 p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Pending Action</span>
            <div className="mt-2 flex items-baseline justify-between">
              <h2 className="text-3xl font-black text-amber-400">{pendingCount}</h2>
              <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-bold text-amber-300">Requires Contact</span>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-blue-950/10 p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">In Contact</span>
            <div className="mt-2 flex items-baseline justify-between">
              <h2 className="text-3xl font-black text-blue-400">{contactedCount}</h2>
              <span className="rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-bold text-blue-300">Follow-up</span>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-950/10 p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Completed</span>
            <div className="mt-2 flex items-baseline justify-between">
              <h2 className="text-3xl font-black text-emerald-400">{completedCount}</h2>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-300">Resolved</span>
            </div>
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-900 p-1.5 border border-slate-800">
            {["All", "Pending", "Contacted", "Completed"].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  selectedStatus === status
                    ? "bg-[#327411] text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search name, phone, district..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl bg-slate-900 border border-slate-800 pl-4 pr-10 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#327411]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-slate-300"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={fetchInquiriesData}
              className="rounded-2xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-all flex items-center gap-1.5"
            >
              🔄 Refresh
            </button>

            <button
              onClick={exportToCSV}
              className="rounded-2xl bg-slate-800 border border-slate-700/80 px-4 py-2.5 text-xs font-semibold text-emerald-400 hover:bg-slate-700 transition-all"
            >
              📥 Export CSV
            </button>
          </div>
        </div>

        {/* Data Table Container */}
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden shadow-xl">
          {loading ? (
            <div className="p-12 text-center text-slate-400">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-3 border-[#327411] border-t-transparent"></div>
              <p className="mt-3 text-xs font-semibold">Loading Form Inquiries...</p>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="p-16 text-center">
              <div className="text-4xl">📭</div>
              <h3 className="mt-3 text-base font-bold text-slate-200">No Form Submissions Found</h3>
              <p className="mt-1 text-xs text-slate-500">
                {searchTerm
                  ? `No inquiries match your search term "${searchTerm}"`
                  : "Form submissions will appear here automatically when users fill out forms on the website."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">User Details</th>
                    <th className="px-6 py-4">Phone / WhatsApp</th>
                    <th className="px-6 py-4">District / Location</th>
                    <th className="px-6 py-4">Product Requirement</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredInquiries.map((item) => {
                    const itemId = item.id || item._id || "";
                    return (
                      <tr key={itemId} className="hover:bg-slate-800/40 transition-colors">
                        <td className="px-6 py-4 font-bold text-white">
                          <div>{item.name}</div>
                          <span className="text-[10px] font-normal text-slate-400">{item.type || "Contact Form"}</span>
                        </td>
                        <td className="px-6 py-4 font-mono font-medium text-slate-200">
                          <a
                            href={`https://wa.me/${item.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline"
                          >
                            💬 {item.phone}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-slate-300">{item.location || "—"}</td>
                        <td className="px-6 py-4">
                          <span className="rounded-lg bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-300 border border-slate-700/60">
                            {item.product || "General Inquiry"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-400 text-[11px]">
                          {new Date(item.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
                              item.status === "Pending"
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                : item.status === "Contacted"
                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedInquiry(item)}
                              className="rounded-lg bg-slate-800 px-3 py-1.5 text-[11px] font-medium text-slate-200 hover:bg-slate-700 transition-all"
                            >
                              View Details
                            </button>

                            {item.status === "Pending" && (
                              <button
                                onClick={() => handleStatusChange(itemId, "Contacted")}
                                className="rounded-lg bg-blue-600/30 border border-blue-500/30 px-3 py-1.5 text-[11px] font-semibold text-blue-300 hover:bg-blue-600/40 transition-all"
                              >
                                Mark Contacted
                              </button>
                            )}

                            {item.status !== "Completed" && (
                              <button
                                onClick={() => handleStatusChange(itemId, "Completed")}
                                className="rounded-lg bg-emerald-600/30 border border-emerald-500/30 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 hover:bg-emerald-600/40 transition-all"
                              >
                                Resolve
                              </button>
                            )}

                            <button
                              onClick={() => handleDelete(itemId)}
                              className="rounded-lg bg-rose-600/10 border border-rose-500/20 px-2 py-1.5 text-xs text-rose-400 hover:bg-rose-600/30 transition-all"
                              title="Delete inquiry"
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl text-white relative">
            <button
              onClick={() => setSelectedInquiry(null)}
              className="absolute right-6 top-6 size-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#327411]">Form Submission Details</span>
            <h2 className="mt-1 text-2xl font-black text-white">{selectedInquiry.name}</h2>
            <span className="text-xs text-slate-400">{selectedInquiry.type || "Contact Form"}</span>

            <div className="mt-6 space-y-4 rounded-2xl bg-slate-950 p-5 border border-slate-800">
              <div className="flex justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-semibold text-slate-400">Phone Number:</span>
                <a
                  href={`tel:${selectedInquiry.phone}`}
                  className="text-xs font-bold text-emerald-400 hover:underline font-mono"
                >
                  {selectedInquiry.phone}
                </a>
              </div>

              <div className="flex justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-semibold text-slate-400">Location / District:</span>
                <span className="text-xs font-bold text-slate-200">{selectedInquiry.location || "Not specified"}</span>
              </div>

              <div className="flex justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-semibold text-slate-400">Product / Category:</span>
                <span className="text-xs font-bold text-slate-200">{selectedInquiry.product || "General Inquiry"}</span>
              </div>

              <div className="flex justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-semibold text-slate-400">Submitted On:</span>
                <span className="text-xs font-bold text-slate-300">
                  {new Date(selectedInquiry.createdAt).toLocaleString("en-IN")}
                </span>
              </div>

              <div>
                <span className="block text-xs font-semibold text-slate-400">Full Message / Notes:</span>
                <p className="mt-2 text-xs leading-relaxed text-slate-200 bg-slate-900 p-3 rounded-xl border border-slate-800/60 whitespace-pre-wrap">
                  {selectedInquiry.message || "No message provided."}
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(
                  selectedInquiry.name
                )}%2C%20this%20is%20FeedRani%20sales%20team%20regarding%20your%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-[#25D366] py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-[#20ba5a] transition-all"
              >
                💬 Open WhatsApp Chat
              </a>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="rounded-xl bg-slate-800 px-5 py-3 text-xs font-bold text-slate-300 hover:bg-slate-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
