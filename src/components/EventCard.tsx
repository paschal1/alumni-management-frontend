export default function EventCard({ title, date, description }: { title: string, date: string, description: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-gray-800 mt-2">{description}</p>
    </div>
  );
}
