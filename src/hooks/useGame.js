import apiClient from "@/services/apiClient";
import { useEffect, useState } from "react";

function useGames() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await apiClient.get("/games");
        setGames(response.data.results);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchGames();
  }, []);

  return { games, error };
}

export default useGames;

// Hooks aren't only for sharing logic between components. We can also use them
// to separate concerns and keep our components more modular.
