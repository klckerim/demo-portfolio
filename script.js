function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    
    let new_recommendation_name = document.getElementById("new_recommendation_name");

    if (new_recommendation_name.value != null && new_recommendation_name.value.trim() != "") {
        element.innerHTML +=  "  -" + new_recommendation_name.value;
    }    
    
    
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    showPopup(true);
    // Reset the value of the textarea
    recommendation.value = "";
    new_recommendation_name.value = "";
  }

}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
