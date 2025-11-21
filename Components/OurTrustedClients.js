import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Brief from "./Brief";
import Heading from "./Heading";
const OTC = "OurTrustedClients";
const clients = [
  { src: "/assets/clients/10.png", alt: "Wilson Contractors" },
  { src: "/assets/clients/6.png", alt: "Clim Systems" },
  { src: "/assets/clients/7.png", alt: "Giltrap Ag" },
  { src: "/assets/clients/8.png", alt: "Huntmate" },
  { src: "/assets/clients/9.png", alt: "Virotech" },
];
export default function OurTrustedClients() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const container = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };
  const item = { show: { x: 0, opacity: 1 }, hidden: { x: -100, opacity: 0 } };
  return (
    <div className="my-container relative">
      <div className={OTC}>
        <Heading>
          <span className="text-blue">Trusted </span> by Clients
        </Heading>
        <div className="w-full lg:w-2/3 mx-auto">
          <Brief
            text={`Numerous clients have placed their trust in our app development expertise, and we're proud to have developed apps for some large New Zealand brands.`}
          />
        </div>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`${OTC}__clients-grid`}>
          {clients.map((client) => (
            <motion.img key={client.alt} variants={item} src={client.src} alt={client.alt} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
