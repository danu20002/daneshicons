import React from 'react';

export const iconData = {
  "id": "StomatoSpeak",
  "name": "StomatoSpeak",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.32 11.41 L 12.32 11.41"
      }
    ],
    [
      "path",
      {
        "d": "M 10.67 8.52 L 12.67 11.98"
      }
    ],
    [
      "path",
      {
        "d": "M 14.35 9.11 L 12.35 12.57"
      }
    ],
    [
      "path",
      {
        "d": "M 15.68 12.59 L 11.68 12.59"
      }
    ],
    [
      "path",
      {
        "d": "M 13.33 15.48 L 11.33 12.02"
      }
    ],
    [
      "path",
      {
        "d": "M 9.65 14.89 L 11.65 11.43"
      }
    ]
  ]
};

export const StomatoSpeak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.32 11.41 L 12.32 11.41" />
      <path d="M 10.67 8.52 L 12.67 11.98" />
      <path d="M 14.35 9.11 L 12.35 12.57" />
      <path d="M 15.68 12.59 L 11.68 12.59" />
      <path d="M 13.33 15.48 L 11.33 12.02" />
      <path d="M 9.65 14.89 L 11.65 11.43" />
      {children}
    </svg>
  );
});

export default StomatoSpeak;
