import { useState, useEffect } from "react";

const Aboutus = () => {
  const [carousel, setCarousel] = useState(0);
  // const [active, setActive]= useState(false)
  const handlecarou = (id) => {
    setCarousel(id);
  };
  return (
    <div className="aboutcont">
      <div className="aboutcarousel">
        <img src={`/Images/Instagram post - ${carousel}.jpg`} />
        <div className="caroubtns">
          {[1, 2, 3, 4, 5].map((item, id) => {
            return (
              <button
                className={carousel === id ? "glow" : ""}
                onClick={() => handlecarou(id)}
              ></button>
            );
          })}
        </div>
      </div>

      <div className="aboutpara">
        <h3>ABOUT</h3>
        <p>
          Welcome to Light - where Elegant Vision meets Effortless Style. Our
          brand epitomizes the essence of class, elegance, and style in every
          pair of eyewear we create.<br></br>
          <br></br>At Light, we understand that eyewear is more than a
          necessity; it's a statement of refined taste and individuality. Our
          designs seamlessly blend timeless class with contemporary trends,
          embodying a sense of understated elegance that stands the test of
          time.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
