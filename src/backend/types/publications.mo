import Common "common";

module {
  public type PublicationType = { #book; #paper };

  public type Publication = {
    id        : Nat;
    title     : Text;
    description : Text;
    year      : Nat;
    isbn      : Text;
    publisher : Text;
    coverImageUrl : Common.Url;
    purchaseLink  : Common.Url;
    pubType   : PublicationType;
  };

  public type PublicationInput = {
    title     : Text;
    description : Text;
    year      : Nat;
    isbn      : Text;
    publisher : Text;
    coverImageUrl : Common.Url;
    purchaseLink  : Common.Url;
    pubType   : PublicationType;
  };
};
