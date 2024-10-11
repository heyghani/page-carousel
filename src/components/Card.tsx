import React from "react";
import { Character } from "@/types/character";

interface CardProps {
  character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
  return (
    <div className="container-card">
      <img src={character.image_url} alt={character.name} className="avatar" />
      <h3 className="text-name">{character.name}</h3>
      <p className="text-gray-600">{character.description}</p>
    </div>
  );
};

export default Card;
