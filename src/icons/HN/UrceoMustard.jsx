import React from 'react';

export const iconData = {
  "id": "UrceoMustard",
  "name": "UrceoMustard",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.25 2.63 C 18.07 3.54, 4.50 4.19, 21.53 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 21.33 17.79 L 16.47 16.87 L 21.14 20.31 L 17.96 18.42 L 4.12 20.82 L 15.24 16.58 L 3.62 10.06 L 3.49 8.10"
      }
    ]
  ]
};

export const UrceoMustard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.25 2.63 C 18.07 3.54, 4.50 4.19, 21.53 21.35" />
      <path d="M 21.33 17.79 L 16.47 16.87 L 21.14 20.31 L 17.96 18.42 L 4.12 20.82 L 15.24 16.58 L 3.62 10.06 L 3.49 8.10" />
      {children}
    </svg>
  );
});

export default UrceoMustard;
