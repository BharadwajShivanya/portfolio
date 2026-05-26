import Common "common";

module {
  public type ContactMessage = {
    id        : Nat;
    name      : Text;
    email     : Text;
    subject   : Text;
    message   : Text;
    timestamp : Common.Timestamp;
  };

  public type ContactMessageInput = {
    name    : Text;
    email   : Text;
    subject : Text;
    message : Text;
  };
};
