import React from 'react';

export const iconData = {
  "id": "ConsoNimble",
  "name": "ConsoNimble",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.62 16.92 A 2.31 4.65 43 0 0 20.86 9.18"
      }
    ],
    [
      "path",
      {
        "d": "M 16.37 6.07 A 6.61 2.52 97 0 1 15.82 9.67"
      }
    ],
    [
      "path",
      {
        "d": "M 11.40 13.65 Q 18.73 14.68 11.03 4.33"
      }
    ],
    [
      "path",
      {
        "d": "M 14.40 8.99 C 19.31 2.68, 2.41 19.98, 2.32 10.28"
      }
    ]
  ]
};

export const ConsoNimble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.62 16.92 A 2.31 4.65 43 0 0 20.86 9.18" />
      <path d="M 16.37 6.07 A 6.61 2.52 97 0 1 15.82 9.67" />
      <path d="M 11.40 13.65 Q 18.73 14.68 11.03 4.33" />
      <path d="M 14.40 8.99 C 19.31 2.68, 2.41 19.98, 2.32 10.28" />
      {children}
    </svg>
  );
});

export default ConsoNimble;
