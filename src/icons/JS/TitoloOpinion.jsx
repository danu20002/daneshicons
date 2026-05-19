import React from 'react';

export const iconData = {
  "id": "TitoloOpinion",
  "name": "TitoloOpinion",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 13.24 L 18.05 9.22"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 4.10 L 14.68 15.82 L 3.16 12.55 L 17.06 20.82 L 3.46 7.18 L 14.44 14.59 L 7.27 21.96 L 14.21 21.31"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 5.71 A 2.10 6.82 24 0 1 17.95 9.80"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 14.22 C 16.74 18.35, 13.32 12.30, 3.19 18.77"
      }
    ]
  ]
};

export const TitoloOpinion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 13.24 L 18.05 9.22" />
      <path d="M 6.09 4.10 L 14.68 15.82 L 3.16 12.55 L 17.06 20.82 L 3.46 7.18 L 14.44 14.59 L 7.27 21.96 L 14.21 21.31" />
      <path d="M 8.08 5.71 A 2.10 6.82 24 0 1 17.95 9.80" />
      <path d="M 3.44 14.22 C 16.74 18.35, 13.32 12.30, 3.19 18.77" />
      {children}
    </svg>
  );
});

export default TitoloOpinion;
