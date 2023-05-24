import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[]
}

const userGenres = () => {
        const [genres, setGenres] = useState<Genre[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
            const controller = new AbortController();
    
            setLoading(true);
          apiClient
            .get<FetchGenreResponse>("/genres", { signal: controller.signal})
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false)} // should be in final but doen't work now with debug
            )
            .catch((err) =>{
                if (err instanceof CanceledError) return
                setError(err.message);
                setLoading(false); // should be in final but doen't work now with debug 
            } );
            return () => controller.abort();
        }, []);
    
        return {genres, error, isLoading};
    
}

export default userGenres;