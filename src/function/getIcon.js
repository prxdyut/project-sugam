import MathsIcon from "../icon/subject/maths";
import EnglishIcon from "../icon/subject/english";
import HindiIcon from "../icon/subject/hindi";
import MarathiIcon from "../icon/subject/marathi";
import ScienceIcon from "../icon/subject/science";
import GeographyIcon from "../icon/subject/geography";
import HistoryNCivicsIcon from "../icon/subject/historyNCivics";

export default function ReturnIcon({ value, color }) {
  return (
    <>
      {(() => {
        switch (value) {
          case 0:
            return <EnglishIcon color={color} />;
          case 1:
            return <HindiIcon color={color} />;
          case 2:
            return <MarathiIcon color={color} />;
          case 3:
            return <MathsIcon color={color} />;
          case 4:
            return <ScienceIcon color={color} />;
          case 5:
            return <GeographyIcon color={color} />;
          case 6:
            return <HistoryNCivicsIcon color={color} />;
          default:
            return null;
        }
      })()}
    </>
  );
}
