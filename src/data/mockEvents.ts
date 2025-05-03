
import { Event, EventType } from "../types/event";

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Annual Hackathon 2025",
    description: "Join us for a 48-hour coding marathon where students compete to build innovative solutions to real-world problems. Prizes include internship opportunities and tech gadgets.",
    type: "hackathon",
    startDate: "2025-06-15T18:00:00",
    endDate: "2025-06-17T18:00:00",
    location: {
      college: "MIT",
      building: "Stata Center",
      address: "32 Vassar St",
      city: "Cambridge",
      state: "MA",
      isVirtual: false
    },
    organizerName: "MIT Technology Club",
    organizerEmail: "techclub@mit.edu",
    registrationLink: "https://mit-hackathon.com/register",
    websiteLink: "https://mit-hackathon.com",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3",
    tags: ["coding", "innovation", "prizes", "beginner-friendly"],
    isFeatured: true
  },
  {
    id: "2",
    title: "AI Ethics Workshop",
    description: "A comprehensive workshop discussing the ethical implications of artificial intelligence in today's society. Learn from industry experts and participate in hands-on activities.",
    type: "workshop",
    startDate: "2025-05-20T10:00:00",
    endDate: "2025-05-20T15:00:00",
    location: {
      college: "Stanford University",
      building: "Gates Computer Science Building",
      city: "Stanford",
      state: "CA",
      isVirtual: false
    },
    organizerName: "Stanford AI Group",
    registrationLink: "https://stanford.edu/ai-workshop",
    websiteLink: "https://stanford.edu/events",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3",
    tags: ["ai", "ethics", "technology", "discussion"],
    isFeatured: true
  },
  {
    id: "3",
    title: "Future of Blockchain Tech Talk",
    description: "Experts from leading blockchain companies discuss the future of decentralized technologies and their impact on various industries.",
    type: "tech-talk",
    startDate: "2025-05-25T14:00:00",
    location: {
      college: "UC Berkeley",
      building: "Haas School of Business",
      city: "Berkeley",
      state: "CA",
      isVirtual: false
    },
    organizerName: "Berkeley Blockchain Association",
    registrationLink: "https://blockchain-talk.berkeley.edu",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3",
    tags: ["blockchain", "cryptocurrency", "innovation"],
    isFeatured: false
  },
  {
    id: "4",
    title: "Virtual Career Fair: Tech Industries",
    description: "Connect with recruiters from top tech companies and startups. Bring your resume and be ready to impress!",
    type: "career-fair",
    startDate: "2025-06-10T09:00:00",
    endDate: "2025-06-10T17:00:00",
    location: {
      college: "Multiple Universities",
      city: "Online",
      state: "N/A",
      isVirtual: true
    },
    organizerName: "College Career Network",
    organizerEmail: "careers@collegenetwork.org",
    registrationLink: "https://virtual-career-fair.edu/tech",
    websiteLink: "https://virtual-career-fair.edu",
    imageUrl: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3",
    tags: ["career", "job-opportunities", "networking", "interviews"],
    isFeatured: false
  },
  {
    id: "5",
    title: "Women in Tech Conference",
    description: "A day-long conference celebrating women in technology fields with keynotes, panel discussions, and networking opportunities.",
    type: "conference",
    startDate: "2025-07-12T08:30:00",
    endDate: "2025-07-12T17:00:00",
    location: {
      college: "Harvard University",
      building: "Harvard Science Center",
      city: "Cambridge",
      state: "MA",
      isVirtual: false
    },
    organizerName: "Harvard Women in Computer Science",
    registrationLink: "https://harvard.edu/women-in-tech-conf",
    websiteLink: "https://harvard.edu/events",
    imageUrl: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3",
    tags: ["diversity", "women-in-tech", "empowerment", "networking"],
    isFeatured: true
  },
  {
    id: "6",
    title: "Mobile App Development Workshop",
    description: "Learn how to build your first mobile application using React Native in this hands-on workshop for beginners.",
    type: "workshop",
    startDate: "2025-05-18T13:00:00",
    endDate: "2025-05-18T17:00:00",
    location: {
      college: "UCLA",
      building: "Engineering VI",
      city: "Los Angeles",
      state: "CA",
      isVirtual: false
    },
    organizerName: "UCLA Developer Student Club",
    registrationLink: "https://ucla.edu/app-workshop",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3",
    tags: ["mobile", "react-native", "coding", "beginner-friendly"],
    isFeatured: false
  },
  {
    id: "7",
    title: "Cybersecurity Capture The Flag Competition",
    description: "Test your cybersecurity skills in this exciting CTF competition with challenges ranging from beginner to advanced levels.",
    type: "hackathon",
    startDate: "2025-06-01T10:00:00",
    endDate: "2025-06-01T22:00:00",
    location: {
      college: "Georgia Tech",
      building: "Klaus Advanced Computing Building",
      city: "Atlanta",
      state: "GA",
      isVirtual: false
    },
    organizerName: "GT Cyber Security Club",
    registrationLink: "https://gtcyber.org/ctf-competition",
    websiteLink: "https://gtcyber.org",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3",
    tags: ["cybersecurity", "competition", "hacking", "prizes"],
    isFeatured: false
  },
  {
    id: "8",
    title: "Introduction to Data Science",
    description: "An introductory workshop covering the basics of data science, including data analysis, visualization, and machine learning concepts.",
    type: "workshop",
    startDate: "2025-05-28T15:00:00",
    endDate: "2025-05-28T18:00:00",
    location: {
      college: "University of Michigan",
      building: "North Quad",
      city: "Ann Arbor",
      state: "MI",
      isVirtual: false
    },
    organizerName: "Michigan Data Science Team",
    registrationLink: "https://umich.edu/data-workshop",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
    tags: ["data-science", "python", "analytics", "beginner-friendly"],
    isFeatured: false
  },
  {
    id: "9",
    title: "Virtual Tech Talk: Future of Cloud Computing",
    description: "Join industry leaders from AWS, Google Cloud, and Microsoft Azure as they discuss the future landscape of cloud technologies.",
    type: "tech-talk",
    startDate: "2025-06-05T11:00:00",
    location: {
      college: "Cornell Tech",
      city: "Online",
      state: "N/A",
      isVirtual: true
    },
    organizerName: "Cornell Cloud Computing Club",
    organizerEmail: "cloudclub@cornell.edu",
    registrationLink: "https://cornell.edu/cloud-tech-talk",
    websiteLink: "https://cornell.edu/events",
    imageUrl: "https://images.unsplash.com/photo-1560732488-7b5fcaf671db?ixlib=rb-4.0.3",
    tags: ["cloud", "aws", "azure", "google-cloud"],
    isFeatured: false
  },
  {
    id: "10",
    title: "Game Development Hackathon",
    description: "Create an original game in 48 hours! Open to all skill levels, with mentors available to help beginners.",
    type: "hackathon",
    startDate: "2025-07-20T09:00:00",
    endDate: "2025-07-22T09:00:00",
    location: {
      college: "USC",
      building: "School of Cinematic Arts",
      city: "Los Angeles",
      state: "CA",
      isVirtual: false
    },
    organizerName: "USC Games",
    registrationLink: "https://uscgames.org/hackathon",
    websiteLink: "https://uscgames.org",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3",
    tags: ["game-development", "unity", "unreal-engine", "creativity"],
    isFeatured: true
  }
];

export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};

export const getEventTypes = (): string[] => {
  return ['hackathon', 'tech-talk', 'workshop', 'career-fair', 'conference', 'other'];
};

export const getColleges = (): string[] => {
  const uniqueColleges = new Set<string>();
  
  mockEvents.forEach(event => {
    uniqueColleges.add(event.location.college);
  });
  
  return Array.from(uniqueColleges);
};
