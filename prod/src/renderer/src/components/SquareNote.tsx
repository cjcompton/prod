import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CHECKBOX_COUNT = 3;

const SquareNote = () => {
  const { squareId } = useParams();
  const navigate = useNavigate();

  const storageKey = `squareNote-${squareId}`;

  // Load from localStorage initially
  const [checks, setChecks] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : Array(CHECKBOX_COUNT).fill(false);
  });

  // Save to localStorage whenever `checks` changes
  useEffect(() => {
    if (squareId) {
      localStorage.setItem(storageKey, JSON.stringify(checks));
    }
  }, [checks, squareId, storageKey]);

  const handleCheck = (index) => {
    setChecks((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="pl-24 py-2 static">
        <button className="static inline" onClick={() => navigate("/")}>
          PROD
        </button>
        <p className="px-2 static inline content-center">{">"}</p>
        <p className="static inline">Day #{squareId}</p>
      </div>

      {/* Page content */}
      <div className="w-full h-full">
        <div className="flex items-start justify-center">
          <h1 className="text-2xl">Day #{squareId}</h1>
        </div>

        {/* Checkbox List */}
        <div className="p-6 flex flex-col">
          {checks.map((checked, index) => (
            <div key={index} className="flex items-center mb-2">
              <label className="px-2">{`Test #${index + 1}`}</label>
              <input
                type="checkbox"
                className="accent-black"
                checked={checked}
                onChange={() => handleCheck(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SquareNote;
