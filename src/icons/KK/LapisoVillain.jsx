import React from 'react';

export const iconData = {
  "id": "LapisoVillain",
  "name": "LapisoVillain",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.53 6.20 L 10.53 6.20"
      }
    ],
    [
      "path",
      {
        "d": "M 19.76 10.16 L 17.76 13.62"
      }
    ],
    [
      "path",
      {
        "d": "M 9.72 19.64 L 7.72 16.17"
      }
    ]
  ]
};

export const LapisoVillain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.53 6.20 L 10.53 6.20" />
      <path d="M 19.76 10.16 L 17.76 13.62" />
      <path d="M 9.72 19.64 L 7.72 16.17" />
      {children}
    </svg>
  );
});

export default LapisoVillain;
