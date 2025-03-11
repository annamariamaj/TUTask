import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import imageData from "../../public/model/images.json"
// Define the User type (adjust the fields according to your needs)
export type Image = {
  id: number;
  url: string;
};

// Define the context types
interface ImageContextType {
  images: Image[];
}

// Create an empty context with a default value of undefined (it will be populated later)
const ImageContext = createContext<ImageContextType | undefined>(undefined);

// Create a Provider component
interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [images, setImages] = useState<Image[]>([]);

  /** 
   * Here i would use making call to the url provided in the assignment but because of the lack of time it is not possible for me to do.
   * That would update the filter part of the url, possibly also with select options and top parameter
   */
  useEffect(() => {
    fetch("/model/images.json") // Fetch JSON from the public directory
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error loading images:", error));
  }, []);
  

  return (
    <ImageContext.Provider value={{ images}}>
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to use the ImageContext
export const useImageContext = (): ImageContextType => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within a ImageProvider");
  }
  return context;
};
