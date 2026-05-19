import React from 'react';

export const iconData = {
  "id": "UndatoTrip",
  "name": "UndatoTrip",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.36 15.33 L 13.08 14.91"
      }
    ],
    [
      "path",
      {
        "d": "M 21.49 7.84 L 8.70 20.41 L 15.72 18.42 L 12.17 3.50"
      }
    ]
  ]
};

export const UndatoTrip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.36 15.33 L 13.08 14.91" />
      <path d="M 21.49 7.84 L 8.70 20.41 L 15.72 18.42 L 12.17 3.50" />
      {children}
    </svg>
  );
});

export default UndatoTrip;
