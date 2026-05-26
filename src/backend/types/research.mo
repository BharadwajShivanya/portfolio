import Common "common";

module {
  public type ResearchType = { #paper; #article };

  public type Research = {
    id         : Nat;
    title      : Text;
    abstract_  : Text;
    venue      : Text;
    year       : Nat;
    coAuthors  : [Text];
    pdfUrl     : Common.Url;
    resType    : ResearchType;
  };

  public type ResearchInput = {
    title      : Text;
    abstract_  : Text;
    venue      : Text;
    year       : Nat;
    coAuthors  : [Text];
    pdfUrl     : Common.Url;
    resType    : ResearchType;
  };
};
