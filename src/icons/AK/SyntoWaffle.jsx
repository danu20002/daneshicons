import React from 'react';

export const iconData = {
  "id": "SyntoWaffle",
  "name": "SyntoWaffle",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 5.54 L 19.29 5.54 L 19.29 18.46 L 4.71 18.46 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 5.54 L 8.99 1.25 L 23.58 1.25 L 19.29 5.54"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 5.54 L 23.58 1.25 L 23.58 14.18 L 19.29 18.46"
      }
    ]
  ]
};

export const SyntoWaffle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 5.54 L 19.29 5.54 L 19.29 18.46 L 4.71 18.46 Z" />
      <path d="M 4.71 5.54 L 8.99 1.25 L 23.58 1.25 L 19.29 5.54" />
      <path d="M 19.29 5.54 L 23.58 1.25 L 23.58 14.18 L 19.29 18.46" />
      {children}
    </svg>
  );
});

export default SyntoWaffle;
