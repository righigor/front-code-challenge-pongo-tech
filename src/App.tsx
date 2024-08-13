import { useState } from "react";

import "./App.css";
import { FormType } from "./types/form";

function App() {
  const [formData, setFormData] = useState<FormType>({
    hostname: "",
    players: 0,
    map: "de_dust2",
    mode: "competitive",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const isFormValid = () => {
    return Object.values(formData).every((value) => value !== "");
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Please fill in all fields");
      return;
    }
    console.log(formData);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 space-y-6">
        <h1 className="text-3xl font-bold">Create a new Game Session</h1>

        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
          <div className="flex justify-end items-center ">
            <label className="mr-2" htmlFor="hostname">
              Hostname
            </label>
            <input
              className="px-2 py-1 border border-gray-300 rounded-md"
              type="text"
              name="hostname"
              id="hostname"
              value={formData.hostname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mr-2" htmlFor="players">
              Players
            </label>
            <input
              className="px-2 py-1 border border-gray-300 rounded-md"
              type="number"
              name="players"
              id="players"
              value={formData.players}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mr-2" htmlFor="map">
              Map
            </label>
            <select
              className="px-2 py-1 border border-gray-300 rounded-md"
              name="map"
              id="map"
              value={formData.map}
              onChange={handleChange}
            >
              <option value="de_dust2">de_dust2</option>
              <option value="de_inferno">de_inferno</option>
              <option value="de_nuke">de_nuke</option>
              <option value="de_mirage">de_mirage</option>
              <option value="de_overpass">de_overpass</option>
              <option value="de_train">de_train</option>
              <option value="de_vertigo">de_vertigo</option>
            </select>
          </div>

          <div>
            <label className="mr-2" htmlFor="mode">
              Mode
            </label>
            <select
              className="px-2 py-1 border border-gray-300 rounded-md"
              name="mode"
              id="mode"
              value={formData.mode}
              onChange={handleChange}
            >
              <option value="competitive">competitive</option>
              <option value="casual">casual</option>
              <option value="deathmatch">deathmatch</option>
              <option value="survival">survival</option>
              <option value="scrimmage">scrimmage</option>
              <option value="wingman">wingman</option>
              <option value="dangerzone">dangerzone</option>
              <option value="coop">coop</option>
              <option value="custom">custom</option>
              <option value="other">other</option>
            </select>
          </div>

          <button
            disabled={!isFormValid()}
            className="px-2 py-1 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600"
            type="submit"
          >
            Create Game Session
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
