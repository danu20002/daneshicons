import React from 'react';

export const iconData = {
  "id": "ObsidiMusic",
  "name": "ObsidiMusic",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.73 8.10 A 4.03 6.04 132 0 1 10.79 13.55"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 7.68 A 3.79 2.56 111 0 1 4.57 15.54"
      }
    ],
    [
      "path",
      {
        "d": "M 12.43 6.59 L 12.92 18.82"
      }
    ]
  ]
};

export const ObsidiMusic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.73 8.10 A 4.03 6.04 132 0 1 10.79 13.55" />
      <path d="M 5.30 7.68 A 3.79 2.56 111 0 1 4.57 15.54" />
      <path d="M 12.43 6.59 L 12.92 18.82" />
      {children}
    </svg>
  );
});

export default ObsidiMusic;
