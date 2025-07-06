

  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });


  // view funcition 




  
  
  const properties = [
    // Haryana
  {
    title: "2 BHK Apartment – Sector 45, Gurgaon",
    bhk: "2",
    budget: 58,
    location: "Gurgaon, Haryana",
    category: "Apartment",
    image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",

    area: "950 sqft",
    type: "Buy"
  },
  {
    title: "3 BHK Villa – Sohna Road, Gurgaon",
    bhk: "3",
    budget: 125,
    location: "Gurgaon, Haryana",
    category: "Villa",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    area: "1800 sqft",
    type: "Buy"
  },

  // Maharashtra
  {
    title: "1 BHK Studio – Andheri, Mumbai",
    bhk: "1",
    budget: 35,
    location: "Mumbai, Maharashtra",
    category: "Studio",
    image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    area: "480 sqft",
    type: "Rent"
  },
  {
    title: "4 BHK Penthouse – Worli Sea Face",
    bhk: "4",
    budget: 450,
    location: "Mumbai, Maharashtra",
    category: "Penthouse",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
    area: "2800 sqft",
    type: "Buy"
  },
  {
    title: "2 BHK Flat – Baner, Pune",
    bhk: "2",
    budget: 67,
    location: "Pune, Maharashtra",
    category: "Apartment",
    image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg",
    area: "890 sqft",
    type: "Buy"
  },

  // Karnataka
  {
    title: "3 BHK Apartment – Whitefield, Bangalore",
    bhk: "3",
    budget: 95,
    location: "Bangalore, Karnataka",
    category: "Apartment",
    image: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg",
    area: "1350 sqft",
    type: "Buy"
  },
  {
    title: "2 BHK Rent – Koramangala",
    bhk: "2",
    budget: 28,
    location: "Bangalore, Karnataka",
    category: "Apartment",
    image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
    area: "980 sqft",
    type: "Rent"
  },

  // Delhi
  {
    title: "1 BHK Builder Floor – Lajpat Nagar",
    bhk: "1",
    budget: 32,
    location: "New Delhi, Delhi",
    category: "Studio",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    area: "600 sqft",
    type: "Buy"
  },
  {
    title: "3 BHK Luxury Apartment – Vasant Kunj",
    bhk: "3",
    budget: 150,
    location: "New Delhi, Delhi",
    category: "Apartment",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    area: "1600 sqft",
    type: "Buy"
  },

  // Uttar Pradesh
  {
    title: "2 BHK Flat – Sector 137, Noida",
    bhk: "2",
    budget: 56,
    location: "Noida, Uttar Pradesh",
    category: "Apartment",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    area: "970 sqft",
    type: "Buy"
  },
  {
    title: "3 BHK Builder Floor – Ghaziabad",
    bhk: "3",
    budget: 75,
    location: "Ghaziabad, Uttar Pradesh",
    category: "Builder Floor",
    image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
    area: "1250 sqft",
    type: "Buy"
  },

  // Telangana
  {
    title: "3 BHK Apartment – Gachibowli",
    bhk: "3",
    budget: 90,
    location: "Hyderabad, Telangana",
    category: "Apartment",
    image: "https://images.pexels.com/photos/6670655/pexels-photo-6670655.jpeg",
    area: "1500 sqft",
    type: "Buy"
  },
  {
    title: "1 BHK Rent – Hitech City",
    bhk: "1",
    budget: 18,
    location: "Hyderabad, Telangana",
    category: "Studio",
    image: "https://images.pexels.com/photos/15848139/pexels-photo-15848139.png",
    area: "480 sqft",
    type: "Rent"
  },

  // Rajasthan
  {
    title: "2 BHK Apartment – Vaishali Nagar",
    bhk: "2",
    budget: 42,
    location: "Jaipur, Rajasthan",
    category: "Apartment",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    area: "900 sqft",
    type: "Buy"
  },
  {
    title: "3 BHK Villa – Jagatpura",
    bhk: "3",
    budget: 89,
    location: "Jaipur, Rajasthan",
    category: "Villa",
    image: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg",
    area: "1600 sqft",
    type: "Buy"
  },

  // West Bengal
  {
    title: "1 BHK Rent – New Town",
    bhk: "1",
    budget: 15,
    location: "Kolkata, West Bengal",
    category: "Apartment",
    image: "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg",
    area: "550 sqft",
    type: "Rent"
  },
  {
    title: "3 BHK Flat – Salt Lake Sector V",
    bhk: "3",
    budget: 68,
    location: "Kolkata, West Bengal",
    category: "Apartment",
    image: "https://images.pexels.com/photos/32025968/pexels-photo-32025968.jpeg",
    area: "1200 sqft",
    type: "Buy"
  },

  // Gujarat
  {
    title: "2 BHK Apartment – Satellite, Ahmedabad",
    bhk: "2",
    budget: 55,
    location: "Ahmedabad, Gujarat",
    category: "Apartment",
    image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
    area: "980 sqft",
    type: "Buy"
  },
  {
    title: "3 BHK Villa – Gandhinagar",
    bhk: "3",
    budget: 88,
    location: "Gandhinagar, Gujarat",
    category: "Villa",
    image: "https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg",
    area: "1500 sqft",
    type: "Buy"
  },
    // Kerala
  {
    title: "2 BHK Apartment – Kakkanad, Kochi",
    bhk: "2",
    budget: 46,
    location: "Kochi, Kerala",
    category: "Apartment",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    area: "870 sqft",
    type: "Buy"
  },
  {
    title: "3 BHK Villa – Trivandrum City",
    bhk: "3",
    budget: 95,
    location: "Trivandrum, Kerala",
    category: "Villa",
    image: "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
    area: "1650 sqft",
    type: "Buy"
  },

  // Bihar
  {
    title: "2 BHK Flat – Patna Junction Area",
    bhk: "2",
    budget: 38,
    location: "Patna, Bihar",
    category: "Apartment",
    image: "https://images.pexels.com/photos/7167077/pexels-photo-7167077.jpeg",
    area: "800 sqft",
    type: "Buy"
  },
  {
    title: "1 BHK Rent – Boring Road",
    bhk: "1",
    budget: 9,
    location: "Patna, Bihar",
    category: "Studio",
    image: "https://images.pexels.com/photos/7512036/pexels-photo-7512036.jpeg",
    area: "500 sqft",
    type: "Rent"
  },

  // Madhya Pradesh
  {
    title: "3 BHK Apartment – Arera Colony, Bhopal",
    bhk: "3",
    budget: 64,
    location: "Bhopal, Madhya Pradesh",
    category: "Apartment",
    image: "https://images.pexels.com/photos/7147284/pexels-photo-7147284.jpeg",
    area: "1200 sqft",
    type: "Buy"
  },
  {
    title: "2 BHK Villa – Indore Ring Road",
    bhk: "2",
    budget: 52,
    location: "Indore, Madhya Pradesh",
    category: "Villa",
    image: "https://images.pexels.com/photos/7147287/pexels-photo-7147287.jpeg",
    area: "1000 sqft",
    type: "Buy"
  },

  // Punjab
  {
    title: "3 BHK Apartment – Sector 70, Mohali",
    bhk: "3",
    budget: 63,
    location: "Mohali, Punjab",
    category: "Apartment",
    image: "https://images.pexels.com/photos/6585599/pexels-photo-6585599.jpeg",
    area: "1150 sqft",
    type: "Buy"
  },
  {
    title: "2 BHK Builder Floor – Ludhiana",
    bhk: "2",
    budget: 49,
    location: "Ludhiana, Punjab",
    category: "Builder Floor",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    area: "920 sqft",
    type: "Buy"
  },

  // Chandigarh
  {
    title: "3 BHK Flat – Sector 44",
    bhk: "3",
    budget: 79,
    location: "Chandigarh",
    category: "Apartment",
    image: "https://images.pexels.com/photos/6782349/pexels-photo-6782349.jpeg",
    area: "1300 sqft",
    type: "Buy"
  },
  {
    title: "1 BHK Studio – Sector 15",
    bhk: "1",
    budget: 22,
    location: "Chandigarh",
    category: "Studio",
    image: "https://images.pexels.com/photos/7511698/pexels-photo-7511698.jpeg",
    area: "480 sqft",
    type: "Rent"
  },

  // Jharkhand
  {
    title: "2 BHK Apartment – Ranchi",
    bhk: "2",
    budget: 39,
    location: "Ranchi, Jharkhand",
    category: "Apartment",
    image: "https://images.pexels.com/photos/7534273/pexels-photo-7534273.jpeg",
    area: "880 sqft",
    type: "Buy"
  },
  {
    title: "3 BHK Duplex – Dhanbad",
    bhk: "3",
    budget: 66,
    location: "Dhanbad, Jharkhand",
    category: "Villa",
    image: "https://images.pexels.com/photos/158148/ruhl-house-home-galveston-texas-158148.jpeg",
    area: "1450 sqft",
    type: "Buy"
  },

  // Odisha
  {
    title: "1 BHK Studio – Bhubaneswar",
    bhk: "1",
    budget: 19,
    location: "Bhubaneswar, Odisha",
    category: "Studio",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    area: "480 sqft",
    type: "Rent"
  },
  {
    title: "3 BHK Apartment – Cuttack",
    bhk: "3",
    budget: 62,
    location: "Cuttack, Odisha",
    category: "Apartment",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    area: "1180 sqft",
    type: "Buy"
  },

  // Goa
  {
    title: "2 BHK Sea View Flat – Panaji",
    bhk: "2",
    budget: 120,
    location: "Panaji, Goa",
    category: "Apartment",
    image: "https://images.pexels.com/photos/10758466/pexels-photo-10758466.jpeg",
    area: "1000 sqft",
    type: "Buy"
  },
  {
    title: "3 BHK Rent – Baga Beach Area",
    bhk: "3",
    budget: 70,
    location: "Goa",
    category: "Studio",
    image: "https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg",
    area: "900 sqft",
    type: "Buy"
  },
   {
    title: "2 BHK Rent – Baga Beach Area",
    bhk: "2",
    budget: 50,
    location: "Goa",
    category: "Studio",
    image: "https://images.pexels.com/photos/593171/pexels-photo-593171.jpeg",
    area: "540 sqft",
    type: "Rent"
  },
  {
    title: "2 BHK Luxury Flat – South Mumbai",
    bhk: "2",
    budget: 95,
    location: "Mumbai",
    category: "Luxury",
    image: "https://images.pexels.com/photos/6238615/pexels-photo-6238615.jpeg",
    area: "1150 sqft",
    type: "Rent"
  },
  {
    title: "3 BHK Villa – Whitefield, Bangalore",
    bhk: "3",
    budget: 68,
    location: "Bangalore",
    category: "Villa",
    image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
    area: "1500 sqft",
    type: "Rent"
  },
  {
    title: "1 RK Studio – Koregaon Park",
    bhk: "1",
    budget: 22,
    location: "Pune",
    category: "Studio",
    image: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg",
    area: "400 sqft",
    type: "Rent"
  },
  {
    title: "2 BHK Family Flat – Noida Sector 62",
    bhk: "2",
    budget: 35,
    location: "Noida",
    category: "Family",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    area: "980 sqft",
    type: "Rent"
  },
  {
    title: "3 BHK Penthouse – Jubilee Hills",
    bhk: "3",
    budget: 120,
    location: "Hyderabad",
    category: "Penthouse",
    image: "https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg",
    area: "1850 sqft",
    type: "Rent"
  },
  {
    title: "1 BHK Apartment – Colaba",
    bhk: "1",
    budget: 42,
    location: "Mumbai",
    category: "Apartment",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg",
    area: "650 sqft",
    type: "Rent"
  },
  {
    title: "2 BHK Compact – Indirapuram",
    bhk: "2",
    budget: 28,
    location: "Ghaziabad",
    category: "Compact",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    area: "750 sqft",
    type: "Rent"
  },
  {
    title: "1 BHK Sea View – Calangute Beach",
    bhk: "1",
    budget: 30,
    location: "Goa",
    category: "Beach",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    area: "590 sqft",
    type: "Rent"
  },
  {
    title: "3 BHK Premium – Saket Area",
    bhk: "3",
    budget: 75,
    location: "Delhi",
    category: "Premium",
    image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    area: "1350 sqft",
    type: "Rent"
  },
  {
    title: "2 BHK Affordable – Gachibowli",
    bhk: "2",
    budget: 32,
    location: "Hyderabad",
    category: "Affordable",
    image: "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg",
    area: "890 sqft",
    type: "Rent"
  },
  {
    title: "1 RK Studio – HSR Layout",
    bhk: "1",
    budget: 18,
    location: "Bangalore",
    category: "Studio",
    image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
    area: "370 sqft",
    type: "Rent"
  },
  {
    title: "2 BHK Flat – DLF Phase 3",
    bhk: "2",
    budget: 40,
    location: "Gurgaon",
    category: "Modern",
    image: "https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg",
    area: "980 sqft",
    type: "Rent"
  },
  {
    title: "3 BHK Independent House – Salt Lake",
    bhk: "3",
    budget: 60,
    location: "Kolkata",
    category: "Independent",
    image: "https://images.pexels.com/photos/27531873/pexels-photo-27531873.jpeg",
    area: "1420 sqft",
    type: "Rent"
  },
  {
    title: "1 BHK Budget Flat – Gandhinagar",
    bhk: "1",
    budget: 16,
    location: "Ahmedabad",
    category: "Budget",
    image: "https://images.pexels.com/photos/14509975/pexels-photo-14509975.jpeg",
    area: "490 sqft",
    type: "Rent"
  } ,
  {
    title: " 3 BHK Budget Flat – Gandhinagar",
    bhk: "3",
    budget: 30,
    location: "kolkata",
    category: "Budget",
    image: "https://images.pexels.com/photos/6758788/pexels-photo-6758788.jpeg",
    area: "550 sqft",
    type: "Rent"
  } ,
  {
    title: "2 BHK Budget Flat – Gandhinagar",
    bhk: "2",
    budget: 20,
    location: "tamil Nadu",
    category: "Budget",
    image: "https://images.pexels.com/photos/7601098/pexels-photo-7601098.jpeg",
    area: "400 sqft",
    type: "Rent"
  } 
  ];


// Filters apply function
function applyFilters() {
  showAll = false;
  loadProperties();
}

const searchInput = document.getElementById("searchInput");
const propertyGrid = document.getElementById("propertyGrid");

function renderFilteredProperties(filteredList) {
  propertyGrid.innerHTML = "";
  if (filteredList.length === 0) {
    propertyGrid.innerHTML = "<p>No properties found for this city.</p>";
    return;
  }
  filteredList.forEach((property) => {
    const card = `
      <div class="property-card">
        <img src="${property.image}" alt="${property.title}" />
        <div class="property-info">
          <h3>${property.title}</h3>
          <p>${property.bhk} BHK • ${property.area}</p>
          <p class="price">₹${property.budget.toLocaleString()}</p>
        </div>
      </div>
    `;
    propertyGrid.innerHTML += card;
  });
}

searchInput.addEventListener("input", applyFilters);

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    applyFilters();
  }
});


const visibleCount = 8;
let showAll = false;
let currentFiltered = [];

function loadProperties() {
  const container = document.getElementById("propertyGrid");
  container.innerHTML = "";

  const bhk = document.getElementById("bhkFilter").value;
  const budget = document.getElementById("budgetFilter").value;
  const type = document.getElementById("typeFilter").value;
  const search = document.getElementById("searchInput").value.toLowerCase();

 currentFiltered = properties.filter((p) => {
  if (bhk && p.bhk !== bhk) return false;
  if (type && p.category !== type) return false;
  if (budget) {
    if (budget === "0-50" && p.budget >= 50) return false;
    if (budget === "50-100" && (p.budget < 50 || p.budget > 100)) return false;
    if (budget === "100+" && p.budget <= 100) return false;
  }
  if (search && !p.location.toLowerCase().includes(search)) return false;
  if (activeType !== "All" && p.type !== activeType) return false;
  return true;
});


  if (currentFiltered.length === 0) {
    container.innerHTML = "<p>No properties found based on filters.</p>";
    document.getElementById("viewMoreBtn").style.display = "none";
    return;
  }

  const displayItems = showAll ? currentFiltered : currentFiltered.slice(0, visibleCount);

  displayItems.forEach((p, index) => {
    container.innerHTML += `
      <div class="property-card" onclick="openModal(${properties.indexOf(p)})">
        <img src="${p.image}" alt="${p.title}">
        <div class="property-info">
          <h4>${p.title}</h4>
          <p>${p.location}</p>
          <div class="tags">
            <span>${p.bhk} BHK</span>
            <span>${p.area}</span>
            <span>${p.category}</span>
            <span>₹${p.budget}${p.type === "Rent" ? "k/mo" : " Lakh"}</span>
          </div>
        </div>
      </div>
    `;
  });

  const viewBtn = document.getElementById("viewMoreBtn");
  if (currentFiltered.length > visibleCount) {
    viewBtn.style.display = "block";
    viewBtn.textContent = showAll ? "View Less" : "View More";
  } else {
    viewBtn.style.display = "none";
  }
}

document.getElementById("viewMoreBtn").addEventListener("click", () => {
  showAll = !showAll;
  loadProperties();
});

function openModal(index) {
  const p = properties[index];
  const modal = document.getElementById("propertyModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <h2>${p.title}</h2>
    <p><strong>Location:</strong> ${p.location}</p>
    <p><strong>Price:</strong> ₹${p.budget}${p.type === "Rent" ? "k/month" : " Lakh"}</p>
    <p><strong>Type:</strong> ${p.category}</p>
    <p><strong>BHK:</strong> ${p.bhk} BHK</p>
    <p><strong>Area:</strong> ${p.area}</p>
    <button onclick="openContactForm()">📞 Contact Owner</button>
    <button style="background:#aaa; margin-top:10px" onclick="closeModal()">Close</button>
  `;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("propertyModal").style.display = "none";
}

function openContactForm() {
  document.getElementById("contactModal").style.display = "flex";
}

function closeContactModal() {
  document.getElementById("contactModal").style.display = "none";
}

function renderTopProperties() {
  const topContainer = document.getElementById("topProperties");
  topContainer.innerHTML = "";
  const topList = properties.filter(p => p.type === "Buy").slice(0, 6);
  topList.forEach((p) => {
    topContainer.innerHTML += `
      <div class="property-card" onclick="openModal(${properties.indexOf(p)})">
        <img src="${p.image}" alt="${p.title}">
        <div class="property-info">
          <h4>${p.title}</h4>
          <p>${p.location}</p>
          <div class="tags">
            <span>${p.bhk} BHK</span>
            <span>${p.area}</span>
            <span>${p.category}</span>
            <span>₹${p.budget}${p.type === "Rent" ? "k/mo" : " Lakh"}</span>
          </div>
        </div>
      </div>
    `;
  });
}

window.onload = () => {
  loadProperties();
  renderTopProperties();
};

document.querySelectorAll(".city-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedCity = e.target.dataset.city.toLowerCase();
    document.getElementById("searchInput").value = selectedCity;
    applyFilters();
  });
});

document.getElementById("propertyModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

document.getElementById("contactModal").addEventListener("click", function (e) {
  if (e.target === this) closeContactModal();
});

function submitContactForm(event) {
  event.preventDefault();
  const form = document.querySelector('.contact-form');
  const successMessage = document.getElementById("successMessage");
  form.style.display = "none";
  successMessage.classList.remove("hidden");
  setTimeout(() => {
    successMessage.classList.add("hidden");
    form.reset();
    form.style.display = "block";
    closeContactModal();
  }, 3000);
}

function goHome() {
  window.location.href = "index.html";
}


let activeType = "All"; // default state

function filterByType(type) {
  activeType = type;
  applyFilters();


  
  // Highlight active tab
  document.querySelectorAll('#typeTabs button').forEach(btn => {
    btn.classList.remove('active');
  });
  if (type === "All") {
    document.getElementById("btnAll").classList.add("active");

    // Scroll to top (header)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  if (type === "Buy") {
    document.getElementById("btnBuy").classList.add("active");

    // Scroll to Top Properties section
    const section = document.getElementById("propertyGrid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  if (type === "Rent") {
    document.getElementById("btnRent").classList.add("active");

    // Scroll to Top Properties section
    const section = document.getElementById("propertyGrid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}


const searchInputs= document.getElementById("searchInput");

// ✅ Allow search on Enter key (mobile & desktop)
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Stop default behavior (like form submit)
    applyFilters();

    // ✅ Scroll to topProperties section after small delay
    setTimeout(() => {
      const section = document.getElementById("topProperties") || document.getElementById("propertyGrid");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
});

document.getElementById("searchBtn").addEventListener("click", () => {
  applyFilters(); // apply search filters
  const section = document.getElementById("propertyGrid") || document.getElementById("topProperties");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});


// ENTER key press on input triggers scroll
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    applyFilters(); // Apply the search filters
    const section = document.getElementById("propertyGrid") || document.getElementById("topProperties");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});
