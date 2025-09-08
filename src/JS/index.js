// All Categories API URL
const categoriesApiURL = "https://openapi.programming-hero.com/api/categories";

// Fetch to get data
fetch(categoriesApiURL)
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    // call displayCategories with data
    displayCategories(data.categories);
  });

// Get the container for the category buttons
const categoriesContainer = document.getElementById("categories-container");

// Function to display the categories on the page
const displayCategories = (categories) => {
  // Initialize an empty string to store the HTML
  let buttonsHTML = "";

  // Loop through each category and add to the string
  categories.forEach((category) => {
    buttonsHTML += `
      <button 
        data-id="${category.id}"
        class="btn btn-ghost w-full justify-start"
      >
        ${category.category_name}
      </button>
    `;
  });

  // Use .innerHTML to set the content from the string
  categoriesContainer.innerHTML = buttonsHTML;
};

// Add a event listener for categories button
categoriesContainer.addEventListener("click", (event) => {
  // listen to click from categories dataset id
  const categoryId = event.target.dataset.id;

  // Check if a button with a data-id was actually clicked
  if (categoryId) {
    fetchTreesByCategory(categoryId);
    // We'll fetch the tree data here in the next step.
  }
});

// Fetch to get trees by categories
const fetchTreesByCategory = (categoryId) => {
  // Trees API URL
  const treesApiUrl = `https://openapi.programming-hero.com/api/category/${categoryId}`;

  fetch(treesApiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayTrees(data.plants);
    });
};

// NEW function to display all the tree cards by Categories
const displayTrees = (trees) => {
  const treesContainer = document.getElementById("trees-container");
  // Clear the container of any previous trees
  treesContainer.innerHTML = "";

  let treesHTML = "";
  // Loop through each tree and create a card for it
  trees.forEach((tree) => {
    treesHTML += `
  <div class="bg-white p-4 rounded-lg space-y-4">
    <div class="h-48 w-full rounded-xl">
      <img
        src="${tree.image}"
        alt="${tree.name}"
        class="h-47 w-full object-cover rounded-xl"
      />
    </div>

    <div class="space-y-3">
      <h1 class="text-sm font-semibold text-neutral-dark">${tree.name}</h1>
      <p class="text-xs font-medium text-neutral-dark/80">
        ${tree.description.slice(0, 70)}
      </p>
      <div class="flex justify-between">
        <button class="px-3 py-1 bg-[#DCFCE7] text-[#15803D] rounded-full">
          ${tree.category}
        </button>
        <p class="text-sm font-semibold">৳ <span>${tree.price}</span></p>
      </div>
    </div>
    <button class="bg-main-primary w-full rounded-full p-3 text-white font-medium">
      Add To Card
    </button>
  </div>

    `;
  });

  // Add all the generated cards to the container
  treesContainer.innerHTML = treesHTML;
};














