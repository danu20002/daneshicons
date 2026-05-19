import React from 'react';

export const iconData = {
  "id": "HorizoGrudge",
  "name": "HorizoGrudge",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.63 12.00 Q 14.75 13.58 16.32 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 16.32 19.48 Q 12.00 15.17 7.68 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 19.48 Q 9.25 13.58 3.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 12.00 Q 9.25 10.42 7.68 4.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 4.52 Q 12.00 8.83 16.32 4.52"
      }
    ],
    [
      "path",
      {
        "d": "M 16.32 4.52 Q 14.75 10.42 20.63 12.00"
      }
    ]
  ]
};

export const HorizoGrudge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.63 12.00 Q 14.75 13.58 16.32 19.48" />
      <path d="M 16.32 19.48 Q 12.00 15.17 7.68 19.48" />
      <path d="M 7.68 19.48 Q 9.25 13.58 3.37 12.00" />
      <path d="M 3.37 12.00 Q 9.25 10.42 7.68 4.52" />
      <path d="M 7.68 4.52 Q 12.00 8.83 16.32 4.52" />
      <path d="M 16.32 4.52 Q 14.75 10.42 20.63 12.00" />
      {children}
    </svg>
  );
});

export default HorizoGrudge;
