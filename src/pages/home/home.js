import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Carousel from "../../components/coursel/coursel";
import Card from "../../components/card/card";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";
import C1 from "../../assets/c1.png";
import C2 from "../../assets/c2.png";
import C3 from "../../assets/c3.png";
import "./home.css";
import About1 from "../../assets/about1.png";
import { FaCheckCircle } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { IoCloudDone } from "react-icons/io5";
import Servicecard from "../../components/card/service";
import S1 from "../../assets/service/s1.png";
import S2 from "../../assets/service/s2.png";
import S3 from "../../assets/service/s3.png";
import S4 from "../../assets/service/s4.png";
import S5 from "../../assets/service/s5.png";
import S6 from "../../assets/service/s6.png";
import Pricing from "../../components/card/pricing";
import Work from "../../components/card/work";
import W1 from "../../assets/work/w1.png";
import w2 from "../../assets/work/w2.png";
import W3 from "../../assets/work/w3.png";
import W4 from "../../assets/work/w4.png";
import W5 from "../../assets/work/w5.png";
import W6 from "../../assets/work/w6.png";
import ClientReviews from "../../components/card/review";
import { GrAchievement } from "react-icons/gr";
import CountUp from "react-countup";
import { FaUsers } from "react-icons/fa";
import { MdWorkOff } from "react-icons/md";
import Feedback from "../../components/feedback/feed";
import FQA from "../faq/faq";
import Garland from "../../assets/service/garland.png";
import Makeup from "../../assets/service/makeup.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const slides = [
  {
    image: slide1,
    title: "Transforming Dreams into Elegant Realities",
  },
  {
    image: slide2,
    title: "Creating Magic, One Flower at a Time",
  },
  {
    image: slide3,
    title: "Where Love Blooms in Every Detail",
  },
  {
    image: slide4,
    title: "Designing Your Happily Ever After",
  },
];

const cardData = [
  {
    image: C1,
    title: "Wedding Decoration",
    content:
      "Transform your special day with our elegant and creative wedding decorations for unforgettable moments",
    s: 0,
  },
  {
    image: C2,
    title: "Photography",
    content:
      "Capture the magic of your special day with timeless, breathtaking wedding photography.",
    s: 1,
  },
  {
    image: C3,
    title: "Other Events",
    content:
      "Transform your dream wedding into reality with our exquisite, personalized services.",
    s: 2,
  },
];

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a variety of wedding planning services including full planning, Decorations, and Photography.",
  },
  {
    question: "How do I book your services?",
    answer:
      "You can book our services by filling out our contact form or using our contact details on the 'Contact Us' page.",
  },
  {
    question: "How long will it take to get a response from your side?",
    answer:
      "Within 24 hours, based on the contact details you provided, our team will reach out to you.",
  },
  {
    question: "Do you work with a specific set of vendors?",
    answer:
      "We have a curated list of trusted vendors, but we are open to working with any vendors you prefer.",
  },
  {
    question: "What is your pricing?",
    answer:
      "Our pricing varies based on the package and services you choose. Please contact us for a detailed quote.",
  },
  {
    question: "Can you help with destination weddings?",
    answer:
      "Yes, we have experience planning destination weddings and can help make your dream wedding a reality.",
  },
];

const Home = () => {
  const aboutSectionRef = useRef(null);
  const imagesRef = useRef([]);
  const aboutTextRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1, 0.25, 0.5],
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutSectionRef.current) {
            imagesRef.current.forEach((img, index) => {
              img.style.animation = `slide-in 2s forwards ${index * 0.5}s`;
            });
            aboutTextRef.current.style.animation = `fade-in-up 1s forwards 1.5s`;
            observer.disconnect();
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    // Trigger animation if already in view on load
    if (
      aboutSectionRef.current &&
      aboutSectionRef.current.getBoundingClientRect().top < window.innerHeight
    ) {
      imagesRef.current.forEach((img, index) => {
        img.style.animation = `slide-in 2s forwards ${index * 0.5}s`;
      });
      aboutTextRef.current.style.animation = `fade-in-up 1s forwards 1.5s`;
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/+918807785667", "_blank");
  };
  const handleNavigation = () => {
    navigate("/aboutus");
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Modern Arts - Home Page</title>
          <meta name="description" content="Your page description." />
          <link rel="canonical" href="https://www.yourwebsite.com/" />
        </Helmet>
      </div>
      <div className="home">
        <Carousel slides={slides} />
        <div className="display-card">
          {cardData.map((card, index) => (
            <Card
              key={index} // Ensure each card has a unique key
              imageSrc={card.image}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
      <div className="about-section" ref={aboutSectionRef}>
        <div className="about-left">
          <img
            src={About1}
            alt="about1"
            ref={(el) => (imagesRef.current[0] = el)}
          />
        </div>
        <div className="about-right" ref={aboutTextRef}>
          <p className="aboutpara">About Modern Arts</p>
          <h1 className="about-head-p">
            We Are The Best Event Planner & Organizer In Town
          </h1>
          <p className="about-para">
            We transform your dreams into elegant realities. With a passion for
            perfection, we craft bespoke weddings that reflect your unique love
            story. From intimate gatherings to grand celebrations, we handle
            every detail with care and professionalism. Let us create the
            wedding of your dreams, so you can cherish every moment.
          </p>
          <div className="about-details">
            <div className="about-experience-card">
              <GiAchievement color="#ff477e" size={80} />
              <h2>5+ </h2>
              <p>Years of Experiences</p>
            </div>
            <div className="about-detail-points">
              <div className="about-detail">
                <FaCheckCircle color="#ff477e" />
                <p>Best Quality Services</p>
              </div>
              <div className="about-detail">
                <FaCheckCircle color="#ff477e" />
                <p>100% Satisfaction Guarantee</p>
              </div>
              <div className="about-detail">
                <FaCheckCircle color="#ff477e" />
                <p>Quality Control System</p>
              </div>
              <div className="about-detail">
                <FaCheckCircle color="#ff477e" />
                <p>Commitment to Customers</p>
              </div>
              <div className="about-detail">
                <FaCheckCircle color="#ff477e" />
                <p>Highly Professional Team</p>
              </div>
            </div>
          </div>
          <button className="about-button" onClick={handleNavigation}>
            ABOUT US
          </button>
        </div>
      </div>
      <div className="our-services">
        <div>
          <p className="services-head">Our Services</p>
          <p className="service-head-p">
            We Provide The Best Service For Your Wedding
          </p>
        </div>
        <div className="services">
          <div className="column1">
            <Servicecard
              imageSrc={S1}
              title="Wedding & Reception Stage Decoration"
              description="Transform your wedding and reception with stunning stage decorations that create unforgettable moments."
            />
          </div>
          <div className="column2">
            <Servicecard
              imageSrc={S4}
              title="Wedding Photo & Video"
              description="Experience high-quality wedding photography that beautifully captures every heartfelt moment and cherished detail of your special day, creating memories to last a lifetime."
            />
          </div>
          <div className="column3">
            <Servicecard
              imageSrc={S3}
              title="Dj & Dance"
              description="Kick off your celebration with vibrant welcome dances and unforgettable entertainment that set the perfect tone for your magical day!"
            />
          </div>
          <div className="column1">
            <Servicecard
              imageSrc={Makeup}
              title="Groom & Braidal Make up"
              description="Transform into your most radiant self on your big day with expert bridal and groom makeup that enhances your natural beauty and ensures lasting perfection."
            />
          </div>
          <div className="column2">
            <Servicecard
              imageSrc={Garland}
              title="Garland"
              description="Adorn your wedding with exquisite garlands that blend tradition and elegance, creating a stunning backdrop for your special day"
            />
          </div>
          <div className="column3">
            <Servicecard
              imageSrc={S2}
              title="Return Gifts & Seer Plate Decoration"
              description="Delight your guests with our exquisite catering services, offering a delectable menu tailored to your wedding's unique style and taste."
            />
          </div>
        </div>
      </div>

      {/* <div className="our-packages">
        <div className="our-packages-head">
          <p className="packages-head">Pricing & Features</p>
          <p className="packages-subhead">Package Price</p>
          <p className="packages-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>{" "}
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>
        </div>
        <div className="packages-card">
          {weddingPackages.map((packageData, index) => (
            <Pricing
              key={index}
              price={packageData.price}
              title={packageData.title}
              description={packageData.description}
              features={packageData.features}
            />
          ))}
        </div>
      </div> */}

      <div className="recent-works">
        <p className="recent-work-head">Our Projects</p>
        <p className="recent-work-subhead">Recent Works</p>
        <div className="projects">
          <div className="column1-project">
            <Work imageSrc={W1} title={"work 1"} />
          </div>
          <div className="column2-project">
            <Work imageSrc={w2} title={"work 2"} />
          </div>
          <div className="column3-project">
            <Work imageSrc={W3} title={"work 3"} />
          </div>
          <div className="column1-project">
            <Work imageSrc={W4} title={"work 4"} />
          </div>
          <div className="column2-project">
            <Work imageSrc={W5} title={"work 5"} />
          </div>
          <div className="column3-project">
            <Work imageSrc={W6} title={"work 6"} />
          </div>
        </div>
      </div>
      <div className="previous-section">
        <div className="previous-section-text">
          <div className="previous-sec">
            <div className="previous-content1">
              <GrAchievement fontSize={40} />
              <CountUp
                className="count-number1"
                start={0}
                end={6}
                duration={5}
              />{" "}
              <p className="text-prev-cont">Years of Experiences</p>
            </div>
            <div className="previous-content1">
              <FaUsers fontSize={40} />
              <CountUp
                className="count-number1"
                start={0}
                end={50}
                duration={5}
              />{" "}
              <p className="text-prev-cont">Happy Customers</p>
            </div>
            <div className="previous-content1">
              <MdWorkOff fontSize={40} />
              <CountUp
                className="count-number1"
                start={0}
                end={12}
                duration={5}
              />{" "}
              <p className="text-prev-cont">Services</p>
            </div>
            <div className="previous-content2">
              <IoCloudDone fontSize={40} />
              <CountUp
                className="count-number1"
                start={0}
                end={15}
                duration={5}
              />{" "}
              <p className="text-prev-cont">Projects Done </p>
            </div>
          </div>
        </div>
      </div>
      <div className="client-reviews">
        <p className="client-review-head">Our Client Reviews</p>
        {/* <p className="client-review-subhead">What Client Says</p> */}
      </div>
      <div>
        <ClientReviews />
      </div>
      <div className="faq">
        <p className="faq-head">Frequently Asked Question(FQA)</p>
        <p className="faq-para">Some FQA Question with answers</p>
        {faqData.map((item, index) => (
          <FQA key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        <FaWhatsapp color="white" size={30} />
      </div>
      <div>
        <Feedback />
      </div>
    </>
  );
};

export default Home;
