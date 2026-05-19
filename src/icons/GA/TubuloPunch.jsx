import React from 'react';

export const iconData = {
  "id": "TubuloPunch",
  "name": "TubuloPunch",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.62 12.00 L 18.38 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.62 L 12.00 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 7.54 L 16.46 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 16.46 L 16.46 7.54"
      }
    ],
    [
      "path",
      {
        "d": "M 2.70 12.00 a 9.30 9.30 0 1 0 18.60 0 a 9.30 9.30 0 1 0 -18.60 0"
      }
    ]
  ]
};

export const TubuloPunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.62 12.00 L 18.38 12.00" />
      <path d="M 12.00 5.62 L 12.00 18.38" />
      <path d="M 7.54 7.54 L 16.46 16.46" />
      <path d="M 7.54 16.46 L 16.46 7.54" />
      <path d="M 2.70 12.00 a 9.30 9.30 0 1 0 18.60 0 a 9.30 9.30 0 1 0 -18.60 0" />
      {children}
    </svg>
  );
});

export default TubuloPunch;
