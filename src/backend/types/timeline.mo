module {
  public type TimelineCategory = { #career; #publication; #award };

  public type TimelineEntry = {
    id       : Nat;
    year     : Nat;
    title    : Text;
    description : Text;
    category : TimelineCategory;
  };

  public type TimelineEntryInput = {
    year     : Nat;
    title    : Text;
    description : Text;
    category : TimelineCategory;
  };
};
