import React from 'react';

export const iconData = {
  "id": "MuroProp",
  "name": "MuroProp",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.68 6.18 L 20.09 3.14"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 14.22 L 2.58 2.54"
      }
    ],
    [
      "path",
      {
        "d": "M 8.57 15.47 L 19.75 8.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 14.55 L 6.29 13.35 L 16.45 8.84 L 19.10 7.36 L 8.37 13.03 L 18.47 13.08 L 17.99 10.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 7.96 L 16.42 18.80"
      }
    ],
    [
      "path",
      {
        "d": "M 2.67 19.45 Q 19.19 2.76 17.08 20.38"
      }
    ]
  ]
};

export const MuroProp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.68 6.18 L 20.09 3.14" />
      <path d="M 5.36 14.22 L 2.58 2.54" />
      <path d="M 8.57 15.47 L 19.75 8.28" />
      <path d="M 5.55 14.55 L 6.29 13.35 L 16.45 8.84 L 19.10 7.36 L 8.37 13.03 L 18.47 13.08 L 17.99 10.69" />
      <path d="M 4.74 7.96 L 16.42 18.80" />
      <path d="M 2.67 19.45 Q 19.19 2.76 17.08 20.38" />
      {children}
    </svg>
  );
});

export default MuroProp;
