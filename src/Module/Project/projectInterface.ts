export type TImage = {
  img: string;
};

export type TProject = {
  name: string;
  image: string;
  allImage?: string[];
  title: string;
  clientCode?: string;
  serverCode?: string;
  postmanDocument?: string;
  live: string;
  details: string;
  technologies: string[];
};

// {
//     "name": "Full Stack Bike Management Dashboard Application(MERN)",
//     "image": "https://i.ibb.co/gD7cmt3/Screenshot-2024-03-02-185142.png",
//     "allImage": [
//       {
//         "id": 1,
//         "img": "https://i.ibb.co/gD7cmt3/Screenshot-2024-03-02-185142.png"
//       },
//       {
//         "id": 2,
//         "img": "https://i.ibb.co/FznZzVs/Screenshot-2024-03-02-185037.png"
//       },
//       {
//         "id": 3,
//         "img": "https://i.ibb.co/FmQDxGK/Screenshot-2024-03-02-185216.png"
//       }
//     ],
//     "title": "I developed a Bike Management application using MERN technologies. Users can create accounts, order bikes, request services, and manage orders from the dashboard. Role-based functionality and UI were implemented.",
//     "clientCode": "https://github.com/Porgramming-Hero-web-course/l2-b2-assignment-6-fronten-prasanjitsarker3",
//     "serverCode": "https://github.com/Porgramming-Hero-web-course/l2-b2-assignment-6-backend-prasanjitsarker3",
//     "live": "https://bikemanagement.netlify.app/login",
//     "details": "I developed a Bike Management application using MERN technologies. There are two types of roles: User and Manager. The Manager is responsible for creating new bikes, managing the publication of all bikes, updating bike data, handling duplication and deletion, and managing bike orders. Users can create accounts, order bikes, and request servicing. Servicing includes the possibility of users receiving discounts for their next servicing. Managers oversee all service requests, assign the next servicing date for bikes, and maintain bike order history on a daily, weekly, and monthly basis. Additionally, Managers can offer bike driving courses, allowing users to enroll and receive certification upon completion.",
//     "technologies": [
//       "Node JS",
//       "TypeScript",
//       "Mongoose",
//       "React JS",
//       "Redux",
//       "React-Hook-From",
//       "Ant Design",
//       "Tailwind",
//       "JWT",
//       "Zod"
//     ]
//   },
