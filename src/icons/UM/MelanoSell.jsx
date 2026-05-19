import React from 'react';

export const iconData = {
  "id": "MelanoSell",
  "name": "MelanoSell",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.90 8.97 C 14.25 6.81, 13.18 19.43, 21.57 20.25"
      }
    ],
    [
      "path",
      {
        "d": "M 7.18 5.76 C 17.54 17.60, 19.30 15.14, 21.91 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 2.49 4.18 C 9.69 8.59, 8.23 13.31, 15.92 16.36"
      }
    ]
  ]
};

export const MelanoSell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.90 8.97 C 14.25 6.81, 13.18 19.43, 21.57 20.25" />
      <path d="M 7.18 5.76 C 17.54 17.60, 19.30 15.14, 21.91 18.73" />
      <path d="M 2.49 4.18 C 9.69 8.59, 8.23 13.31, 15.92 16.36" />
      {children}
    </svg>
  );
});

export default MelanoSell;
