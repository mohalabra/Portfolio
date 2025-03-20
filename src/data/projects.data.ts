import { subscribe } from "diagnostics_channel";
import { ProjectType } from "../types/types";
import { ImagesearchRoller, Subtitles } from "@mui/icons-material";

export const projects: ProjectType[] = [
  {
    id: "under-water-enhancement-image-processing",
    title: "Underwater Image Enhancement Processing",
    projectType: "Image Enhancing",
    images: [
      "underwater/under_water_1.png",
      "underwater/under_water_2.png",
      "underwater/under_water_3.png",
      "underwater/under_water_3.png",
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
        images: ["/projects/underwater/underwater_approach1.png"],
      },
      {
        subtitle: "Approach 2",
        content:
          "The second approach focuses on adaptive contrast enhancement and color normalization. Unlike traditional methods, this technique utilizes Contrast Limited Adaptive Histogram Equalization (CLAHE), which prevents over-amplification of noise by limiting contrast enhancement in homogeneous areas of the image. Additionally, color normalization adjusts each color channel to its 99th percentile, ensuring that the brightest colors are adjusted to pure white. This method effectively reduces the typical bluish or greenish cast seen in underwater images, leading to more natural and accurate color representation.",
        images: ["/projects/underwater/underwater_approach2.png"],
      },
    ],
    date: "2023",
    tools: ["Python", "OpenCv", "Numpy", "TypeScript", "Nextjs", "Material UI"],
  },
  {
    id: "iot-smart-home",
    title: "IOT Smart Home Project",
    projectType: "Internet of Things",
    images: [
      "iot/iot_1.jpg",
      "iot/iot_2.jpg",
      "iot/iot_3.jpg",
      "iot/iot_4.jpg",
      "iot/iot_5.jpg",
      "iot/iot_6.jpg",
      "iot/iot_7.jpg",
      "iot/iot_8.jpg",
      "iot/iot_9.jpg",
      "iot/iot_10.jpg",
      "iot/iot_11.jpg",
    ],
    video: "https://www.youtube.com/watch?v=c-O99odUCnw",
    description: [
      {
        title: "Description",
        content:
          "I developed a smart home system using various <b>sensors</b> and the <b>DOIT ESP32 Dev Kit V1</b>. This project aims to enhance home <b>automation</b> and <b>safety</b> through real-time monitoring and <b>control</b>. Here's an overview:",
      },
      {
        subtitle: "🔧 Components & Features :",
        content:
          "- <b>Kitchen:</b> Equipped with a gas sensor and an IR sensor to monitor and detect any hazardous conditions.",
      },
      {
        content:
          " - <b>Bedroom:</b> Integrated with a DHT11 sensor for temperature and humidity monitoring.",
      },
      {
        content:
          "- <b>Outdoor Lighting:</b> Controlled using a PIR sensor to ensure energy efficiency and security.",
      },
      {
        content:
          "- <b>Water Level Monitoring:</b> An ultrasonic sensor is used to monitor water levels in tanks or reservoirs to prevent overflow or ensure adequate water supply.",
      },
      {
        subtitle: "🖥️ Microcontroller :",
        content:
          "- Utilized the <b>ESP32 Dev Kit V1</b> to interface with all sensors and manage data transmission.",
        images: ["/projects/iot/esp32.png"],
      },
      {
        subtitle: "📱 Mobile Application Development :",
        content:
          "- Developed a mobile app connected to a <b>Node.js API</b>, allowing seamless interaction with the smart home system.",
      },
      {
        subtitle: "📊 Data Flow :",
        content:
          "- <b>From Sensors to Microcontroller:</b> Data is collected by the sensors and sent to the ESP32 microcontroller.",
      },
      {
        content:
          "- <b>From Microcontroller to Node.js Server:</b> The ESP32 processes the sensor data and sends it to the Node.js server via APIs.",
      },
      {
        content:
          "- <b>From Node.js Server to Mobile Application:</b> The server processes and stores the data, which the mobile application can then access to provide real-time monitoring and control to the users.",
        images: ["/projects/iot/iot_architecture.png"],
      },
      {
        content:
          "This project demonstrates the potential of IoT in creating smarter and safer living environments. I'm thrilled to see how this technology can be further developed and applied in real-world scenarios.",
      },
    ],
    date: "2023",
    tools: ["ESP32", "Sensors", "Arduino", "Nodejs", "React Native"],
  },
  {
    id: "dijkstra-algo",
    title: "Dijkstra's Algorithm",
    projectType: "Algorithm",
    images: [
      "dijkstra/dijkstra1.png",
      "dijkstra/dijkstra2.png",
      "dijkstra/dijkstra3.png",
      "dijkstra/dijkstra4.png",
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
    date: "2022",
    tools: ["Python", "Flask", "Nextjs", "React Xarrows"],
  },
  {
    id: "iris-classification",
    title: "IRIS Classification",
    projectType: "Machine Learning",
    images: [
      "irsi/irsi_1.png",
      "irsi/irsi_2.png",
      "irsi/irsi_3.png",
      "irsi/irsi_4.png",
      "irsi/irsi_5.png",
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
    tools: [
      "Python",
      "Flask",
      "Joblib",
      "Scikit Learn",
      "Docker Composer",
      "Html",
      "Css",
    ],
    dataset: {
      name: "Iris Species",
      link: "https://www.kaggle.com/datasets/uciml/iris?select=Iris.csv",
    },
  },
  {
    id: "riad-reservation",
    title: "Riad Reservation",
    projectType: "Full Stack",
    images: [
      "saida/home1.png",
      "saida/home2.png",
      "saida/home3.png",
      "saida/home4.png",
      "saida/home5.png",
      "saida/home6.png",
      "saida/home7.png",
    ],
    description: [
      {
        title: "Description",
        content:
          "I developed this project for managing Riad reservations, offering an all-in-one platform to showcase rooms, menus, activities, and presentation spaces. The system allows users to browse and book rooms with real-time availability, explore traditional and modern dishes through a detailed menu, and discover unique activities like cooking classes or guided tours. It also includes a section for reserving presentation or meeting rooms, complete with all necessary amenities. For the admin side, there’s a dashboard to manage reservations, track activities, and analyze performance. The platform combines modern technology with the charm of traditional Riads, creating a seamless and engaging experience for both users and managers.",
      },
    ],
    date: "2022",
    tools: ["Nodejs", "Express", "Nextjs", "MongoDb"],
  },
  {
    id: "agafay-desert",
    title: "Agafay Desert",
    projectType: "Full Stack",
    images: [
      "agafay/agafay1.png",
      "agafay/agafay2.png",
      "agafay/agafay3.png",
      "agafay/agafay4.png",
      "agafay/agafay5.png",
      "agafay/agafay6.png",
      "agafay/agafay7.png",
      "agafay/agafay8.png",
    ],
    description: [
      {
        title: "Description",
        content:
          "I developed this project which dedicated to managing camel and quad ride experiences in the breathtaking Agafay Desert near Marrakech. The platform provides users with a seamless way to book these adventures, featuring detailed descriptions, stunning visuals of the desert landscape, and customizable tour options. For camel rides, users can enjoy peaceful treks through the dunes, including sunset and sunrise experiences. The quad rides offer thrilling off-road journeys, perfect for adrenaline seekers. The system includes a scheduling calendar, transparent pricing, and secure payment integration. On the admin side, the platform allows for managing bookings, monitoring availability, and receiving customer feedback. This project aims to showcase the beauty of Agafay while offering a modern and hassle-free experience for adventurers.",
      },
    ],
    date: "2023",
    tools: ["Nodejs", "Express", "Nextjs", "MongoDb"],
  },
  {
    id: "real-vs-fake-image-classification",
    title:
      "A Hybrid Deep Learning Approach for Real vs. Fake Image Classification Using Transfer Learning and GANs",
    projectType: "Deep Learning",
    images: [
      "real_vs_fake/real_fake_1.png",
      "real_vs_fake/real_fake_2.png",
      "real_vs_fake/real_fake_3.png",
      "real_vs_fake/real_fake_4.png",
    ],
    video: "https://youtu.be/AxS-VYGcgw0",
    dataset: {
      name: "Deepfake and real images",
      link: "https://www.kaggle.com/datasets/manjilkarki/deepfake-and-real-images",
    },
    description: [
      {
        title: "Description",
        content:
          "This project presents a hybrid deep learning approach that combines Transfer Learning and Generative Adversarial Networks (GANs) for the classification of facial images as real or fake. The model aims to enhance the detection of manipulated content, particularly deepfakes, in applications such as digital forensics and media verification. By leveraging a weighted ensemble strategy, the model integrates predictions from both Transfer Learning and GAN components to improve classification accuracy.",
      },
      {
        subtitle: "Dataset and Data Preparation",
        content:
          'The dataset used in this study is sourced from Kaggle and consists of images classified as either "real" or "fake." The dataset is divided into training, validation, and testing subsets. Images are resized to 256x256 pixels, and data augmentation techniques such as horizontal flipping are applied to enhance model robustness.',
        images: ["/projects/real_vs_fake/dataset_preparation.png"],
      },
      {
        subtitle: "Model Architecture",
        content:
          "The hybrid model architecture combines a Transfer Learning model based on DenseNet121 with a GAN framework. The Transfer Learning model is modified to include an attention mechanism and custom layers for binary classification. The GAN component consists of a generator that creates synthetic images and a discriminator that classifies images as real or fake. Predictions from both models are combined using a weighted ensemble method, with the Transfer Learning model contributing 70% and the GAN contributing 30%.",
        images: ["/projects/real_vs_fake/model_architecture.png"],
      },
      {
        subtitle: "Training and Evaluation",
        content:
          "The model is trained using TensorFlow with a batch size of 64 and a maximum of 20 epochs. Early stopping is implemented to prevent overfitting. Evaluation metrics include accuracy, AUC, and loss curves. The Transfer Learning model achieves a final training accuracy of 99.15% and a validation accuracy of 98.10%. The GAN component is trained over ten epochs, with the generator and discriminator losses monitored to ensure balanced training.",
        images: ["/projects/real_vs_fake/training_curves.png"],
      },
      {
        subtitle: "Results",
        content:
          "The hybrid model demonstrates high accuracy in classifying real and fake images, with an AUC of 0.9996 for the Transfer Learning model. The confusion matrix and ROC curve analysis further confirm the model's strong performance in distinguishing between real and fake images.",
        images: [
          "/projects/real_vs_fake/confusion_matrix.png",
          "/projects/real_vs_fake/roc_curve.png",
        ],
      },
    ],
    date: "2024",
    tools: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "Nextjs"],
  },
  {
    id: "ctr-recommendation-reinforcement-learning",
    title: "CTR Recommendation Using Reinforcement Learning",
    projectType: "Recommendation System",
    images: [
      "ctr_recommendation/ctr_1.png",
      "ctr_recommendation/ctr_2.png",
      "ctr_recommendation/ctr_3.png",
      "ctr_recommendation/ctr_4.png",
    ],
    video: "https://youtu.be/t6I2_rEW4m4",
    dataset: {
      name: "Ads_CTR_Optimisation",
      link: "https://www.kaggle.com/datasets/akram24/ads-ctr-optimisation",
    },
    description: [
      {
        title: "Description",
        content:
          "This project introduces a novel personalized ad recommendation system using the Advantage Actor-Critic (A2C) reinforcement learning algorithm. The system dynamically adapts to evolving user preferences and optimizes ad placement strategies to maximize long-term rewards. The proposed model integrates reinforcement learning with advanced contextual understanding of user behavior, significantly improving ad relevance, click-through rates (CTR), and user retention compared to traditional methods.",
      },
      {
        subtitle: "Dataset and Data Preparation",
        content:
          "The dataset consists of 10,000 rows and 10 columns, representing user interactions with different ads (Ad-1 to Ad-10) and their corresponding CTR values. To gain a quick overview, we inspect the first few rows using `data.head()`.",
        images: ["/projects/ctr_recommendation/dataset_preparation.png"],
      },
      {
        subtitle: "A2C Network Architecture",
        content:
          "The A2C neural network consists of shared layers, an actor path for generating recommendations, and a critic path for evaluating recommendations. The model balances exploration and exploitation, with the actor generating recommendations and the critic evaluating their effectiveness.",
        images: ["/projects/ctr_recommendation/a2c_architecture.png"],
      },
      {
        subtitle: "State Representation and Recommendation Mechanism",
        content:
          "The user state is represented as a vector embedding user preferences derived from interaction data. The A2C model outputs a probability distribution over possible actions (recommendations), with the top-k actions presented to the user. The system incorporates user feedback to continuously refine its recommendations.",
      },
      {
        subtitle: "Evaluation and Results",
        content:
          "The model was evaluated using a CTR dataset, achieving high accuracy and AUC scores. The A2C-based system demonstrated stable learning behavior over 1000 episodes, with both actor and critic losses showing convergence. The system successfully adapted to user preferences, improving recommendation accuracy over time.",
        images: [
          "/projects/ctr_recommendation/training_curves.png",
          "/projects/ctr_recommendation/confusion_matrix.png",
        ],
      },
    ],
    date: "2024",
    tools: [
      "Python",
      "TensorFlow",
      "Keras",
      "Flask",
      "NumPy",
      "Pandas",
      "Nextjs",
    ],
  },
  {
    id: "gps-jamming-detection-uav",
    title:
      "Machine Learning-based Detection of GPS Jamming Attacks in Unmanned Aerial Vehicles (UAVs)",
    projectType: "Security and Anomaly Detection",
    images: [
      "gps_jamming/gps_1.png",
      "gps_jamming/hyperparameter_tuning.png",
      "gps_jamming/confusion_matrix.png",
      "gps_jamming/roc_curve.png",
    ],
    video: "",
    dataset: {
      name: "UAV Attack Dataset",
      link: "https://ieee-dataport.org/open-access/uav-attack-dataset",
    },
    description: [
      {
        title: "Description",
        content:
          "This paper proposes a hybrid machine learning framework for detecting GPS jamming attacks in UAVs using flight data, including GPS positioning, accelerometer readings, and environmental features. The study evaluates multiple classification models, such as Gradient Boosting, SVM, Logistic Regression, and KNN, achieving near-perfect detection rates. The results demonstrate the potential of machine learning to enhance UAV security and resilience against GPS jamming attacks.",
      },
      {
        subtitle: "Dataset and Preprocessing",
        content:
          "The dataset includes GPS positioning metrics, accelerometer readings, and environmental conditions. Data preprocessing involved handling missing values, normalization, feature extraction, and signal processing to prepare the data for machine learning.",
      },
      {
        subtitle: "Model Selection and Hyperparameter Tuning",
        content:
          "Five classification models were evaluated, including Gradient Boosting, SVM with polynomial features, Logistic Regression with ElasticNet regularization, and KNN with advanced distance metrics. Hyperparameter tuning was performed using GridSearchCV to optimize model performance.",
        images: ["/projects/gps_jamming/hyperparameter_tuning.png"],
      },
      {
        subtitle: "Results and Evaluation",
        content:
          "All models achieved near-perfect accuracy, with ROC curves and AUC scores of 1.0. The confusion matrices showed zero false positives and false negatives, indicating perfect classification performance. The learning curves demonstrated the models ability to generalize well across different training set sizes.",
        images: [
          "/projects/gps_jamming/confusion_matrix.png",
          "/projects/gps_jamming/roc_curve.png",
        ],
      },
    ],
    date: "2024",
    tools: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
  },
].sort((a, b) => Number(b.date) - Number(a.date));
