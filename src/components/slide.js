import Slider from "react-slick";

function Slide ({items}) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      autoplay:true,
      arrows:false,
    };
    const images = [];
    items.forEach(({title,link}, i) => {
        images.push(
            <img src={link} alt={title} key={i}/>
        )
    });
    return <>
        <div className="slider-container">
            <Slider className="slider" {...settings}>
                {images}
            </Slider>
        </div>
    </>
}

export default Slide;