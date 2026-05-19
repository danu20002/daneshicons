import React from 'react';

export const iconData = {
  "id": "LabyrinthoStew",
  "name": "LabyrinthoStew",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 10.56 Q 2.30 10.96 18.05 7.53"
      }
    ],
    [
      "path",
      {
        "d": "M 17.49 6.87 C 20.55 5.78, 9.32 10.60, 18.11 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 14.21 L 7.45 18.05 L 18.55 7.00 L 4.89 6.56 L 8.80 13.16 L 15.96 14.91"
      }
    ]
  ]
};

export const LabyrinthoStew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 10.56 Q 2.30 10.96 18.05 7.53" />
      <path d="M 17.49 6.87 C 20.55 5.78, 9.32 10.60, 18.11 20.72" />
      <path d="M 3.77 14.21 L 7.45 18.05 L 18.55 7.00 L 4.89 6.56 L 8.80 13.16 L 15.96 14.91" />
      {children}
    </svg>
  );
});

export default LabyrinthoStew;
