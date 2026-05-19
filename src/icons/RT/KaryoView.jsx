import React from 'react';

export const iconData = {
  "id": "KaryoView",
  "name": "KaryoView",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.87 3.02 L 2.49 21.57 L 21.35 5.23 L 5.02 2.74 L 16.75 4.20"
      }
    ],
    [
      "path",
      {
        "d": "M 21.82 12.21 Q 4.86 18.83 13.01 3.47"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 7.09 A 3.32 2.76 90 0 0 8.39 13.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.98 7.97 L 3.51 18.74 L 7.68 14.36 L 20.33 6.53 L 16.61 20.61 L 13.85 2.87 L 21.49 15.59 L 11.29 3.07"
      }
    ]
  ]
};

export const KaryoView = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.87 3.02 L 2.49 21.57 L 21.35 5.23 L 5.02 2.74 L 16.75 4.20" />
      <path d="M 21.82 12.21 Q 4.86 18.83 13.01 3.47" />
      <path d="M 3.75 7.09 A 3.32 2.76 90 0 0 8.39 13.27" />
      <path d="M 20.98 7.97 L 3.51 18.74 L 7.68 14.36 L 20.33 6.53 L 16.61 20.61 L 13.85 2.87 L 21.49 15.59 L 11.29 3.07" />
      {children}
    </svg>
  );
});

export default KaryoView;
