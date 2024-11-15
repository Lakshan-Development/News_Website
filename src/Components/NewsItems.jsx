import image from "../assets/News_Image.jpeg";

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
  className="card bg-light text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2 rounded"
  style={{
    maxWidth: "343px",
    transition: "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
    e.currentTarget.style.backgroundColor = "#f8f9fa"; // Slightly lighter shade
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    e.currentTarget.style.backgroundColor = "#ffffff"; // Default background color
  }}
>
  <img
    src={src ? src : image}
    style={{
      height: "200px",
      width: "100%",
      objectFit: "cover",
      borderRadius: "5px 5px 0 0",
    }}
    className="card-img-top"
    alt="..."
  />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0, 50)}</h5>
    <p className="card-text">
      {description ? description.slice(0, 90) : ""}
    </p>
    <a href={url} className="btn btn-primary">
      Read More....
    </a>
  </div>
</div>

  );
};

export default NewsItems;
