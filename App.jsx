import React from 'react'

import Card from './components/Card'
function App() {
  const jobOpenings = [
    {
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: 45, // USD per hour
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: 70,
      location: "Pune, India"
    },
    {
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: 55,
      location: "Nagpur, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdEdZutLGhFalA274yXkte5G2gFp2ShGrOw&s",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: 75,
      location: "Hydrabad, India"
    },
    {
      brandlogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "UI Engineer",
      tag1: "Part-time",
      tag2: "Senior Level",
      pay: 80,
      location: "Banglore, India"
    },
    {
      brandlogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: 50,
      location: "Delhi, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-9W92tPfjJPYh2fhlPd_Q2pLjSlOPV0pKA&s",
      companyName: "NVIDIA",
      datePosted: "6 weeks ago",
      post: "AI/ML Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: 85,
      location: "Noida, India"
    },
    {
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1587px-Tesla_Motors.svg.png",
      companyName: "Tesla",
      datePosted: "12 days ago",
      post: "Software Engineer (Autopilot)",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: 65,
      location: "Gurgaon, India"
    }
  ];
  
  return (
    <div className='parent'>
    {jobOpenings.map(function(elem){
      return <Card comapny={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2}
       dateposted={elem.datePosted}
       pay={elem.pay}
       location={elem.location}
       brandlogo={elem.brandlogo}
       />
    })}
    </div>
  )
}

export default App
