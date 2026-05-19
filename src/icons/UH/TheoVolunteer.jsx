import React from 'react';

export const iconData = {
  "id": "TheoVolunteer",
  "name": "TheoVolunteer",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.14 21.81 L 3.80 17.44 L 2.63 8.98 L 8.52 2.79 L 17.03 3.54 L 21.75 10.66 L 19.13 18.79 Z"
      }
    ]
  ]
};

export const TheoVolunteer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.14 21.81 L 3.80 17.44 L 2.63 8.98 L 8.52 2.79 L 17.03 3.54 L 21.75 10.66 L 19.13 18.79 Z" />
      {children}
    </svg>
  );
});

export default TheoVolunteer;
