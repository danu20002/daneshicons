import React from 'react';

export const iconData = {
  "id": "PlexiSpleen",
  "name": "PlexiSpleen",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.14 14.69 A 2.59 2.42 46 0 0 9.47 21.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 10.62 C 16.57 20.37, 15.06 19.60, 16.87 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 21.45 3.97 Q 3.15 4.97 19.82 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 2.31 L 6.13 5.31"
      }
    ],
    [
      "path",
      {
        "d": "M 14.19 8.09 Q 5.59 3.17 18.33 21.20"
      }
    ],
    [
      "path",
      {
        "d": "M 14.35 2.15 C 20.99 15.08, 21.59 8.84, 14.65 16.12"
      }
    ]
  ]
};

export const PlexiSpleen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.14 14.69 A 2.59 2.42 46 0 0 9.47 21.81" />
      <path d="M 6.03 10.62 C 16.57 20.37, 15.06 19.60, 16.87 20.02" />
      <path d="M 21.45 3.97 Q 3.15 4.97 19.82 19.15" />
      <path d="M 18.35 2.31 L 6.13 5.31" />
      <path d="M 14.19 8.09 Q 5.59 3.17 18.33 21.20" />
      <path d="M 14.35 2.15 C 20.99 15.08, 21.59 8.84, 14.65 16.12" />
      {children}
    </svg>
  );
});

export default PlexiSpleen;
