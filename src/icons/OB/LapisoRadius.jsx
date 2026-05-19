import React from 'react';

export const iconData = {
  "id": "LapisoRadius",
  "name": "LapisoRadius",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.34 10.99 L 10.34 10.99"
      }
    ],
    [
      "path",
      {
        "d": "M 15.71 7.61 L 13.71 11.07"
      }
    ],
    [
      "path",
      {
        "d": "M 13.95 17.41 L 11.95 13.94"
      }
    ]
  ]
};

export const LapisoRadius = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.34 10.99 L 10.34 10.99" />
      <path d="M 15.71 7.61 L 13.71 11.07" />
      <path d="M 13.95 17.41 L 11.95 13.94" />
      {children}
    </svg>
  );
});

export default LapisoRadius;
