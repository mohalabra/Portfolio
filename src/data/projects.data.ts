import { ProjectType } from "../types/types";

export const projects: ProjectType[] = [
  {
    id: 'under-water-enhancement-image-processing',
    title: 'Underwater Image Enhancement Processing',
    projectType: 'Image Enhancing',
    images: [
      'underwater/under_water_1.png',
      'underwater/under_water_2.png',
      'underwater/under_water_3.png',
      'underwater/under_water_3.png',
    ],
    video: 'https://youtu.be/jLNnxGcJnAs?si=eTOQWXXZ8LT-EQ2f',
    description: [
      {
        title: 'Description',
        content:
          'In this Project, I made two approaches designed for the enhancement of underwater images. These techniques are tailored to overcome typical underwater imaging challenges such as poor visibility, diminished contrast, and color distortions.',
      },
      {
        subtitle: 'Approach 1',
        content:
          'The first approach involves initial enhancements to both contrast and white balance. For contrast, the image is converted to grayscale followed by histogram equalization. For white balance, corrections are made based on the gray world method, which assumes that the average of all colors in a scene naturally tends towards gray over the entire image. This is particularly useful in underwater settings where color casts can be prevalent due to varying depths and water conditions.',
        images: ['/projects/underwater/underwater_approach1.png'],
      },
      {
        subtitle: 'Approach 2',
        content:
          'The second approach focuses on adaptive contrast enhancement and color normalization. Unlike traditional methods, this technique utilizes Contrast Limited Adaptive Histogram Equalization (CLAHE), which prevents over-amplification of noise by limiting contrast enhancement in homogeneous areas of the image. Additionally, color normalization adjusts each color channel to its 99th percentile, ensuring that the brightest colors are adjusted to pure white. This method effectively reduces the typical bluish or greenish cast seen in underwater images, leading to more natural and accurate color representation.',
        images: ['/projects/underwater/underwater_approach2.png'],
      },
    ],
    date: '2023',
    tools: ['Python', 'OpenCv', 'Numpy', 'TypeScript', 'Nextjs', 'Material UI'],
  },
  {
    id: 'iot-smart-home',
    title: 'IOT Smart Home Project',
    projectType: 'Internet of Things',
    images: [
      'iot/iot_1.jpg',
      'iot/iot_2.jpg',
      'iot/iot_3.jpg',
      'iot/iot_4.jpg',
      'iot/iot_5.jpg',
      'iot/iot_6.jpg',
      'iot/iot_7.jpg',
      'iot/iot_8.jpg',
      'iot/iot_9.jpg',
      'iot/iot_10.jpg',
      'iot/iot_11.jpg',
    ],
    video: 'https://www.youtube.com/watch?v=c-O99odUCnw',
    description: [
      {
        title: 'Description',
        content:
          "I developed a smart home system using various <b>sensors</b> and the <b>DOIT ESP32 Dev Kit V1</b>. This project aims to enhance home <b>automation</b> and <b>safety</b> through real-time monitoring and <b>control</b>. Here's an overview:",
      },
      {
        subtitle: '🔧 Components & Features :',
        content:
          '- <b>Kitchen:</b> Equipped with a gas sensor and an IR sensor to monitor and detect any hazardous conditions.',
      },
      {
        content:
          ' - <b>Bedroom:</b> Integrated with a DHT11 sensor for temperature and humidity monitoring.',
      },
      {
        content:
          '- <b>Outdoor Lighting:</b> Controlled using a PIR sensor to ensure energy efficiency and security.',
      },
      {
        content:
          '- <b>Water Level Monitoring:</b> An ultrasonic sensor is used to monitor water levels in tanks or reservoirs to prevent overflow or ensure adequate water supply.',
      },
      {
        subtitle: '🖥️ Microcontroller :',
        content:
          '- Utilized the <b>ESP32 Dev Kit V1</b> to interface with all sensors and manage data transmission.',
        images: ['/projects/iot/esp32.png'],
      },
      {
        subtitle: '📱 Mobile Application Development :',
        content:
          '- Developed a mobile app connected to a <b>Node.js API</b>, allowing seamless interaction with the smart home system.',
      },
      {
        subtitle: '📊 Data Flow :',
        content:
          '- <b>From Sensors to Microcontroller:</b> Data is collected by the sensors and sent to the ESP32 microcontroller.',
      },
      {
        content:
          '- <b>From Microcontroller to Node.js Server:</b> The ESP32 processes the sensor data and sends it to the Node.js server via APIs.',
      },
      {
        content:
          '- <b>From Node.js Server to Mobile Application:</b> The server processes and stores the data, which the mobile application can then access to provide real-time monitoring and control to the users.',
        images: ['/projects/iot/iot_architecture.png'],
      },
      {
        content:
          "This project demonstrates the potential of IoT in creating smarter and safer living environments. I'm thrilled to see how this technology can be further developed and applied in real-world scenarios.",
      },
    ],
    date: '2023',
    tools: ['ESP32', 'Sensors', 'Arduino', 'Nodejs', 'React Native'],
  },
  {
    id: 'dijkstra-algo',
    title: "Dijkstra's Algorithm",
    projectType: 'Algorithm',
    images: [
      'dijkstra/dijkstra1.png',
      'dijkstra/dijkstra2.png',
      'dijkstra/dijkstra3.png',
      'dijkstra/dijkstra4.png',
    ],
    video: 'https://www.youtube.com/watch?v=mRDQdROjkd0',
    description: [
      {
        title: 'Description',
        content:
          "For this project, I developed a full-stack application that finds the shortest path between nodes using <b>Dijkstra's Algorithm</b>. The frontend is built with <b>Next.js</b>, providing an interactive interface where users can input the graph structure, select the source and destination nodes, and visualize the shortest path.",
      },
      {
        content:
          "The backend API, created using <b>Flask</b>, handles the computational logic of Dijkstra's Algorithm. It takes the graph data and user input from the frontend, processes it to calculate the shortest path, and returns the result to the frontend for display.",
      },
      {
        content:
          'This project combines algorithmic problem-solving with modern web development, allowing me to integrate a classic graph algorithm into a responsive and user-friendly application. The goal is to provide a practical demonstration of Dijkstra’s Algorithm while enhancing my skills in building full-stack applications.',
      },
    ],
    date: '2022',
    tools: ['Python', 'Flask', 'Nextjs', 'React Xarrows'],
  },
  {
    id: 'iris-classification',
    title: 'IRIS Classification',
    projectType: 'Machine Learning',
    images: [
      'irsi/irsi_1.png',
      'irsi/irsi_2.png',
      'irsi/irsi_3.png',
      'irsi/irsi_4.png',
      'irsi/irsi_5.png',
    ],
    video: 'https://youtu.be/fEiU9FSW5RI',
    description: [
      {
        title: 'Description',
        content:
          'Iris classification is a project where I aim to classify iris flowers into one of three species: Iris-setosa, Iris-versicolor, or Iris-virginica. The classification is based on four key features of the flowers:',
      },
      { subtitle: '', content: ' - Sepal length (in cm)' },
      { subtitle: '', content: ' - Sepal width (in cm)' },
      { subtitle: '', content: ' - Petal length (in cm), Petal width (in cm)' },
      { subtitle: '', content: ' - Petal width (in cm)' },
      {
        content:
          'Using these features, I train machine learning models to predict the species of an iris flower. This dataset, known as the Iris dataset, is a classic example in machine learning, introduced by Ronald A. Fisher in 1936. It’s small, simple, and perfect for learning and experimenting with various classification algorithms like Logistic Regression, Decision Trees, KNN, SVM, and Neural Networks.',
      },
      {
        content:
          'The main goal of my project is to analyze the data, build an effective model, and make accurate predictions about the flower species. This project helps me deepen my understanding of classification techniques while working with a well-known dataset.',
      },
    ],
    date: '2023',
    tools: [
      'Python',
      'Flask',
      'Joblib',
      'Scikit Learn',
      'Docker Composer',
      'Html',
      'Css',
    ],
    dataset: {
      name: 'Iris Species',
      link: 'https://www.kaggle.com/datasets/uciml/iris?select=Iris.csv',
    },
  },
  {
    id: 'riad-reservation',
    title: 'Riad Reservation',
    projectType: 'Full Stack',
    images: [
      'saida/home1.png',
      'saida/home2.png',
      'saida/home3.png',
      'saida/home4.png',
      'saida/home5.png',
      'saida/home6.png',
      'saida/home7.png',
    ],
    description: [
      {
        title: 'Description',
        content:
          'I developed this project for managing Riad reservations, offering an all-in-one platform to showcase rooms, menus, activities, and presentation spaces. The system allows users to browse and book rooms with real-time availability, explore traditional and modern dishes through a detailed menu, and discover unique activities like cooking classes or guided tours. It also includes a section for reserving presentation or meeting rooms, complete with all necessary amenities. For the admin side, there’s a dashboard to manage reservations, track activities, and analyze performance. The platform combines modern technology with the charm of traditional Riads, creating a seamless and engaging experience for both users and managers.',
      },
    ],
    date: '2022',
    tools: ['Nodejs', 'Express', 'Nextjs', 'MongoDb'],
  },
  {
    id: 'agafay-desert',
    title: 'Agafay Desert',
    projectType: 'Full Stack',
    images: [
      'agafay/agafay1.png',
      'agafay/agafay2.png',
      'agafay/agafay3.png',
      'agafay/agafay4.png',
      'agafay/agafay5.png',
      'agafay/agafay6.png',
      'agafay/agafay7.png',
      'agafay/agafay8.png',
    ],
    description: [
      {
        title: 'Description',
        content:
          'I developed this project which dedicated to managing camel and quad ride experiences in the breathtaking Agafay Desert near Marrakech. The platform provides users with a seamless way to book these adventures, featuring detailed descriptions, stunning visuals of the desert landscape, and customizable tour options. For camel rides, users can enjoy peaceful treks through the dunes, including sunset and sunrise experiences. The quad rides offer thrilling off-road journeys, perfect for adrenaline seekers. The system includes a scheduling calendar, transparent pricing, and secure payment integration. On the admin side, the platform allows for managing bookings, monitoring availability, and receiving customer feedback. This project aims to showcase the beauty of Agafay while offering a modern and hassle-free experience for adventurers.',
      },
    ],
    date: '2023',
    tools: ['Nodejs', 'Express', 'Nextjs', 'MongoDb'],
  },
].sort((a, b) => Number(b.date) - Number(a.date));
