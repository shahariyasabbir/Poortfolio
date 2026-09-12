const experience = {
  role: 'Intern',
  organization: 'BAIUST Computer Club',
  type: 'Internship',
  dates: 'Jul 2025 - Dec 2025 · 6 mos',
  location: 'Bangladesh · Remote',
  description:
    'During my internship under BAIUST Computer Club, we worked hands-on with the University Bus Tracker System, gaining real-world experience in planning, development, and system understanding. This role helped me bridge the gap between academic learning and real corporate culture.',
  proofUrl: 'https://www.linkedin.com/in/shahariyaalam/edit/forms/position/2811316685/',
};

const experienceContent = document.getElementById('experienceContent');

if (experienceContent) {
  experienceContent.innerHTML = `
    <article class="experience-card">
      <div class="experience-top">
        <div>
          <h3>${experience.role}</h3>
          <p class="experience-company">${experience.organization} · ${experience.type}</p>
        </div>
        <span class="experience-dates">${experience.dates}</span>
      </div>
      <p class="experience-location">${experience.location}</p>
      <p class="experience-description">${experience.description}</p>
      <a class="experience-proof" href="${experience.proofUrl}" target="_blank" rel="noopener">
        view proof of work experience ↗
      </a>
    </article>
  `;
}
