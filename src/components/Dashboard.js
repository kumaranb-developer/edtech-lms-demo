import React from 'react';

const courses = [
  { id: 1, title: 'React Basics', progress: '60%' },
  { id: 2, title: 'Node.js Fundamentals', progress: '80%' },
  { id: 3, title: 'MongoDB Essentials', progress: '45%' },
];

const Dashboard = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
      {courses.map(course => (
        <div key={course.id} style={{border: '1px solid #ccc', padding: '15px', width: '200px'}}>
          <h4>{course.title}</h4>
          <p>Progress: {course.progress}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
