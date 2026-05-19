import React from 'react';

export const iconData = {
  "id": "MitoCheck",
  "name": "MitoCheck",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.61 10.18 L 6.14 18.35 L 3.10 8.16 L 6.28 3.70 L 12.44 20.09 L 10.03 14.62 L 3.35 4.18"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 11.76 A 4.37 4.38 34 0 1 14.89 14.21"
      }
    ]
  ]
};

export const MitoCheck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.61 10.18 L 6.14 18.35 L 3.10 8.16 L 6.28 3.70 L 12.44 20.09 L 10.03 14.62 L 3.35 4.18" />
      <path d="M 4.27 11.76 A 4.37 4.38 34 0 1 14.89 14.21" />
      {children}
    </svg>
  );
});

export default MitoCheck;
