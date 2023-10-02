import { storiesOf } from "@storybook/react";
import Card from "./Card";

storiesOf("Card", module)
    .add("with title, logo and description", () => (
        <Card
            title="My card title"
            logo="https://images.example.com/logo.png"
            description="This is the description of my card"
        />
    ))
    .add("with title, image, and button", () => (
        <Card
            title="My card title"
            image="https://images.example.com/card-image.jpg"
            onClick={() => alert("Button clicked!")}
        />
    ))
    .add("flipped", () => (
        <Card
            title="My card title"
            description="This is the description of my card"
            flip={true}
        />
    ));
