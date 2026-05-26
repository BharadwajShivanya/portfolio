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
        "Environmental Economics: Theory and Practice",
        "A comprehensive textbook covering the economic analysis of environmental policy, natural resource management, and sustainable development, widely adopted in universities across India and South Asia.",
        2018, "978-81-203-5412-7", "Prentice Hall India", #book
      ),
      (
        "Public Finance and Policy Analysis",
        "An authoritative reference on public expenditure, taxation theory, fiscal federalism, and government budgeting, drawing on decades of research and policy engagement.",
        2015, "978-81-317-2098-4", "Pearson Education India", #book
      ),
      (
        "Development Economics: Growth, Poverty and Inequality",
        "Examines the theoretical foundations and empirical dimensions of economic development, with special focus on South Asian economies, poverty alleviation, and human capital formation.",
        2020, "978-0-19-095321-1", "Oxford University Press", #book
      ),
      (
        "Macroeconomic Policy in Emerging Markets",
        "Explores macroeconomic stabilisation, monetary policy frameworks, and fiscal policy challenges facing developing and emerging market economies in the post-globalisation era.",
        2012, "978-81-7446-893-2", "Academic Foundation", #book
      ),
      (
        "Trade Liberalisation and Industrial Growth in India",
        "An empirical investigation into the effects of India's trade policy reforms since 1991, assessing sectoral competitiveness, employment outcomes, and industrial restructuring.",
        2009, "978-81-7188-712-5", "Manohar Publishers", #book
      ),
      (
        "Fiscal Federalism in India: Issues and Perspectives",
        "A policy-oriented study of centre-state fiscal relations, devolution formulas, and the role of the Finance Commission in promoting equitable regional development.",
        2022, "978-93-5407-831-6", "Routledge India", #book
      ),
      (
        "Carbon Pricing and Climate Policy in Developing Countries",
        "A research paper examining the design and distributional effects of carbon taxes and emissions trading schemes in lower-middle-income countries.",
        2021, "N/A", "Journal of Environmental Economics and Management", #paper
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
        purchaseLink  = "https://www.amazon.in/s?k=" # title;
        pubType;
      });
    };
  };
};
