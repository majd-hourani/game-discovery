import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

function useGames() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGames() {
      try {
        const response = await apiClient.get("/games", {
          signal: controller.signal,
        });

        setGames(response.data.results);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
      }
    }

    fetchGames();

    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;

// Hooks aren't only for sharing logic between components. We can also use them
// to separate concerns and keep our components more modular.
