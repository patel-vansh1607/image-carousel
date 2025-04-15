const images = [
    '/src/images/bird.jpg',
    '/src/images/cat.jpg',
    '/src/images/lion.jpg',
    '/src/images/panda.jpg',
    '/src/images/squirel.jpg',
    '/src/images/turtle.jpg',
  ];



const ImageCarousel = () =>{

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
      setIndex((index - 1 + images.length) % images.length);
    };
  
    const nextSlide = () => {
      setIndex((index + 1) % images.length);
    };
    return(
        <div className="main-div">

        </div>
    )
}

export default ImageCarousel