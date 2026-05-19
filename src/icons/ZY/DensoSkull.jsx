import React from 'react';

export const iconData = {
  "id": "DensoSkull",
  "name": "DensoSkull",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 12.00 a 8.27 8.27 0 1 0 16.54 0 a 8.27 8.27 0 1 0 -16.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 9.24 a 7.80 2.33956235991928 0 1 0 15.60 0 a 7.80 2.33956235991928 0 1 0 -15.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 14.76 a 7.80 2.3395623599192796 0 1 0 15.60 0 a 7.80 2.3395623599192796 0 1 0 -15.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.73 A 2 2 0 0 0 12.00 20.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.73 A 2 2 0 0 1 12.00 20.27"
      }
    ]
  ]
};

export const DensoSkull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 12.00 a 8.27 8.27 0 1 0 16.54 0 a 8.27 8.27 0 1 0 -16.54 0" />
      <path d="M 4.20 9.24 a 7.80 2.33956235991928 0 1 0 15.60 0 a 7.80 2.33956235991928 0 1 0 -15.60 0" />
      <path d="M 4.20 14.76 a 7.80 2.3395623599192796 0 1 0 15.60 0 a 7.80 2.3395623599192796 0 1 0 -15.60 0" />
      <path d="M 12.00 3.73 A 2 2 0 0 0 12.00 20.27" />
      <path d="M 12.00 3.73 A 2 2 0 0 1 12.00 20.27" />
      {children}
    </svg>
  );
});

export default DensoSkull;
