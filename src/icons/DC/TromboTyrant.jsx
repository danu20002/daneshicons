import React from 'react';

export const iconData = {
  "id": "TromboTyrant",
  "name": "TromboTyrant",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.88 7.82 L 12.88 7.82"
      }
    ],
    [
      "path",
      {
        "d": "M 15.01 7.74 L 16.24 11.54"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 13.54 L 13.75 15.89"
      }
    ],
    [
      "path",
      {
        "d": "M 12.07 17.22 L 8.84 14.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 13.68 L 8.30 9.88"
      }
    ]
  ]
};

export const TromboTyrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.88 7.82 L 12.88 7.82" />
      <path d="M 15.01 7.74 L 16.24 11.54" />
      <path d="M 16.98 13.54 L 13.75 15.89" />
      <path d="M 12.07 17.22 L 8.84 14.86" />
      <path d="M 7.06 13.68 L 8.30 9.88" />
      {children}
    </svg>
  );
});

export default TromboTyrant;
