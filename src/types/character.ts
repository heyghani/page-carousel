export interface Characters {
  characters: Character[];
}

export interface Character {
  name: string;
  bot_telegram_url: string;
  image_url: string;
  description: string;
}
