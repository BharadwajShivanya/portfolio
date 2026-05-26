import Common "common";

module {
  public type GalleryImage = {
    id        : Nat;
    imageUrl  : Common.Url;
    caption   : Text;
    eventName : Text;
    year      : Nat;
  };

  public type GalleryImageInput = {
    imageUrl  : Common.Url;
    caption   : Text;
    eventName : Text;
    year      : Nat;
  };
};
