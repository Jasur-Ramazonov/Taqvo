import "./AutoScrollingGallery.css";
const images = [
  "../photos/circle photo 1.jpg",
  "../photos/circle photo 2.jpg",
  "../photos/circle photo 3.jpg",
  "../photos/circle photo 4.jpg",
  "../photos/circle photo 5.jpg",
  "../photos/circle photo 6.jpg",
  "../photos/circle photo 7.jpg",
  "../photos/circle photo 8.jpg",
  "../photos/circle photo 9.jpg",
];

export default function AutoScrollingGallery() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {images.concat(images).map((src, index) => (
          <div className="marquee-item" key={index}>
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
