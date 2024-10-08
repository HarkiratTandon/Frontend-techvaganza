import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[url('/common/footer-cover.jpg')] bg-cover bg-top h-96 relative text-white flex flex-col justify-center items-center ">
      <div className="top-0 relative h-auto overflow-hidden w-100%">
        <h2 className="text-[8rem] font-bold tracking-[0.5em] opacity-90 z-0 my-20 mix-blend-overlay text-yellow-100">
          Techvaganza
        </h2>
      </div>

      <div className="absolute h-auto left-0 right-0 z-10 flex flex-col justify-around items-center mt-28">
        <div className="container mx-auto text-center">
          <div className="relative z-10 mb-4 overflow-visible">
            <a href="#" className="text-5xl font-bold">
              Techvaganza
            </a>
          </div>

          <div className="mb-4">
            <a
              href="mailto:techvaganza@nitsri.ac.in"
              className="text-lg hover:underline hover:text-primary"
            >
              techvaganza@nitsri.ac.in
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/techvaganza.nitsri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={32}
                className="text-primary hover:text-white"
              />
            </a>
            <a
              href="https://www.youtube.com/@NITSrinagarofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={32} className="text-primary  hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/techvaganza-nit-srinagar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={32}
                className="text-primary  hover:text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
