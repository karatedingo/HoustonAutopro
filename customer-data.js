// Customer data array - modify this to add your actual customer data
window.customerData = [
  {
    name: "John D.",
    vehicle: "2023 Ford F-150 Raptor",
    vehicleType: "f150",
    testimonial: "Shawn made the process effortless! Got me approved despite my past credit challenges.",
    image: "images/customers/customer1.jpg",
    dealership: "Houston Ford"
  },
  {
    name: "Sarah M.",
    vehicle: "2022 Ford Mustang GT",
    vehicleType: "mustang",
    testimonial: "Best car buying experience ever! No pressure, just great service.",
    image: "images/customers/customer2.jpg",
    dealership: "Austin Ford"
  },
  // Add more customers here following the same format
  // The page will automatically paginate them
  // For 50+ customers, you might want to generate this list programmatically
];

// Example of how to generate 50 placeholder entries (remove in production)
for (let i = 3; i <= 50; i++) {
  const vehicleType = i % 3 === 0 ? 'f150' : i % 3 === 1 ? 'mustang' : 'explorer';
  const vehicleName = 
    vehicleType === 'f150' ? `202${Math.floor(i/12)+1} Ford F-150` :
    vehicleType === 'mustang' ? `202${Math.floor(i/12)+1} Ford Mustang` :
    `202${Math.floor(i/12)+1} Ford Explorer`;
  
  window.customerData.push({
    name: `Customer ${i}`,
    vehicle: vehicleName,
    vehicleType: vehicleType,
    testimonial: `This is testimonial number ${i}. The Simple Salesman made the process so easy!`,
    image: `images/customers/customer${i}.jpg`,
    dealership: i % 2 === 0 ? "Houston Ford" : "Dallas Ford"
  });
}