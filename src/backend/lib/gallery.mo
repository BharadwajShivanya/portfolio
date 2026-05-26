import List "mo:core/List";
import Types "../types/gallery";

module {
  public func listImages(
    images : List.List<Types.GalleryImage>
  ) : [Types.GalleryImage] {
    images.toArray();
  };

  public func getImage(
    images : List.List<Types.GalleryImage>,
    id : Nat
  ) : ?Types.GalleryImage {
    images.find(func(img) { img.id == id });
  };

  public func addImage(
    images : List.List<Types.GalleryImage>,
    state : { var nextId : Nat },
    input : Types.GalleryImageInput
  ) : Types.GalleryImage {
    let id = state.nextId;
    state.nextId += 1;
    let img : Types.GalleryImage = {
      id;
      imageUrl  = input.imageUrl;
      caption   = input.caption;
      eventName = input.eventName;
      year      = input.year;
    };
    images.add(img);
    img;
  };

  public func updateImage(
    images : List.List<Types.GalleryImage>,
    id : Nat,
    input : Types.GalleryImageInput
  ) : ?Types.GalleryImage {
    var result : ?Types.GalleryImage = null;
    images.mapInPlace(
      func(img) {
        if (img.id == id) {
          let updated : Types.GalleryImage = {
            id;
            imageUrl  = input.imageUrl;
            caption   = input.caption;
            eventName = input.eventName;
            year      = input.year;
          };
          result := ?updated;
          updated;
        } else { img };
      }
    );
    result;
  };

  public func deleteImage(
    images : List.List<Types.GalleryImage>,
    id : Nat
  ) : Bool {
    let sizeBefore = images.size();
    images.retain(func(img) { img.id != id });
    images.size() < sizeBefore;
  };

  public func seedSampleData(
    images : List.List<Types.GalleryImage>,
    state : { var nextId : Nat }
  ) : () {
    if (state.nextId > 0) { return };
    let samples : [(Text, Text, Nat)] = [
      (
        "Keynote Address at the 59th Annual Conference of the Indian Economic Association, New Delhi. Prof. Sharma delivered the presidential address on sustainable development and fiscal policy.",
        "Indian Economic Association Annual Conference",
        2019
      ),
      (
        "Panel discussion on 'Rethinking Public Finance in Emerging Economies' at the International Economic Association World Congress, Mexico City.",
        "IEA World Congress, Mexico City",
        2017
      ),
      (
        "Receiving the Malcolm Adiseshiah Award for Distinguished Contributions to Development Studies at a ceremony in Chennai.",
        "Malcolm Adiseshiah Award Ceremony",
        2009
      ),
      (
        "Workshop on Environmental Economics and Climate Policy co-organised with the Institute of Economic Growth, University of Delhi Enclave.",
        "IEG-DSE Environmental Economics Workshop",
        2021
      ),
      (
        "Visiting fellowship period at the London School of Economics; pictured in discussion with colleagues at STICERD.",
        "LSE Visiting Fellowship",
        2012
      )
    ];
    for ((caption, eventName, year) in samples.vals()) {
      ignore addImage(images, state, {
        imageUrl  = "";
        caption;
        eventName;
        year;
      });
    };
  };
};
