"use client";
import React, { useState } from "react";

const CreateEvent = () => {
  const [formValues, setFormValues] = useState({
    date: '',
    desc: '',
    eventName: '',
    image: '',
    locationId: '',
    time: '',
    userId: '',
    categoryId: '',
    eventCategoryTypeId: '',
    ticketPriceEntity: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post('/api/createEvent', formValues);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-6">
      <div className="flex-1 m-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Event Name:</label>
            <input
              type="text"
              name="eventName"
              value={formValues.eventName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
            <input
              type="date"
              name="date"
              value={formValues.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time:</label>
            <input
              type="time"
              name="time"
              value={formValues.time}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              name="desc"
              value={formValues.desc}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              type="url"
              name="image"
              value={formValues.image}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="locationId" className="block text-sm font-medium text-gray-700">Location ID:</label>
            <input
              type="text"
              name="locationId"
              value={formValues.locationId}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID:</label>
            <input
              type="text"
              name="userId"
              value={formValues.userId}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">Category ID:</label>
            <input
              type="text"
              name="categoryId"
              value={formValues.categoryId}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="eventCategoryTypeId" className="block text-sm font-medium text-gray-700">Event Category Type ID:</label>
            <input
              type="text"
              name="eventCategoryTypeId"
              value={formValues.eventCategoryTypeId}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="ticketPriceEntity" className="block text-sm font-medium text-gray-700">Ticket Price Entity:</label>
            <input
              type="text"
              name="ticketPriceEntity"
              value={formValues.ticketPriceEntity}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Event
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        <p><strong>Event Name:</strong> {formValues.eventName}</p>
        <p><strong>Date:</strong> {formValues.date}</p>
        <p><strong>Time:</strong> {formValues.time}</p>
        <p><strong>Description:</strong> {formValues.desc}</p>
        <p><strong>Image:</strong> <img src={formValues.image} alt="Event" className="w-full h-auto" /></p>
        <p><strong>Location ID:</strong> {formValues.locationId}</p>
        <p><strong>User ID:</strong> {formValues.userId}</p>
        <p><strong>Category ID:</strong> {formValues.categoryId}</p>
        <p><strong>Event Category Type ID:</strong> {formValues.eventCategoryTypeId}</p>
        <p><strong>Ticket Price Entity:</strong> {formValues.ticketPriceEntity}</p>
      </div>
    </div>
  );

};

export default CreateEvent;
