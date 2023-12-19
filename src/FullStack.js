import SliderImage from "./SliderImages";
import Header from "./Header";
const FullStack = () => {
    const fullStackCourses = [
        {
          id: 1,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Introduction to Full Stack Development',
          instructor: 'Jessica Anderson',
          duration: '4 weeks',
          level: 'Beginner',
        },
        {
          id: 2,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'HTML and CSS Fundamentals',
          instructor: 'Andrew Miller',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 3,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'JavaScript Basics and DOM Manipulation',
          instructor: 'Brian Turner',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 4,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Node.js and Express for Server-Side Development',
          instructor: 'Sophie Davis',
          duration: '8 weeks',
          level: 'Intermediate',
        },
        {
          id: 5,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'React.js for Front-End Development',
          instructor: 'Alexandra White',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 6,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Database Design and SQL',
          instructor: 'David Johnson',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 7,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'MongoDB and NoSQL Databases',
          instructor: 'Emily Martin',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 8,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'RESTful API Development',
          instructor: 'Daniel Turner',
          duration: '8 weeks',
          level: 'Intermediate',
        },
        {
          id: 9,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Authentication and Authorization',
          instructor: 'Grace Walker',
          duration: '9 weeks',
          level: 'Advanced',
        },
        {
          id: 10,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Advanced Front-End Technologies (e.g., Redux)',
          instructor: 'Nathan Harris',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 11,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Microservices Architecture',
          instructor: 'Sophia Clark',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 12,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Docker and Containerization',
          instructor: 'Robert Davis',
          duration: '8 weeks',
          level: 'Advanced',
        },
        {
          id: 13,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Continuous Integration and Deployment (CI/CD)',
          instructor: 'Isabel Turner',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 14,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Version Control with Git and GitHub',
          instructor: 'Michael Brown',
          duration: '7 weeks',
          level: 'Intermediate',
        },
        {
          id: 15,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Scalability and Performance Optimization',
          instructor: 'Emma Garcia',
          duration: '6 weeks',
          level: 'Advanced',
        },
        {
          id: 16,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Full Stack Project Management',
          instructor: 'Jacob Smith',
          duration: '8 weeks',
          level: 'Advanced',
        },
        {
          id: 17,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Web Security Best Practices',
          instructor: 'Olivia Turner',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 18,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Serverless Architecture',
          instructor: 'William Clark',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 19,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Cloud Computing for Full Stack Developers',
          instructor: 'Ryan Walker',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 20,
          image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
          title: 'Full Stack Capstone Project',
          instructor: 'Jason Davis',
          duration: '4 weeks',
          level: 'Advanced',
        },
      ];
      
  return (
    <>
    <SliderImage/>
     <Header/>
      <h1>Full Stack Development</h1>
      <div className="card-container">
           {fullStackCourses.map((data) => (
            <div className="box" key={data.id}>
            <img style={{width:"230px", height:"200px", borderRadius: "5px"}} src={data.image} alt="Full Stack"/> 
           <p><label>Title: </label><br/>{data.title}</p>
           <p><label>Instructor: </label><br/>{data.instructor}</p>
           <p><label>Duration: </label><br/>{data.duration}</p>
           <p><label>Level: </label><br/>{data.level}</p>
          </div>
         ))}
        </div>
    </>
  );
};
export default FullStack;
