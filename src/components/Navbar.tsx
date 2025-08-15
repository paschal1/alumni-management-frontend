export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-lg">UNIPORT CS Alumni</h1>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/alumni" className="hover:underline">Alumni</a>
          <a href="/events" className="hover:underline">Events</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </div>
    </nav>
  );
}
