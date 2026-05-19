import React from 'react';

export const iconData = {
  "id": "VerboGross",
  "name": "VerboGross",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.31 14.83 L 7.61 11.41 L 4.37 6.97 L 9.72 8.20 L 11.18 2.89 L 13.56 7.85 L 18.61 5.68 L 16.22 10.63 L 21.06 13.22 L 15.70 14.44 L 16.69 19.85 L 12.40 16.41 L 8.79 20.56 L 8.80 15.07 Z"
      }
    ]
  ]
};

export const VerboGross = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.31 14.83 L 7.61 11.41 L 4.37 6.97 L 9.72 8.20 L 11.18 2.89 L 13.56 7.85 L 18.61 5.68 L 16.22 10.63 L 21.06 13.22 L 15.70 14.44 L 16.69 19.85 L 12.40 16.41 L 8.79 20.56 L 8.80 15.07 Z" />
      {children}
    </svg>
  );
});

export default VerboGross;
