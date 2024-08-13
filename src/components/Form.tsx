import { useState } from "react";
import { FormType } from "../types/form";
import Swal from "sweetalert2";

function Form() {
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
    if (isFormValid()) {
      Swal.fire({
        title: "Game Session Created",
        icon: "success",
        confirmButtonAriaLabel: "Ok",
      });
      console.log(formData);
    } else {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields",
        icon: "error",
        confirmButtonAriaLabel: "Ok",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-col items-center w-1/3"
    >
      <div className="flex justify-between items-center w-4/5">
        <label className="" htmlFor="hostname">
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
      <div className="flex justify-between items-center w-4/5">
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

      <div className="flex justify-between items-center w-4/5">
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

      <div className="flex justify-between items-center w-4/5">
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
        className="px-2 py-2 w-4/5 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600"
        type="submit"
      >
        Create Game Session
      </button>
    </form>
  );
}

export default Form;
