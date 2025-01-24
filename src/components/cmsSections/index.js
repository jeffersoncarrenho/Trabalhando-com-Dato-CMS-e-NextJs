import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageFAQDisplayQuestionsSection } from "./PageFAQDisplayQuestionsSection";
import { PageHomeHerosection } from "./PageHomeHerosection";
import { SeoBlock } from "./SeoBlock";

export const cmsSections = {
  PagefaqDisplayquestionSectionRecord: PageFAQDisplayQuestionsSection,
  CommonSeoBlockRecord: SeoBlock,
  CommonMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: PageHomeHerosection,
  CommonFooterRecord: (props) => <Footer {...props} />,
};
