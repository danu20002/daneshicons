import React from 'react';

export const iconData = {
  "id": "EmberSail",
  "name": "EmberSail",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.57 6.04 C 14.70 14.96, 19.10 12.00, 17.56 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 9.65 C 18.67 18.53, 8.41 10.70, 21.33 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 8.59 7.14 C 13.40 15.25, 13.23 19.95, 16.43 16.15"
      }
    ]
  ]
};

export const EmberSail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.57 6.04 C 14.70 14.96, 19.10 12.00, 17.56 19.13" />
      <path d="M 3.67 9.65 C 18.67 18.53, 8.41 10.70, 21.33 19.94" />
      <path d="M 8.59 7.14 C 13.40 15.25, 13.23 19.95, 16.43 16.15" />
      {children}
    </svg>
  );
});

export default EmberSail;
