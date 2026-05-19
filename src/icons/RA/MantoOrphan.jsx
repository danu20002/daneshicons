import React from 'react';

export const iconData = {
  "id": "MantoOrphan",
  "name": "MantoOrphan",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.35 6.02 C 7.76 6.29, 18.80 5.21, 3.70 14.53"
      }
    ],
    [
      "path",
      {
        "d": "M 8.68 14.28 Q 19.52 5.30 20.74 7.64"
      }
    ],
    [
      "path",
      {
        "d": "M 17.11 19.55 Q 13.89 4.54 17.53 11.06"
      }
    ]
  ]
};

export const MantoOrphan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.35 6.02 C 7.76 6.29, 18.80 5.21, 3.70 14.53" />
      <path d="M 8.68 14.28 Q 19.52 5.30 20.74 7.64" />
      <path d="M 17.11 19.55 Q 13.89 4.54 17.53 11.06" />
      {children}
    </svg>
  );
});

export default MantoOrphan;
