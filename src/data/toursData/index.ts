import type { TourItem } from "../../types/types";

import tourImg1 from "../../assets/images/tour-1.jpeg";
import tourImg2 from "../../assets/images/tour-2.jpeg";
import tourImg3 from "../../assets/images/tour-3.jpeg";
import tourImg4 from "../../assets/images/tour-4.jpeg";

export const TourItemData: TourItem[] = [
  {
    id: 1,
    date: "august 26th, 2020",
    info: "Tibet Adventure",
    map: "china",
    days: "6 days",
    price: "from $2100",
    img: tourImg1,
  },
  {
    id: 2,
    date: "october 1th, 2020",
    info: "best of java",
    map: "indonesia",
    days: "11 days",
    price: "from $1400",
    img: tourImg2,
  },
  {
    id: 3,
    date: "september 15th, 2020",
    info: "explore hong kong",
    map: "hong kong",
    days: "8 days",
    price: "from $5000",
    img: tourImg3,
  },
  {
    id: 4,
    date: "december 5th, 2019",
    info: "kenya highlights",
    map: "kenya",
    days: "20 days",
    price: "from $3300",
    img: tourImg4,
  },
];
