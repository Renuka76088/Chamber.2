export default function HeroSlider() {
  // You can use react-slick or Swiper.js for real slider
  // Here just static version with 3 slides

  const slides = [
    {
      bg: "https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?w=800",
      title: "An Inspiring Built Space",
      subtitle: "Professional Chamber & Textile Solutions"
    },
    {
      bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      title: "Modern Chamber Design",
      subtitle: "Creative & Functional Spaces"
    },
    {
      bg: "https://images.unsplash.com/photo-1600563438938-a9a0e3e3d8e6?w=800",
      title: "Textile Industry Hub",
      subtitle: "Connecting Manufacturers & Buyers"
    }
  ];

  return (
    <aside id="colorlib-hero" className="js-fullheight">
      <div className="flexslider js-fullheight">
        {slides.map((slide, i) => (
          <div 
            key={i}
            className="slide"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-push-3 slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>{slide.title}</h1>
                      <h2>{slide.subtitle}</h2>
                      <p>
                        <a className="btn btn-primary btn-learn">
                          Explore Now <i className="icon-arrow-right3"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}