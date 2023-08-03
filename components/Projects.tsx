
const projectData = [
  {
    title: 'TechQ&A',
    description: 'An Application for Technical Queries. The user is able to post a question and answer queries.',
    toolsUsed: 'Django, SASS',
    learningOutcome: 'Understanding of Django Framework, Frontend UI design using SASS',
  },
  {
    title: '3D Tennis Multiplayer game using Body Gestures',
    description: 'Game is developed using Unity. The Player in game moves based on the Body Gestures performed by the user and it is rendered through the Mediapipe library in python.',
    toolsUsed: 'Unity, Python',
    learningOutcome: 'Understanding of Mediapipe library, Unity game development, Networking',
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white p-4 shadow-md">
              <h5 className="text-lg font-bold">{`Project ${index + 1} (Mini Project)`}</h5>
              <p>
                <strong>Title:</strong> {project.title}
              </p>
              <p>
                <strong>Description:</strong> {project.description}
              </p>
              <p>
                <strong>Tools used:</strong> {project.toolsUsed}
              </p>
              <p>
                <strong>Learning Outcome:</strong> {project.learningOutcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
