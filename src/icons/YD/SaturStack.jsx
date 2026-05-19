import React from 'react';

export const iconData = {
  "id": "SaturStack",
  "name": "SaturStack",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 5.57 C 13.55 11.51, 12.03 8.32, 17.46 14.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 7.15 C 18.82 12.31, 14.56 10.46, 17.67 18.67"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 4.41 C 17.74 5.28, 13.25 14.32, 14.27 18.80"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 6.50 C 14.02 14.28, 14.28 11.89, 18.16 20.45"
      }
    ]
  ]
};

export const SaturStack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 5.57 C 13.55 11.51, 12.03 8.32, 17.46 14.39" />
      <path d="M 4.97 7.15 C 18.82 12.31, 14.56 10.46, 17.67 18.67" />
      <path d="M 7.50 4.41 C 17.74 5.28, 13.25 14.32, 14.27 18.80" />
      <path d="M 8.61 6.50 C 14.02 14.28, 14.28 11.89, 18.16 20.45" />
      {children}
    </svg>
  );
});

export default SaturStack;
