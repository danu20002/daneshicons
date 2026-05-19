import React from 'react';

export const iconData = {
  "id": "PneumoMedal",
  "name": "PneumoMedal",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.44 17.00 L 13.31 15.04 L 9.85 21.57 L 9.51 14.19 L 2.23 12.92 L 9.15 10.31 L 8.11 2.99 L 12.73 8.77 L 19.36 5.52 L 15.30 11.69 Z"
      }
    ]
  ]
};

export const PneumoMedal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.44 17.00 L 13.31 15.04 L 9.85 21.57 L 9.51 14.19 L 2.23 12.92 L 9.15 10.31 L 8.11 2.99 L 12.73 8.77 L 19.36 5.52 L 15.30 11.69 Z" />
      {children}
    </svg>
  );
});

export default PneumoMedal;
