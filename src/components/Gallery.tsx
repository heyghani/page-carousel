// components/Gallery.tsx
import React from "react";
import Card from "./Card";
import { Character } from "@/types/character";

interface GalleryProps {
  characters: Character[];
}

const Gallery: React.FC<GalleryProps> = ({ characters }) => {
  if (!characters.length) {
    return <div>No characters available.</div>;
  }

  return (
    <div className="container-gallery">
      {characters.map((character, index) => (
        <div key={index} className="flex justify-center">
          <Card character={character} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
