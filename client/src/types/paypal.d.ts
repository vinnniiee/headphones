export type PayPalOrderDetails = {
  payer: Record<string, any>;
  [key: string]: any; // Add other properties if needed
};

export interface PaypalOrderCreateAction {
  purchase_units: {
    amount: {
      value: string; // Assuming totalPrice is a string or can be converted to string
    };
  }[];
}

export interface PayPalActions {
  order: {
    create: (options: PaypalOrderCreateAction) => Promise<string>;
  };
}
