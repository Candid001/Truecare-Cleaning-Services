import { Button } from "@/components/ui/button.jsx";
import { Pencil } from "lucide-react";

function ReviewSubmitStep({ formData, onEdit }) {
  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <p className="text-sm text-blue-800">
            We respect your privacy. Your information is only used to prepare your
            cleaning quote, never shared or sold.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onEdit(1)}
            className="text-blue-600 hover:text-blue-700"
          >
            <Pencil className="w-4 h-4 mr-1" />
            Edit
          </Button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Name</span>
              <p className="text-gray-900">
                {formData.firstName} {formData.lastName}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Email</span>
              <p className="text-gray-900">{formData.email}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Phone</span>
              <p className="text-gray-900">{formData.phone}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">City</span>
              <p className="text-gray-900">
                {formData.city}, {formData.province}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Summary */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Service Summary</h3>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onEdit(2)}
            className="text-blue-600 hover:text-blue-700"
          >
            <Pencil className="w-4 h-4 mr-1" />
            Edit
          </Button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Property Type</span>
              <p className="text-gray-900">{formData.propertyType}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Cleaning Type</span>
              <p className="text-gray-900">{formData.serviceType}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Space Size</span>
              <p className="text-gray-900">{formData.spaceSize}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Rooms</span>
              <p className="text-gray-900">
                {formData.rooms}, {formData.bathrooms}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Frequency</span>
              <p className="text-gray-900">{formData.cleaningFrequency}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">
                Cleanliness Level
              </span>
              <p className="text-gray-900 capitalize">{formData.cleanlinessLevel}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">
                Supplies Provided
              </span>
              <p className="text-gray-900">{formData.provideCleaning}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Pets</span>
              <p className="text-gray-900 capitalize">{formData.hasPets}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Schedule</h3>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onEdit(3)}
            className="text-blue-600 hover:text-blue-700"
          >
            <Pencil className="w-4 h-4 mr-1" />
            Edit
          </Button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-600">
                Preferred Date
              </span>
              <p className="text-gray-900">{formData.preferredDate}</p>
            </div>
            {formData.alternateDate && (
              <div>
                <span className="text-sm font-medium text-gray-600">
                  Alternate Date
                </span>
                <p className="text-gray-900">{formData.alternateDate}</p>
              </div>
            )}
            <div>
              <span className="text-sm font-medium text-gray-600">Time</span>
              <p className="text-gray-900">{formData.preferredTime}</p>
            </div>
          </div>

          {formData.additionalNotes && (
            <div>
              <span className="text-sm font-medium text-gray-600">
                Additional Notes/Instructions
              </span>
              <p className="text-gray-900 mt-1">{formData.additionalNotes}</p>
            </div>
          )}
        </div>
      </div>

      {/* Uploaded Images */}
      {formData.photos && formData.photos.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Uploaded Images</h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onEdit(3)}
              className="text-blue-600 hover:text-blue-700"
            >
              <Pencil className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formData.photos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewSubmitStep;
