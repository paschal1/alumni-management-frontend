interface Params {
  params: { id: string };
}

const alumniProfile = {
  name: "John Doe",
  gradYear: "2015",
  profession: "Software Engineer",
  bio: "John is a software engineer working in the fintech industry. He specializes in building scalable web applications.",
  email: "john.doe@example.com",
  linkedin: "https://linkedin.com/in/johndoe"
};

export default function AlumniProfile({ params }: Params) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{alumniProfile.name}</h1>
      <p className="text-gray-600">Graduated: {alumniProfile.gradYear}</p>
      <p className="text-gray-800">{alumniProfile.profession}</p>
      <p className="mt-4">{alumniProfile.bio}</p>
      <div className="mt-4">
        <p>Email: <a href={`mailto:${alumniProfile.email}`} className="text-blue-600 hover:underline">{alumniProfile.email}</a></p>
        <p>LinkedIn: <a href={alumniProfile.linkedin} className="text-blue-600 hover:underline" target="_blank">View Profile</a></p>
      </div>
    </div>
  );
}
