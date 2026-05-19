import React from 'react';

export const iconData = {
  "id": "OlivoSeat",
  "name": "OlivoSeat",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.45 3.70 L 18.96 16.54 L 4.59 15.76 Z"
      }
    ]
  ]
};

export const OlivoSeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.45 3.70 L 18.96 16.54 L 4.59 15.76 Z" />
      {children}
    </svg>
  );
});

export default OlivoSeat;
