import SliderImage from "./SliderImages";
import Header from "./Header";
const DataScience = () => {
    const dataScienceCourses = [
        {
          id: 1,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Introduction to Data Science',
          instructor: 'Jennifer Lee',
          duration: '4 weeks',
          level: 'Beginner',
        },
        {
          id: 2,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Data Analysis with Python',
          instructor: 'Michael Johnson',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 3,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Machine Learning Fundamentals',
          instructor: 'Emily Davis',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 4,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Statistical Modeling in R',
          instructor: 'Robert Smith',
          duration: '8 weeks',
          level: 'Intermediate',
        },
        {
          id: 5,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Deep Learning and Neural Networks',
          instructor: 'Sophie Turner',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 6,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Big Data Analytics with Spark',
          instructor: 'David Williams',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 7,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Natural Language Processing',
          instructor: 'Olivia White',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 8,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Data Visualization with Tableau',
          instructor: 'Daniel Lee',
          duration: '8 weeks',
          level: 'Intermediate',
        },
        {
          id: 9,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Time Series Analysis',
          instructor: 'Natalie Garcia',
          duration: '9 weeks',
          level: 'Advanced',
        },
        {
          id: 10,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Feature Engineering Techniques',
          instructor: 'Alex Martin',
          duration: '6 weeks',
          level: 'Intermediate',
        },
        {
          id: 11,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'A/B Testing and Experimental Design',
          instructor: 'Sophia Miller',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 12,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Data Ethics and Privacy',
          instructor: 'William Harris',
          duration: '8 weeks',
          level: 'Advanced',
        },
        {
          id: 13,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Predictive Analytics',
          instructor: 'Laura Turner',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 14,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Data Wrangling and Cleaning',
          instructor: 'Ryan Clark',
          duration: '7 weeks',
          level: 'Intermediate',
        },
        {
          id: 15,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Bayesian Statistics',
          instructor: 'Isabel Brown',
          duration: '6 weeks',
          level: 'Advanced',
        },
        {
          id: 16,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Reinforcement Learning',
          instructor: 'Jacob Turner',
          duration: '8 weeks',
          level: 'Advanced',
        },
        {
          id: 17,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Clustering and Dimensionality Reduction',
          instructor: 'Emma Garcia',
          duration: '7 weeks',
          level: 'Advanced',
        },
        {
          id: 18,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Data Science in the Cloud',
          instructor: 'Nathan Walker',
          duration: '5 weeks',
          level: 'Intermediate',
        },
        {
          id: 19,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Data Science Capstone Project',
          instructor: 'Grace Turner',
          duration: '6 weeks',
          level: 'Advanced',
        },
        {
          id: 20,
          image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
          title: 'Advanced Data Science Techniques',
          instructor: 'Jason Davis',
          duration: '4 weeks',
          level: 'Advanced',
        },
      ];
      
  return (
    <>
<SliderImage/>
<Header/>
     <h1>Data Science</h1>
     <div className="card-container">
           {dataScienceCourses.map((data) => (
            <div className="box" key={data.id}>
               <img style={{width:"230px", height:"200px", borderRadius: "5px"}} src={data.image} alt="dataScience"/> 
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
export default DataScience;
