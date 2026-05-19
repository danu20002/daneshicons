import React from 'react';

export const iconData = {
  "id": "SaturStation",
  "name": "SaturStation",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.70 9.90 C 16.17 7.86, 6.66 19.12, 14.94 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 2.42 C 17.57 11.36, 8.88 12.52, 18.69 14.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 5.89 C 16.87 8.61, 19.58 7.27, 21.77 14.03"
      }
    ],
    [
      "path",
      {
        "d": "M 3.45 2.92 C 12.04 17.48, 5.70 6.80, 20.05 21.78"
      }
    ]
  ]
};

export const SaturStation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.70 9.90 C 16.17 7.86, 6.66 19.12, 14.94 20.13" />
      <path d="M 8.46 2.42 C 17.57 11.36, 8.88 12.52, 18.69 14.82" />
      <path d="M 5.17 5.89 C 16.87 8.61, 19.58 7.27, 21.77 14.03" />
      <path d="M 3.45 2.92 C 12.04 17.48, 5.70 6.80, 20.05 21.78" />
      {children}
    </svg>
  );
});

export default SaturStation;
