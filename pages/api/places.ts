import { IPlace } from "../../types/place";
import japanImg from "../../assets/images/japan.jpeg";
import { NextApiRequest, NextApiResponse } from "next";

const places: IPlace[] = [
  {
    slug: "tokyo",
    description: "ewq",
    imagePath: japanImg.src,
    location: "Japan",
    rating: 5,
    duration: "10 days",
    distance: 10,
    googleMapLink: "dfsd",
    mapImage: "eggeD",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places);
}
