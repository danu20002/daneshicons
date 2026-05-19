import React from 'react';

export const iconData = {
  "id": "TextuSuck",
  "name": "TextuSuck",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.48 6.78 L 14.48 6.78"
      }
    ],
    [
      "path",
      {
        "d": "M 15.76 8.07 L 17.76 11.54"
      }
    ],
    [
      "path",
      {
        "d": "M 17.28 13.29 L 15.28 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 13.52 17.22 L 9.52 17.22"
      }
    ],
    [
      "path",
      {
        "d": "M 8.24 15.93 L 6.24 12.46"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 10.71 L 8.72 7.25"
      }
    ]
  ]
};

export const TextuSuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.48 6.78 L 14.48 6.78" />
      <path d="M 15.76 8.07 L 17.76 11.54" />
      <path d="M 17.28 13.29 L 15.28 16.75" />
      <path d="M 13.52 17.22 L 9.52 17.22" />
      <path d="M 8.24 15.93 L 6.24 12.46" />
      <path d="M 6.72 10.71 L 8.72 7.25" />
      {children}
    </svg>
  );
});

export default TextuSuck;
