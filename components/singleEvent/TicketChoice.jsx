import React from "react";

const TicketChoice = (props) => {
  return (
    <div className="flex">
      <div className="flex items-center h-9">
        <input
          onChange={props.onChange}
          value={props.price}
          type="radio"
          name="radio-1"
          className="radio radio-primary"
        />
      </div>
      <div className="ml-2 text-sm">
        <label className="font-medium text-gray-900">
          {props.name} Free shipping via Flowbite
        </label>
        <p id="helper-radio-text" className="text-xs font-normal text-gray-500">
          {props.price} For orders shipped from $25 in books or $29 in other
          categories
        </p>
      </div>
    </div>
  );
};

export default TicketChoice;
