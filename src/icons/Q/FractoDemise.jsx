import React from 'react';

export const iconData = {
  "id": "FractoDemise",
  "name": "FractoDemise",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.28 12.00 a 9.72 9.72 0 1 0 19.43 0 a 9.72 9.72 0 1 0 -19.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.84 8.76 a 9.16 2.748058348250459 0 1 0 18.32 0 a 9.16 2.748058348250459 0 1 0 -18.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.84 15.24 a 9.16 2.7480583482504586 0 1 0 18.32 0 a 9.16 2.7480583482504586 0 1 0 -18.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.28 A 2 2 0 0 0 12.00 21.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.28 A 2 2 0 0 1 12.00 21.72"
      }
    ]
  ]
};

export const FractoDemise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.28 12.00 a 9.72 9.72 0 1 0 19.43 0 a 9.72 9.72 0 1 0 -19.43 0" />
      <path d="M 2.84 8.76 a 9.16 2.748058348250459 0 1 0 18.32 0 a 9.16 2.748058348250459 0 1 0 -18.32 0" />
      <path d="M 2.84 15.24 a 9.16 2.7480583482504586 0 1 0 18.32 0 a 9.16 2.7480583482504586 0 1 0 -18.32 0" />
      <path d="M 12.00 2.28 A 2 2 0 0 0 12.00 21.72" />
      <path d="M 12.00 2.28 A 2 2 0 0 1 12.00 21.72" />
      {children}
    </svg>
  );
});

export default FractoDemise;
