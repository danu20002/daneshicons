import React from 'react';

export const iconData = {
  "id": "QuintLeaf",
  "name": "QuintLeaf",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.66 6.43 A 6.45 5.93 82 0 0 14.48 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 21.52 L 19.07 11.80"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 18.35 C 3.29 20.09, 19.02 2.47, 5.57 17.57"
      }
    ],
    [
      "path",
      {
        "d": "M 12.45 17.63 L 20.11 8.98 L 18.61 18.87 L 3.81 18.99 L 11.37 14.33 L 18.17 3.55"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 6.25 L 18.35 13.89 L 13.65 19.52 L 17.55 15.83"
      }
    ]
  ]
};

export const QuintLeaf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.66 6.43 A 6.45 5.93 82 0 0 14.48 16.50" />
      <path d="M 4.77 21.52 L 19.07 11.80" />
      <path d="M 3.33 18.35 C 3.29 20.09, 19.02 2.47, 5.57 17.57" />
      <path d="M 12.45 17.63 L 20.11 8.98 L 18.61 18.87 L 3.81 18.99 L 11.37 14.33 L 18.17 3.55" />
      <path d="M 17.84 6.25 L 18.35 13.89 L 13.65 19.52 L 17.55 15.83" />
      {children}
    </svg>
  );
});

export default QuintLeaf;
