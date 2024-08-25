import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import axios from "axios";
import "./App.css";

const ACCESS_KEY = "9vhbMiaLrWG-vmsc6FvETUigSWziqEPsqlj9Ebk_5bk";

export default function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (!searchTerm) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null); 
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images", error);
        setError("OOOPS! Something went wrong. Try again later."); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm]);

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
  };

  const handleImageClick = (image) => {
    console.log("Image clicked:", image);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error ? (
        <ErrorMessage /> 
      ) : (
        <>
          <ImageGallery items={images} onImageClick={handleImageClick} />
          {isLoading && <Loader />} 
        </>
      )}
    </div>
  );
}
