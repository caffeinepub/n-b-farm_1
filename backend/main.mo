import Time "mo:core/Time";
import List "mo:core/List";

actor {
  type PreOrder = {
    customerName : Text;
    phone : Text;
    mangoVariant : Text;
    packagingSize : Text;
    quantity : Nat;
    totalPrice : Nat;
    timestamp : Time.Time;
  };

  let preOrders = List.empty<PreOrder>();

  public shared ({ caller }) func submitPreOrder(
    customerName : Text,
    phone : Text,
    mangoVariant : Text,
    packagingSize : Text,
    quantity : Nat,
    unitPrice : Nat,
  ) : async () {
    let totalPrice = quantity * unitPrice;
    let order : PreOrder = {
      customerName;
      phone;
      mangoVariant;
      packagingSize;
      quantity;
      totalPrice;
      timestamp = Time.now();
    };
    preOrders.add(order);
  };

  public query ({ caller }) func getAllPreOrders() : async [PreOrder] {
    preOrders.toArray();
  };
};
