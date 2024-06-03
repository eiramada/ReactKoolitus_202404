import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselGallery() {
  const [images, setImages] = useState([]);

  const url = process.env.REACT_APP_PICTURES_DB_URL;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setImages(json || []));
  }, [url]);

  return (
    <Carousel data-bs-theme="dark">
      {images.map((img) => (
        <Carousel.Item key={img.url}>
          <img src={img.url} alt={img.alt} />
          <Carousel.Caption>
            <h5>{img.header.substring(0,10)}</h5>
            <p>{img.text.substring(0,20)}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselGallery;
