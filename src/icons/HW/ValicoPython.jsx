import React from 'react';

export const iconData = {
  "id": "ValicoPython",
  "name": "ValicoPython",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.98 7.38 L 9.59 3.95 L 15.33 4.29 L 19.51 8.23 L 20.18 13.94 L 17.02 18.74 L 11.51 20.39 L 6.23 18.11 L 3.65 12.97 Z"
      }
    ]
  ]
};

export const ValicoPython = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.98 7.38 L 9.59 3.95 L 15.33 4.29 L 19.51 8.23 L 20.18 13.94 L 17.02 18.74 L 11.51 20.39 L 6.23 18.11 L 3.65 12.97 Z" />
      {children}
    </svg>
  );
});

export default ValicoPython;
