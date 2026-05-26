import List "mo:core/List";
import Types "../types/contact";

module {
  public func submitMessage(
    messages : List.List<Types.ContactMessage>,
    state : { var nextId : Nat },
    input : Types.ContactMessageInput,
    now : Int
  ) : Types.ContactMessage {
    let id = state.nextId;
    state.nextId += 1;
    let msg : Types.ContactMessage = {
      id;
      name      = input.name;
      email     = input.email;
      subject   = input.subject;
      message   = input.message;
      timestamp = now;
    };
    messages.add(msg);
    msg;
  };

  public func listMessages(
    messages : List.List<Types.ContactMessage>
  ) : [Types.ContactMessage] {
    messages.toArray();
  };

  public func deleteMessage(
    messages : List.List<Types.ContactMessage>,
    id : Nat
  ) : Bool {
    let sizeBefore = messages.size();
    messages.retain(func(m) { m.id != id });
    messages.size() < sizeBefore;
  };
};
