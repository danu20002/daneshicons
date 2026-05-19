import React from 'react';

export const iconData = {
  "id": "RepsoSmog",
  "name": "RepsoSmog",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.64 11.77 A 3.12 2.50 99 0 0 13.14 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 12.68 A 6.27 3.53 151 0 0 21.79 10.96"
      }
    ],
    [
      "path",
      {
        "d": "M 2.23 9.95 L 17.77 13.88 L 20.19 17.58"
      }
    ]
  ]
};

export const RepsoSmog = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.64 11.77 A 3.12 2.50 99 0 0 13.14 18.18" />
      <path d="M 20.21 12.68 A 6.27 3.53 151 0 0 21.79 10.96" />
      <path d="M 2.23 9.95 L 17.77 13.88 L 20.19 17.58" />
      {children}
    </svg>
  );
});

export default RepsoSmog;
