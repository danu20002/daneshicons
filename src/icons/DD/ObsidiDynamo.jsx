import React from 'react';

export const iconData = {
  "id": "ObsidiDynamo",
  "name": "ObsidiDynamo",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.30 8.29 L 11.05 4.71 L 10.31 14.27 L 6.85 20.63 L 21.38 20.98 L 20.35 4.82 L 4.55 18.88 L 14.97 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 15.54 6.40 L 5.90 15.75 L 7.17 5.30 L 9.54 10.80"
      }
    ]
  ]
};

export const ObsidiDynamo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.30 8.29 L 11.05 4.71 L 10.31 14.27 L 6.85 20.63 L 21.38 20.98 L 20.35 4.82 L 4.55 18.88 L 14.97 21.76" />
      <path d="M 15.54 6.40 L 5.90 15.75 L 7.17 5.30 L 9.54 10.80" />
      {children}
    </svg>
  );
});

export default ObsidiDynamo;
