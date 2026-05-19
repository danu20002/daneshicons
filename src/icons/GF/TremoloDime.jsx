import React from 'react';

export const iconData = {
  "id": "TremoloDime",
  "name": "TremoloDime",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.59 12.00 a 9.41 9.41 0 1 0 18.82 0 a 9.41 9.41 0 1 0 -18.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 6.35 a 7.53 2.2588548160716893 0 1 0 15.06 0 a 7.53 2.2588548160716893 0 1 0 -15.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.78 10.12 a 9.22 2.7665208512019923 0 1 0 18.44 0 a 9.22 2.7665208512019923 0 1 0 -18.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.78 13.88 a 9.22 2.7665208512019923 0 1 0 18.44 0 a 9.22 2.7665208512019923 0 1 0 -18.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 17.65 a 7.53 2.258854816071689 0 1 0 15.06 0 a 7.53 2.258854816071689 0 1 0 -15.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.71 3.85 A 2 2 0 0 0 16.71 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 16.71 3.85 A 2 2 0 0 1 16.71 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 3.85 A 2 2 0 0 0 7.29 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 3.85 A 2 2 0 0 1 7.29 20.15"
      }
    ]
  ]
};

export const TremoloDime = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.59 12.00 a 9.41 9.41 0 1 0 18.82 0 a 9.41 9.41 0 1 0 -18.82 0" />
      <path d="M 4.47 6.35 a 7.53 2.2588548160716893 0 1 0 15.06 0 a 7.53 2.2588548160716893 0 1 0 -15.06 0" />
      <path d="M 2.78 10.12 a 9.22 2.7665208512019923 0 1 0 18.44 0 a 9.22 2.7665208512019923 0 1 0 -18.44 0" />
      <path d="M 2.78 13.88 a 9.22 2.7665208512019923 0 1 0 18.44 0 a 9.22 2.7665208512019923 0 1 0 -18.44 0" />
      <path d="M 4.47 17.65 a 7.53 2.258854816071689 0 1 0 15.06 0 a 7.53 2.258854816071689 0 1 0 -15.06 0" />
      <path d="M 16.71 3.85 A 2 2 0 0 0 16.71 20.15" />
      <path d="M 16.71 3.85 A 2 2 0 0 1 16.71 20.15" />
      <path d="M 7.29 3.85 A 2 2 0 0 0 7.29 20.15" />
      <path d="M 7.29 3.85 A 2 2 0 0 1 7.29 20.15" />
      {children}
    </svg>
  );
});

export default TremoloDime;
