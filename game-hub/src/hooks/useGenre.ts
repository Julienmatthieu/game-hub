import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const userGenres = () => useData<Genre>('/genres');

export default userGenres;