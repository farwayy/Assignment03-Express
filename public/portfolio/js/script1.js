function loadDescription(file, elementId) {
    $.ajax({
        url: file,
        type: 'GET',
        success: function(data) {
            const descriptionDiv = document.getElementById(elementId);
            descriptionDiv.style.display = 'block';
            descriptionDiv.innerHTML = `<p>${data}</p>`;
        },
        error: function() {
            document.getElementById(elementId).innerHTML = `<p>Error loading description.</p>`;
        }
    });
}
