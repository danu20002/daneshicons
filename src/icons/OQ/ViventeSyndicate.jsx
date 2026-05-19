import React from 'react';

export const iconData = {
  "id": "ViventeSyndicate",
  "name": "ViventeSyndicate",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 3.05 C 19.41 9.46, 5.29 11.19, 18.72 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 5.22 C 16.77 19.23, 6.68 6.03, 15.65 16.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 6.51 C 17.34 17.74, 9.51 11.25, 17.99 18.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 3.83 C 18.95 12.54, 19.89 4.17, 17.99 18.38"
      }
    ]
  ]
};

export const ViventeSyndicate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 3.05 C 19.41 9.46, 5.29 11.19, 18.72 20.29" />
      <path d="M 4.92 5.22 C 16.77 19.23, 6.68 6.03, 15.65 16.55" />
      <path d="M 7.92 6.51 C 17.34 17.74, 9.51 11.25, 17.99 18.40" />
      <path d="M 4.83 3.83 C 18.95 12.54, 19.89 4.17, 17.99 18.38" />
      {children}
    </svg>
  );
});

export default ViventeSyndicate;
