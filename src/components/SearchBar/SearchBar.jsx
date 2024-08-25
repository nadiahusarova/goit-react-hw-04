import { useState } from "react";
import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className={styles.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
}
