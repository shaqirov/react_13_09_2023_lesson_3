function AboutCard({ aboutCard }) {
  return (
    <div className="w3-card w3-margin w3-margin-top">
      <img src={aboutCard.image} alt="" />
      <div className="w3-container w3-white">
        <h4>
          <b>{aboutCard.name}</b>
        </h4>
        <p>{aboutCard.text}</p>
      </div>
    </div>
  );
}

export default AboutCard;
