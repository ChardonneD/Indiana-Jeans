
export const LocationChoices = async () => {
    const response = await fetch("http://localhost:3000/socioLocations")
    const locations = await response.json()

    // Build HTML for radio buttons for location choices
    let html = `
        <div class="survey-input" id="location-choice">
            <h2>What type of area do you live in?</h2>
    `
 // Loop through locations and create a radio button for each   
for (const location of locations) {
        html += `
        <input type="radio" name="location" value="${location.id}" />
        ${location.label}`
        }
    html += `</div>    `

    return html
}