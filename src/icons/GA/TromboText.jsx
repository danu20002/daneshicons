import React from 'react';

export const iconData = {
  "id": "TromboText",
  "name": "TromboText",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.80 11.25 L 10.80 11.25"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 7.88 L 13.25 11.34"
      }
    ],
    [
      "path",
      {
        "d": "M 13.94 16.88 L 11.94 13.41"
      }
    ]
  ]
};

export const TromboText = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.80 11.25 L 10.80 11.25" />
      <path d="M 15.25 7.88 L 13.25 11.34" />
      <path d="M 13.94 16.88 L 11.94 13.41" />
      {children}
    </svg>
  );
});

export default TromboText;
