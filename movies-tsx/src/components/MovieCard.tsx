// MovieCard.tsx
import type { MouseEvent } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import type { MovieCardProps } from "../types/movie";
import { useAlert } from "../contexts/AlertContext";
import { FiAlertTriangle } from "react-icons/fi";

interface Props extends MovieCardProps {}

function MovieCard({ movie }: Props) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const { showAlert } = useAlert();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();

    if (favorite) {
      showAlert({
        message: "Favorito removido com sucesso",
        title: "Removido",
        color: "warning",
        icon: FiAlertTriangle,
      });
      removeFromFavorites(movie.id);
    } else {
      showAlert({
        message: "Favorito adicionado com sucesso",
        title: "Adicionado",
        color: "success",
        icon: IoCheckmarkDoneCircleOutline,
      });
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
            type="button"
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
