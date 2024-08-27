import './App.css';
import * as React from 'react';
import {
  FaCheckSquare as FullCheckIcon,
  FaRegCheckSquare as CheckIcon,
  FaRegComment as CommentIcon,
} from 'react-icons/fa';
import { IoMdCheckboxOutline } from "react-icons/io";

import Details from './components/Details';
import FullName from './components/FullName';
import Summary from './components/Summary';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Certificates from './components/Certificates';
import Education from './components/Education';

import allData from './data';

function App() {
  
  const [language, setLanguage] = React.useState('english');

  const data = allData[language];
  return (
    <div className="App">
      <select onChange={e => setLanguage(e.target.value)}>
        <option value="english">English</option>
        <option value="bulgarian">Bulgarian</option>
      </select>

      <div className="page">
        <div className="column left">
          <Details data={data.contact} />
          <Details data={data.keySkills} defaultIcon={<FullCheckIcon />} />
          <Details data={data.additionalSkills} defaultIcon={<CheckIcon />} />
          <Details data={data.softSkills} defaultIcon={<IoMdCheckboxOutline />} />
          <Details data={data.languages} defaultIcon={<CommentIcon />} />
          <Details data={data.interests} />
        </div>

        <div className="column right">
          <FullName text={data.fullName} />
          <Summary data={data.summary} />
          <Projects data={data.projects} />
          <WorkExperience data={data.workExperience} />
          <Certificates data={data.certificates} />
          <Education data={data.education} />
        </div>
      </div>
    </div>
  );
}

export default App;
