import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="flex flex-auto items-center justify-center space-x-4 ">
          <div className="relative w-64 h-48">
            <Image
              src="/myImage.jpg"
              alt="Sunil Kumar P"
              layout="fill" 
              objectFit="contain" 
            />
          </div>
          <div className="justify-center">
            <h2 className="text-3xl font-bold justify-center">Sunil Kumar P</h2>
            <p className="text-gray-600">
              Determined and hardworking person looking for a challenging job
              within a rapidly growing organization where I can implement my
              technical skills and theoretical knowledge in a real-time
              approaching situation which can benefit me as an individual and my
              company for achieving its targets.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="p-4">#95/A, 2nd Main, 2nd Cross, Near Aaxis Hospital, Belthur, Kadugodi Post, Bengaluru-560067</p>
           
            <h3 className="text-xl font-bold mt-4 mb-2">Email ID</h3>
            <p className="p-4">cse.1cr21cs414.sunilkumarp@gmail.com</p>
            <h3 className="text-xl font-bold mt-4 mb-2">Mobile No</h3>
            <p className="p-4">+91 9964297599</p>
            <h3 className="text-xl font-bold mt-4 mb-2">Github</h3>
            <p className="p-4">
              <a
                href="https://github.com/Sunil-Kumar-P"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sunil-Kumar-P
              </a>
            </p>
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
    </section>
  );
};

export default About;
