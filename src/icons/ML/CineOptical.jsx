import React from 'react';

export const iconData = {
  "id": "CineOptical",
  "name": "CineOptical",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.30 6.09 C 6.44 13.03, 14.37 18.44, 18.35 19.49"
      }
    ],
    [
      "path",
      {
        "d": "M 2.56 5.53 C 5.07 12.42, 18.48 12.35, 17.01 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.57 6.58 C 10.40 16.74, 14.36 8.73, 14.95 17.92"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 7.88 C 8.92 5.38, 9.44 6.68, 15.94 14.73"
      }
    ]
  ]
};

export const CineOptical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.30 6.09 C 6.44 13.03, 14.37 18.44, 18.35 19.49" />
      <path d="M 2.56 5.53 C 5.07 12.42, 18.48 12.35, 17.01 20.81" />
      <path d="M 6.57 6.58 C 10.40 16.74, 14.36 8.73, 14.95 17.92" />
      <path d="M 9.82 7.88 C 8.92 5.38, 9.44 6.68, 15.94 14.73" />
      {children}
    </svg>
  );
});

export default CineOptical;
