import { IPlace } from "../../types/place";
import { NextApiRequest, NextApiResponse } from "next";
import japanImg from "../../assets/images/japan.jpeg";
import italyImg from "../../assets/images/italy.jpeg";

const places: IPlace[] = [
  {
    slug: "kyoto",
    description: "ewq",
    imagePath: "http://localhost:3000/images/places/japan.jpeg",
    location: { country: "Japan", city: "Kyoto" },
    rating: 5,
    duration: "10 days",
    distance: 10,
    googleMapLink: "dfsd",
    mapImage: "eggeD",
  },
  {
    slug: "venezia",
    description: "venez",
    imagePath: "http://localhost:3000/images/places/italy.jpeg",
    location: { country: "Italy", city: "Venezia" },
    rating: 5,
    duration: "2 days",
    distance: 156,
    googleMapLink: "dfsds",
    mapImage: "eggeD",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places);
}
