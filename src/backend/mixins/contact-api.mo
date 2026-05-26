import List "mo:core/List";
import Time "mo:core/Time";
import ConLib "../lib/contact";
import ConTypes "../types/contact";

mixin (
  contactMessages : List.List<ConTypes.ContactMessage>,
  conState : { var nextId : Nat }
) {
  public func submitContactMessage(input : ConTypes.ContactMessageInput) : async ConTypes.ContactMessage {
    ConLib.submitMessage(contactMessages, conState, input, Time.now());
  };

  // Admin only — list all received messages
  public query func listContactMessages() : async [ConTypes.ContactMessage] {
    ConLib.listMessages(contactMessages);
  };

  public func deleteContactMessage(id : Nat) : async Bool {
    ConLib.deleteMessage(contactMessages, id);
  };
};
