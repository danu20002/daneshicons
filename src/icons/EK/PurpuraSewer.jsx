import React from 'react';

export const iconData = {
  "id": "PurpuraSewer",
  "name": "PurpuraSewer",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.77 8.16 C 16.28 13.35, 8.10 7.12, 17.89 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 9.33 2.84 C 6.08 13.32, 14.80 11.03, 19.41 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 8.53 C 15.38 19.74, 19.46 18.03, 16.81 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 6.42 C 5.92 5.63, 12.54 11.15, 17.30 15.64"
      }
    ]
  ]
};

export const PurpuraSewer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.77 8.16 C 16.28 13.35, 8.10 7.12, 17.89 20.19" />
      <path d="M 9.33 2.84 C 6.08 13.32, 14.80 11.03, 19.41 20.60" />
      <path d="M 8.95 8.53 C 15.38 19.74, 19.46 18.03, 16.81 19.48" />
      <path d="M 2.25 6.42 C 5.92 5.63, 12.54 11.15, 17.30 15.64" />
      {children}
    </svg>
  );
});

export default PurpuraSewer;
