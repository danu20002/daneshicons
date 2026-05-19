import React from 'react';

export const iconData = {
  "id": "UrticeHotel",
  "name": "UrticeHotel",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 10.88 L 13.58 10.88"
      }
    ],
    [
      "path",
      {
        "d": "M 13.12 9.58 L 13.12 13.58"
      }
    ],
    [
      "path",
      {
        "d": "M 14.42 13.12 L 10.42 13.12"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 14.42 L 10.88 10.42"
      }
    ]
  ]
};

export const UrticeHotel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 10.88 L 13.58 10.88" />
      <path d="M 13.12 9.58 L 13.12 13.58" />
      <path d="M 14.42 13.12 L 10.42 13.12" />
      <path d="M 10.88 14.42 L 10.88 10.42" />
      {children}
    </svg>
  );
});

export default UrticeHotel;
