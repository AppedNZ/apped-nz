import Brief from "./Brief";
import Button from "./Button";
import Heading from "./Heading";
import SliderGrid from "./SliderGrid";
const ES = "ExampleSection";
export default function ExamplesSection({ setShowForm }) {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -200,
    duration: 600,
    delay: 100,
    activeClass: "active",
  };
  return (
    <div id="examples" className="my-container relative">
      {/* <img
        style={{ animationDelay: " 2.6s" }}
        className="bubble w-1/12 h-auto absolute top-0 right-4"
        src="/assets/bubble.svg"
        alt="bubble"
      />{" "}
      <img
        style={{ animationDelay: "1.3s" }}
        className="bubble w-1/12 h-auto absolute top-10 left-0"
        src="/assets/bubble.svg"
        alt="bubble"
      />{" "}
      <img
        style={{ animationDelay: "2.3s" }}
        className="bubble w-1/6 h-auto absolute top-[45%] left-0"
        src="/assets/bubble.svg"
        alt="bubble"
      />{" "}
      <img
        style={{ animationDelay: "1.4s" }}
        className="bubble w-1/8 h-auto absolute top-[55%] right-0"
        src="/assets/bubble.svg"
        alt="bubble"
      /> */}
      <div className={ES}>
        <Heading>
          Portfolio of <br className="lg:hidden" />{" "}
          <span className="text-blue"> App Development</span>
        </Heading>
        <Brief text={`We have designed and developed over 150+ mobile apps for NZ businesses.`} />
        <SliderGrid />
        {/* <Tiles /> */}
        {/* <div id="portfolio" className={`${ES}__slider relative`}>
          <Slider />
        </div> */}
        <div className="grid md:grid-cols-[3fr,2fr]  md:gap-10">
          {" "}
          <p className="text-white text-2xl font-bold self-center">
            Our app developers have contributed to over 150+ mobile applications for New Zealand
            businesses, showcasing our versatility and dedication to quality.
          </p>
          <div className="h-[max-content] w-full self-center">
            <Button
              addClass=""
              onClick={() => {
                setShowForm(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
