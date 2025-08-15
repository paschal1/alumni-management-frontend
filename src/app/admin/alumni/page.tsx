import AlumniTable from "@/components/AlumniTable";

const alumniList = [
  { id: 1, name: "John Doe", gradYear: "2015", profession: "Software Engineer" },
  { id: 2, name: "Jane Smith", gradYear: "2018", profession: "Data Scientist" },
  { id: 3, name: "Michael Johnson", gradYear: "2020", profession: "Product Manager" },
];

export default function AdminAlumniList() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Alumni</h1>
      <a href="/admin/alumni/add" className="bg-blue-700 text-white px-4 py-2 rounded">Add Alumni</a>
      <div className="mt-6">
        <AlumniTable alumni={alumniList} />
      </div>
    </div>
  );
}
