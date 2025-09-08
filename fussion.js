// Dictionary of nav items
const navData = {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact"
  };
  
  // Select container
  const navContainer = document.getElementById("nav-links");
  
  // Generate nav links dynamically
  for (let key in navData) {
    const link = document.createElement("a");
    link.href = `#${key}`;
    link.textContent = navData[key];
    navContainer.appendChild(link);
  }
  
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  menuToggle.addEventListener("click", () => {
    navContainer.classList.toggle("show");
  });
  