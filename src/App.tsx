import { useState } from "react";
import "./App.css";
import A4Wrapper from "./components/A4Wrapper";
import Header from "./sections/Header";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import { resumeData } from "./data/resumeData";

function App() {
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);

  const maskedPersonalData = {
    ...resumeData.personal,
    email: showPersonalInfo ? resumeData.personal.email : "****@****.com",
    phone: showPersonalInfo ? resumeData.personal.phone : "010-****-****",
  };

  return (
    <div>
      <div className="toggle-controls">
        <button
          onClick={() => setShowPersonalInfo(!showPersonalInfo)}
          className={`toggle-btn ${showPersonalInfo ? 'active' : ''}`}
        >
          {showPersonalInfo ? '개인정보 숨김' : '개인정보 표시'}
        </button>
      </div>
      
      <A4Wrapper>
        <Header {...maskedPersonalData} />
        <Experience />
        <Skills />
        <Education />
      </A4Wrapper>
    </div>
  );
}

export default App;
