import React from 'react';

export const iconData = {
  "id": "ValicoJam",
  "name": "ValicoJam",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 5.89 L 19.71 5.89 L 19.71 18.11 L 4.29 18.11 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 5.89 L 7.71 2.47 L 23.13 2.47 L 19.71 5.89"
      }
    ],
    [
      "path",
      {
        "d": "M 19.71 5.89 L 23.13 2.47 L 23.13 14.70 L 19.71 18.11"
      }
    ]
  ]
};

export const ValicoJam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 5.89 L 19.71 5.89 L 19.71 18.11 L 4.29 18.11 Z" />
      <path d="M 4.29 5.89 L 7.71 2.47 L 23.13 2.47 L 19.71 5.89" />
      <path d="M 19.71 5.89 L 23.13 2.47 L 23.13 14.70 L 19.71 18.11" />
      {children}
    </svg>
  );
});

export default ValicoJam;
