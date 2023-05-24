import userData from "./useData";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    // API code smell
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

const useGames = () => userData<Game>('/games');

export default useGames;