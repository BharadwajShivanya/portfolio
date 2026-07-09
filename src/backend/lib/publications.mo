import List "mo:core/List";
import Types "../types/publications";

module {
  public func listPublications(
    publications : List.List<Types.Publication>
  ) : [Types.Publication] {
    publications.toArray();
  };

  public func getPublication(
    publications : List.List<Types.Publication>,
    id : Nat
  ) : ?Types.Publication {
    publications.find(func(p) { p.id == id });
  };

  public func addPublication(
    publications : List.List<Types.Publication>,
    state : { var nextId : Nat },
    input : Types.PublicationInput
  ) : Types.Publication {
    let id = state.nextId;
    state.nextId += 1;
    let pub : Types.Publication = {
      id;
      title        = input.title;
      description  = input.description;
      year         = input.year;
      isbn         = input.isbn;
      publisher    = input.publisher;
      coverImageUrl = input.coverImageUrl;
      purchaseLink  = input.purchaseLink;
      pubType      = input.pubType;
    };
    publications.add(pub);
    pub;
  };

  public func updatePublication(
    publications : List.List<Types.Publication>,
    id : Nat,
    input : Types.PublicationInput
  ) : ?Types.Publication {
    var result : ?Types.Publication = null;
    publications.mapInPlace(
      func(p) {
        if (p.id == id) {
          let updated : Types.Publication = {
            id;
            title        = input.title;
            description  = input.description;
            year         = input.year;
            isbn         = input.isbn;
            publisher    = input.publisher;
            coverImageUrl = input.coverImageUrl;
            purchaseLink  = input.purchaseLink;
            pubType      = input.pubType;
          };
          result := ?updated;
          updated;
        } else { p };
      }
    );
    result;
  };

  public func deletePublication(
    publications : List.List<Types.Publication>,
    id : Nat
  ) : Bool {
    let sizeBefore = publications.size();
    publications.retain(func(p) { p.id != id });
    publications.size() < sizeBefore;
  };

  public func seedSampleData(
    publications : List.List<Types.Publication>,
    state : { var nextId : Nat }
  ) : () {
    if (state.nextId > 0) { return }; // already seeded
    let samples : [(Text, Text, Nat, Text, Text, Types.PublicationType)] = [
      (
        "Cartography of the Cold: Mapping the End of the Earth",
        "A definitive textbook on polar surveying methodologies. Describes technical approaches to triangulation, visual mapping, and astronomical navigation under sub-zero temperatures, forming the basis for later modern GPS mappings of ice structures.",
        1984, "978-0-19-823120-1", "Oxford University Press", #book
      ),
      (
        "Antarctica: The First Footprints of Science",
        "A comprehensive historical and geographical retrospective of scientific activities in Antarctica. Focuses on the transition from competitive territorial exploration to collaborative environmental science under the Antarctic Treaty System.",
        2018, "978-0-19-095321-1", "Oxford University Press", #book
      ),
      (
        "Glaciological Geomorphology of Polar Ice Sheets",
        "Published adaptation of Dr. Sharma's groundbreaking doctoral thesis, providing the first systematic description of glacier calving structures in the Dronning Maud Land quadrant.",
        1963, "N/A", "Journal of the Royal Geographical Society", #paper
      ),
      (
        "Micro-relief and Soil Formations of McMurdo Dry Valleys",
        "An in-depth geological and geomorphological analysis of dry soils in Antarctica, detailing thermal contraction cracking patterns and wind-blown erosion.",
        1973, "N/A", "Geoderma - International Soil Science Journal", #paper
      ),
      (
        "A History of Antarctic Explorations and Cartographic Claims",
        "A critical study tracing boundary drawing, cartographic records, and international claims over polar coordinates prior to the 1959 treaty.",
        1995, "N/A", "Polar Record", #paper
      )
    ];
    for ((title, description, year, isbn, publisher, pubType) in samples.vals()) {
      ignore addPublication(publications, state, {
        title;
        description;
        year;
        isbn;
        publisher;
        coverImageUrl = "";
        purchaseLink  = "https://www.amazon.com/s?k=" # title;
        pubType;
      });
    };
  };
};
