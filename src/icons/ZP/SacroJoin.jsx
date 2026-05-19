import React from 'react';

export const iconData = {
  "id": "SacroJoin",
  "name": "SacroJoin",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 7.89 C 18.95 7.31, 19.34 14.09, 15.46 17.19"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 8.18 C 7.38 6.04, 7.44 4.32, 20.96 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 9.10 6.94 C 17.40 10.62, 11.87 17.15, 19.54 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 2.54 4.12 C 17.09 8.87, 6.99 6.56, 21.08 14.93"
      }
    ]
  ]
};

export const SacroJoin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 7.89 C 18.95 7.31, 19.34 14.09, 15.46 17.19" />
      <path d="M 3.69 8.18 C 7.38 6.04, 7.44 4.32, 20.96 20.86" />
      <path d="M 9.10 6.94 C 17.40 10.62, 11.87 17.15, 19.54 16.96" />
      <path d="M 2.54 4.12 C 17.09 8.87, 6.99 6.56, 21.08 14.93" />
      {children}
    </svg>
  );
});

export default SacroJoin;
