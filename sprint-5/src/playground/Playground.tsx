// src/playground/Playground.tsx
import React from "react";
import Button from "../components/atoms/Button";

const Playground: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Playground</h1>

      <div className="flex gap-4">
        <Button variant="primary" onClick={() => alert("Primary clicked")}>
          Primary
        </Button>
        <Button variant="secondary" onClick={() => alert("Secondary clicked")}>
          Secondary
        </Button>
        <Button variant="tertiary" onClick={() => alert("Tertiary clicked")}>
          Tertiary
        </Button>
      </div>

      <div className="mt-4">
        <Button variant="primary" className="w-full">
          Full Width Button
        </Button>
      </div>
    </div>
  );
};

export default Playground;
