import React from 'react';

const AdminPanel = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-1">User Management</h2>
          <p className="text-sm text-gray-600">(Future: View/edit users, assign roles, reset passwords...)</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-1">System Settings</h2>
          <p className="text-sm text-gray-600">(Future: Configure branding, notifications, backup/export...)</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
