// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import amazon from "../../Assets/Projects/amazon.jpeg";
// import onxx from "../../Assets/Projects/onxx.png";
// import webCrawler from "../../Assets/Projects/webCrawler.jpeg";
// import election from "../../Assets/Projects/election.jpeg";
// import loan from "../../Assets/Projects/loan.jpg";
// import imgClassify from "../../Assets/Projects/imgclassify.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           Academic <strong className="purple">Projects </strong>
//         </h1>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={election}
//               isBlog={false}
//               title="2024 US Election Prediction"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/satwikas/OSNA_Project"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={imgClassify}
//               isBlog={false}
//               title="CIFAR-10 Image Classification"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/satwikas/Deep-Neural-Networks-CIFAR10-Classification"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={webCrawler}
//               isBlog={false}
//               title="Web Crawling and Search Engine"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/satwikas/Web-Document-Search-Engine"             
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={amazon}
//               isBlog={false}
//               title="Amazon Product Customer Retention"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/satwikas/Amazon-Product-Review-Analysis-Recommendation-System"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={loan}
//               isBlog={false}
//               title="Loan Default Prediction"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/satwikas/Big-Data-Project"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={onxx}
//               isBlog={false}
//               title="Predicting Model ONXX"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/satwikas/Model-Training-and-Deployment-ScikitLearn-and-ONNX-Approach"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazon from "../../Assets/Projects/amazon.jpeg";
import onxx from "../../Assets/Projects/onxx.png";
import webCrawler from "../../Assets/Projects/webCrawler.jpeg";
import election from "../../Assets/Projects/election.jpeg";
import loan from "../../Assets/Projects/loan.jpg";
import imgClassify from "../../Assets/Projects/imgclassify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Academic <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={election}
              isBlog={false}
              title="2024 US Election Prediction"
              description="Developed a machine learning model to predict the outcomes of the 2024 US elections based on historical data. Utilized various data sources and predictive algorithms to achieve a high level of accuracy in the model's predictions."
              ghLink="https://github.com/satwikas/OSNA_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgClassify}
              isBlog={false}
              title="CIFAR-10 Image Classification"
              description="Implemented a deep learning model using CNN to classify images from the CIFAR-10 dataset. Achieved high accuracy by utilizing techniques like data augmentation and transfer learning."
              ghLink="https://github.com/satwikas/Deep-Neural-Networks-CIFAR10-Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webCrawler}
              isBlog={false}
              title="Web Crawling and Search Engine"
              description="Built a web crawler to gather and index data for a custom search engine. Implemented efficient algorithms for data retrieval and ranking to ensure fast and relevant search results."
              ghLink="https://github.com/satwikas/Web-Document-Search-Engine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Product Customer Retention"
              description="Developed a recommendation system to predict customer retention for Amazon products using machine learning techniques. Applied data analysis and model training to predict customer behavior and optimize retention strategies."
              ghLink="https://github.com/satwikas/Amazon-Product-Review-Analysis-Recommendation-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan}
              isBlog={false}
              title="Loan Default Prediction"
              description="Created a machine learning model to predict loan defaults based on user data. Leveraged classification techniques to identify potential defaulters and reduce financial risk."
              ghLink="https://github.com/satwikas/Big-Data-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onxx}
              isBlog={false}
              title="Predicting Model ONXX"
              description="Trained a CNN model to detect emotions from facial expressions using the FER-2013 dataset. Deployed the model to a real-time application with OpenCV for emotion recognition from live facial images."
              ghLink="https://github.com/satwikas/Model-Training-and-Deployment-ScikitLearn-and-ONNX-Approach"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

