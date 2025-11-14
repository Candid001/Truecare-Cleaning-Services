import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PROPERTY_TYPES = [
  "Home",
  "Apartment",
  "Condo",
  "Office",
  "Commercial Space",
  "Other",
];

const SERVICE_TYPES = [
  "Regular Cleaning",
  "Deep Cleaning",
  "Move In/Move Out",
  "Post-Construction",
  "Office Cleaning",
  "Carpet Cleaning",
  "Window Cleaning",
];

const ROOM_OPTIONS = [
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5+ Bedrooms",
];

const BATHROOM_OPTIONS = [
  "1 Bathroom",
  "2 Bathrooms",
  "3 Bathrooms",
  "4+ Bathrooms",
];

const CLEANLINESS_LEVELS = [
  { value: "light", label: "Light - Regular maintenance" },
  { value: "moderate", label: "Moderate - Standard cleaning" },
  { value: "heavy", label: "Heavy - Deep cleaning needed" },
];

function ServiceDetailsStep({ formData, updateFormData, errors }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Property Type */}
        <div className="space-y-2">
          <Label htmlFor="propertyType">
            Property Type
          </Label>
          <Select
            value={formData.propertyType}
            onValueChange={(value) => updateFormData("propertyType", value)}
          >
            <SelectTrigger className={`w-full ${errors.propertyType ? "border-error" : ""}`}>
              <SelectValue placeholder="Select type (Home, Office, etc.)" />
            </SelectTrigger>
            <SelectContent>
              {PROPERTY_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.propertyType && (
            <p className="text-sm text-error">{errors.propertyType}</p>
          )}
        </div>

        {/* Service Type */}
        <div className="space-y-2">
          <Label htmlFor="serviceType">
            Service Type
          </Label>
          <Select
            value={formData.serviceType}
            onValueChange={(value) => updateFormData("serviceType", value)}
          >
            <SelectTrigger className={`${errors.serviceType ? "border-error" : ""} w-full`}>
              <SelectValue placeholder="Choose a cleaning service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="text-sm text-error">{errors.serviceType}</p>
          )}
        </div>

        {/* Size of Space */}
        <div className="space-y-2">
          <Label htmlFor="spaceSize">
            Size of Space
          </Label>
          <Input
            id="spaceSize"
            type="text"
            placeholder="e.g. 1000-2000 sqft"
            value={formData.spaceSize}
            onChange={(e) => updateFormData("spaceSize", e.target.value)}
            className={errors.spaceSize ? "border-error" : ""}
          />
          {errors.spaceSize && (
            <p className="text-sm text-error">{errors.spaceSize}</p>
          )}
        </div>

        {/* Rooms / Bedrooms */}
        <div className="space-y-2">
          <Label htmlFor="rooms">
            Rooms / Bedrooms
          </Label>
          <Select
            value={formData.rooms}
            onValueChange={(value) => updateFormData("rooms", value)}
          >
            <SelectTrigger className={`${errors.rooms ? "border-error" : ""} w-full`}>
              <SelectValue placeholder="Select number of rooms" />
            </SelectTrigger>
            <SelectContent>
              {ROOM_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.rooms && (
            <p className="text-sm text-error">{errors.rooms}</p>
          )}
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <Label htmlFor="bathrooms">
            Bathrooms
          </Label>
          <Select
            value={formData.bathrooms}
            onValueChange={(value) => updateFormData("bathrooms", value)}
          >
            <SelectTrigger className={`${errors.bathrooms ? "border-error" : ""} w-full`}>
              <SelectValue placeholder="Select number of bathrooms" />
            </SelectTrigger>
            <SelectContent>
              {BATHROOM_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.bathrooms && (
            <p className="text-sm text-error">{errors.bathrooms}</p>
          )}
        </div>

        {/* Cleaning Frequency */}
        <div className="space-y-2">
          <Label htmlFor="cleaningFrequency">
            Cleaning Frequency
          </Label>
          <Input
            id="cleaningFrequency"
            type="text"
            placeholder="e.g. One-time, Weekly"
            value={formData.cleaningFrequency}
            onChange={(e) => updateFormData("cleaningFrequency", e.target.value)}
            className={errors.cleaningFrequency ? "border-error" : ""}
          />
          {errors.cleaningFrequency && (
            <p className="text-sm text-error">{errors.cleaningFrequency}</p>
          )}
        </div>

        {/* Cleanliness Level */}
        <div className="space-y-2">
          <Label htmlFor="cleanlinessLevel">
            Cleanliness Level
          </Label>
          <Select
            value={formData.cleanlinessLevel}
            onValueChange={(value) => updateFormData("cleanlinessLevel", value)}
          >
            <SelectTrigger className={`${errors.cleanlinessLevel ? "border-error" : ""} w-full`}>
              <SelectValue placeholder="Light, Moderate, or Heavy" />
            </SelectTrigger>
            <SelectContent>
              {CLEANLINESS_LEVELS.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.cleanlinessLevel && (
            <p className="text-sm text-error">{errors.cleanlinessLevel}</p>
          )}
        </div>

        {/* Will you provide supplies? */}
        <div className="space-y-2">
          <Label htmlFor="provideSupplies">
            Will you provide supplies?
          </Label>
          <Input
            id="provideSupplies"
            type="text"
            placeholder="Yes or No."
            value={formData.provideSupplies}
            onChange={(e) => updateFormData("provideSupplies", e.target.value)}
            className={errors.provideSupplies ? "border-error" : ""}
          />
          {errors.provideSupplies && (
            <p className="text-sm text-error">{errors.provideSupplies}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/*/!* Will you provide cleaning supplies? *!/*/}
        {/*<div className="space-y-2">*/}
        {/*  <Label htmlFor="provideCleaning">*/}
        {/*    Will you provide cleaning supplies?*/}
        {/*  </Label>*/}
        {/*  <Select*/}
        {/*    value={formData.provideCleaning}*/}
        {/*    onValueChange={(value) => updateFormData("provideCleaning", value)}*/}
        {/*  >*/}
        {/*    <SelectTrigger className={`${errors.provideCleaning ? "border-error" : ""} w-full`}>*/}
        {/*      <SelectValue placeholder="Select Yes or No" />*/}
        {/*    </SelectTrigger>*/}
        {/*    <SelectContent>*/}
        {/*      <SelectItem value="yes">Yes</SelectItem>*/}
        {/*      <SelectItem value="no">No</SelectItem>*/}
        {/*    </SelectContent>*/}
        {/*  </Select>*/}
        {/*  {errors.provideCleaning && (*/}
        {/*    <p className="text-sm text-error">{errors.provideCleaning}</p>*/}
        {/*  )}*/}
        {/*</div>*/}

        {/* Do you have pets? */}
        <div className="space-y-2">
          <Label htmlFor="hasPets">
            Do you have pets?
          </Label>
          <Select
            value={formData.hasPets}
            onValueChange={(value) => updateFormData("hasPets", value)}
          >
            <SelectTrigger className={`${errors.hasPets ? "border-error" : ""} w-full`}>
              <SelectValue placeholder="Select Yes or No" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
          {errors.hasPets && (
            <p className="text-sm text-error">{errors.hasPets}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsStep;
