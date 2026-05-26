import List "mo:core/List";
import ResLib "../lib/research";
import ResTypes "../types/research";

mixin (
  research : List.List<ResTypes.Research>,
  resState : { var nextId : Nat }
) {
  public query func listResearch() : async [ResTypes.Research] {
    ResLib.listResearch(research);
  };

  public query func getResearch(id : Nat) : async ?ResTypes.Research {
    ResLib.getResearch(research, id);
  };

  public func addResearch(input : ResTypes.ResearchInput) : async ResTypes.Research {
    ResLib.addResearch(research, resState, input);
  };

  public func updateResearch(id : Nat, input : ResTypes.ResearchInput) : async ?ResTypes.Research {
    ResLib.updateResearch(research, id, input);
  };

  public func deleteResearch(id : Nat) : async Bool {
    ResLib.deleteResearch(research, id);
  };
};
