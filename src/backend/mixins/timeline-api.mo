import List "mo:core/List";
import TLLib "../lib/timeline";
import TLTypes "../types/timeline";

mixin (
  timelineEntries : List.List<TLTypes.TimelineEntry>,
  tlState : { var nextId : Nat }
) {
  public query func listTimelineEntries() : async [TLTypes.TimelineEntry] {
    TLLib.listEntries(timelineEntries);
  };

  public query func getTimelineEntry(id : Nat) : async ?TLTypes.TimelineEntry {
    TLLib.getEntry(timelineEntries, id);
  };

  public func addTimelineEntry(input : TLTypes.TimelineEntryInput) : async TLTypes.TimelineEntry {
    TLLib.addEntry(timelineEntries, tlState, input);
  };

  public func updateTimelineEntry(id : Nat, input : TLTypes.TimelineEntryInput) : async ?TLTypes.TimelineEntry {
    TLLib.updateEntry(timelineEntries, id, input);
  };

  public func deleteTimelineEntry(id : Nat) : async Bool {
    TLLib.deleteEntry(timelineEntries, id);
  };
};
