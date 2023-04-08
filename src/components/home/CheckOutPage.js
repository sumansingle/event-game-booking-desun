import React, { useState } from "react";

const EventPage = () => {
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [setupDate, setSetupDate] = useState("");
  const [errorMsg] = useState("");
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transportCharge, setTransportCharge] = useState(0);
  const [distance, setDistance] = useState(0);

  const locations = [
    { id: 1, name: "Baghajatin, Kolkata, WB", distance: 10 },
    { id: 2, name: "Garia, Kolkata, WB", distance: 50 },
    { id: 3, name: "Sealdaha, Kolkata, WB", distance: 15 },
    { id: 4, name: "Jadavpur, Kolkata, WB", distance: 45 }
  ];

  const handleLocationChange = (e) => {
    const locationId = e.target.value;
    const selectedLocation = locations.find((l) => l.id === +locationId);
    setLocation(selectedLocation.name);
    setDistance(selectedLocation.distance * 2); // distance is calculated for round trip
    if (selectedLocation.distance > 30) {
      setTransportCharge(1500 + (selectedLocation.distance - 30) * 50);
    } else {
      setTransportCharge(1500);
    }
  };
  const validateDates = () => {
    if (setupDate > eventStartDate) {
      alert("Setup date should not be after event date");
    } else if (eventEndDate < eventStartDate || eventEndDate < setupDate) {
      alert(
        "Event end date should not be before setup date or event start date"
      );
    } else if (eventStartDate - setupDate > 86400000) {
      alert("Setup date can not be more than 1 day before event");
    } else {
      alert("Thank you");
      window.location = "/";
    }
  };
  const isFormValid = () => {
    return (
      eventStartDate && eventEndDate && setupDate && location && paymentMethod
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateDates();
    // handle form submission
  };
  const calculateDuration = () => {
    const start = new Date(eventStartDate);
    const end = new Date(eventEndDate);
    const durationMs = end.getTime() - start.getTime();
    const durationDays = Math.floor(durationMs / (1000 * 60 * 60 * 24));
    const durationHours = Math.floor(
      (durationMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    return `${durationDays} days, ${durationHours} hours`;
  };

  return (
    <div>
      <h2>Event Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventStartDate">Event Start Date:</label>
          <input
            type="datetime-local"
            id="eventStartDate"
            value={eventStartDate}
            onChange={(e) => setEventStartDate(e.target.value)}
            required
          />
          <br />
          <label htmlFor="eventEndDate">Event End Date:</label>
          <input
            type="datetime-local"
            id="eventEndDate"
            value={eventEndDate}
            onChange={(e) => setEventEndDate(e.target.value)}
            required
          />
          <br />
          <label htmlFor="setupDate">Setup Date:</label>
          <input
            type="datetime-local"
            id="setupDate"
            value={setupDate}
            onChange={(e) => setSetupDate(e.target.value)}
            required
          />
          <br />
          <label htmlFor="location-select">Location:</label>
          <select
            id="location-select"
            value={location}
            onChange={(e) =>
              handleLocationChange(
                e,
                locations.find((loc) => loc.id === +e.target.value)
              )
            }
          >
            <option value="" disabled={!location}>
              {location ? location : "...set location"}
            </option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name} ({loc.distance} km)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
            <option value="Cheque">Cheque</option>
          </select>
        </div>
        <div>
          <label>Transport Charge:</label>
          <span>{transportCharge} Rs</span>
        </div>
        <div>
          <label>Distance:</label>
          <span>{distance} km</span>
        </div>
        <button type="submit" disabled={!isFormValid()}>
          Make Enquiry
        </button>
      </form>
      {errorMsg && <p>{errorMsg}</p>}
      {eventStartDate && eventEndDate && setupDate && (
        <p>
          Event Duration: <span>{calculateDuration()}</span>
        </p>
      )}
    </div>
  );
};

export default EventPage;