import React from 'react';

export const iconData = {
  "id": "PlenoParagraph",
  "name": "PlenoParagraph",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 6.35 A 6.48 2.05 112 0 0 20.19 21.46"
      }
    ],
    [
      "path",
      {
        "d": "M 10.68 11.50 Q 21.65 21.46 20.45 9.49"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 11.14 L 9.51 11.09 L 9.57 17.34 L 11.64 16.04 L 2.83 16.92 L 4.41 3.73"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 12.86 L 18.37 18.19 L 10.88 6.26 L 11.07 22.00 L 2.15 19.77 L 3.09 9.83"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 12.65 A 3.94 4.35 165 0 0 20.48 18.55"
      }
    ]
  ]
};

export const PlenoParagraph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 6.35 A 6.48 2.05 112 0 0 20.19 21.46" />
      <path d="M 10.68 11.50 Q 21.65 21.46 20.45 9.49" />
      <path d="M 5.32 11.14 L 9.51 11.09 L 9.57 17.34 L 11.64 16.04 L 2.83 16.92 L 4.41 3.73" />
      <path d="M 5.08 12.86 L 18.37 18.19 L 10.88 6.26 L 11.07 22.00 L 2.15 19.77 L 3.09 9.83" />
      <path d="M 3.80 12.65 A 3.94 4.35 165 0 0 20.48 18.55" />
      {children}
    </svg>
  );
});

export default PlenoParagraph;
