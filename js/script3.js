var doctorsData={
    "doctors": [
      {
        "name": "Dr. John Smith",
        "specialty": "Cardiology",
        "services": ["Echocardiography", "Angiography", "Electrocardiogram"]
      },
      {
        "name": "Dr. Sarah Johnson",
        "specialty": "Dermatology",
        "services": ["Acne Treatment", "Skin Cancer Screening", "Botox Injections"]
      },
      {
        "name": "Dr. Michael Davis",
        "specialty": "Orthopedics",
        "services": ["Joint Replacement", "Sports Medicine", "Fracture Treatment"]
      },
      {
        "name": "Dr. Emily Wilson",
        "specialty": "Pediatrics",
        "services": ["Well-Child Visits", "Immunizations", "Newborn Care"]
      },
      {
        "name": "Dr. Robert Thompson",
        "specialty": "Ophthalmology",
        "services": ["Cataract Surgery", "Glaucoma Treatment", "LASIK"]
      },
      {
        "name": "Dr. Jessica Lee",
        "specialty": "Gastroenterology",
        "services": ["Colonoscopy", "Endoscopy", "Digestive Disorder Treatment"]
      },
      {
        "name": "Dr. David Wilson",
        "specialty": "Neurology",
        "services": ["Migraine Treatment", "Epilepsy Management", "Stroke Care"]
      },
      {
        "name": "Dr. Laura Anderson",
        "specialty": "Obstetrics and Gynecology",
        "services": ["Prenatal Care", "Women's Health Exams", "Family Planning"]
      },
      {
        "name": "Dr. Mark Taylor",
        "specialty": "Urology",
        "services": ["Prostate Screening", "Urinary Tract Infection Treatment", "Kidney Stone Removal"]
      },
      {
        "name": "Dr. Samantha Roberts",
        "specialty": "Psychiatry",
        "services": ["Depression Therapy", "Anxiety Management", "Cognitive Behavioral Therapy"]
      },
      {
        "name": "Dr. Christopher Adams",
        "specialty": "ENT (Ear, Nose, and Throat)",
        "services": ["Sinus Surgery", "Hearing Tests", "Tonsillectomy"]
      },
      {
        "name": "Dr. Olivia Walker",
        "specialty": "Rheumatology",
        "services": ["Arthritis Treatment", "Joint Injections", "Lupus Management"]
      },
      {
        "name": "Dr. Andrew Mitchell",
        "specialty": "Dentistry",
        "services": ["Teeth Cleaning", "Fillings", "Root Canal Therapy"]
      },
      {
        "name": "Dr. Lily Baker",
        "specialty": "Endocrinology",
        "services": ["Diabetes Management", "Thyroid Disorders", "Hormone Replacement Therapy"]
      },
      {
        "name": "Dr. William Turner",
        "specialty": "Allergy and Immunology",
        "services": ["Allergy Testing", "Immunotherapy", "Asthma Treatment"]
      },
      {
        "name": "Dr. Hannah Cooper",
        "specialty": "Pulmonology",
        "services": ["Lung Function Tests", "Asthma Management", "Sleep Apnea Treatment"]
      },
      {
        "name": "Dr. Benjamin Harris",
        "specialty": "Oncology",
        "services": ["Chemotherapy", "Radiation Therapy", "Cancer Screening"]
      },
      {
        "name": "Dr. Victoria Young",
        "specialty": "Dermatology",
        "services": ["Acne Treatment", "Skin Cancer Screening", "Botox Injections"]
      },
      {
        "name": "Dr. Matthew Turner",
        "specialty": "Orthopedics",
        "services": ["Joint Replacement", "Sports Medicine", "Fracture Treatment"]
      },
      {
        "name": "Dr. Elizabeth Collins",
        "specialty": "Pediatrics",
        "services": ["Well-Child Visits", "Immunizations", "Newborn Care"]
      },
      {
        "name": "Dr. Daniel Anderson",
        "specialty": "Ophthalmology",
        "services": ["Cataract Surgery", "Glaucoma Treatment", "LASIK"]
      },
      {
        "name": "Dr. Jennifer Scott",
        "specialty": "Gastroenterology",
        "services": ["Colonoscopy", "Endoscopy", "Digestive Disorder Treatment"]
      },
      {
        "name": "Dr. Richard Thompson",
        "specialty": "Neurology",
        "services": ["Migraine Treatment", "Epilepsy Management", "Stroke Care"]
      },
      {
        "name": "Dr. Kimberly Adams",
        "specialty": "Obstetrics and Gynecology",
        "services": ["Prenatal Care", "Women's Health Exams", "Family Planning"]
      },
      {
        "name": "Dr. Steven Harris",
        "specialty": "Urology",
        "services": ["Prostate Screening", "Urinary Tract Infection Treatment", "Kidney Stone Removal"]
      },
      {
        "name": "Dr. Samantha Parker",
        "specialty": "Psychiatry",
        "services": ["Depression Therapy", "Anxiety Management", "Cognitive Behavioral Therapy"]
      },
      {
        "name": "Dr. Daniel Turner",
        "specialty": "ENT (Ear, Nose, and Throat)",
        "services": ["Sinus Surgery", "Hearing Tests", "Tonsillectomy"]
      }
    ]
  }
  
// Assuming the doctors data is stored in a variable called "doctorsData"

function searchDoctors() {
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    var matchedDoctors = findDoctorsByDisease(searchQuery);
  
    if (matchedDoctors.length > 0) {
      var popupContent = "Doctors for " + searchQuery + ":<br>";
      matchedDoctors.forEach(function(doctor) {
        popupContent += doctor.name + "<br>";
      });
  
      var popup = document.getElementById("popup");
      popup.innerHTML = popupContent;
      popup.style.display = "block";
    } else {
      alert("No doctors found for the entered disease.");
    }
  }
  
  function findDoctorsByDisease(disease) {
    var matchedDoctors = [];
    doctorsData.doctors.forEach(function(doctor) {
      doctor.services.forEach(function(service) {
        if (service.toLowerCase() === disease) {
          matchedDoctors.push(doctor);
        }
      });
    });
    return matchedDoctors;
  }
  