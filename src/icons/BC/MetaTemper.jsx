import React from 'react';

export const iconData = {
  "id": "MetaTemper",
  "name": "MetaTemper",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.86 12.00 a 9.14 9.14 0 1 0 18.27 0 a 9.14 9.14 0 1 0 -18.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.09 7.43 a 7.91 2.373751488669006 0 1 0 15.83 0 a 7.91 2.373751488669006 0 1 0 -15.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.86 12.00 a 9.14 2.740972121944651 0 1 0 18.27 0 a 9.14 2.740972121944651 0 1 0 -18.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.09 16.57 a 7.91 2.373751488669006 0 1 0 15.83 0 a 7.91 2.373751488669006 0 1 0 -15.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 4.09 A 2 2 0 0 0 16.57 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 4.09 A 2 2 0 0 1 16.57 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 4.09 A 2 2 0 0 0 7.43 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 4.09 A 2 2 0 0 1 7.43 19.91"
      }
    ]
  ]
};

export const MetaTemper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.86 12.00 a 9.14 9.14 0 1 0 18.27 0 a 9.14 9.14 0 1 0 -18.27 0" />
      <path d="M 4.09 7.43 a 7.91 2.373751488669006 0 1 0 15.83 0 a 7.91 2.373751488669006 0 1 0 -15.83 0" />
      <path d="M 2.86 12.00 a 9.14 2.740972121944651 0 1 0 18.27 0 a 9.14 2.740972121944651 0 1 0 -18.27 0" />
      <path d="M 4.09 16.57 a 7.91 2.373751488669006 0 1 0 15.83 0 a 7.91 2.373751488669006 0 1 0 -15.83 0" />
      <path d="M 16.57 4.09 A 2 2 0 0 0 16.57 19.91" />
      <path d="M 16.57 4.09 A 2 2 0 0 1 16.57 19.91" />
      <path d="M 7.43 4.09 A 2 2 0 0 0 7.43 19.91" />
      <path d="M 7.43 4.09 A 2 2 0 0 1 7.43 19.91" />
      {children}
    </svg>
  );
});

export default MetaTemper;
