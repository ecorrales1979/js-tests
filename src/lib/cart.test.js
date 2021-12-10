import Cart from './cart';

let cart;

beforeEach(() => {
  cart = new Cart();
});

describe('Cart', () => {
  it('should return 0 when getTotal() is executed on a newly created instance', () => {
    expect(cart.getTotal()).toBe(0);
  });

  it('should multiply quantity and price and result total amount', () => {
    const item = {
      product: {
        title: 'Product 1',
        price: 3590,
      },
      quantity: 2,
    }

    cart.add(item);

    expect(cart.getTotal()).toBe(7180);
  });
});