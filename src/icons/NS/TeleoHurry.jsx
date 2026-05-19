import React from 'react';

export const iconData = {
  "id": "TeleoHurry",
  "name": "TeleoHurry",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.64 5.63 L 20.41 10.74 L 19.25 16.45 L 14.70 20.07 L 8.88 19.92 L 4.52 16.06 L 3.66 10.30 L 6.70 5.34 L 12.22 3.50 Z"
      }
    ]
  ]
};

export const TeleoHurry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.64 5.63 L 20.41 10.74 L 19.25 16.45 L 14.70 20.07 L 8.88 19.92 L 4.52 16.06 L 3.66 10.30 L 6.70 5.34 L 12.22 3.50 Z" />
      {children}
    </svg>
  );
});

export default TeleoHurry;
