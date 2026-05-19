import React from 'react';

export const iconData = {
  "id": "TritticoOffense",
  "name": "TritticoOffense",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.04 21.99 L 20.49 5.64 L 8.37 8.50"
      }
    ],
    [
      "path",
      {
        "d": "M 14.78 11.93 L 20.24 7.93"
      }
    ],
    [
      "path",
      {
        "d": "M 10.69 20.33 L 4.43 5.61 L 9.48 18.87 L 7.72 2.73 L 9.14 14.96 L 4.17 5.58"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 4.89 Q 19.74 9.81 15.48 8.93"
      }
    ],
    [
      "path",
      {
        "d": "M 15.63 15.93 L 6.66 19.83 L 21.08 7.70 L 21.25 14.45 L 13.96 8.31 L 9.84 20.61"
      }
    ]
  ]
};

export const TritticoOffense = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.04 21.99 L 20.49 5.64 L 8.37 8.50" />
      <path d="M 14.78 11.93 L 20.24 7.93" />
      <path d="M 10.69 20.33 L 4.43 5.61 L 9.48 18.87 L 7.72 2.73 L 9.14 14.96 L 4.17 5.58" />
      <path d="M 16.73 4.89 Q 19.74 9.81 15.48 8.93" />
      <path d="M 15.63 15.93 L 6.66 19.83 L 21.08 7.70 L 21.25 14.45 L 13.96 8.31 L 9.84 20.61" />
      {children}
    </svg>
  );
});

export default TritticoOffense;
