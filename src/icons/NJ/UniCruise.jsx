import React from 'react';

export const iconData = {
  "id": "UniCruise",
  "name": "UniCruise",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.50 15.55 Q 13.61 9.41 9.77 14.49"
      }
    ],
    [
      "path",
      {
        "d": "M 21.10 11.22 L 8.51 16.81 L 10.54 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 11.72 6.48 A 3.97 4.44 126 0 0 18.08 13.66"
      }
    ],
    [
      "path",
      {
        "d": "M 13.94 8.18 A 3.94 3.29 167 0 0 4.07 9.06"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 5.91 Q 18.38 19.84 13.64 13.03"
      }
    ],
    [
      "path",
      {
        "d": "M 20.92 6.81 Q 11.48 10.57 17.53 15.10"
      }
    ]
  ]
};

export const UniCruise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.50 15.55 Q 13.61 9.41 9.77 14.49" />
      <path d="M 21.10 11.22 L 8.51 16.81 L 10.54 19.03" />
      <path d="M 11.72 6.48 A 3.97 4.44 126 0 0 18.08 13.66" />
      <path d="M 13.94 8.18 A 3.94 3.29 167 0 0 4.07 9.06" />
      <path d="M 4.59 5.91 Q 18.38 19.84 13.64 13.03" />
      <path d="M 20.92 6.81 Q 11.48 10.57 17.53 15.10" />
      {children}
    </svg>
  );
});

export default UniCruise;
