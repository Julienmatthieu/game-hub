import useData from "./useData";
import genres from "../data/genres"

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: genres, isLoading: false, error: false});
// Minimalising data call for stable data
// useData<Genre>('/genres');

export default useGenres;