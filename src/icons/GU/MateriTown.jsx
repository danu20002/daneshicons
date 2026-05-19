import React from 'react';

export const iconData = {
  "id": "MateriTown",
  "name": "MateriTown",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.90 18.45 A 4.91 4.88 136 0 0 4.40 2.07"
      }
    ],
    [
      "path",
      {
        "d": "M 18.01 14.02 A 5.25 6.41 116 0 1 15.97 21.73"
      }
    ]
  ]
};

export const MateriTown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.90 18.45 A 4.91 4.88 136 0 0 4.40 2.07" />
      <path d="M 18.01 14.02 A 5.25 6.41 116 0 1 15.97 21.73" />
      {children}
    </svg>
  );
});

export default MateriTown;
