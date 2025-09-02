"use client";

import Slider from "react-slick";
import EventCard from "@/components/EventCard";
import Image from "next/image";

export default function HomePage() {
  // Hall of Fame - prestigious placeholders
  const hallOfFame = [
    {
      name: "Dr. John Doe",
      image:
        "https://images.unsplash.com/photo-1614288655800-3b34d541b36f?auto=format&fit=crop&w=600&q=80",
      title: "Former Governor & Tech Innovator",
      achievement: "Pioneered digital governance initiatives",
    },
    {
      name: "Engr. Emeka Okafor",
      image:
        "https://images.unsplash.com/photo-1603415526960-f9e6c7ee1f77?auto=format&fit=crop&w=600&q=80",
      title: "AI Researcher & Entrepreneur",
      achievement: "Founded multiple AI startups impacting national tech policies",
    },
    {
      name: "Prof. David Smith",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
      title: "Education Reformer",
      achievement: "Revamped national STEM curriculum",
    },
  ];

  // Alumni group photos
  const alumniPictures = [
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1596495577886-d920f1b35c9f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
  ];

  // Upcoming Events
  const upcomingEvents = [
    {
      title: "Alumni Gala 2025",
      date: "Sept 20, 2025",
      description: "Annual gathering celebrating achievements of UNIPORT CS alumni.",
      location: "UNIPORT Main Hall",
    },
    {
      title: "Tech Leaders Conference",
      date: "Oct 5, 2025",
      description: "Panel discussions with industry leaders and innovators.",
      location: "CS Dept Auditorium",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
  };

  return (
    <div className="space-y-16">
      {/* Hall of Fame */}
      <section className="bg-blue-900 text-white py-16">
        <h2 className="text-4xl font-bold text-center mb-12">UNIPORT Hall of Fame</h2>
        <div className="max-w-4xl mx-auto">
          <Slider {...carouselSettings}>
            {hallOfFame.map((person, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-center">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={400}
                    className="rounded-full border-4 border-gold-500 object-cover shadow-lg"
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-semibold">{person.name}</h3>
                  <p className="text-lg italic">{person.title}</p>
                  <p className="text-gray-200 mt-2">{person.achievement}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Alumni Group Pictures */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Alumni</h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...carouselSettings}>
            {alumniPictures.map((pic, idx) => (
              <div key={idx} className="flex justify-center">
                <Image
                  src={pic}
                  alt={`Group ${idx + 1}`}
                  width={1000}
                  height={500}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, idx) => (
            <EventCard
              key={idx}
              title={event.title}
              date={event.date}
              description={event.description}
              location={event.location}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
