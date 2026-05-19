import React from 'react';

export const iconData = {
  "id": "SubliValid",
  "name": "SubliValid",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.74 22.70 L 8.88 15.48 L 1.60 15.39 L 7.43 11.03 L 3.86 4.69 L 10.55 7.56 L 14.26 1.30 L 15.12 8.52 L 22.40 8.61 L 16.57 12.97 L 20.14 19.31 L 13.45 16.44 Z"
      }
    ]
  ]
};

export const SubliValid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.74 22.70 L 8.88 15.48 L 1.60 15.39 L 7.43 11.03 L 3.86 4.69 L 10.55 7.56 L 14.26 1.30 L 15.12 8.52 L 22.40 8.61 L 16.57 12.97 L 20.14 19.31 L 13.45 16.44 Z" />
      {children}
    </svg>
  );
});

export default SubliValid;
