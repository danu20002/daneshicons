import React from 'react';

export const iconData = {
  "id": "PigmentPeck",
  "name": "PigmentPeck",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.97 21.69 A 3.68 4.63 37 0 1 13.87 5.10"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 10.23 L 18.96 5.91 L 11.23 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 12.16 18.37 L 11.70 4.77 L 5.52 17.68 L 7.69 3.64 L 4.57 4.88 L 7.94 13.43"
      }
    ]
  ]
};

export const PigmentPeck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.97 21.69 A 3.68 4.63 37 0 1 13.87 5.10" />
      <path d="M 4.14 10.23 L 18.96 5.91 L 11.23 20.59" />
      <path d="M 12.16 18.37 L 11.70 4.77 L 5.52 17.68 L 7.69 3.64 L 4.57 4.88 L 7.94 13.43" />
      {children}
    </svg>
  );
});

export default PigmentPeck;
