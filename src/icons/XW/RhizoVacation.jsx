import React from 'react';

export const iconData = {
  "id": "RhizoVacation",
  "name": "RhizoVacation",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.16 2.29 L 21.59 10.10 L 16.77 20.53 L 5.36 19.18 L 3.12 7.90 Z"
      }
    ]
  ]
};

export const RhizoVacation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.16 2.29 L 21.59 10.10 L 16.77 20.53 L 5.36 19.18 L 3.12 7.90 Z" />
      {children}
    </svg>
  );
});

export default RhizoVacation;
