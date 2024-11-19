import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import HomeIcon from "@mui/icons-material/Home";
import { ProjectType } from "../types/types";

export const MenuItems = [
  { name: "Home", to: "/", icon: HomeIcon },
  { name: "Sport", to: "/sport", icon: SportsGymnasticsIcon },
  { name: "About Me", to: "/about-me", icon: InfoIcon },
  { name: "Contact", to: "/contact", icon: AlternateEmailIcon },
];

export const projects: ProjectType[] = [
  {
    id: "under-water-image-processing",
    title: "Under Water Image Processing",
    images: [
      "under_water_1.png",
      "under_water_2.png",
      "under_water_3.png",
      "under_water_3.png",
    ],
    video: "https://youtu.be/jLNnxGcJnAs?si=eTOQWXXZ8LT-EQ2f",
    description: [
      {
        title: "Description",
        content:
          "In this Project, I made two approaches designed for the enhancement of underwater images. These techniques are tailored to overcome typical underwater imaging challenges such as poor visibility, diminished contrast, and color distortions.",
      },
      {
        subtitle: "Approach 1",
        content:
          "The first approach involves initial enhancements to both contrast and white balance. For contrast, the image is converted to grayscale followed by histogram equalization. For white balance, corrections are made based on the gray world method, which assumes that the average of all colors in a scene naturally tends towards gray over the entire image. This is particularly useful in underwater settings where color casts can be prevalent due to varying depths and water conditions.",
        images: ["/projects/underwater_approach1.png"],
      },
      {
        subtitle: "Approach 2",
        content:
          "The second approach focuses on adaptive contrast enhancement and color normalization. Unlike traditional methods, this technique utilizes Contrast Limited Adaptive Histogram Equalization (CLAHE), which prevents over-amplification of noise by limiting contrast enhancement in homogeneous areas of the image. Additionally, color normalization adjusts each color channel to its 99th percentile, ensuring that the brightest colors are adjusted to pure white. This method effectively reduces the typical bluish or greenish cast seen in underwater images, leading to more natural and accurate color representation.",
        images: ["/projects/underwater_approach2.png"],
      },
    ],
    date: "2024",
  },
  {
    id: "dijkstra-algo",
    title: "Dijkstra's Algorithm",
    images: [
      "dijkstra1.png",
      "dijkstra2.png",
      "dijkstra3.png",
      "dijkstra4.png",
    ],
    video: "https://www.youtube.com/watch?v=mRDQdROjkd0",
    description: [
      {
        title: "Description",
        content:
          "For this project, I developed a full-stack application that finds the shortest path between nodes using <b>Dijkstra's Algorithm</b>. The frontend is built with <b>Next.js</b>, providing an interactive interface where users can input the graph structure, select the source and destination nodes, and visualize the shortest path.",
      },
      {
        content:
          "The backend API, created using <b>Flask</b>, handles the computational logic of Dijkstra's Algorithm. It takes the graph data and user input from the frontend, processes it to calculate the shortest path, and returns the result to the frontend for display.",
      },
      {
        content:
          "This project combines algorithmic problem-solving with modern web development, allowing me to integrate a classic graph algorithm into a responsive and user-friendly application. The goal is to provide a practical demonstration of Dijkstra’s Algorithm while enhancing my skills in building full-stack applications.",
      },
    ],
    date: "2023",
  },
  {
    id: "iris-classification",
    title: "IRIS Classification",
    images: [
      "irsi_1.png",
      "irsi_2.png",
      "irsi_3.png",
      "irsi_4.png",
      "irsi_5.png",
    ],
    video: "https://youtu.be/fEiU9FSW5RI",
    description: [
      {
        title: "Description",
        content:
          "Iris classification is a project where I aim to classify iris flowers into one of three species: Iris-setosa, Iris-versicolor, or Iris-virginica. The classification is based on four key features of the flowers:",
      },
      { subtitle: "", content: " - Sepal length (in cm)" },
      { subtitle: "", content: " - Sepal width (in cm)" },
      { subtitle: "", content: " - Petal length (in cm), Petal width (in cm)" },
      { subtitle: "", content: " - Petal width (in cm)" },
      {
        content:
          "Using these features, I train machine learning models to predict the species of an iris flower. This dataset, known as the Iris dataset, is a classic example in machine learning, introduced by Ronald A. Fisher in 1936. It’s small, simple, and perfect for learning and experimenting with various classification algorithms like Logistic Regression, Decision Trees, KNN, SVM, and Neural Networks.",
      },
      {
        content:
          "The main goal of my project is to analyze the data, build an effective model, and make accurate predictions about the flower species. This project helps me deepen my understanding of classification techniques while working with a well-known dataset.",
      },
    ],
    date: "2023",
  },
  {
    id: "dijkstra-algo",
    title: "Dijkstra's Algorithm",
    images: [
      "irsi_1.png",
      "irsi_2.png",
      "irsi_3.png",
      "irsi_4.png",
      "irsi_5.png",
    ],
    video: "https://youtu.be/jLNnxGcJnAs?si=KnToYT9K0unLQCIF",
    description: [],
    date: "2022",
  },
];

export const images = [
  {
    img: "hist1.jpg",
    location: "Agadir Morocco",
    rows: 4,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist3.jpg",
    location: "Marrakesh Morocco",
    rows: 3,
    cols: 2,
    date: "Aug 2, 2018",
  },
  {
    img: "hist4.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist2.jpg",
    title: "Burger",
    location: "Marrakesh Morocco",
    rows: 3,
    cols: 2,
    date: "May 2, 2021",
  },
  {
    img: "hist5.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist6.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist7.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist8.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist10.jpg",
    location: "Rabat Morocco",
    rows: 3,
    cols: 2,
    date: "Jul 24, 2017",
  },
  {
    img: "hist11.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 12, 2017",
  },
  {
    img: "img1.jpg",
    location: "Abu Dhabi United Arab Emirates",
    rows: 3,
    cols: 1,
    date: "Nov 08, 2021",
  },
  {
    img: "hist12.jpg",
    location: "Casa Blanca Morocco",
    rows: 3,
    cols: 1,
    date: "April 30, 2023",
  },
  {
    img: "hist9.jpg",
    location: "Casa Blanca Morocco",
    rows: 3,
    cols: 2,
    date: "April 30, 2023",
  },
];
