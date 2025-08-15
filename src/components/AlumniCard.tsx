export default function AlumniCard({ name, gradYear, profession, image }: { name: string, gradYear: string, profession: string, image: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">Graduated: {gradYear}</p>
        <p className="text-gray-800">{profession}</p>
      </div>
    </div>
  );
}
