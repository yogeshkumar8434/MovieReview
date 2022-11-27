import { useContext, useEffect } from "react";
import styled from "styled-components";
import LoadingContext from "../../context/loading/loadingContext";
import github from "../../assets/github.svg";
import heart from "../../assets/heart.svg";
import checkmark from "../../assets/checkmark.svg";

const AboutDiv = styled.div`
  &.about h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgb(var(--primary-color));
  }
  &.about p {
    font-size: 1.15em;
    padding-block: 1rem;
    font-weight: 300;
  }
  .open-source {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-block: 2rem;
  }
  .open-source h3 {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  .open-source h3 .svg {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    background-color: rgb(var(--primary-color));
    -webkit-mask: url(${github}) no-repeat center;
    mask: url(${github}) no-repeat center;
  }
  .features {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    padding-block: 2rem;
  }
  .features h3 {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  .features h3 .svg {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    background-color: rgb(var(--primary-color));
    -webkit-mask: url(${checkmark}) no-repeat center;
    mask: url(${checkmark}) no-repeat center;
  }
  .features li {
    list-style-type: decimal-leading-zero;
    font-size: 1.15em;
  }
  .open-source a {
    color: rgb(var(--primary-color));
    text-decoration: none;
  }

  .open-source a:hover {
    text-decoration: underline;
  }
  &.about .credits {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-block: 2rem;
  }
  &.about .credits h3 {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  &.about .credits h3 .svg {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    background-color: rgb(var(--primary-color));
    -webkit-mask: url(${heart}) no-repeat center;
    mask: url(${heart}) no-repeat center;
  }
  &.about .credits p {
    font-size: 1.15em;
    padding-block: 1rem;
    font-weight: 300;
  }
  &.about .credits a {
    color: rgb(var(--primary-color));
    text-decoration: none;
  }
  &.about .credits a:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  const loading = useContext(LoadingContext);
  useEffect(() => {
    document.title = "About | MovieApp";
    return () => {
      loading.setLoading(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AboutDiv className="about container">
      <h2>About</h2>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..
      </p>
    </AboutDiv>
  );
};

export default About;
