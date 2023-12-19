
import SliderImage from "./SliderImages";
import Header from "./Header";

const AllCourse = ()=>{
    const technologyCourses = [
        {
          id: 1,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Introduction to UI/UX Design',
          instructor: 'Jessica Anderson',
          duration: '4 weeks',
          level: 'Beginner',
        },
        {
          id: 2,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'HTML and CSS Fundamentals',
          instructor: 'Andrew Miller',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 3,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'JavaScript Basics and DOM Manipulation',
          instructor: 'Brian Turner',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 4,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Data Analysis with Python',
          instructor: 'Sophie Davis',
          duration: '8 weeks',
          level: 'Intermediate',
        },
        {
          id: 5,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Manual and Automated Testing',
          instructor: 'Alexandra White',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 6,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Database Design and SQL',
          instructor: 'David Johnson',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 7,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Network Fundamentals',
          instructor: 'Emily Martin',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 8,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Full Stack Development with Node.js and React.js',
          instructor: 'Daniel Turner',
          duration: '8 weeks',
          level: 'Intermediate',
        },
        {
          id: 9,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Machine Learning Fundamentals',
          instructor: 'Grace Walker',
          duration: '9 weeks',
          level: 'Advanced',
        },
        {
          id: 10,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Advanced Front-End Technologies (e.g., Redux)',
          instructor: 'Nathan Harris',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 11,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Cybersecurity Essentials',
          instructor: 'Sophia Clark',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 12,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Cloud Computing for Developers',
          instructor: 'Robert Davis',
          duration: '8 weeks',
          level: 'Advanced',
        },
        {
          id: 13,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Data Visualization with Tableau',
          instructor: 'Isabel Turner',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 14,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Software Testing and Quality Assurance',
          instructor: 'Michael Brown',
          duration: '7 weeks',
          level: 'Intermediate',
        },
        {
          id: 15,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'IT Project Management',
          instructor: 'Emma Garcia',
          duration: '6 weeks',
          level: 'Advanced',
        },
        {
          id: 16,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Wireless Networking and Security',
          instructor: 'Jacob Smith',
          duration: '8 weeks',
          level: 'Advanced',
        },
        {
          id: 17,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'DevOps and Continuous Integration/Deployment',
          instructor: 'Olivia Turner',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 18,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Data Science for Business Analysts',
          instructor: 'William Clark',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 19,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'UI/UX Prototyping and Interaction Design',
          instructor: 'Ryan Walker',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 20,
          image: process.env.PUBLIC_URL + "/images/Testing.jpg",
          title: 'Penetration Testing and Ethical Hacking',
          instructor: 'Jason Davis',
          duration: '4 weeks',
          level: 'Advanced',
        },
      ];
      
return(
    <>
    <SliderImage/>
    <Header/>
    <h1>All Course</h1>
    <div className="card-container">
           {technologyCourses.map((data) => (
            <div className="box" key={data.id}>
            <img style={{width:"230px", height:"200px", borderRadius: "5px"}} src={data.image} alt="All"/> 
           <p><label>Title: </label><br/>{data.title}</p>
           <p><label>Instructor: </label><br/>{data.instructor}</p>
           <p><label>Duration: </label><br/>{data.duration}</p>
           <p><label>Level: </label><br/>{data.level}</p>
          </div>
         ))}
        </div>
    </>
)
}
export default AllCourse;