// Team Member Data
const teamData = {
  1: {
    id: 1,
    name: "Sahil Bhujel",
    role: "Head Chef",
    photo: "assets/images/Team/SahilBhujel.jpg",
    description:
      "With over a decade of culinary excellence, Sahil combines traditional flavors with modern techniques. His philosophy centers on using locally sourced, organic ingredients to tell a story through every dish served.",
    contributions:
      "Curated the signature seasonal menu, established farm-to-table partnerships, and oversees total quality control.",
    extras:
      "12+ years experience, Winner of 'Chef of the Year 2023', Himalayan Fusion Specialist",
  },
  2: {
    id: 2,
    name: "Anjali Maharjan",
    role: "Restaurant Manager",
    photo: "assets/images/Team/Anjali Maharjan.png",
    description:
      "Anjali is the heartbeat of our front-of-house operations. Her dedication to impeccable service ensures that every guest feels at home, fostering an atmosphere of warmth and sophisticated hospitality.",
    contributions:
      "Revamped guest service protocols, led staff training workshops, and increased repeat customer rate by 40%.",
    extras:
      "MBA in Hospitality Management, Certified Sommelier Level 1, 8 years in industry",
  },
  3: {
    id: 3,
    name: "Bikash Thapa",
    role: "Operations Lead",
    photo: "assets/images/Team/BikashThapa.png",
    description:
      "The backbone of our daily workflow, Bikash ensures seamless coordination between the kitchen and suppliers. His logical approach to logistics guarantees that our ingredients are always fresh and our facility runs without a hitch.",
    contributions:
      "Streamlined inventory systems to reduce waste by 25%, optimized delivery logistics, and manages vendor relations.",
    extras:
      "Supply Chain Expert, Six Sigma Green Belt, advocate for sustainable sourcing",
  },
  4: {
    id: 4,
    name: "Sita Tamang",
    role: "Sous Chef",
    photo: "assets/images/Team/Sita Tamang.png",
    description:
      "Sita brings precision and creativity to the line. Known for her mastery of spices and texture, she works hand-in-hand with the Head Chef to execute complex dishes while mentoring the junior kitchen staff.",
    contributions:
      "Standardized recipe portions, leads the pastry and dessert section, and manages kitchen safety protocols.",
    extras:
      "Specializes in traditional Newari cuisine, 7 years fine dining experience",
  },
  5: {
    id: 5,
    name: "Prashil Baidhya",
    role: "Frontend Developer",
    photo: "assets/images/Team/PrashilBaidhya.jpg",
    description:
      "Has good knowledge of HTML and CSS with a focus on designing user-friendly web pages. Familiar with responsive design principles and improving visual appearance using animations and themes.",
    contributions:
      "Developed Front and Home pages, implemented navigation bar, and created website themes with animations.",
    extras: "Expert in UI debugging and responsive design optimization.",
  },
  6: {
    id: 6,
    name: "Krishna Neupane",
    role: "Frontend Developer",
    photo: "assets/images/Team/KrishnaNeupane.jpg",
    description:
      "Possesses basic knowledge of HTML and CSS, understanding how to structure and style web pages. Focuses on designing simple layouts and maintaining consistent styling across the site.",
    contributions:
      "Structured and styled the footer section, designed and formatted the About Us page layout.",
    extras:
      "Assisted in debugging layout issues and supported team collaboration.",
  },
  7: {
    id: 7,
    name: "Prayush Shrestha",
    role: "Backend Developer",
    photo: "assets/images/Team/Prayush Shrestha.png",
    description:
      "Proficient in HTML, CSS, JavaScript, and SQL. Skilled in creating responsive designs, managing GitHub repositories for version control, and handling database storage for user data.",
    contributions:
      "Implemented MySQL login/signup system, search functionality, image sliders, and managed Vercel deployment.",
    extras:
      "GitHub repository management, database integration, and UI functionality debugging.",
  },
};

// This function is called from onclick in HTML
function show_team_member_details(memberId) {
    const modal = document.getElementById('teamModal');
    const data = teamData[memberId];
    
    if (data) {
        document.getElementById('modalPhoto').src = data.photo;
        document.getElementById('modalPhoto').alt = data.name;
        document.getElementById('modalName').textContent = data.name;
        document.getElementById('modalRole').textContent = data.role;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('modalContributions').textContent = data.contributions;
        document.getElementById('modalExtras').textContent = data.extras;
        
        modal.classList.add('active');
    }
}

// Close modal functionality
const modal = document.getElementById('teamModal');
const closeBtn = document.querySelector('.dialog-close');

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

if (modal) {
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});