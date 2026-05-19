import React from 'react';

export const iconData = {
  "id": "AutoGalaxy",
  "name": "AutoGalaxy",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.60 19.80 L 12.38 6.58 L 14.91 2.31 L 12.90 12.47 L 17.45 11.55 L 5.51 18.81 L 3.65 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 21.01 9.60 C 17.52 21.44, 7.28 13.37, 6.51 11.68"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 2.32 Q 9.40 15.63 10.29 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 2.81 C 5.22 9.03, 21.15 20.78, 3.52 14.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 20.54 L 17.90 19.91"
      }
    ]
  ]
};

export const AutoGalaxy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.60 19.80 L 12.38 6.58 L 14.91 2.31 L 12.90 12.47 L 17.45 11.55 L 5.51 18.81 L 3.65 20.01" />
      <path d="M 21.01 9.60 C 17.52 21.44, 7.28 13.37, 6.51 11.68" />
      <path d="M 7.50 2.32 Q 9.40 15.63 10.29 20.96" />
      <path d="M 8.95 2.81 C 5.22 9.03, 21.15 20.78, 3.52 14.41" />
      <path d="M 7.89 20.54 L 17.90 19.91" />
      {children}
    </svg>
  );
});

export default AutoGalaxy;
