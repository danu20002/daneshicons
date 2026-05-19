import React from 'react';

export const iconData = {
  "id": "ScapoVolunteer",
  "name": "ScapoVolunteer",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.20 15.19 L 4.23 8.74 L 8.81 4.20 L 15.26 4.23 L 19.80 8.81 L 19.77 15.26 L 15.19 19.80 L 8.74 19.77 Z"
      }
    ]
  ]
};

export const ScapoVolunteer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.20 15.19 L 4.23 8.74 L 8.81 4.20 L 15.26 4.23 L 19.80 8.81 L 19.77 15.26 L 15.19 19.80 L 8.74 19.77 Z" />
      {children}
    </svg>
  );
});

export default ScapoVolunteer;
