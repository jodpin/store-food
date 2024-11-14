import { RiDoubleQuotesL } from "react-icons/ri";

const QuoteSection = () => {
  return (
    <div className="section quote">
      <p className="quote-text">
        <RiDoubleQuotesL className="quotation-marks"/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam, quo error libero aliquid praesentium incidunt ducimus quisquam tempore quidem.
      </p>
      <p className="quote-author"> Antony boudeun</p>
    </div>
  );
};

export default QuoteSection;
