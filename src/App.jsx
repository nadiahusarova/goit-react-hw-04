import React, { useState, useEffect } from "react";  
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import axios from "axios";
import "./App.css";

const ACCESS_KEY = "9vhbMiaLrWG-vmsc6FvETUigSWziqEPsqlj9Ebk_5bk"; 

export default function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchImages = async () => {
      setIsLoading(true); // Показати лоадер перед запитом
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images", error);
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
      <ImageGallery items={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />} 
    </div>
  );
}
