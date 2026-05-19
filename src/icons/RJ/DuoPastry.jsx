import React from 'react';

export const iconData = {
  "id": "DuoPastry",
  "name": "DuoPastry",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.99 3.91 L 17.08 5.38 L 20.34 11.84 L 17.32 18.42 L 10.30 20.16 L 4.56 15.76 L 4.42 8.52 Z"
      }
    ]
  ]
};

export const DuoPastry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.99 3.91 L 17.08 5.38 L 20.34 11.84 L 17.32 18.42 L 10.30 20.16 L 4.56 15.76 L 4.42 8.52 Z" />
      {children}
    </svg>
  );
});

export default DuoPastry;
