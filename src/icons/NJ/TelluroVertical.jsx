import React from 'react';

export const iconData = {
  "id": "TelluroVertical",
  "name": "TelluroVertical",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 20.10 L 18.14 16.39"
      }
    ],
    [
      "path",
      {
        "d": "M 11.41 10.17 A 4.34 2.09 44 0 1 11.02 9.00"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 3.50 Q 14.05 20.72 6.09 3.03"
      }
    ],
    [
      "path",
      {
        "d": "M 9.63 19.40 C 15.28 5.66, 4.73 6.33, 20.64 15.30"
      }
    ]
  ]
};

export const TelluroVertical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 20.10 L 18.14 16.39" />
      <path d="M 11.41 10.17 A 4.34 2.09 44 0 1 11.02 9.00" />
      <path d="M 20.33 3.50 Q 14.05 20.72 6.09 3.03" />
      <path d="M 9.63 19.40 C 15.28 5.66, 4.73 6.33, 20.64 15.30" />
      {children}
    </svg>
  );
});

export default TelluroVertical;
