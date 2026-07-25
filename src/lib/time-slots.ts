export function generateTimeSlots(startHour = 11, endHour = 20, stepMinutes = 30) {
  const slots: string[] = [];
  for (let minutes = startHour * 60; minutes <= endHour * 60; minutes += stepMinutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    slots.push(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`);
  }
  return slots;
}

export function todayISODate() {
  return new Date().toISOString().split("T")[0];
}
