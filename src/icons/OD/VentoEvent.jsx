import React from 'react';

export const iconData = {
  "id": "VentoEvent",
  "name": "VentoEvent",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.07 5.00 L 8.54 7.00 L 8.54 11.00 L 5.07 13.00 L 1.61 11.00 L 1.61 7.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.00 L 15.46 4.00 L 15.46 8.00 L 12.00 10.00 L 8.54 8.00 L 8.54 4.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 5.00 L 22.39 7.00 L 22.39 11.00 L 18.93 13.00 L 15.46 11.00 L 15.46 7.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 11.00 L 8.54 13.00 L 8.54 17.00 L 5.07 19.00 L 1.61 17.00 L 1.61 13.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 8.00 L 15.46 10.00 L 15.46 14.00 L 12.00 16.00 L 8.54 14.00 L 8.54 10.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 11.00 L 22.39 13.00 L 22.39 17.00 L 18.93 19.00 L 15.46 17.00 L 15.46 13.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 17.00 L 8.54 19.00 L 8.54 23.00 L 5.07 25.00 L 1.61 23.00 L 1.61 19.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 14.00 L 15.46 16.00 L 15.46 20.00 L 12.00 22.00 L 8.54 20.00 L 8.54 16.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 17.00 L 22.39 19.00 L 22.39 23.00 L 18.93 25.00 L 15.46 23.00 L 15.46 19.00 Z"
      }
    ]
  ]
};

export const VentoEvent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 5.07 5.00 L 8.54 7.00 L 8.54 11.00 L 5.07 13.00 L 1.61 11.00 L 1.61 7.00 Z" />
      <path d="M 12.00 2.00 L 15.46 4.00 L 15.46 8.00 L 12.00 10.00 L 8.54 8.00 L 8.54 4.00 Z" />
      <path d="M 18.93 5.00 L 22.39 7.00 L 22.39 11.00 L 18.93 13.00 L 15.46 11.00 L 15.46 7.00 Z" />
      <path d="M 5.07 11.00 L 8.54 13.00 L 8.54 17.00 L 5.07 19.00 L 1.61 17.00 L 1.61 13.00 Z" />
      <path d="M 12.00 8.00 L 15.46 10.00 L 15.46 14.00 L 12.00 16.00 L 8.54 14.00 L 8.54 10.00 Z" />
      <path d="M 18.93 11.00 L 22.39 13.00 L 22.39 17.00 L 18.93 19.00 L 15.46 17.00 L 15.46 13.00 Z" />
      <path d="M 5.07 17.00 L 8.54 19.00 L 8.54 23.00 L 5.07 25.00 L 1.61 23.00 L 1.61 19.00 Z" />
      <path d="M 12.00 14.00 L 15.46 16.00 L 15.46 20.00 L 12.00 22.00 L 8.54 20.00 L 8.54 16.00 Z" />
      <path d="M 18.93 17.00 L 22.39 19.00 L 22.39 23.00 L 18.93 25.00 L 15.46 23.00 L 15.46 19.00 Z" />
      {children}
    </svg>
  );
});

export default VentoEvent;
