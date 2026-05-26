import List "mo:core/List";
import GalLib "../lib/gallery";
import GalTypes "../types/gallery";

mixin (
  galleryImages : List.List<GalTypes.GalleryImage>,
  galState : { var nextId : Nat }
) {
  public query func listGalleryImages() : async [GalTypes.GalleryImage] {
    GalLib.listImages(galleryImages);
  };

  public query func getGalleryImage(id : Nat) : async ?GalTypes.GalleryImage {
    GalLib.getImage(galleryImages, id);
  };

  public func addGalleryImage(input : GalTypes.GalleryImageInput) : async GalTypes.GalleryImage {
    GalLib.addImage(galleryImages, galState, input);
  };

  public func updateGalleryImage(id : Nat, input : GalTypes.GalleryImageInput) : async ?GalTypes.GalleryImage {
    GalLib.updateImage(galleryImages, id, input);
  };

  public func deleteGalleryImage(id : Nat) : async Bool {
    GalLib.deleteImage(galleryImages, id);
  };
};
