import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import axios from "axios";
import "./App.css";

const ACCESS_KEY = "9vhbMiaLrWG-vmsc6FvETUigSWziqEPsqlj9Ebk_5bk";

export default function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${ACCESS_KEY}&page=${page}`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setError("OOOPS! Something went wrong. Try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const loadMoreImages = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}
