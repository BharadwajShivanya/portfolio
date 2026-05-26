import List "mo:core/List";
import Types "../types/timeline";

module {
  public func listEntries(
    entries : List.List<Types.TimelineEntry>
  ) : [Types.TimelineEntry] {
    entries.toArray();
  };

  public func getEntry(
    entries : List.List<Types.TimelineEntry>,
    id : Nat
  ) : ?Types.TimelineEntry {
    entries.find(func(e) { e.id == id });
  };

  public func addEntry(
    entries : List.List<Types.TimelineEntry>,
    state : { var nextId : Nat },
    input : Types.TimelineEntryInput
  ) : Types.TimelineEntry {
    let id = state.nextId;
    state.nextId += 1;
    let entry : Types.TimelineEntry = {
      id;
      year        = input.year;
      title       = input.title;
      description = input.description;
      category    = input.category;
    };
    entries.add(entry);
    entry;
  };

  public func updateEntry(
    entries : List.List<Types.TimelineEntry>,
    id : Nat,
    input : Types.TimelineEntryInput
  ) : ?Types.TimelineEntry {
    var result : ?Types.TimelineEntry = null;
    entries.mapInPlace(
      func(e) {
        if (e.id == id) {
          let updated : Types.TimelineEntry = {
            id;
            year        = input.year;
            title       = input.title;
            description = input.description;
            category    = input.category;
          };
          result := ?updated;
          updated;
        } else { e };
      }
    );
    result;
  };

  public func deleteEntry(
    entries : List.List<Types.TimelineEntry>,
    id : Nat
  ) : Bool {
    let sizeBefore = entries.size();
    entries.retain(func(e) { e.id != id });
    entries.size() < sizeBefore;
  };

  public func seedSampleData(
    entries : List.List<Types.TimelineEntry>,
    state : { var nextId : Nat }
  ) : () {
    if (state.nextId > 0) { return };
    let samples : [(Nat, Text, Text, Types.TimelineCategory)] = [
      (1982, "B.A. (Honours) Economics — University of Delhi",
        "Graduated with First Class Honours in Economics from St. Stephen's College, University of Delhi, laying the foundation for a distinguished academic career.",
        #career),
      (1984, "M.A. Economics — Jawaharlal Nehru University",
        "Completed Master's degree in Economics at the Centre for Economic Studies and Planning, JNU, with a specialisation in Development Economics and Political Economy.",
        #career),
      (1989, "Ph.D. Awarded — University of Cambridge",
        "Doctorate conferred by the Faculty of Economics, University of Cambridge, for a thesis on fiscal policy and structural adjustment in developing economies, supervised by Prof. A.K. Sen.",
        #career),
      (1990, "Assistant Professor — Delhi School of Economics",
        "Joined the Department of Economics, Delhi School of Economics, University of Delhi, as Assistant Professor, teaching Development Economics and Public Finance.",
        #career),
      (1998, "Associate Professor & Reader — Delhi School of Economics",
        "Promoted to Reader following a decade of internationally recognised research output. Began directing the Centre for Development Policy Studies.",
        #career),
      (2004, "Professor — Delhi School of Economics",
        "Appointed Full Professor of Economics at the Delhi School of Economics. Established the Environmental and Resource Economics research group.",
        #career),
      (2009, "Awarded the Malcolm Adiseshiah Award for Distinguished Contributions to Development Studies",
        "Recognised by the Malcolm and Elizabeth Adiseshiah Trust for sustained and seminal contributions to the study of poverty, inequality, and sustainable development.",
        #award),
      (2012, "Visiting Fellow — London School of Economics and Political Science",
        "Held a visiting fellowship at the Suntory and Toyota International Centres for Economics and Related Disciplines (STICERD), LSE, researching fiscal federalism in South Asia.",
        #career),
      (2015, "ICSSR National Fellow",
        "Awarded the Indian Council of Social Science Research (ICSSR) National Fellowship, one of India's highest honours for social science researchers.",
        #award),
      (2018, "Publication: Environmental Economics: Theory and Practice",
        "Landmark textbook on environmental economics published by Prentice Hall India, adopted by over forty universities across India and South Asia within two years of publication.",
        #publication),
      (2020, "Distinguished Professor — University of Delhi",
        "Elevated to the rank of Distinguished Professor, the highest academic rank at the University of Delhi, in recognition of exceptional contributions to scholarship and teaching.",
        #career),
      (2022, "Publication: Fiscal Federalism in India — Routledge India",
        "Major policy-oriented monograph on centre-state fiscal relations in India, widely cited in Finance Commission deliberations and parliamentary committee reports.",
        #publication)
    ];
    for ((year, title, description, category) in samples.vals()) {
      ignore addEntry(entries, state, { year; title; description; category });
    };
  };
};
