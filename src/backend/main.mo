import List "mo:core/List";
import PubTypes "types/publications";
import ResTypes "types/research";
import TLTypes "types/timeline";
import GalTypes "types/gallery";
import ConTypes "types/contact";
import PubLib "lib/publications";
import ResLib "lib/research";
import TLLib "lib/timeline";
import GalLib "lib/gallery";
import PubMixin "mixins/publications-api";
import ResMixin "mixins/research-api";
import TLMixin "mixins/timeline-api";
import GalMixin "mixins/gallery-api";
import ConMixin "mixins/contact-api";





actor {
  // --- Stable state ---
  let publications    = List.empty<PubTypes.Publication>();
  let pubState        = { var nextId = 0 };

  let research        = List.empty<ResTypes.Research>();
  let resState        = { var nextId = 0 };

  let timelineEntries = List.empty<TLTypes.TimelineEntry>();
  let tlState         = { var nextId = 0 };

  let galleryImages   = List.empty<GalTypes.GalleryImage>();
  let galState        = { var nextId = 0 };

  let contactMessages = List.empty<ConTypes.ContactMessage>();
  let conState        = { var nextId = 0 };

  // --- Seed sample data on first install ---
  PubLib.seedSampleData(publications, pubState);
  ResLib.seedSampleData(research, resState);
  TLLib.seedSampleData(timelineEntries, tlState);
  GalLib.seedSampleData(galleryImages, galState);

  // --- Mixin composition ---
  include PubMixin(publications, pubState);
  include ResMixin(research, resState);
  include TLMixin(timelineEntries, tlState);
  include GalMixin(galleryImages, galState);
  include ConMixin(contactMessages, conState);

};
