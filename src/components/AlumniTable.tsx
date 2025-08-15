export default function AlumniTable({ alumni }: { alumni: { id: number; name: string; gradYear: string; profession: string; }[] }) {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="p-2 border-b">Name</th>
          <th className="p-2 border-b">Graduation Year</th>
          <th className="p-2 border-b">Profession</th>
          <th className="p-2 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {alumni.map((al) => (
          <tr key={al.id}>
            <td className="p-2 border-b">{al.name}</td>
            <td className="p-2 border-b">{al.gradYear}</td>
            <td className="p-2 border-b">{al.profession}</td>
            <td className="p-2 border-b">
              <a href={`/alumni/${al.id}`} className="text-blue-600 hover:underline mr-2">View</a>
              <a href={`/admin/alumni/${al.id}/edit`} className="text-green-600 hover:underline">Edit</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
