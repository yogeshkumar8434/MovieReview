import React from "react";
import styled from "styled-components";

const FooterElement = styled.footer`
  color: currentColor;
  padding: 1rem;
  text-align: center;
  margin-top: 0;
  transition: all 0.15s ease;
  & .container {
    & .credits {
      margin-top: 1rem;
      color: rgb(var(--light-color), 0.5);
      .light & {
        color: rgb(var(--dark-color), 0.5);
      }
    }
  }
  & .row {
    display: flex;
    width: 100%;
    gap: 5rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
      gap: 2rem;
    }
    & .col {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      text-align: left;
      @media screen and (max-width: 50rem) {
        text-align: center;
      }
      & .col-header {
        & h2 {
          font-size: 1.5rem;
          color: rgb(var(--primary-color));
          text-transform: uppercase;
        }
        & span {
          font-size: 1rem;
          color: rgb(var(--light-color), 0.5);
          .light & {
            color: rgb(var(--dark-color), 0.5);
          }
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      & .col-body {
        & ul {
          list-style: none;
          & li {
            font-size: 0.9rem;
            color: rgb(var(--light-color), 0.5);
            font-weight: 300;
            .light & {
              color: rgb(var(--dark-color), 0.5);
            }
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterElement>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-header">
              <h2>yogesh</h2>
              <span>Full-Stack Web Developer</span>
            </div>
            <div className="col-body">
              <ul>
                <li>
                  
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="credits">© 2022 yogesh, Inc.</div>
      </div>
    </FooterElement>
  );
};

export default Footer;
