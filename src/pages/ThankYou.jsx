import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/Button.jsx";

function ThankYou() {
  return (
    <div className="py-20 px-5 text-center max-w-2xl mx-auto space-y-6">
      <div className="flex justify-center">
        <CheckCircle2 className="w-20 h-20 text-green-500" />
      </div>
      <h1 className="font-medium text-[32px] md:text-[40px] leading-[120%]">
        Thank You for Your Quote Request!
      </h1>
      <p className="text-lg text-grey-sec">
        We've received your request and will review it shortly. Our team
        will reach out within 24 hours to discuss your needs and provide a
        detailed quote.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
        <p className="text-sm text-blue-800">
          <strong>What's next?</strong>
          <br />
          • We'll review your request
          <br />
          • Prepare a customized quote
          <br />• Reach out via phone or email
        </p>
      </div>
      <Link to="/" className="inline-block">
        <Button text="Back to Home" variant="primary" />
      </Link>
    </div>
  );
}

export default ThankYou;
