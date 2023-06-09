import { useState } from "react";

const photos = [
  {
    id: "p1",
    title: "Photo One",
    url: "/images/product/1.webp",
  },
  {
    id: "p2",
    title: "Photo Two",
    url: "/images/product/2.webp",
  },
  {
    id: "p3",
    title: "Photo Three",
    url: "/images/product/3.webp",
  },
];

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Render the carousel */}
      <div className="slider-container sm:w-[600px] w-full">
        {images.map((photo) => (
          <div
            key={photo.external_id}
            // if the photo is the current photo, show it
            className={
              images[currentIndex].external_id === photo.external_id
                ? "fade"
                : "slide fade"
            }
          >
            <img
              src={photo.product.image}
              alt={photo.title || photo.name}
              className="photo"
            />
            {/* <div className="caption">{photo.title}</div> */}
          </div>
        ))}

        {/* Previous button */}
        <button onClick={prev} className="prev">
          <img src="/images/arrow-left.svg" alt="" />
        </button>

        {/* Next button */}
        <button onClick={next} className="next">
          <img src="/images/arrow-right.svg" alt="" />
        </button>
      </div>

      {/* Render dots indicator */}
      <div className="dots">
        {images.map((photo) => (
          <span
            key={photo.id}
            // highlight the dot that corresponds to the current photo
            className={
              images[currentIndex].id === photo.id ? "dot active" : "dot"
            }
            // when the user clicks on a dot, go to the corresponding photo
            onClick={() => setCurrentIndex(images.indexOf(photo))}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Carousel;
