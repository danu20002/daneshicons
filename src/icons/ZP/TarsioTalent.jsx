import React from 'react';

export const iconData = {
  "id": "TarsioTalent",
  "name": "TarsioTalent",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.84 4.17 C 4.47 17.23, 17.13 15.33, 14.18 16.57"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 8.29 C 12.26 17.94, 14.23 4.61, 20.16 20.61"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 9.63 C 13.88 4.73, 6.75 9.12, 14.58 21.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 8.95 C 12.43 17.23, 11.31 17.96, 20.60 14.80"
      }
    ],
    [
      "path",
      {
        "d": "M 2.55 2.43 C 7.11 4.04, 13.59 17.04, 17.66 17.77"
      }
    ]
  ]
};

export const TarsioTalent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.84 4.17 C 4.47 17.23, 17.13 15.33, 14.18 16.57" />
      <path d="M 6.09 8.29 C 12.26 17.94, 14.23 4.61, 20.16 20.61" />
      <path d="M 6.20 9.63 C 13.88 4.73, 6.75 9.12, 14.58 21.09" />
      <path d="M 7.17 8.95 C 12.43 17.23, 11.31 17.96, 20.60 14.80" />
      <path d="M 2.55 2.43 C 7.11 4.04, 13.59 17.04, 17.66 17.77" />
      {children}
    </svg>
  );
});

export default TarsioTalent;
