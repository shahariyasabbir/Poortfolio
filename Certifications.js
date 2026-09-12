const certifications = [];

const certificationsContent = document.getElementById('certificationsContent');
const certificationsStatus = document.getElementById('certificationsStatus');

if (certificationsContent && certificationsStatus) {
  certificationsStatus.textContent = `${certifications.length} entries`;

  certificationsContent.innerHTML = certifications.length
    ? certifications
        .map(
          ({ name, issuer, date, type, proofUrl }) => `
            <article class="certification-card">
              <div class="certification-top">
                <div>
                  <span class="certification-type">${type}</span>
                  <h3>${name}</h3>
                </div>
                <span class="certification-date">${date}</span>
              </div>
              <p class="certification-issuer">${issuer}</p>
              <a class="certification-proof" href="${proofUrl}" target="_blank" rel="noopener">
                view proof ↗
              </a>
            </article>
          `
        )
        .join('')
    : `
      <div class="certifications-empty">
        <p>No certifications or hackathons added yet.</p>
        <span>Add each achievement here with its name, issuer or event, date, and proof link.</span>
      </div>
    `;
}
