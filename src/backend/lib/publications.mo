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
        purchaseLink  = if (title == "Antarctica: Geopolitics and Resources") {
          "https://www.amazon.com/Antarctica-Geopolitics-Ishwar-Chandra-Sharma/dp/8121002850/ref=sr_1_1?dib=eyJ2IjoiMSJ9.GJQqAbAoVcG-GWa0cstE2_PqFMjKQPs3rBe0e3kYyYH7Mq2ehIsZpj5GrhqPu28-36EfBQBeAHy-Jcs4tk0545kCabrrWnEk39oqXTpYMkN8TPoHlX2tNLNy5E5ALp-f9ktsH_lt6K_IsHIewCUvWaNH3w_V-okZ3WPg0ZINeejP9madc_7wrq1qhFDc76v4sPpSxBtoxtrVx1sNFU23Arao0uiU_yKrxuqdTX6MqIA.s1ba3iMsuAI3RYlcIPCB3PS0Egkqxfh1GQ6ePKeaJHg&dib_tag=se&keywords=Antarctica+Geopolitics+and+Resources+Sharma&qid=1783684622&sr=8-1";
        } else {
          "https://www.amazon.com/s?k=" # title;
        };
        pubType;
      });
    };
  };
};
