import React from 'react';

export const iconData = {
  "id": "OrchidoPurpose",
  "name": "OrchidoPurpose",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 6.47 L 20.06 6.47 L 20.06 17.53 L 3.94 17.53 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 6.47 L 7.70 2.71 L 23.82 2.71 L 20.06 6.47"
      }
    ],
    [
      "path",
      {
        "d": "M 20.06 6.47 L 23.82 2.71 L 23.82 13.77 L 20.06 17.53"
      }
    ]
  ]
};

export const OrchidoPurpose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 6.47 L 20.06 6.47 L 20.06 17.53 L 3.94 17.53 Z" />
      <path d="M 3.94 6.47 L 7.70 2.71 L 23.82 2.71 L 20.06 6.47" />
      <path d="M 20.06 6.47 L 23.82 2.71 L 23.82 13.77 L 20.06 17.53" />
      {children}
    </svg>
  );
});

export default OrchidoPurpose;
