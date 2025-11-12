import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CANADIAN_PROVINCES = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "YT", label: "Yukon" },
];

function ContactDetailsStep({ formData, updateFormData, errors }) {
  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, "");
    
    // Format as (XXX) XXX-XXXX
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    updateFormData("phone", formatted);
  };

  return (
    <div className="space-y-7 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName">
            First Name
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => updateFormData("firstName", e.target.value)}
            className={errors.firstName ? "border-error" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-error">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName">
            Last Name
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => updateFormData("lastName", e.target.value)}
            className={errors.lastName ? "border-error" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-error">{errors.lastName}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className={errors.email ? "border-error" : ""}
          />
          {errors.email && (
            <p className="text-sm text-error">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone Number
          </Label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <span className="text-2xl">🇨🇦</span>
            </div>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`pl-16 ${errors.phone ? "border-error" : ""}`}
              maxLength={14}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-error">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* City */}
      <div className="space-y-2">
        <Label htmlFor="city">
          City
        </Label>
        <Input
          id="city"
          type="text"
          placeholder="Enter your city"
          value={formData.city}
          onChange={(e) => updateFormData("city", e.target.value)}
          className={errors.city ? "border-error" : ""}
        />
        {errors.city && (
          <p className="text-sm text-error">{errors.city}</p>
        )}
      </div>

        {/* Province */}
        <div className="space-y-2 w-full">
            <Label htmlFor="province">
                Province
            </Label>
            <Select
                value={formData.province}
                onValueChange={(value) => updateFormData("province", value)}
            >
                <SelectTrigger className={`w-full ${errors.province ? "border-error" : ""}`}>
                    <SelectValue placeholder="Select your province" />
                </SelectTrigger>
                <SelectContent>
                    {CANADIAN_PROVINCES.map((province) => (
                        <SelectItem key={province.value} value={province.value}>
                            {province.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {errors.province && (
                <p className="text-sm text-error">{errors.province}</p>
            )}
        </div>
    </div>
  );
}

export default ContactDetailsStep;
