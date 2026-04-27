// data/blogData.js
import blog1 from "@/public/blog/blog1.jpeg";
import blog2 from "@/public/blog/blog2.jpeg";

export const WORKSHOP_CONTENT = [
  {
    id: 2,
    slug: "little-hands-big-impact",
    title: "Little Hands, Big Impact",
    subtitle: "",
    image: blog1,
    category: "Kids Activity",
    date: "March 18, 2026",
    time: "11:00 AM - 12:30 PM",
    location: "Community Garden",
    instructor: "Pre-School Collab",
    rating: 4.8,
    isCompleted: true,
    excerpt:
      "At Indoors Global, we believe the best habits start early — and what better way than learning by doing?",
    intro:
      "At Indoors Global, we believe the best habits start early — and what better way than learning by doing? We recently hosted a hands-on composting workshop in collaboration with a local pre-school, where children stepped into the world of conscious living in the most fun, interactive way possible.",
    sections: [
      {
        heading: "",
        content:
          "From touching dry leaves to understanding the basics of composting, every moment was designed to be simple, engaging, and memorable. What made this workshop special wasn’t just the learning — it was the experience. Children got to connect with nature, work together, and see how small actions at home can make a real difference.",
      },
      {
        heading: "",
        content:
          "Parents and educators also joined in, making it a shared learning space for everyone. It wasn't just about the kids; it was about the families growing together.",
      },
      {
        heading: "",
        content:
          "At Indoors Global, workshops like these are more than just activities — they are a step towards building a generation that grows up making better, more thoughtful choices every day. Because change doesn’t start big — it starts with awareness, and sometimes, with a handful of soil.",
      },
      {
        heading: "",
        content:
          "If you’re a school, community, or group looking to host similar workshops, we’d love to collaborate and create meaningful experiences together.",
      },
    ],
    closing:
      "Because change doesn’t start big — it starts with awareness, and sometimes, with a handful of soil.",
  },
  {
    id: 1,
    slug: "workshops-at-indoors-global",
    title: "Workshops at Indoors Global",
    subtitle: "A Space That Brings People Together",
    image: blog2,
    category: "Community",
    date: "April 25, 2026",
    time: "10:00 AM - 01:00 PM",
    location: "Indoors Global Store",
    instructor: "Indoors Team",
    rating: 5,
    isCompleted: true,
    excerpt:
      "Our space is built for more than shopping — it’s where people come together to learn, experience, and grow.",
    intro:
      "Our space is built for more than shopping — it’s where people come together to learn, experience, and grow. At Indoors Global, we host and enable workshops that turn everyday ideas into real-life habits through simple, interactive experiences.",
    sections: [
      {
        heading: "What We Do",
        points: [
          "Host hands-on workshops focused on conscious and better everyday living",
          "Create interactive sessions that are easy to understand and apply",
          "Design experiences for both adults and children",
          "Encourage learning through doing, not just listening",
          "Build a strong, like-minded community through regular events",
        ],
      },
      {
        heading: "Types of Workshops You’ll Find Here",
        points: [
          "Composting & waste awareness sessions",
          "Everyday home habit upgrades",
          "Kids learning & activity-based workshops",
          "Lifestyle and mindful living sessions",
          "Community-driven interactive events",
        ],
      },
      {
        heading: "Our Space",
        points: [
          "A warm, aesthetic, and welcoming store environment",
          "Perfect for small to medium-sized group workshops",
          "Designed to make people feel comfortable, engaged, and connected",
          "Ideal for experiential and hands-on sessions",
        ],
      },
      {
        heading: "Want to Host a Workshop With Us?",
        content: "We’re always open to collaborating with:",
        points: [
          "Educators & Mentors",
          "Creative Creators",
          "Local Sustainable Brands",
          "Workshop Facilitators",
        ],
      },
      {
        heading: "Why It Matters",
        points: [
          "Builds real connections, not just transactions",
          "Encourages people to adopt better habits in daily life",
          "Creates a community that learns and grows together",
        ],
      },
      {
        content: (
          <div className="pt-10">
            Join our Community on WhatsApp{" "}
            <a
              href="https://chat.whatsapp.com/BXUKCKqTGCGIQG3Y2vPgXt?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline font-bold"
            >
              https://chat.whatsapp.com/BXUKCKqTGCGIQG3Y2vPgXt?mode=gi_t
            </a>
          </div>
        ),
      },
    ],
    closing:
      "Because change doesn’t start big — it starts with awareness, and sometimes, with a handful of soil. Have an idea? Let’s create something meaningful together. 🌿",
  },
];
