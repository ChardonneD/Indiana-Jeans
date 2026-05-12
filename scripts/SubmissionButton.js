import { transientState } from './transientState.js';

export const saveSurveySubmission = async () => {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transientState),
  };

  // Send data to the API
  const response = await fetch(
    'http://localhost:8088/surveySubmissions',
    postOptions
  );
};

export const SubmissionButton = () => {
  return `
    <button id="submissionButton">Submit Survey</button>
    `;
};

document.addEventListener('click', (event) => {
  if (event.target.id === 'submissionButton') {
    saveSurveySubmission();
  }
});