import React from 'react';

export const iconData = {
  "id": "TachioHazel",
  "name": "TachioHazel",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.07 15.12 L 7.99 10.79 L 6.28 4.47 L 11.91 7.81 L 17.39 4.23 L 15.96 10.62 L 21.05 14.73 L 14.54 15.34 L 12.20 21.45 L 9.61 15.44 Z"
      }
    ]
  ]
};

export const TachioHazel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.07 15.12 L 7.99 10.79 L 6.28 4.47 L 11.91 7.81 L 17.39 4.23 L 15.96 10.62 L 21.05 14.73 L 14.54 15.34 L 12.20 21.45 L 9.61 15.44 Z" />
      {children}
    </svg>
  );
});

export default TachioHazel;
