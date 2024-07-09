function pizzaCart() {
  return {
    cart: [],
    showMessage: false,
    message: '',
    addToCart(name, price) {
      let found = false;
      this.cart.forEach(item => {
        if (item.name === name) {
          item.quantity++;
          found = true;
        }
      });
      if (!found) {
        this.cart.push({ name, price, quantity: 1 });
      }
    },
    removeFromCart(name) {
      this.cart = this.cart.filter(item => item.name !== name);
    },
    get totalCost() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    },
    checkout() {
      let payment = prompt("Enter payment amount:");
      if (parseFloat(payment) >= this.totalCost) {
        this.message = "Enjoy your pizzas!";
        this.cart = [];
      } else {
        this.message = "Sorry - that is not enough money!";
      }
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    }
  };
}
