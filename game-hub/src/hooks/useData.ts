import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[]
}

const userData = <T>(endpoint: string) => {
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
            const controller = new AbortController();
    
            setLoading(true);
          apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal})
            .then((res) => {
                setData(res.data.results);
                setLoading(false)} // should be in final but doen't work now with debug
            )
            .catch((err) =>{
                if (err instanceof CanceledError) return
                setError(err.message);
                setLoading(false); // should be in final but doen't work now with debug 
            } );
            return () => controller.abort();
        }, []);
    
        return {data, error, isLoading};
}

export default userData;