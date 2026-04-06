// Client-side utilities for pricing calculations
// This file is safe to use in client-side components

// Price configurations for services (client-side safe)
export const STRIPE_PRICES = {
  HOUSE_REMOVAL: {
    STUDIO: 35000, // £350 in pence
    ONE_BED: 45000, // £450
    TWO_BED: 55000, // £550
    THREE_BED: 75000, // £750
    FOUR_BED: 95000, // £950
    FIVE_PLUS_BED: 120000, // £1200
  },
  OFFICE_REMOVAL: {
    SMALL: 55000, // £550
    MEDIUM: 85000, // £850
    LARGE: 150000, // £1500
    ENTERPRISE: 200000, // £2000
  },
  PACKING_SERVICES: {
    BASIC: 15000, // £150
    STANDARD: 25000, // £250
    PREMIUM: 40000, // £400
    FULL_SERVICE: 50000, // £500
  },
  STORAGE: {
    MONTHLY: 8000, // £80 per month
  },
  BREEZER: {
    HOURLY_RATE: 1200, // £12 per hour per helper
  },
  ADDITIONAL_SERVICES: {
    PIANO_MOVING: 20000, // £200
    FURNITURE_ASSEMBLY: 6000, // £60
    CLEANING: 12000, // £120
    INSURANCE: 5000, // £50
  },
}

// Helper function to format price for display (client-side safe)
export function formatPrice(amountInPence: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amountInPence / 100)
}

// Helper function to calculate total price (client-side safe)
export function calculateServicePrice(
  serviceType: string,
  serviceSize: string,
  additionalServices: string[] = [],
  helpers?: number,
  hours?: number,
): number {
  let total = 0

  // Base service price
  switch (serviceType) {
    case "house-removal":
      total += STRIPE_PRICES.HOUSE_REMOVAL[serviceSize as keyof typeof STRIPE_PRICES.HOUSE_REMOVAL] || 0
      break
    case "office-removal":
      total += STRIPE_PRICES.OFFICE_REMOVAL[serviceSize as keyof typeof STRIPE_PRICES.OFFICE_REMOVAL] || 0
      break
    case "packing-services":
      total += STRIPE_PRICES.PACKING_SERVICES[serviceSize as keyof typeof STRIPE_PRICES.PACKING_SERVICES] || 0
      break
    case "breezer":
      total += (helpers || 1) * (hours || 4) * STRIPE_PRICES.BREEZER.HOURLY_RATE
      break
  }

  // Additional services
  additionalServices.forEach((service) => {
    switch (service) {
      case "piano":
        total += STRIPE_PRICES.ADDITIONAL_SERVICES.PIANO_MOVING
        break
      case "assembly":
        total += STRIPE_PRICES.ADDITIONAL_SERVICES.FURNITURE_ASSEMBLY
        break
      case "cleaning":
        total += STRIPE_PRICES.ADDITIONAL_SERVICES.CLEANING
        break
      case "insurance":
        total += STRIPE_PRICES.ADDITIONAL_SERVICES.INSURANCE
        break
    }
  })

  return total
} 