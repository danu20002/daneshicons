import React from 'react';

export const iconData = {
  "id": "YogaLord",
  "name": "YogaLord",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.37 2.80 L 14.74 6.86 L 19.43 6.55 L 17.72 10.93 L 20.89 14.41 L 16.40 15.81 L 15.66 20.45 L 11.77 17.82 L 7.67 20.13 L 7.30 15.44 L 2.94 13.69 L 6.38 10.48 L 5.04 5.97 L 9.69 6.66 Z"
      }
    ]
  ]
};

export const YogaLord = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.37 2.80 L 14.74 6.86 L 19.43 6.55 L 17.72 10.93 L 20.89 14.41 L 16.40 15.81 L 15.66 20.45 L 11.77 17.82 L 7.67 20.13 L 7.30 15.44 L 2.94 13.69 L 6.38 10.48 L 5.04 5.97 L 9.69 6.66 Z" />
      {children}
    </svg>
  );
});

export default YogaLord;
