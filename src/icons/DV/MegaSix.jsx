import React from 'react';

export const iconData = {
  "id": "MegaSix",
  "name": "MegaSix",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.46 11.98 L 12.46 11.98"
      }
    ],
    [
      "path",
      {
        "d": "M 13.79 8.95 L 11.79 12.41"
      }
    ],
    [
      "path",
      {
        "d": "M 13.75 15.07 L 11.75 11.61"
      }
    ]
  ]
};

export const MegaSix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.46 11.98 L 12.46 11.98" />
      <path d="M 13.79 8.95 L 11.79 12.41" />
      <path d="M 13.75 15.07 L 11.75 11.61" />
      {children}
    </svg>
  );
});

export default MegaSix;
