import React from 'react';

export const iconData = {
  "id": "TextuTeeth",
  "name": "TextuTeeth",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.74 12.00 a 2.26 2.26 0 1 0 4.52 0 a 2.26 2.26 0 1 0 -4.52 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 12.00 a 4.20 4.20 0 1 0 8.40 0 a 4.20 4.20 0 1 0 -8.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 12.00 a 6.33 6.33 0 1 0 12.67 0 a 6.33 6.33 0 1 0 -12.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0"
      }
    ]
  ]
};

export const TextuTeeth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.74 12.00 a 2.26 2.26 0 1 0 4.52 0 a 2.26 2.26 0 1 0 -4.52 0" stroke-dasharray="4 2" />
      <path d="M 7.80 12.00 a 4.20 4.20 0 1 0 8.40 0 a 4.20 4.20 0 1 0 -8.40 0" />
      <path d="M 5.67 12.00 a 6.33 6.33 0 1 0 12.67 0 a 6.33 6.33 0 1 0 -12.67 0" />
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0" />
      {children}
    </svg>
  );
});

export default TextuTeeth;
