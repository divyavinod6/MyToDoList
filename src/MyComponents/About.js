import React from 'react';

const About = () => {
  let aboutStyle = {
    minHeight: '80vh',
    margin: '10px auto',
  };
  return (
    <div className="container" style={aboutStyle}>
      <h2>About My ToDo List</h2>
      <br />
      <h5>
        Welcome to My ToDo List, a simple and intuitive task management
        application built with React!
      </h5>
      <br />
      <h5>
        Our mission is to help you stay organized and on top of your tasks.
        Whether you're managing work projects, personal goals, or daily chores,
        our app is here to assist you in keeping track of everything you need to
        do.
      </h5>
      <br />
      <h4>Key Features:</h4>
      <ul style={{ fontSize: '1.2rem' }}>
        <li>Create and manage tasks with ease</li>
        <li>Mark tasks as completed</li>
        <li>Delete tasks you no longer need</li>
        <li>Save your tasks for later with local storage</li>
      </ul>
      <h5 style={{ marginBottom: '90px' }}>
        We're constantly working to improve our app and add new features to make
        your task management experience even better.
      </h5>
      <h6>
        Thank you for choosing My ToDo List, and we hope it helps you become
        more productive and organized!
      </h6>
    </div>
  );
};

export default About;
