import React from 'react';

export const iconData = {
  "id": "RocciTale",
  "name": "RocciTale",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.76 12.00 Q 15.46 13.43 18.19 18.19"
      }
    ],
    [
      "path",
      {
        "d": "M 18.19 18.19 Q 13.43 15.46 12.00 20.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.76 Q 10.57 15.46 5.81 18.19"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 18.19 Q 8.54 13.43 3.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.24 12.00 Q 8.54 10.57 5.81 5.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 5.81 Q 10.57 8.54 12.00 3.24"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.24 Q 13.43 8.54 18.19 5.81"
      }
    ],
    [
      "path",
      {
        "d": "M 18.19 5.81 Q 15.46 10.57 20.76 12.00"
      }
    ]
  ]
};

export const RocciTale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.76 12.00 Q 15.46 13.43 18.19 18.19" />
      <path d="M 18.19 18.19 Q 13.43 15.46 12.00 20.76" />
      <path d="M 12.00 20.76 Q 10.57 15.46 5.81 18.19" />
      <path d="M 5.81 18.19 Q 8.54 13.43 3.24 12.00" />
      <path d="M 3.24 12.00 Q 8.54 10.57 5.81 5.81" />
      <path d="M 5.81 5.81 Q 10.57 8.54 12.00 3.24" />
      <path d="M 12.00 3.24 Q 13.43 8.54 18.19 5.81" />
      <path d="M 18.19 5.81 Q 15.46 10.57 20.76 12.00" />
      {children}
    </svg>
  );
});

export default RocciTale;
