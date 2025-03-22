"use client";
import Image from "next/image";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "John Harrington",
    position: "Senior Partner",
    description:
      "Specializing in corporate law with over 20 years of experience representing Fortune 500 companies.",
    image:
      "https://res.cloudinary.com/dcdivbkwd/image/upload/v1742627581/lawfirm/lwpf9hp8kksdpcidshz9.jpg"
  },
  {
    id: 2,
    name: "Sarah Reynolds",
    position: "Managing Partner",
    description:
      "Expert in intellectual property law and patent litigation with extensive experience in tech industry cases.",
    image:
      "https://res.cloudinary.com/dcdivbkwd/image/upload/v1742627581/lawfirm/lwpf9hp8kksdpcidshz9.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Partner",
    description:
      "Focused on mergers and acquisitions with a background in international business law.",
    image:
      "https://res.cloudinary.com/dcdivbkwd/image/upload/v1742627581/lawfirm/lwpf9hp8kksdpcidshz9.jpg"
  },
  {
    id: 4,
    name: "Amara Washington",
    position: "Senior Associate",
    description:
      "Specializes in civil litigation and has successfully represented clients in high-profile cases.",
    image:
      "https://res.cloudinary.com/dcdivbkwd/image/upload/v1742627581/lawfirm/lwpf9hp8kksdpcidshz9.jpg"
  },
  {
    id: 5,
    name: "Robert Gonzalez",
    position: "Associate",
    description:
      "Practices in family law and estate planning with a compassionate approach to sensitive matters.",
    image:
      "https://res.cloudinary.com/dcdivbkwd/image/upload/v1742627581/lawfirm/lwpf9hp8kksdpcidshz9.jpg"
  },
  {
    id: 6,
    name: "Elizabeth Taylor",
    position: "Associate",
    description:
      "Focuses on environmental law and regulatory compliance for both individuals and businesses.",
    image:
      "https://res.cloudinary.com/dcdivbkwd/image/upload/v1742627581/lawfirm/lwpf9hp8kksdpcidshz9.jpg"
  }
];

export default function Associates() {
  const scrollToTeam = () => {
    document.getElementById("team-gallery")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Main grid layout - text on left, images on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Introduction Section - Left side */}
          <div className="lg:col-span-4 flex flex-col justify-top">
            <div>
              <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
                Our Associates & Partners
              </h2>
              <h3 className="text-2xl font-semibold mb-10 text-center text-gray-800">
              Meet Our Team
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of experienced associates and partners brings decades
                of combined legal expertise to every case. We pride ourselves on
                delivering exceptional results through collaborative efforts and
                specialized knowledge.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Each member of our team is dedicated to providing personalized
                attention and strategic counsel to help you achieve the best
                possible outcome for your unique situation.
              </p>
              <button
                onClick={scrollToTeam}
                className="bg-gray-700  text-white hover:text-gray-700 py-3 px-8 rounded-md transition-all duration-300 font-medium shadow-md hover:scale-105 hover:shadow-lg transform active:scale-95 relative overflow-hidden group"
              >
                <span className="relative z-10">Meet Our Team</span>
                <span className="absolute top-0 left-0 w-full h-full bg-white  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>
            </div>
          </div>

          {/* Team Members Grid - Right side */}
          <div id="team-gallery" className="lg:col-span-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="transition duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-w-3 aspect-h-4 mb-3 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-blue-700 font-medium mb-2 text-sm">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
