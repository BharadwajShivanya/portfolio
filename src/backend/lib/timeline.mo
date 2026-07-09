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
      (1931, "Birth in the Himalayas",
        "Born in the mountainous region of Himachal Pradesh, India, fostering a deep, lifelong fascination with glacier systems, geography, and earth sciences.",
        #career),
      (1952, "B.Sc. in Geography & Geology — University of Delhi",
        "Graduated with the highest honors, specializing in physical geography and cartography. Began field mapping in high-altitude Himalayan terrains.",
        #career),
      (1955, "M.Sc. in Cartography & Geodesy — Aligarh Muslim University",
        "Completed post-graduate studies with a master's thesis mapping the shifting pathways of Himalayan glaciers, introducing new triangulation techniques.",
        #career),
      (1962, "Ph.D. in Polar Geography — University of London",
        "Conferred his doctorate for the historic thesis 'Glaciological Geomorphology of Polar Ice Sheets,' making him the first human to receive a PhD focused entirely on Antarctic geography.",
        #career),
      (1965, "Pioneering Antarctic Expedition Leader",
        "Appointed Lead Scientist for the Joint Indo-British Polar Survey. Spent 14 months on the Antarctic ice sheets conducting glaciological measurements.",
        #career),
      (1972, "McMurdo Dry Valleys Soil & Ice Survey",
        "Led the groundbreaking research expedition to the Dry Valleys of Antarctica, publishing a seminal study on hyper-arid polar soil systems.",
        #career),
      (1984, "Publication: Cartography of the Cold",
        "Published his masterpiece 'Cartography of the Cold: Mapping the End of the Earth,' defining the standard methodology for geographical surveying under extreme temperatures.",
        #publication),
      (1990, "Royal Geographical Society Founder's Medal",
        "Awarded the prestigious Founder's Medal in London for outstanding contributions to polar glaciology and deep-south hemisphere cartography.",
        #award),
      (2005, "Padma Bhushan Conferred",
        "Awarded India's third-highest civilian honor for his extraordinary, lifelong contributions to geography, polar science, and international research collaborations.",
        #award),
      (2018, "Publication: Antarctica: The First Footprints of Science",
        "Published his retrospective monograph covering fifty years of geographic evolutions on the frozen continent, published by Oxford University Press.",
        #publication),
      (2021, "Confronting Climate Shift — Lifetime Lecture",
        "Delivered the prestigious National Science Keynote warning of ice shelf disintegration, reflecting on a lifetime of observing Antarctica's changing face.",
        #career)
    ];
    for ((year, title, description, category) in samples.vals()) {
      ignore addEntry(entries, state, { year; title; description; category });
    };
  };
};
