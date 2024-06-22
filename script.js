document.addEventListener('DOMContentLoaded', () => {
    const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll('.cart-item').forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
        const price = parseFloat(item.dataset.price);
        total += quantity * price;
      });
      document.querySelector('.total-price').textContent = `Total: $${total}`;
    };
  
    document.querySelectorAll('.quantity-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        const cartItem = event.target.closest('.cart-item');
        let quantity = parseInt(cartItem.querySelector('.quantity').textContent, 10);
  
        if (event.target.classList.contains('plus')) {
          quantity++;
        } else if (event.target.classList.contains('minus')) {
          if (quantity > 1) quantity--;
        }
  
        cartItem.querySelector('.quantity').textContent = quantity;
        cartItem.querySelector('.item-price').textContent = `$${(quantity * parseFloat(cartItem.dataset.price)).toFixed(2)}`;
  
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        const cartItem = event.target.closest('.cart-item');
        cartItem.remove();
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll('.like-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        event.target.classList.toggle('liked');
      });
    });
  
    updateTotalPrice();
  });
  