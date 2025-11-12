import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

function SuccessModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
          <DialogTitle className="text-center text-2xl">
            Quote Request Submitted!
          </DialogTitle>
          <DialogDescription className="text-center space-y-4 pt-4">
            <p className="text-base">
              Thank you for your interest in our cleaning services! We've received
              your quote request and will review it shortly.
            </p>
            <p className="text-base">
              Our team will contact you within 24 hours to discuss your needs and
              provide a detailed quote.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>What's next?</strong>
                <br />
                • We'll review your request
                <br />
                • Prepare a customized quote
                <br />• Reach out via phone or email
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SuccessModal;
