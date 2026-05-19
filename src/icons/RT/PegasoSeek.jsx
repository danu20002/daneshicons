import React from 'react';

export const iconData = {
  "id": "PegasoSeek",
  "name": "PegasoSeek",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.24 21.60 L 5.43 15.12 L 10.56 16.90 L 15.86 8.11 L 11.49 2.37 L 5.37 3.82"
      }
    ],
    [
      "path",
      {
        "d": "M 13.30 3.39 C 11.28 20.11, 14.22 17.89, 15.62 16.93"
      }
    ]
  ]
};

export const PegasoSeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.24 21.60 L 5.43 15.12 L 10.56 16.90 L 15.86 8.11 L 11.49 2.37 L 5.37 3.82" />
      <path d="M 13.30 3.39 C 11.28 20.11, 14.22 17.89, 15.62 16.93" />
      {children}
    </svg>
  );
});

export default PegasoSeek;
