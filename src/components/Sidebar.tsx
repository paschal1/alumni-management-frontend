export default function Sidebar() {
  return (
    <aside className="bg-white shadow-md w-64 min-h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
      <ul className="space-y-2">
        <li><a href="/admin" className="block p-2 hover:bg-blue-100 rounded">Dashboard</a></li>
        <li><a href="/admin/alumni" className="block p-2 hover:bg-blue-100 rounded">Manage Alumni</a></li>
        <li><a href="/admin/events" className="block p-2 hover:bg-blue-100 rounded">Manage Events</a></li>
        <li><a href="/admin/stats" className="block p-2 hover:bg-blue-100 rounded">Statistics</a></li>
      </ul>
    </aside>
  );
}
