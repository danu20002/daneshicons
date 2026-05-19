import React from 'react';

export const iconData = {
  "id": "IschoHeel",
  "name": "IschoHeel",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.14 3.99 C 19.62 6.97, 17.95 4.73, 14.93 15.56"
      }
    ],
    [
      "path",
      {
        "d": "M 2.28 8.06 C 17.04 8.48, 15.80 4.42, 16.75 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 8.94 C 6.74 15.48, 18.18 16.93, 14.07 16.18"
      }
    ],
    [
      "path",
      {
        "d": "M 9.97 9.46 C 11.76 7.23, 4.06 6.68, 14.41 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 5.02 C 10.06 14.85, 11.91 13.36, 19.03 20.76"
      }
    ]
  ]
};

export const IschoHeel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.14 3.99 C 19.62 6.97, 17.95 4.73, 14.93 15.56" />
      <path d="M 2.28 8.06 C 17.04 8.48, 15.80 4.42, 16.75 20.09" />
      <path d="M 6.12 8.94 C 6.74 15.48, 18.18 16.93, 14.07 16.18" />
      <path d="M 9.97 9.46 C 11.76 7.23, 4.06 6.68, 14.41 20.54" />
      <path d="M 7.32 5.02 C 10.06 14.85, 11.91 13.36, 19.03 20.76" />
      {children}
    </svg>
  );
});

export default IschoHeel;
