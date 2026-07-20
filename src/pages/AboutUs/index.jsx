import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us__header">
          <h1>About Paradise Nursery</h1>
          <p>
            Bringing nature closer to every home through healthy, beautiful,
            and carefully selected houseplants.
          </p>
        </div>

        <div className="about-us__content">
          <p>
            Paradise Nursery is a plant shop dedicated to helping people create
            greener and healthier living spaces. We believe that every home and
            workplace deserves the beauty and freshness that indoor plants
            provide.
          </p>

          <p>
            Our collection includes a variety of carefully selected houseplants,
            from easy-to-care-for beginner plants to elegant decorative species.
            Each plant is chosen for its quality, health, and ability to thrive
            indoors.
          </p>

          <p>
            At Paradise Nursery, customer satisfaction is our priority. We aim
            to provide affordable prices, healthy plants, and an enjoyable
            shopping experience for every plant lover.
          </p>

          <p>
            Whether you're starting your first indoor garden or expanding an
            existing collection, Paradise Nursery is here to help you find the
            perfect plants for your space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;