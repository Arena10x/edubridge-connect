import { useEffect, useMemo, useState } from "react";
import * as XLSX from 'xlsx';

type Registration = {
  id: number;
  name: string;
  email: string;
  phone: string;
  course: string;
  coupon: string | null;
  created_at: string;
};

const formatCoupon = (coupon: string | null) => {
  if (!coupon) return "-";
  if (coupon === "AUTO20") return "20% (Auto)";
  if (coupon === "AUTO10") return "10% (Auto)";
  return coupon;
};

const Admin = () => {
  const [rows, setRows] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthed, setIsAuthed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("edubridge-admin-auth") === "true";
  });

  const apiBase = useMemo(
    () => import.meta.env.VITE_API_URL || "http://localhost:5000",
    []
  );
  const adminPassword = useMemo(
    () => import.meta.env.VITE_ADMIN_PASSWORD || "admin123",
    []
  );

  const loadRows = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${apiBase}/api/registrations`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Failed to load registrations");
      }
      setRows(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load registrations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthed) loadRows();
  }, [isAuthed]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    if (password === adminPassword) {
      window.localStorage.setItem("edubridge-admin-auth", "true");
      setIsAuthed(true);
      setPassword("");
      return;
    }
    setAuthError("Incorrect password");
  };

  const exportToExcel = () => {
    // 1. Prepare the data (removing any circular references if they existed)
    const worksheet = XLSX.utils.json_to_sheet(rows);
    
    // 2. Create a new workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");
    
    // 3. Generate the file and trigger download
    XLSX.writeFile(workbook, `Registrations_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("edubridge-admin-auth");
    setIsAuthed(false);
    setRows([]);
  };

  const startCampaign = () => {
    const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem("admin_promo_expiry", expiry.toString());
    window.location.reload(); 
  };

  const stopCampaign = () => {
    localStorage.removeItem("admin_promo_expiry");
    window.location.reload();
  };

  return (
    <div className="site-root min-h-screen">
      <div className="edu-backdrop" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="starfield">
          <span className="star star-1" />
          <span className="star star-2" />
          <span className="star star-3" />
          <span className="star star-4" />
          <span className="star star-5" />
          <span className="star star-6" />
        </div>
      </div>

      <div className="relative z-10 section-padding py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Admin
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Registrations
              </h1>
              <p className="text-muted-foreground text-sm mt-2">
                Live data pulled from the backend API.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
      {isAuthed && (
        <>
          <button
            onClick={loadRows}
            className="px-4 py-2 rounded-xl border border-border bg-background text-foreground hover:opacity-90 transition"
          >
            Refresh
          </button>

          <button 
            onClick={startCampaign} 
            className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition"
          >
            Start 24h Timer
          </button>

          <button 
            onClick={stopCampaign} 
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition"
          >
            Reset Timer
          </button>

          {rows.length > 0 && (
            <button
              onClick={exportToExcel}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Export Excel
            </button>
          )}

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl border border-border text-foreground hover:bg-secondary transition"
          >
            Logout
          </button>
        </>
      )}
    </div>
  </div>

          <div className="glass-card rounded-3xl p-6">
            {!isAuthed ? (
              <form onSubmit={handleLogin} className="max-w-md space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Admin Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                >
                  Unlock
                </button>
                {authError && (
                  <p className="text-sm text-red-500">{authError}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Set a custom password with `VITE_ADMIN_PASSWORD`.
                </p>
              </form>
            ) : loading ? (
              <p className="text-muted-foreground">Loading registrations...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : rows.length === 0 ? (
              <p className="text-muted-foreground">No registrations yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground border-b border-border">
                      <th className="py-2 pr-3 font-medium">ID</th>
                      <th className="py-2 pr-3 font-medium">Name</th>
                      <th className="py-2 pr-3 font-medium">Email</th>
                      <th className="py-2 pr-3 font-medium">Phone</th>
                      <th className="py-2 pr-3 font-medium">Course</th>
                      <th className="py-2 pr-3 font-medium">Coupon</th>
                      <th className="py-2 pr-3 font-medium">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row:Registration) => (
                      <tr
                        key={row.id}
                        className="border-b border-border/60 last:border-b-0"
                      >
                        <td className="py-2 pr-3">{row.id}</td>
                        <td className="py-2 pr-3">{row.name}</td>
                        <td className="py-2 pr-3">{row.email}</td>
                        <td className="py-2 pr-3">{row.phone}</td>
                        <td className="py-2 pr-3">{row.course}</td> 
                        <td className="py-2 pr-3">{formatCoupon(row.coupon)}</td>
                        <td className="py-2 pr-3">
                          {new Date(row.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
