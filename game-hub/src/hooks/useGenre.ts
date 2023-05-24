import useData from "./useData";

interface Genre {
    id: number;
    name: string;
}

const userGenres = () => useData<Genre>('/genres');

export default userGenres;