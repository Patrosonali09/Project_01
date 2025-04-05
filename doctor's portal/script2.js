

// Store patient data to localStorage before navigating to the patient details page
function storePatientData() {
    // Example: Save a patient ID or other data for future reference
    const patientData = {
      name: 'John Doe',
      age: 45,
      condition: 'Type 2 Diabetes',
      lastVisit: '01/15/2025',
      treatmentPlan: 'Medication adjustment and lifestyle changes'
    };
    
    // Store the patient data in localStorage
    localStorage.setItem('patientData', JSON.stringify(patientData));
  }
  