// All Categories API URL
const categoriesApiURL = "https://openapi.programming-hero.com/api/categories";

// Fetch to get data
fetch(categoriesApiURL)
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    // call displayCategories with data
    displayCategories(data.categories);
  });

// Function to display the categories on the page
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");

  // Initialize an empty string to store the HTML
  let buttonsHTML = "";

  // Loop through each category and add to the string
  categories.forEach((category) => {
    buttonsHTML += `
      <button class="btn btn-ghost w-full justify-start">${category.category_name}</button>
    `;
  });

  // Use .innerHTML to set the content from the string
  categoriesContainer.innerHTML = buttonsHTML;
};
