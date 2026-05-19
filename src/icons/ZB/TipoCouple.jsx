import React from 'react';

export const iconData = {
  "id": "TipoCouple",
  "name": "TipoCouple",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.67 10.96 L 15.48 2.42"
      }
    ],
    [
      "path",
      {
        "d": "M 13.63 6.68 A 2.29 4.49 137 0 0 9.71 2.11"
      }
    ],
    [
      "path",
      {
        "d": "M 11.56 21.18 Q 17.06 9.29 3.20 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 17.47 C 11.13 3.21, 15.29 10.14, 4.33 9.69"
      }
    ]
  ]
};

export const TipoCouple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.67 10.96 L 15.48 2.42" />
      <path d="M 13.63 6.68 A 2.29 4.49 137 0 0 9.71 2.11" />
      <path d="M 11.56 21.18 Q 17.06 9.29 3.20 20.95" />
      <path d="M 19.17 17.47 C 11.13 3.21, 15.29 10.14, 4.33 9.69" />
      {children}
    </svg>
  );
});

export default TipoCouple;
