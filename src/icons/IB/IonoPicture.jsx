import React from 'react';

export const iconData = {
  "id": "IonoPicture",
  "name": "IonoPicture",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.21 8.89 C 9.62 14.39, 9.80 15.49, 16.12 20.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 4.24 C 17.73 16.93, 17.23 12.69, 20.22 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 8.81 9.94 C 19.93 18.99, 13.60 5.03, 19.19 20.87"
      }
    ]
  ]
};

export const IonoPicture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.21 8.89 C 9.62 14.39, 9.80 15.49, 16.12 20.08" />
      <path d="M 5.20 4.24 C 17.73 16.93, 17.23 12.69, 20.22 17.67" />
      <path d="M 8.81 9.94 C 19.93 18.99, 13.60 5.03, 19.19 20.87" />
      {children}
    </svg>
  );
});

export default IonoPicture;
