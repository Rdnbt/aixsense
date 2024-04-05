import feature1 from "../assets/img/features/affordable.svg";
import feature2 from "../assets/img/features/continuous.svg";
import feature3 from "../assets/img/features/prediction.svg";
import feature4 from "../assets/img/features/realtime.svg";
import feature5 from "../assets/img/features/10days.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Features</h2>
                        <p style={{ fontSize: "28px" }}>Our innovative biosensors offers wide range of unique features including:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={feature1} alt="Image" />
                                <h5>Affordable</h5>
                            </div>
                            <div className="item">
                                <img src={feature2} alt="Image" />
                                <h5>Continuous Monitoring</h5>
                            </div>
                            <div className="item">
                                <img src={feature3} alt="Image" />
                                <h5>Early Prediction</h5>
                            </div>
                            <div className="item">
                                <img src={feature4} alt="Image" />
                                <h5>Real-time Sensing</h5>
                            </div>
                            <div className="item">
                                <img src={feature5} alt="Image" />
                                <h5>Can wear up to 10 days</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
