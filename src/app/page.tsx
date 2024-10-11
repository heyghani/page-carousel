// app/character-carousel/page.tsx
import axios from "axios";
import Carousel from "@/components/Carousel";
import Gallery from "@/components/Gallery";
import { Characters } from "@/types/character";

const getCharacters = async (): Promise<Characters> => {
  try {
    const { data } = await axios.get<Characters>(
      "https://candyai.devicion.com/chat/list/character"
    );
    return data || [];
  } catch (error) {
    console.error("Error fetching characters:", error);
    return { characters: [] };
  }
};

const CarouselPage = async () => {
  const { characters } = await getCharacters();
  return (
    <section className="container-page">
      <Carousel characters={characters} />
      <div className="py-20">
        <h3 className="text-gallery">Gallery</h3>
        <Gallery characters={characters} />
      </div>
    </section>
  );
};

export default CarouselPage;
