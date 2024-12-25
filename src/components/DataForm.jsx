import React, { useState } from "react";
import ReactQuill from "react-quill"; // Import the rich text editor
import "react-quill/dist/quill.snow.css"; // Quill editor styles

const DataForm = ({ setTitleHandler, setContentHandler }) => {
  return (
    <div className="p-6 bg-gray-100 max-h-screen flex flex-col gap-6">
      <div className="bg-white p-4 shadow-md rounded border">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Add Title
        </label>
        <input
          type="text"
          onChange={(e) => setTitleHandler(e.target.value)}
          placeholder="Enter your title"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Rich Text Editor */}
      <div className="bg-white p-4 shadow-md rounded border h-96">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Content
        </label>
        <ReactQuill
          theme="snow"
          onChange={setContentHandler}
          placeholder="Start writing..."
          className="h-64"
        />
      </div>
    </div>
  );
};

export default DataForm;
