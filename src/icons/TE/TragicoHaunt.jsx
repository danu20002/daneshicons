import React from 'react';

export const iconData = {
  "id": "TragicoHaunt",
  "name": "TragicoHaunt",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.37 12.00 L 19.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.37 L 12.00 19.63"
      }
    ],
    [
      "path",
      {
        "d": "M 1.56 12.00 a 10.44 10.44 0 1 0 20.89 0 a 10.44 10.44 0 1 0 -20.89 0"
      }
    ]
  ]
};

export const TragicoHaunt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.37 12.00 L 19.63 12.00" />
      <path d="M 12.00 4.37 L 12.00 19.63" />
      <path d="M 1.56 12.00 a 10.44 10.44 0 1 0 20.89 0 a 10.44 10.44 0 1 0 -20.89 0" />
      {children}
    </svg>
  );
});

export default TragicoHaunt;
