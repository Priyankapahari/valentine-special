type Iprops = {
  buttons: boolean;
};

const Lubby = ({ buttons }: Iprops) => {
  return (
    <div style={{ display: "flex" }}>
      {[...Array(146)].map((_, index) => (
        <div
          id="heart"
          style={{
            height: "20px",
            width: "20px",
            position: "absolute",
            left: index * Math.floor(Math.random() * (50 - 20 + 1)) + 20,
            top: index * Math.floor(Math.random() * (20 - 0 + 1)) + 0,
            opacity: buttons ? 100 : 0,
            pointerEvents: "none",
          }}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default Lubby;
