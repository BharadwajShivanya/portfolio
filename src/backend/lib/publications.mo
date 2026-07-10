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
        "Antarctica: Geopolitics and Resources",
        "Perhaps the first book written by an Indian Geographer on Antarctica. Details the geopolitical coordinates, boundary drawing issues, and polar resource potentials.",
        1992, "978-8121002851", "Inter-India Publications", #book
      ),
      (
        "Social Forestry in the Pin-Dar Valley",
        "A well-researched study drawing wide international attention on afforestation, geographic contours, and environmental ecology in the Pindari Valley region.",
        1983, "N/A", "Indian Journal of Forestry", #paper
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
