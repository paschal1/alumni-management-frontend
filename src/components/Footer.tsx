export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} University of Port Harcourt - Computer Science Alumni
      </div>
    </footer>
  );
}
