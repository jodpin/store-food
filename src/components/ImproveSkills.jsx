const ImproveSkills = () => {
  const list = [
    "learn new recipies",
    "experiment with foods",
    "write your own recipies",
    "know nutritions facts",
    "get cookies tips",
    "get ranked",
  ];
  return (
    <div className="section improve-skills">
      <div className="col img-skills">
        <img src="img/gallery/img_10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h2 className="title">improve your culinary skills</h2>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>{item}</p>
        ))}
        <button className="btn">SIGNUP NOW</button>
      </div>
    </div>
  );
};

export default ImproveSkills;
