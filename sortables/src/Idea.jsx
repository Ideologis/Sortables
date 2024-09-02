import  { useState } from "react";

const InputDisplayForm = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(input);
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      {result && (
        <div className="mb-4 p-3 bg-blue-100 rounded-lg">
          <h2 className="text-lg font-semibold">Result:</h2>
          <p className="text-gray-800">{result}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="input"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter your text:
          </label>
          <input
            type="text"
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Type something..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default InputDisplayForm;
