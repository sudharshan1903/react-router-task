import SliderImage from "./SliderImages";
import Header from "./Header";
const CyberSecurity = ()=>{
    const cyberSecurityCourses = [
        {
          id: 1,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Introduction to Cyber Security',
          instructor: 'John Smith',
          duration: '4 weeks',
          level: 'Beginner',
        },
        {
          id: 2,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Ethical Hacking Fundamentals',
          instructor: 'Alice Johnson',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 3,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Network Security Essentials',
          instructor: 'Bob Williams',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 4,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Web Application Security',
          instructor: 'Eva Martinez',
          duration: '8 weeks',
          level: 'Intermediate',
        },
        {
          id: 5,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Incident Response and Management',
          instructor: 'Daniel Lee',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 6,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Secure Coding Practices',
          instructor: 'Sophie Turner',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 7,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Mobile Security',
          instructor: 'Michael Brown',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 8,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Cloud Security',
          instructor: 'Olivia White',
          duration: '8 weeks',
          level: 'Advanced',
        },
        {
          id: 9,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Penetration Testing and Vulnerability Assessment',
          instructor: 'Ryan Clark',
          duration: '9 weeks',
          level: 'Advanced',
        },
        {
          id: 10,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Wireless Network Security',
          instructor: 'Grace Turner',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 11,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Security Analytics',
          instructor: 'Jason Davis',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 12,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Blockchain Security',
          instructor: 'Emma Garcia',
          duration: '8 weeks',
          level: 'Advanced',
        },
        {
          id: 13,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Cyber Security Policy and Governance',
          instructor: 'William Harris',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 14,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Digital Forensics',
          instructor: 'Laura Turner',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 15,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'IoT Security',
          instructor: 'Alex Martin',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 16,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Malware Analysis',
          instructor: 'Sophia Miller',
          duration: '8 weeks',
          level: 'Advanced',
        },
        {
          id: 17,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Threat Intelligence',
          instructor: 'Nathan Walker',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 18,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Social Engineering and Cybersecurity Awareness',
          instructor: 'Isabel Brown',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 19,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Security Compliance and Auditing',
          instructor: 'Jacob Turner',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 20,
          image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
          title: 'Cybersecurity Career Development',
          instructor: 'Sophie Clark',
          duration: '4 weeks',
          level: 'Beginner',
        },
      ];
      
    return(
        <>
        <SliderImage/>
        <Header/>
        <h1>Cyber Security</h1>
        <div className="card-container">
           {cyberSecurityCourses.map((data) => (
            <div className="box" key={data.id}>
            <img style={{width:"230px", height:"200px", borderRadius: "5px"}} src={data.image} alt="cyber security"/> 
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
    export default CyberSecurity;