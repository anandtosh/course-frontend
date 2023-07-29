import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero section */}
      <section className="bg-blue-600 text-white py-24">
        <div className="w-full md:w-3/4 mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to AnandBhatnagar.com
          </h1>
          <p className="text-lg mb-8 text-justify ">
            Your premier online platform for top-notch courses covering a diverse array of domains! Whether you aspire to become a programming pro, explore the intricacies of AWS and GCP cloud computing, venture into the transformative world of blockchain, understand API descriptions, excel in government exam preparation, or sharpen your skills in mathematics and science, you've come to the right place.
          </p>
          <p className="text-lg mb-8 text-justify ">
            At AnandBhatnagar.com, we take pride in offering meticulously crafted courses that cater to learners of all levels – from beginners taking their first steps to seasoned professionals seeking to deepen their expertise.
          </p>
        </div>
      </section>

      {/* Featured widgets section */}
      <section className="py-16">
        <div className="w-full md:w-3/4 mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Core features of AnandBhatnagar.com:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured widget 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Extensive Course Selection</h3>
              <p className="text-gray-600 text-justify ">
                Immerse yourself in an extensive library of courses, encompassing everything from programming languages (Python, Java, C++, and more) to AWS and GCP essentials, blockchain applications, API description best practices, government exam preparation for various competitive tests, and in-depth math and science topics.
              </p>
            </div>
            {/* Featured widget 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Engaging Quizzes</h3>
              <p className="text-gray-600 text-justify ">
                Each lesson comes with interactive quizzes to reinforce your understanding and measure your progress as you journey through the course material.
              </p>
            </div>
            {/* Add more featured widgets here */}
          </div>
        </div>
      </section>

      {/* Sponsors section */}
      <section className="bg-gray-200 py-16">
        <div className="w-full md:w-3/4 mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Sponsors</h2>
          {/* Add sponsors content here */}
        </div>
      </section>

      {/* Renowned Instructors section */}
      <section className="py-16">
        <div className="w-full md:w-3/4 mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Learn from Renowned Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instructor 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien velit.
              </p>
            </div>
            {/* Instructor 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">
                Ut efficitur, augue eget sollicitudin condimentum, nulla orci cursus nibh.
              </p>
            </div>
            {/* Add more instructors here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
