const handleWhatsAppOrder = (userData, cartItems, totalPrice) => {
  const phoneNumber = "919398453760"; // Your business number
  
  // Format the item list
  const itemsText = cartItems.map(item => 
    `- ${item.name} (x${item.quantity})`
  ).join('%0A'); // %0A is a line break in URLs

  // Construct the message
  const message = `*NEW ORDER REQUEST - EXCIPURE PHARMA*%0A%0A` +
    `*CUSTOMER DETAILS*%0A` +
    `Name: ${userData.name}%0A` +
    `Phone: ${userData.phone}%0A` +
    `Address: ${userData.address}, ${userData.city} - ${userData.pincode}%0A%0A` +
    `*ORDER SUMMARY*%0A${itemsText}%0A%0A` +
    `*TOTAL: ₹${totalPrice}*`;

  // Open WhatsApp
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};
