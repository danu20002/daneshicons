import React from 'react';

export const iconData = {
  "id": "VitaLaundry",
  "name": "VitaLaundry",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 10.97 L 13.89 10.97"
      }
    ],
    [
      "path",
      {
        "d": "M 13.03 9.89 L 13.03 13.89"
      }
    ],
    [
      "path",
      {
        "d": "M 14.11 13.03 L 10.11 13.03"
      }
    ],
    [
      "path",
      {
        "d": "M 10.97 14.11 L 10.97 10.11"
      }
    ]
  ]
};

export const VitaLaundry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 10.97 L 13.89 10.97" />
      <path d="M 13.03 9.89 L 13.03 13.89" />
      <path d="M 14.11 13.03 L 10.11 13.03" />
      <path d="M 10.97 14.11 L 10.97 10.11" />
      {children}
    </svg>
  );
});

export default VitaLaundry;
