import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState("react");
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSnackbar = () => {
    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-10">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold">Tailwind CSS Exercise</h1>
        <p className="text-gray-600 mt-2">
          Practice common Tailwind utility classes.
        </p>
      </div>

      {/* ====================================================== */}
      {/* Button */}
      {/* ====================================================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Button</h2>

        <div className="flex gap-4">
          <button
            className="
              bg-blue-600 rounded-lg text-white px-4 py-1 hover:bg-blue-700 transition-colors
            "
          >
            Primary Button
          </button>

          <button
            className="
              bg-green-500 rounded-full text-white px-4 py-1
            "
          >
            Rounded Button
          </button>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Chip */}
      {/* inline-flex; bg-*; rounded-*;  */}
      {/* ====================================================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Chip</h2>

        <div className="flex gap-3">
          <div
            className="
              bg-purple-200 rounded-full px-4 py-1 text-purple-700
            "
          >
            React
          </div>

          <div
            className="
              bg-amber-200 rounded-lg px-4 py-1 text-amber-700
            "
          >
            Tailwind
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Card */}
      {/* shadow; rounded; flex; grid;  */}
      {/* ====================================================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Card</h2>

        <div className="grid grid-cols-2 gap-4">
          <div
            className="
              shadow-xl p-4 rounded-xl bg-white w-[200px] flex gap-[4px] flex-col
            "
          >
            <h3 className="font-bold text-lg">Frontend</h3>
            <p className="text-gray-600">
              Learn React + Tailwind CSS together.
            </p>

            <button className="bg-black text-white rounded px-3 py-2 hover:bg-gray-700">
              Learn More
            </button>
          </div>

          <div
            className="
              shadow-xl p-4 rounded-xl bg-white w-[200px] flex gap-[4px] flex-col
            "
          >
            <h3 className="font-bold text-lg">Backend</h3>
            <p className="text-gray-600">Connect frontend UI with APIs.</p>

            <button className="bg-indigo-500 text-white rounded-lg px-3 py-2 hover:bg-indigo-700">
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* List */}
      {/* border; divide-(x / y); cursor-pointer; hover;  */}
      {/* ====================================================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">List</h2>

        <ul
          className="
            rounded-xl border overflow-hidden divide-y cursor-pointer
          "
        >
          <li className="
            p-4 cursor-pointer hover:bg-gray-100 bg-white 
          ">Dashboard</li>

          <li
            className="
            p-4 cursor-pointer hover:bg-gray-100 bg-white 
          "
          >
            Settings
          </li>

          <li
            className="
            p-4 cursor-pointer hover:bg-gray-100 bg-white 
          "
          >
            Profile
          </li>
        </ul>
      </section>

      {/* ====================================================== */}
      {/* Radio Group */}
      {/* space-(x/y)-*; checked:*; focus:*;  */}
      {/* ====================================================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Radio Group</h2>

        <div className="space-y-[0.5rem] ">
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="framework"
              value="react"
              checked={selected === "react"}
              onChange={(e) => setSelected(e.target.value)}
              className="
                accent-blue-600 focus:ring-[20px] focus:ring-amber-500
              "
            />

            <span>React</span>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="framework"
              value="vue"
              checked={selected === "vue"}
              onChange={(e) => setSelected(e.target.value)}
              className="
                accent-green-600 checked:bg-blue-600 checked:border-amber-600
              "
            />

            <span>Vue</span>
          </label>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Select */}
      {/* bg-*; */}
      {/* ====================================================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Select</h2>

        <select
          className="
            bg-white px-2 py-1  text field 
          "
        >
          <option>Japan</option>
          <option>Hong Kong</option>
          <option>Taiwan</option>
          <option> Add your idea </option>
        </select>
      </section>

      {/* ====================================================== */}
      {/* Text Field: disabled:*; placeholder:*; */}
      {/* ====================================================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Text Field</h2>

        <div className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Enter your name..."
            className="
              p-4 text-left placeholder:text-left
            "
          />

          <input
            type="text"
            disabled
            placeholder="Disabled input"
            className="
              p-4 text-left placeholder:text-left border
            "
          />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Snackbar */}
      {/* fixed; bg-*; bottom-*;  */}
      {/* ====================================================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Snackbar</h2>

        <button
          onClick={handleSnackbar}
          className="
            bg-red-500 rounded-lg px-4 py-1 text-white hover:bg-red-700
          "
        >
          Show Snackbar
        </button>

        {showSnackbar && (
          <div
            className="
              fixed bottom-0 w-full left-0 bg-amber-500 px-4 py-1
            "
          >
            Saved successfully!
          </div>
        )}
      </section>
    </div>
  );
}
