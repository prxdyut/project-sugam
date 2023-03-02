export default function ReturnSubject({ value }) {
  return (
    <>
      {(() => {
        switch (value) {
          case 0:
            return "English";
          case 1:
            return "Hindi";
          case 2:
            return "Marathi";
          case 3:
            return "Maths";
          case 4:
            return "Science";
          case 5:
            return "Geography";
          case 6:
            return "History & Civics";
          default:
            return null;
        }
      })()}
    </>
  );
}
