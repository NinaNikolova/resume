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
import Image from './components/Image';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";



function App() {
  
  const generatePDF = () => {
    const input = document.getElementById('page');
   // Temporarily make all text invisible for html2canvas
   html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Add links manually to the PDF
    const linkElements = document.querySelectorAll('a');

    linkElements.forEach(linkElement => {
        const url = linkElement.href;
        const rect = linkElement.getBoundingClientRect();
        const inputRect = input.getBoundingClientRect();

        // Calculate position of the link
        const x = (rect.left - inputRect.left) * (pdfWidth / input.offsetWidth);
        const y = (rect.top - inputRect.top) * (pdfHeight / input.offsetHeight);
        let text = linkElement.textContent;
text='                               ';

        pdf.textWithLink(text, x, y, { url: url });
    });

    pdf.save("download.pdf");

});
};
  const [language, setLanguage] = React.useState('english');

  const data = allData[language];
 
  return (
    <div className="App">
      <div>
      <select onChange={e => setLanguage(e.target.value)}>
        <option value="english">English</option>
        <option value="bulgarian">Bulgarian</option>
    
      </select>
      <button id="btn" onClick={generatePDF}>Download PDF</button>
   </div>

      <div className="page" id="page">
 
        <div className="column left">
          <Image img={data.img} />
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
