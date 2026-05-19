import React from 'react';

export const iconData = {
  "id": "SilicoDecade",
  "name": "SilicoDecade",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.65 11.29 L 12.65 11.29"
      }
    ],
    [
      "path",
      {
        "d": "M 11.64 8.59 L 12.88 12.40"
      }
    ],
    [
      "path",
      {
        "d": "M 15.13 10.61 L 11.89 12.96"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 14.55 L 11.05 12.20"
      }
    ],
    [
      "path",
      {
        "d": "M 10.29 14.96 L 11.52 11.16"
      }
    ]
  ]
};

export const SilicoDecade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.65 11.29 L 12.65 11.29" />
      <path d="M 11.64 8.59 L 12.88 12.40" />
      <path d="M 15.13 10.61 L 11.89 12.96" />
      <path d="M 14.29 14.55 L 11.05 12.20" />
      <path d="M 10.29 14.96 L 11.52 11.16" />
      {children}
    </svg>
  );
});

export default SilicoDecade;
