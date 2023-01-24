import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto text-gray-800 md:flex md:flex-row-reverse items-center p-5">
      <div className="w-full md:w-1/2 mb-5">
        <img
          src="/images/profpic.jpeg"
          alt="bangkoding"
          className="rounded-full mx-auto border-4 border-white shadow-xl md:mr-2 object-cover w-70 h-70"
          width="60%"
        />
      </div>
      <div className="mr-5 w-full md:w-1/2">
        <p>
          Professional Experience: Worked on the development and maintenance of
          web applications using AngularJS, ReactJS, and VueJS Collaborated with
          the team to design and develop RESTful APIs using NodeJS and ExpressJS
          Implemented responsive design and cross-browser compatibility for web
          applications Utilized Agile development methodologies to ensure timely
          delivery of projects Developed and maintained MongoDB databases
        </p>
        <br />
        <p>
          Full Stack Developer Worked on the development and maintenance of web
          applications using Ruby on Rails and Laravel Collaborated with the
          team to design and develop RESTful APIs using NodeJS and ExpressJS
          Implemented responsive design and cross-browser compatibility for web
          applications Utilized Agile development methodologies to ensure timely
          delivery of projects Developed and maintained MySQL databases
        </p>
        <br />
      </div>
    </div>
  );
};
export default About;
