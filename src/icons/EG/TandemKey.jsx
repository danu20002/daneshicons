import React from 'react';

export const iconData = {
  "id": "TandemKey",
  "name": "TandemKey",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.15 15.74 L 15.82 15.95 L 15.40 22.27 L 11.29 17.45 L 6.10 21.06 L 7.30 14.85 L 1.23 13.03 L 6.84 10.10 L 4.48 4.23 L 10.27 6.78 L 13.39 1.28 L 15.00 7.40 L 21.25 6.40 L 17.47 11.48 Z"
      }
    ]
  ]
};

export const TandemKey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.15 15.74 L 15.82 15.95 L 15.40 22.27 L 11.29 17.45 L 6.10 21.06 L 7.30 14.85 L 1.23 13.03 L 6.84 10.10 L 4.48 4.23 L 10.27 6.78 L 13.39 1.28 L 15.00 7.40 L 21.25 6.40 L 17.47 11.48 Z" />
      {children}
    </svg>
  );
});

export default TandemKey;
