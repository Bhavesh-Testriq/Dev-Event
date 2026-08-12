export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "KubeCon + CloudNativeCon + OpenInfra Summit China 2026",
    image: "/images/event1.png",
    slug: "kubecon-cloudnativecon-china-2026",
    location: "Shanghai, China",
    date: "September 8-9, 2026",
    time: "9:00 AM CST",
  },
  {
    title: "ZurichJS Conf 2026",
    image: "/images/event2.png",
    slug: "zurichjs-conf-2026",
    location: "Zurich, Switzerland",
    date: "September 10-11, 2026",
    time: "9:00 AM CEST",
  },
  {
    title: "OpenSearchCon North America 2026",
    image: "/images/event3.png",
    slug: "opensearchcon-north-america-2026",
    location: "San Jose, California",
    date: "September 22-24, 2026",
    time: "9:00 AM PDT",
  },
  {
    title: "GitHub Universe 2026",
    image: "/images/event4.png",
    slug: "github-universe-2026",
    location: "Fort Mason Center, San Francisco, California",
    date: "October 28-29, 2026",
    time: "7:30 AM PDT",
  },
  {
    title: "KubeCon + CloudNativeCon North America 2026",
    image: "/images/event5.png",
    slug: "kubecon-cloudnativecon-north-america-2026",
    location: "Salt Lake City, Utah",
    date: "November 9-12, 2026",
    time: "8:00 AM MST",
  },
  {
    title: "Cloud Native AI + Inference Day",
    image: "/images/event6.png",
    slug: "cloud-native-ai-inference-day-2026",
    location: "Salt Lake City, Utah",
    date: "November 9, 2026",
    time: "9:00 AM MST",
  },
];
