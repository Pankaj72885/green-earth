document.addEventListener("DOMContentLoaded", () => {
  // --- STATE VARIABLES ---
  // These store the application's data
  let cart = [];
  let currentTrees = [];

  // --- API URLS ---
  const categoriesApiURL =
    "https://openapi.programming-hero.com/api/categories";

  // --- DOM ELEMENT SELECTIONS ---
  // It's safe to select these now because the DOM is fully loaded
  const categoriesContainer = document.getElementById("categories-container");
  const treesContainer = document.getElementById("trees-container");
  const cartItemsContainer = document.getElementById("cart-items-container");

  // --- CATEGORY FUNCTIONS ---

  // Fetches all categories when the page first loads
  const fetchAllCategories = () => {
    fetch(categoriesApiURL)
      .then((response) => response.json())
      .then((data) => {
        displayCategories(data.categories);
      });
  };

  // Displays the category buttons in the sidebar
  const displayCategories = (categories) => {
    let buttonsHTML = "";
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
    categoriesContainer.innerHTML = buttonsHTML;
  };

  // --- TREE FUNCTIONS ---

  // Fetches trees for a specific category
  const fetchTreesByCategory = (categoryId) => {
    const spinner = document.getElementById("loading-spinner");
    const treesCardContainer = document.getElementById("trees-card-container");

    // Show the spinner and clear old cards
    spinner.classList.remove("hidden");
    treesCardContainer.innerHTML = "";

    const treesApiUrl = `https://openapi.programming-hero.com/api/category/${categoryId}`;
    fetch(treesApiUrl)
      .then((response) => response.json())
      .then((data) => {
        currentTrees = data.plants; // Save the currently displayed trees
        displayTrees(currentTrees);
      })
      .catch((error) => {
        // Handle potential network errors
        console.error("Failed to fetch trees:", error);
        treesCardContainer.innerHTML = `<p class="text-center text-red-500 col-span-full">Failed to load trees. Please try again.</p>`;
      })
      .finally(() => {
        // ALWAYS hide the spinner at the end
        spinner.classList.add("hidden");
      });
  };

  // Displays all the tree cards in the center column
  const displayTrees = (trees) => {
    const treesCardContainer = document.getElementById("trees-card-container");
    treesCardContainer.innerHTML = "";
    let treesHTML = "";
    trees.forEach((tree) => {
      treesHTML += `
        <div class="bg-white p-4 rounded-lg space-y-4 flex flex-col">
          <figure class="h-48 w-full rounded-xl">
            <img src="${tree.image}" alt="${
        tree.name
      }" class="h-full w-full object-cover rounded-xl" />
          </figure>
          <div class="space-y-3 flex-grow">
            <h1 data-id="${
              tree.id
            }" class="text-lg font-semibold text-neutral-dark cursor-pointer tree-name">${
        tree.name || "Not Available"
      }</h1>
            <p class="text-base font-medium text-neutral-dark/80">${tree.description.slice(
              0,
              60
            )}...</p>
            <div class="flex justify-between items-center">
              <div class="px-3 py-1 bg-[#DCFCE7] text-[#15803D] rounded-full text-sm">${
                tree.category || "Not Available"
              }</div>
              <p class="text-sm font-semibold">৳<span>${
                tree.price || "N/A"
              }</span></p>
            </div>
          </div>
          <button data-id="${
            tree.id
          }" class="bg-main-primary w-full rounded-full p-3 text-white font-medium cursor-pointer add-to-cart-btn">
            Add To Cart
          </button>
        </div>
      `;
    });
    treesCardContainer.innerHTML = treesHTML;
  };

  // --- MODAL FUNCTIONS ---

  // Fetches full details for a single tree
  const fetchTreeDetails = (treeId) => {
    const detailsApiUrl = `https://openapi.programming-hero.com/api/plant/${treeId}`;
    fetch(detailsApiUrl)
      .then((res) => res.json())
      .then((data) => {
        displayTreeDetailsInModal(data.plants); // Use data.data for single plant details
      });
  };

  // Populates and shows the modal
  const displayTreeDetailsInModal = (tree) => {
    const modal = document.getElementById("tree_details_modal");
    const modalContentContainer = document.getElementById(
      "modal-content-container"
    );
    modalContentContainer.innerHTML = `
      <figure><img src="${tree.image}" alt="${
      tree.name
    }" class="rounded-xl w-full h-64 object-cover mb-4" /></figure>
      <h3 class="font-bold text-2xl">${tree.name}</h3>
      <p class="py-4">${tree.description || "Not Available"}</p>
      <div class="space-y-1">
        <p><span class="font-semibold">Category:</span> ${
          tree.category || "Not Available"
        }</p>
        <p><span class="font-semibold">Price:</span> ৳${
          tree.price || "Not Available"
        }</p>
        <p><span class="font-semibold">Size:</span> ${
          tree.size || "Not Available"
        }</p>
        <p><span class="font-semibold">Origin:</span> ${
          tree.origin || "Not Available"
        }</p>
      </div>
    `;
    modal.showModal();
  };

  // --- CART FUNCTIONS ---

  // Handles adding an item to the cart state
  const handleAddToCart = (treeId) => {
    const idAsNumber = parseInt(treeId);
    const treeToAdd = currentTrees.find((tree) => tree.id === idAsNumber);
    if (treeToAdd) {
      cart.push(treeToAdd);
      updateCartDisplay();
    }
  };

  // Handles removing an item from the cart state
  const handleRemoveFromCart = (index) => {
    cart.splice(index, 1);
    updateCartDisplay();
  };

  // Updates the cart UI based on the cart array
  const updateCartDisplay = () => {
    const cartTotalEl = document.getElementById("cart-total");
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      // li.className = "flex justify-between items-center";
      li.innerHTML = `
        <span class="text-xl font-semibold text-neutral-dark">${item.name}</span>
        <div class="flex items-center justify-between gap-2">
          <span class="text-base font-normal text-neutral-600">৳${item.price} x 1</span>
          <button data-index="${index}" class="btn btn-xs btn-circle btn-outline btn-error remove-item-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      `;
      cartItemsContainer.appendChild(li);
      total += item.price;
    });
    cartTotalEl.innerText = total;
  };

  // --- EVENT LISTENERS ---

  // Listen for clicks on category buttons
  categoriesContainer.addEventListener("click", (event) => {
    // Use .closest() to get the button element, even if text inside is clicked
    const clickedButton = event.target.closest(".btn");

    // If the click wasn't on a button, do nothing
    if (!clickedButton) return;

    const categoryId = clickedButton.dataset.id;

    if (categoryId) {
      //logic for the active state

      // Get a list of all buttons in the container
      const allButtons = categoriesContainer.querySelectorAll(".btn");

      // Loop through all buttons and REMOVE the active class
      allButtons.forEach((button) => {
        button.classList.remove("btn-active");
        button.classList.remove("btn-success");
      });

      // ADD the active class ONLY to the button that was clicked
      clickedButton.classList.add("btn-active");
      clickedButton.classList.add("btn-success");

      // --- The existing logic to fetch trees stays the same ---
      fetchTreesByCategory(categoryId);
    }
  });

  // Listen for clicks within the trees area (for modals and adding to cart)
  treesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("tree-name")) {
      const treeId = event.target.dataset.id;
      fetchTreeDetails(treeId);
    } else if (event.target.classList.contains("add-to-cart-btn")) {
      const treeId = event.target.dataset.id;
      handleAddToCart(treeId);
    }
  });

  // Listen for clicks on remove buttons in the cart
  cartItemsContainer.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-item-btn");
    if (removeButton) {
      const indexToRemove = removeButton.dataset.index;
      handleRemoveFromCart(indexToRemove);
    }
  });

  // --- INITIALIZATION ---
  // Kick everything off by fetching the categories
  fetchAllCategories();
});
