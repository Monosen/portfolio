import { BsGithub, BsLinkedin } from "react-icons/bs";

export const StackIcons = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/edinson-david-bola%C3%B1os-perdomo-293624212/"
        target="_blank"
      >
        <BsLinkedin style={{ color: "white", fontSize: "2.5rem" }} />
      </a>
      <a
        href="https://github.com/Monosen"
        style={{ marginLeft: "1.5rem" }}
        target="_blank"
      >
        <BsGithub style={{ color: "white", fontSize: "2.5rem" }} />
      </a>
    </>
  );
};
