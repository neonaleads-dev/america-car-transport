"use client";

import React from "react";
import { Truck } from "lucide-react";

interface ShipmentItem {
  id: string;
  vehicle: string;
  route: string;
  price: string;
  timeAgo: string;
  status: string;
}

const RECENT_SHIPMENTS: ShipmentItem[] = [
  { id: "1", vehicle: "2023 Ford F-150", route: "Dallas, TX → Atlanta, GA", price: "$850", timeAgo: "12m ago", status: "Delivered" },
  { id: "2", vehicle: "2024 Tesla Model Y", route: "Miami, FL → New York, NY", price: "$1,150", timeAgo: "28m ago", status: "In Transit" },
  { id: "3", vehicle: "2022 Chevrolet Tahoe", route: "Los Angeles, CA → Chicago, IL", price: "$1,350", timeAgo: "41m ago", status: "Booked" },
  { id: "4", vehicle: "2021 BMW X5", route: "Seattle, WA → San Diego, CA", price: "$980", timeAgo: "1h ago", status: "Delivered" },
  { id: "5", vehicle: "2024 Honda CR-V", route: "Chicago, IL → Houston, TX", price: "$920", timeAgo: "1h 15m ago", status: "In Transit" },
  { id: "6", vehicle: "2020 Porsche 911", route: "Boston, MA → Miami, FL", price: "$1,450", timeAgo: "2h ago", status: "Delivered" },
];

export default function RecentShipmentsTicker() {
  return null;
}

