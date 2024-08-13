import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 space-y-6">
      <h1 className="text-3xl font-bold">
        Welcome to the Code Challenge for Pongo Tech
      </h1>
      <div className="flex justify-center items-center space-x-4">
        <div>
          <Link to="/create-session">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              aria-label="Create a new Game Session"
            >
              Create a new Game Session
            </button>
          </Link>
        </div>

        <div>
          <Link to="/sessions">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              aria-label="View Game Sessions"
            >
              View Game Sessions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
