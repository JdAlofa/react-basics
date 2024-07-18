import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <BeatLoader
      color="#4f46e5"
      cssOverride={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px auto",

      }}
      size={30}
      speedMultiplier={0.7}
    />
  );
};

export default Spinner;
