import React from 'react';

export const iconData = {
  "id": "VongolaPatent",
  "name": "VongolaPatent",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.09 8.66 L 11.09 8.66"
      }
    ],
    [
      "path",
      {
        "d": "M 15.34 7.09 L 15.34 11.09"
      }
    ],
    [
      "path",
      {
        "d": "M 16.91 15.34 L 12.91 15.34"
      }
    ],
    [
      "path",
      {
        "d": "M 8.66 16.91 L 8.66 12.91"
      }
    ]
  ]
};

export const VongolaPatent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.09 8.66 L 11.09 8.66" />
      <path d="M 15.34 7.09 L 15.34 11.09" />
      <path d="M 16.91 15.34 L 12.91 15.34" />
      <path d="M 8.66 16.91 L 8.66 12.91" />
      {children}
    </svg>
  );
});

export default VongolaPatent;
