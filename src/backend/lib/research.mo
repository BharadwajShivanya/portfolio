import List "mo:core/List";
import Types "../types/research";

module {
  public func listResearch(
    research : List.List<Types.Research>
  ) : [Types.Research] {
    research.toArray();
  };

  public func getResearch(
    research : List.List<Types.Research>,
    id : Nat
  ) : ?Types.Research {
    research.find(func(r) { r.id == id });
  };

  public func addResearch(
    research : List.List<Types.Research>,
    state : { var nextId : Nat },
    input : Types.ResearchInput
  ) : Types.Research {
    let id = state.nextId;
    state.nextId += 1;
    let item : Types.Research = {
      id;
      title     = input.title;
      abstract_ = input.abstract_;
      venue     = input.venue;
      year      = input.year;
      coAuthors = input.coAuthors;
      pdfUrl    = input.pdfUrl;
      resType   = input.resType;
    };
    research.add(item);
    item;
  };

  public func updateResearch(
    research : List.List<Types.Research>,
    id : Nat,
    input : Types.ResearchInput
  ) : ?Types.Research {
    var result : ?Types.Research = null;
    research.mapInPlace(
      func(r) {
        if (r.id == id) {
          let updated : Types.Research = {
            id;
            title     = input.title;
            abstract_ = input.abstract_;
            venue     = input.venue;
            year      = input.year;
            coAuthors = input.coAuthors;
            pdfUrl    = input.pdfUrl;
            resType   = input.resType;
          };
          result := ?updated;
          updated;
        } else { r };
      }
    );
    result;
  };

  public func deleteResearch(
    research : List.List<Types.Research>,
    id : Nat
  ) : Bool {
    let sizeBefore = research.size();
    research.retain(func(r) { r.id != id });
    research.size() < sizeBefore;
  };

  public func seedSampleData(
    research : List.List<Types.Research>,
    state : { var nextId : Nat }
  ) : () {
    if (state.nextId > 0) { return };
    let samples : [(Text, Text, Text, Nat, [Text], Types.ResearchType)] = [
      (
        "Green Growth and Structural Transformation: Evidence from Indian Manufacturing",
        "This paper investigates whether environmental regulation accelerates or retards structural transformation in Indian manufacturing. Using panel data from the Annual Survey of Industries, we find that pollution pricing instruments promote capital-intensive, cleaner production modes without significant output losses in large firms.",
        "Journal of Development Economics",
        2023,
        ["R. Mehta", "A. Krishnamurthy"],
        #paper
      ),
      (
        "Fiscal Decentralisation and Primary Healthcare Outcomes in Rural India",
        "Exploiting variation in Finance Commission transfers across Indian states, this study documents a robust positive relationship between local fiscal autonomy and child immunisation rates, suggesting that decentralised spending improves healthcare delivery in underserved rural areas.",
        "World Development",
        2022,
        ["S. Patel", "N. Sharma"],
        #paper
      ),
      (
        "Commodity Price Volatility and Poverty Traps in Agrarian Economies",
        "We model the interaction between agricultural commodity price fluctuations and household savings behaviour in subsistence economies. The theoretical framework is validated against longitudinal survey data from Madhya Pradesh and Rajasthan.",
        "Economic Journal",
        2020,
        ["P. Gupta"],
        #paper
      ),
      (
        "Trade Agreements and Wage Inequality: A Computable General Equilibrium Analysis",
        "Using a multi-sector CGE model calibrated to Indian National Accounts data, this article decomposes the wage inequality effects of preferential trade agreements, distinguishing between within-sector skill premia and between-sector reallocation effects.",
        "Review of International Economics",
        2019,
        ["V. Iyer", "K. Nair"],
        #paper
      ),
      (
        "Measuring Multi-Dimensional Poverty: A Capability Approach for South Asia",
        "Drawing on Sen's capability framework, this article proposes a composite index of multi-dimensional deprivation tailored to South Asian socioeconomic contexts, incorporating dimensions of nutrition, education, housing, and social participation.",
        "Oxford Development Studies",
        2017,
        ["M. Singh", "D. Chatterjee"],
        #article
      ),
      (
        "Monetary Policy Transmission in a Financially Segmented Economy",
        "An empirical examination of how repo rate changes propagate through formal and informal credit markets in India, with implications for the efficacy of inflation targeting under financial market segmentation.",
        "Indian Economic Review",
        2016,
        ["B. Rao"],
        #article
      )
    ];
    for ((title, abstract_, venue, year, coAuthors, resType) in samples.vals()) {
      ignore addResearch(research, state, {
        title;
        abstract_;
        venue;
        year;
        coAuthors;
        pdfUrl  = "";
        resType;
      });
    };
  };
};
