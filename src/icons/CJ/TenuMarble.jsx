import React from 'react';

export const iconData = {
  "id": "TenuMarble",
  "name": "TenuMarble",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.48 11.57 L 10.48 11.57"
      }
    ],
    [
      "path",
      {
        "d": "M 9.61 7.00 L 11.61 10.46"
      }
    ],
    [
      "path",
      {
        "d": "M 15.14 7.43 L 13.14 10.90"
      }
    ],
    [
      "path",
      {
        "d": "M 17.52 12.43 L 13.52 12.43"
      }
    ],
    [
      "path",
      {
        "d": "M 14.39 17.00 L 12.39 13.54"
      }
    ],
    [
      "path",
      {
        "d": "M 8.86 16.57 L 10.86 13.10"
      }
    ]
  ]
};

export const TenuMarble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.48 11.57 L 10.48 11.57" />
      <path d="M 9.61 7.00 L 11.61 10.46" />
      <path d="M 15.14 7.43 L 13.14 10.90" />
      <path d="M 17.52 12.43 L 13.52 12.43" />
      <path d="M 14.39 17.00 L 12.39 13.54" />
      <path d="M 8.86 16.57 L 10.86 13.10" />
      {children}
    </svg>
  );
});

export default TenuMarble;
