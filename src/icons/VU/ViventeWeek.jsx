import React from 'react';

export const iconData = {
  "id": "ViventeWeek",
  "name": "ViventeWeek",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.91 20.14 L 8.94 13.58 L 3.00 10.62 L 9.55 9.58 L 10.53 3.01 L 13.55 8.92 L 20.09 7.82 L 15.40 12.52 L 18.47 18.40 L 12.56 15.40 Z"
      }
    ]
  ]
};

export const ViventeWeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.91 20.14 L 8.94 13.58 L 3.00 10.62 L 9.55 9.58 L 10.53 3.01 L 13.55 8.92 L 20.09 7.82 L 15.40 12.52 L 18.47 18.40 L 12.56 15.40 Z" />
      {children}
    </svg>
  );
});

export default ViventeWeek;
