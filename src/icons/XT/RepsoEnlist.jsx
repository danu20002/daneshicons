import React from 'react';

export const iconData = {
  "id": "RepsoEnlist",
  "name": "RepsoEnlist",
  "category": "XT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.70 12.00 a 9.30 9.30 0 1 0 18.60 0 a 9.30 9.30 0 1 0 -18.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 8.90 a 8.77 2.631015604924337 0 1 0 17.54 0 a 8.77 2.631015604924337 0 1 0 -17.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 15.10 a 8.77 2.6310156049243365 0 1 0 17.54 0 a 8.77 2.6310156049243365 0 1 0 -17.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.70 A 2 2 0 0 0 12.00 21.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.70 A 2 2 0 0 1 12.00 21.30"
      }
    ]
  ]
};

export const RepsoEnlist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.70 12.00 a 9.30 9.30 0 1 0 18.60 0 a 9.30 9.30 0 1 0 -18.60 0" />
      <path d="M 3.23 8.90 a 8.77 2.631015604924337 0 1 0 17.54 0 a 8.77 2.631015604924337 0 1 0 -17.54 0" />
      <path d="M 3.23 15.10 a 8.77 2.6310156049243365 0 1 0 17.54 0 a 8.77 2.6310156049243365 0 1 0 -17.54 0" />
      <path d="M 12.00 2.70 A 2 2 0 0 0 12.00 21.30" />
      <path d="M 12.00 2.70 A 2 2 0 0 1 12.00 21.30" />
      {children}
    </svg>
  );
});

export default RepsoEnlist;
