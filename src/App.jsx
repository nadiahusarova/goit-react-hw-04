import React, { useState, useEffect } from "react";  
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import axios from "axios";
import "./App.css";

const ACCESS_KEY = "9vhbMiaLrWG-vmsc6FvETUigSWziqEPsqlj9Ebk_5bk"; 

export default function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) return;

    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images", error);
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
    </div>
  );
}
