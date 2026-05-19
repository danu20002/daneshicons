import React from 'react';

export const iconData = {
  "id": "YankeeWalnut",
  "name": "YankeeWalnut",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 12.00 L 19.94 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.06 L 12.00 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 6.44 L 17.56 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 17.56 L 17.56 6.44"
      }
    ],
    [
      "path",
      {
        "d": "M 2.53 12.00 a 9.47 9.47 0 1 0 18.95 0 a 9.47 9.47 0 1 0 -18.95 0"
      }
    ]
  ]
};

export const YankeeWalnut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 12.00 L 19.94 12.00" />
      <path d="M 12.00 4.06 L 12.00 19.94" />
      <path d="M 6.44 6.44 L 17.56 17.56" />
      <path d="M 6.44 17.56 L 17.56 6.44" />
      <path d="M 2.53 12.00 a 9.47 9.47 0 1 0 18.95 0 a 9.47 9.47 0 1 0 -18.95 0" />
      {children}
    </svg>
  );
});

export default YankeeWalnut;
