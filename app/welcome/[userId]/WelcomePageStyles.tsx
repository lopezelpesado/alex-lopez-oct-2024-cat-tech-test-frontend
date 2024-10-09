import Link from "next/link";
import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  border-radius: 8px;
  border: 1px solid lightgrey;
  margin-top: 5rem;
  margin-inline: auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    align-items: unset;
  }
`;

export const CardImage = styled.img`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  margin: auto;
  margin-top: -2rem;

  @media screen and (min-width: 767px) {
    border-radius: 8px;
    border: 1px solid lightgrey;
    margin: -1px;
    width: 40%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 95%;
  margin-bottom: 2rem;

  @media screen and (min-width: 767px) {
    width: 60%;
    margin: 2rem;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;

  @media screen and (min-width: 767px) {
    display: block;
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  color: green;
  font-size: 1rem;

  @media screen and (min-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const Price = styled.p`
  font-weight: bold;
`;

export const FreeGiftLabel = styled.div`
  position: absolute;
  background: #ffb8ef;
  color: #773e75;
  border: 1px solid #e7aada;
  transform: rotate(-8.61deg);
  padding: 5px 10px;
  font-weight: bold;
  top: calc(100% - 1rem);

  @media screen and (min-width: 767px) {
    top: -1rem;
    right: -1rem;
    transform: rotate(8.61deg);
  }
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardButtonPrimary = styled(Link)`
  background: #0d8112;
  border-radius: 4px;
  color: white;
  width: 45%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
`;

export const CardButtonSecondary = styled(Link)`
  color: #0d8112;

  border: 1px solid #0d8112;
  border-radius: 4px;
  width: 45%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 0.5rem;
`;
