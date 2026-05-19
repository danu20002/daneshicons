import React from 'react';

export const iconData = {
  "id": "SestoWaffle",
  "name": "SestoWaffle",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.74 3.00 L 21.16 9.87 L 18.42 18.87 L 9.26 21.00 L 2.84 14.13 L 5.58 5.13 Z"
      }
    ]
  ]
};

export const SestoWaffle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.74 3.00 L 21.16 9.87 L 18.42 18.87 L 9.26 21.00 L 2.84 14.13 L 5.58 5.13 Z" />
      {children}
    </svg>
  );
});

export default SestoWaffle;
