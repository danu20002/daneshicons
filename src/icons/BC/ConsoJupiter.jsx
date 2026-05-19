import React from 'react';

export const iconData = {
  "id": "ConsoJupiter",
  "name": "ConsoJupiter",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 7.77 a 7.33 2.198188369615875 0 1 0 14.65 0 a 7.33 2.198188369615875 0 1 0 -14.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 2.53824929385446 0 1 0 16.92 0 a 8.46 2.53824929385446 0 1 0 -16.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 16.23 a 7.33 2.198188369615875 0 1 0 14.65 0 a 7.33 2.198188369615875 0 1 0 -14.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.98 6.02 A 2 2 0 0 0 17.98 17.98"
      }
    ],
    [
      "path",
      {
        "d": "M 17.98 6.02 A 2 2 0 0 1 17.98 17.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.54 A 2 2 0 0 0 12.00 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.54 A 2 2 0 0 1 12.00 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 6.02 A 2 2 0 0 0 6.02 17.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 6.02 A 2 2 0 0 1 6.02 17.98"
      }
    ]
  ]
};

export const ConsoJupiter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0" />
      <path d="M 4.67 7.77 a 7.33 2.198188369615875 0 1 0 14.65 0 a 7.33 2.198188369615875 0 1 0 -14.65 0" />
      <path d="M 3.54 12.00 a 8.46 2.53824929385446 0 1 0 16.92 0 a 8.46 2.53824929385446 0 1 0 -16.92 0" />
      <path d="M 4.67 16.23 a 7.33 2.198188369615875 0 1 0 14.65 0 a 7.33 2.198188369615875 0 1 0 -14.65 0" />
      <path d="M 17.98 6.02 A 2 2 0 0 0 17.98 17.98" />
      <path d="M 17.98 6.02 A 2 2 0 0 1 17.98 17.98" />
      <path d="M 12.00 3.54 A 2 2 0 0 0 12.00 20.46" />
      <path d="M 12.00 3.54 A 2 2 0 0 1 12.00 20.46" />
      <path d="M 6.02 6.02 A 2 2 0 0 0 6.02 17.98" />
      <path d="M 6.02 6.02 A 2 2 0 0 1 6.02 17.98" />
      {children}
    </svg>
  );
});

export default ConsoJupiter;
