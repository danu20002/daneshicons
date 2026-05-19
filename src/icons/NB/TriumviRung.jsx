import React from 'react';

export const iconData = {
  "id": "TriumviRung",
  "name": "TriumviRung",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 15.06 L 8.25 11.28 L 4.95 5.90 L 10.75 8.39 L 13.75 2.84 L 14.50 9.11 L 20.81 8.94 L 15.75 12.72 L 19.05 18.10 L 13.25 15.61 L 10.25 21.16 L 9.50 14.89 Z"
      }
    ]
  ]
};

export const TriumviRung = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 15.06 L 8.25 11.28 L 4.95 5.90 L 10.75 8.39 L 13.75 2.84 L 14.50 9.11 L 20.81 8.94 L 15.75 12.72 L 19.05 18.10 L 13.25 15.61 L 10.25 21.16 L 9.50 14.89 Z" />
      {children}
    </svg>
  );
});

export default TriumviRung;
