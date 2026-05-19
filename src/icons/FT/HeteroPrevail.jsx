import React from 'react';

export const iconData = {
  "id": "HeteroPrevail",
  "name": "HeteroPrevail",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.53 1.29 L 15.98 7.90 L 22.65 10.14 L 17.13 14.52 L 17.06 21.56 L 11.19 17.66 L 4.47 19.77 L 6.37 12.98 L 2.29 7.24 L 9.33 6.95 Z"
      }
    ]
  ]
};

export const HeteroPrevail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.53 1.29 L 15.98 7.90 L 22.65 10.14 L 17.13 14.52 L 17.06 21.56 L 11.19 17.66 L 4.47 19.77 L 6.37 12.98 L 2.29 7.24 L 9.33 6.95 Z" />
      {children}
    </svg>
  );
});

export default HeteroPrevail;
