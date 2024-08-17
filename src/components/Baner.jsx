
const Baner = () => {
    
    return (
        <div className="p-4 mt-12">
          
          <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[500px]">
    <img
      src="https://i.ibb.co/YcxzLvF/data-center-isometric-banner-with-laptop-vector-20862354.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full h-[500px]">
    <img
      src="https://i.ibb.co/GPvsN2H/pngtree-blue-3d-headset-background-banner-picture-image-1332167.png"
      className="w-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full h-[500px]">
    <img
      src="https://i.ibb.co/FW8Yq12/laser-cinema.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full h-[500px]">
    <img
      src="https://i.ibb.co/kHJCmzz/pngtree-cool-new-mobile-phone-promotion-purple-banner-image-183067.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Baner;