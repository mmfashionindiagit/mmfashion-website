"use client";

import { useEffect, useState } from "react";

type Lead = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  collection: string;
  createdAt: string;
};

type AdminData = {
  total: number;
  byCity: Record<string, number>;
  byCollection: Record<string, number>;
  leads: Lead[];
};

export default function AdminPage() {
  const [data, setData] = useState<AdminData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/admin/leads");

        if (!res.ok) {
          throw new Error("Failed to fetch admin data");
        }

        const result = await res.json();

        setData({
          total: result.total || 0,
          byCity: result.byCity || {},
          byCollection: result.byCollection || {},
          leads: result.leads || [],
        });

      } catch (err) {
        console.error(err);
        setError("Unable to load admin data. Check API connection.");
      }
    };

    fetchLeads();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        <h1 className="text-2xl text-red-500">{error}</h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-8">📊 Admin Dashboard</h1>

      {/* SUMMARY */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#111214] p-6 rounded-xl">
          <h2 className="text-xl">Total Leads</h2>
          <p className="text-3xl mt-2 text-yellow-500">
            {data.total}
          </p>
        </div>

        <div className="bg-[#111214] p-6 rounded-xl">
          <h2 className="text-xl mb-2">Leads by City</h2>
          {Object.entries(data.byCity).length === 0 ? (
            <p className="text-gray-400">No data</p>
          ) : (
            Object.entries(data.byCity).map(([city, count]) => (
              <p key={city}>
                {city}: {count}
              </p>
            ))
          )}
        </div>

        <div className="bg-[#111214] p-6 rounded-xl">
          <h2 className="text-xl mb-2">By Collection</h2>
          {Object.entries(data.byCollection).length === 0 ? (
            <p className="text-gray-400">No data</p>
          ) : (
            Object.entries(data.byCollection).map(([col, count]) => (
              <p key={col}>
                {col}: {count}
              </p>
            ))
          )}
        </div>

      </div>

      {/* EXPORT */}
      <a
        href="/api/admin/export"
        className="bg-yellow-600 text-black px-6 py-3 rounded-xl inline-block mb-6"
      >
        ⬇ Export CSV
      </a>

      {/* TABLE */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full border border-gray-700 text-sm">
          <thead>
            <tr className="bg-[#1a1a1a]">
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">City</th>
              <th className="p-3">Collection</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {data.leads.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-6 text-gray-400">
                  No leads found
                </td>
              </tr>
            ) : (
              data.leads.map((lead) => (
                <tr key={lead._id} className="border-t border-gray-700">
                  <td className="p-3">{lead.name}</td>
                  <td className="p-3">{lead.phone}</td>
                  <td className="p-3">{lead.email}</td>
                  <td className="p-3">{lead.city}</td>
                  <td className="p-3">{lead.collection}</td>
                  <td className="p-3">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}