import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <section className="w-full max-w-4xl mx-auto">
        <h1 className="text-xl font-semibold text-center">About Page</h1>
        <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
          Welcome to our blog! We are dedicated to sharing our knowledge and
          insights on various topics. Our goal is to provide valuable content
          that inspires and educates our readers.
        </p>
      </section>
      <section className="w-full max-w-4xl p-4 mx-auto mt-10">
        <h2 className="text-2xl font-bold">Meet the Author</h2>
        <div className="flex items-center mt-4">
          <Image
            alt="Author"
            className="w-24 h-24 rounded-full"
            height="100"
            src="/agus.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold">Agus Pranyoto</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Agus is a professional Frontend Developer with a passion for the
              world of technology and innovation.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl p-4 mx-auto mt-10">
        <h2 className="text-2xl font-bold">Blog Categories</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h3 className="text-lg font-bold">Technology</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Latest trends and innovations in technology.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h3 className="text-lg font-bold">Programming</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Tips and tutorials on various programming languages.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h3 className="text-lg font-bold">Web Development</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Insights on web development and design.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h3 className="text-lg font-bold">Product Reviews</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              In-depth reviews of the latest tech products.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
