import React from 'react';

export const iconData = {
  "id": "TurbinoRudder",
  "name": "TurbinoRudder",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.86 6.57 L 16.08 11.67 L 20.63 16.09 L 14.33 15.37 L 12.77 21.52 L 10.25 15.70 L 4.14 17.43 L 7.92 12.33 L 3.37 7.91 L 9.67 8.63 L 11.23 2.48 L 13.75 8.30 Z"
      }
    ]
  ]
};

export const TurbinoRudder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.86 6.57 L 16.08 11.67 L 20.63 16.09 L 14.33 15.37 L 12.77 21.52 L 10.25 15.70 L 4.14 17.43 L 7.92 12.33 L 3.37 7.91 L 9.67 8.63 L 11.23 2.48 L 13.75 8.30 Z" />
      {children}
    </svg>
  );
});

export default TurbinoRudder;
