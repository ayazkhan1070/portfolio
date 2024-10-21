import {
  mobile,
  backend,
  creator,
  web,
  css,
  git,
  html,
  tensorflow,
  numpy,
  pandas,
  Scikitlearn,
  powerbi,
  matplotlib,
  meta,
  starbucks,
  fittlyf,
  tesla,
  sanmarg,
  shopify,
  celeb,
  tripguide,
  fruits,
  fraud,
  comment,
  movie,
  time,
  sql
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "ML Engineer",
    icon: backend,
  },
  {
    title: "Mechanical Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Scikitlearn",
    icon: Scikitlearn,
  },
  
  {
    name: "powerbi",
    icon: powerbi,
  },
  {
    name: "matplotlib",
    icon: matplotlib,
  },
  
  {
    name: "git",
    icon: git,
  },

  {
    name: "sql",
    icon: sql,
  },
  
  
];

const experiences = [
  {
    title: "Jr. Data Scientist",
    company_name: "FITTLYF, Bangalore",
    icon: fittlyf,
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "Used time series data to develop an ARIMA model for forecasting worker productivity over the next four quarters.",
      "Achieved strong evaluation metrics including RMSE: 0.0325, MSE: 0.00106, and MAPE: 0.0329, ensuring reliable predictions for budget planning.",
      "Developed a fraud detection system using Isolation Forest, LOF, and PCA on a dataset of over 280,000 credit card transactions.",
      "Built a Streamlit web app for real-time fraud detection, featuring anomaly visualizations and classification results.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Analyst",
    company_name: "Sanmarg Projects Pvt Ltd",
    icon: sanmarg,
    iconBg: "#383E56",
    date: "May 2023 - Jun 2023",
    points: [
      "Analyzed survey data with Python libraries, leading to a 15% increase in customer satisfaction.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Celeb Face Matching",
    description:
      "Developed a face matching app that detects user faces and compares them to Bollywood celebrities. Utilized MTCNN for face detection and feature extraction from images.",
    tags: [
      {
        name: "ResNET50",
        color: "white-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "MTCNN",
        color: "pink-text-gradient",
      },
    ],
    image: celeb,
    source_code_link: "https://github.com/ayazkhan1070/Celeb_Face_Matching",
  },
  {
    name: "Fruit/Vegetable Classification And Recipe Generation",
    description:
      "Created a CNN model using ResNet50 to detect fruits and vegetables in images, and integrated the Edamam API to generate recipes from the identified ingredients.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "EDAMAM API",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: fruits,
    source_code_link: "https://github.com/ayazkhan1070/Fruits-And-Vegetable-Image-Classification-And-Recipe-Generation-",
  },
  {
    name: "Youtube Comment Spam Classifier",
    description:
      "Devised an unsupervised learning method to segregate spam and ham comments of YouTube videos from 4 different YouTuber’s and a total of 861962 comments and 9 features.",
    tags: [
      {
        name: "NLTK",
        color: "blue-text-gradient",
      },
      {
        name: "Clustering",
        color: "green-text-gradient",
      },
      {
        name: "Anamoly Detection",
        color: "pink-text-gradient",
      },
    ],
    image: comment,
    source_code_link: "https://github.com/ayazkhan1070/Youtube_comment_spam_classsification",
  },
  
  {
    name: "Credit Card Fraud Detection ",
    description:
      "Built and deployed an interactive web application using Streamlit, allowing users to upload transaction data for real-time fraud detection, with anomaly visualizations and classification results.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "PCA",
        color: "green-text-gradient",
      },
      {
        name: "Anamoly Detection",
        color: "red-text-gradient",
      },
    ],
    image: fraud,
    source_code_link: "https://github.com/ayazkhan1070/credit_card_fraud_detection?tab=readme-ov-file://github.com/",
  },
  {
    name: "Worker Productivity Time series Forecasting",
    description:
      "Preprocessed the WorkerFunnel dataset, applied PCA and K-Means clustering to segment worker productivity, developed an ARIMA model for time series forecasting, and proposed a revised budget strategy to improve productivity in garment manufacturing.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "ARIMA",
        color: "green-text-gradient",
      },
      {
        name: "Forecasting",
        color: "red-text-gradient",
      },
    ],
    image: time,
    source_code_link: "https://github.com/ayazkhan1070/Time_Series_Forecasting",
  },
  
  {
    name: "Movie Recommendation System",
    description:
      "This will recommend user five movies/shows from the Tmdb 5000 movies dataset according to the input given by the user. This uses basic NLP functions to perform such tasks.",
    tags: [
      {
        name: "NLTK",
        color: "blue-text-gradient",
      },
      {
        name: "Cosine Similarity",
        color: "green-text-gradient",
      },
      {
        name: "Stemming",
        color: "pink-text-gradient",
      },
    
    ],
      
    image: movie,
    source_code_link: "https://github.com/ayazkhan1070/NLP--Movie-Recommender-system",
  },
];

export { services, technologies, experiences, testimonials, projects };
