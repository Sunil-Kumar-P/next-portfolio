const Education = () => {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="text-2xl font-bold">Education Qualification</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="text-lg font-bold">Bachelor of Engineering – Computer Science and Engineering</h5>
            <p>CMR Institute of Technology, Bengaluru</p>
            <p>7.59, 2024 (Pursuing)</p>
          </div>
          <div>
            <h5 className="text-lg font-bold">Diploma – Computer Science And Engineering</h5>
            <p>Government Polytechnic, Immadihalli</p>
            <p>70.48%, 2021</p>
          </div>
          <div>
            <h5 className="text-lg font-bold">SSLC</h5>
            <p>Ujjwal Vidyalaya, Whitefield, Bengaluru</p>
            <p>73.28%, 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
