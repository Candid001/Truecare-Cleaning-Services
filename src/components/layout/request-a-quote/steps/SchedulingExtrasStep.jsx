import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button.jsx";
import { CalendarIcon, Upload, X } from "lucide-react";
import { format } from "date-fns";

const TIME_OPTIONS = [
  "Morning (9-11 AM)",
  "Afternoon (12-3 PM)",
  "Evening (4-6 PM)",
  "Flexible",
];

function SchedulingExtrasStep({ formData, updateFormData, errors }) {
  const [preferredDate, setPreferredDate] = useState(
    formData.preferredDate ? new Date(formData.preferredDate) : undefined
  );
  const [alternateDate, setAlternateDate] = useState(
    formData.alternateDate ? new Date(formData.alternateDate) : undefined
  );

  const handlePreferredDateChange = (date) => {
    setPreferredDate(date);
    updateFormData("preferredDate", date ? format(date, "MMM dd, yyyy") : "");
  };

  const handleAlternateDateChange = (date) => {
    setAlternateDate(date);
    updateFormData("alternateDate", date ? format(date, "MMM dd, yyyy") : "");
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    const currentPhotos = formData.photos || [];
    updateFormData("photos", [...currentPhotos, ...files]);
  };

  const removePhoto = (index) => {
    const currentPhotos = formData.photos || [];
    const newPhotos = currentPhotos.filter((_, i) => i !== index);
    updateFormData("photos", newPhotos);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Scheduling & Extras</h2>

      {/* Preferred Cleaning Date */}
      <div className="space-y-2">
        <Label htmlFor="preferredDate">
          Preferred Cleaning Date <span className="text-red-500">*</span>
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-start text-left font-normal ${
                errors.preferredDate ? "border-red-500" : ""
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {preferredDate ? (
                format(preferredDate, "PPP")
              ) : (
                <span className="text-gray-400">Select your preferred date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={preferredDate}
              onSelect={handlePreferredDateChange}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {errors.preferredDate && (
          <p className="text-sm text-red-500">{errors.preferredDate}</p>
        )}
      </div>

      {/* Alternate Date (optional) */}
      <div className="space-y-2">
        <Label htmlFor="alternateDate">Alternate Date (optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {alternateDate ? (
                format(alternateDate, "PPP")
              ) : (
                <span className="text-gray-400">Select another available date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={alternateDate}
              onSelect={handleAlternateDateChange}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Preferred Time */}
      <div className="space-y-2">
        <Label htmlFor="preferredTime">
          Preferred Time <span className="text-red-500">*</span>
        </Label>
        <Select
          value={formData.preferredTime}
          onValueChange={(value) => updateFormData("preferredTime", value)}
        >
          <SelectTrigger className={errors.preferredTime ? "border-red-500" : ""}>
            <SelectValue placeholder="Select time (Morning, Afternoon, Flexible)" />
          </SelectTrigger>
          <SelectContent>
            {TIME_OPTIONS.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.preferredTime && (
          <p className="text-sm text-red-500">{errors.preferredTime}</p>
        )}
      </div>

      {/* Additional Notes / Instructions */}
      <div className="space-y-2">
        <Label htmlFor="additionalNotes">Additional Notes / Instructions</Label>
        <Textarea
          id="additionalNotes"
          placeholder="Add any specific instructions or requests"
          value={formData.additionalNotes}
          onChange={(e) => updateFormData("additionalNotes", e.target.value)}
          rows={5}
          className="resize-none"
        />
        <p className="text-sm text-gray-500">
          Optional: Share any special requirements or areas of focus
        </p>
      </div>

      {/* Upload Photos */}
      <div className="space-y-2">
        <Label htmlFor="photos">Upload Photos (optional)</Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
          <input
            type="file"
            id="photos"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="photos"
            className="flex flex-col items-center cursor-pointer"
          >
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600 text-center">
              Click to upload photos of your space
            </span>
            <span className="text-xs text-gray-400 mt-1">
              JPG, PNG or GIF (Max 5MB each)
            </span>
          </label>
        </div>

        {/* Photo Preview */}
        {formData.photos && formData.photos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {formData.photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SchedulingExtrasStep;
