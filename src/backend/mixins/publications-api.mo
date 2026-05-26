import List "mo:core/List";
import PubLib "../lib/publications";
import PubTypes "../types/publications";

mixin (
  publications : List.List<PubTypes.Publication>,
  pubState : { var nextId : Nat }
) {
  public query func listPublications() : async [PubTypes.Publication] {
    PubLib.listPublications(publications);
  };

  public query func getPublication(id : Nat) : async ?PubTypes.Publication {
    PubLib.getPublication(publications, id);
  };

  public func addPublication(input : PubTypes.PublicationInput) : async PubTypes.Publication {
    PubLib.addPublication(publications, pubState, input);
  };

  public func updatePublication(id : Nat, input : PubTypes.PublicationInput) : async ?PubTypes.Publication {
    PubLib.updatePublication(publications, id, input);
  };

  public func deletePublication(id : Nat) : async Bool {
    PubLib.deletePublication(publications, id);
  };
};
