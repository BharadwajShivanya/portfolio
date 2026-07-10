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
      (1960, "Master's Degree in Geography — AMU",
        "Graduated with a Master's degree in Geography from Aligarh Muslim University.",
        #career),
      (1965, "Academic Teaching Beginnings at N.A.S. College",
        "Began a distinguished teaching tenure as a lecturer at N.A.S. College, Meerut.",
        #career),
      (1978, "Faculty Leadership at Military School Belgaum",
        "Appointed Head of the Faculty of Geography at the Military School, Belgaum, directing training programs.",
        #career),
      (1983, "Publication: Social Forestry in the Pin-Dar Valley",
        "Published a widely acclaimed research study drawing international attention in the Indian Journal of Forestry.",
        #publication),
      (1984, "Pre-Antarctic Acclimatisation Course under HAWS",
        "Successfully underwent intensive acclimatisation training at Sonemarg and Machhoi glacier under the High Altitude Warfare School (HAWS), Gulmarg.",
        #career),
      (1992, "Publication: Antarctica: Geopolitics and Resources",
        "Published a pioneering book on Antarctica, standing as perhaps the first book written by an Indian geographer on the subject.",
        #publication),
      (2020, "Doctoral Degree Conferred",
        "Awarded a Doctoral degree (PhD) in Geography for advanced research contributions.",
        #career),
      (2024, "Uttarakhand State Recipient Honor",
        "Honored with state level recognition for lifetime contributions to geographic education and research.",
        #award),
      (2025, "Head of Geography Department, Army Cadet College",
        "Presently serving as the Head of the Geography Department at the Army Cadet College Wing of the Indian Military Academy, Dehradun.",
        #career)
    ];
    for ((year, title, description, category) in samples.vals()) {
      ignore addEntry(entries, state, { year; title; description; category });
    };
  };
};
