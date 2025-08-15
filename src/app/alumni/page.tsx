'use client';

import AlumniCard from "@/components/AlumniCard";
import SearchBar from "@/components/SearchBar";

const alumniData = [
  { id: 1, name: "John Doe", gradYear: "2015", profession: "Software Engineer", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe" },
  { id: 2, name: "Jane Smith", gradYear: "2018", profession: "Data Scientist", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
  { id: 3, name: "Michael Johnson", gradYear: "2020", profession: "Product Manager", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe" },
  { id: 4, name: "Emily Davis", gradYear: "2016", profession: "UI/UX Designer", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { id: 5, name: "David Wilson", gradYear: "2017", profession: "Cybersecurity Analyst", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e" },
  { id: 6, name: "Sophia Martinez", gradYear: "2019", profession: "Marketing Specialist", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
  { id: 7, name: "James Brown", gradYear: "2021", profession: "AI Researcher", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce" },
  { id: 8, name: "Olivia Taylor", gradYear: "2014", profession: "Entrepreneur", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
  { id: 9, name: "Daniel Anderson", gradYear: "2013", profession: "Civil Engineer", image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39" }
];


export default function AlumniPage() {
  const handleSearch = (query: string) => {
    console.log("Search for:", query);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Alumni Directory</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {alumniData.map((al) => (
          <AlumniCard
            key={al.id}
            name={al.name}
            gradYear={al.gradYear}
            profession={al.profession}
            image={al.image}
          />
        ))}
      </div>
    </div>
  );
}
