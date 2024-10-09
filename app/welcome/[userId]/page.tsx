"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  FreeGiftLabel,
  CardImage,
  CardBody,
  CardText,
  Title,
  CardButtons,
  CardButtonPrimary,
  CardButtonSecondary,
  Price,
} from "./WelcomePageStyles";

interface DeliveryData {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
}

export default function WelcomePage() {
  const { userId } = useParams<{ userId: string }>();
  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3001/comms/your-next-delivery/${userId}`)
        .then((res) => res.json())
        .then((data: DeliveryData) => {
          setDeliveryData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!deliveryData) {
    return <p>No delivery data found for user {userId}.</p>;
  }

  return (
    <Card>
      {deliveryData.freeGift && <FreeGiftLabel>FREE GIFT</FreeGiftLabel>}
      <CardImage
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
        alt="A grey and white cat with big eyes"
      />
      <CardBody>
        <CardText>
          <Title>{deliveryData.title}</Title>
          <p>{deliveryData.message}</p>
          <Price>Total Price: £{deliveryData.totalPrice.toFixed(2)}</Price>
        </CardText>
        <CardButtons>
          <CardButtonPrimary href="/">SEE DETAILS</CardButtonPrimary>
          <CardButtonSecondary href="/">EDIT DELIVERY</CardButtonSecondary>
        </CardButtons>
      </CardBody>
    </Card>
  );
}
