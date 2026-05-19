import React from 'react';

export const iconData = {
  "id": "UrticeThree",
  "name": "UrticeThree",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.34 6.34 L 15.61 12.30 L 20.27 19.14 L 12.83 15.53 L 7.77 22.07 L 8.90 13.88 L 1.12 11.09 L 9.26 9.63 L 9.50 1.37 L 13.40 8.66 Z"
      }
    ]
  ]
};

export const UrticeThree = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.34 6.34 L 15.61 12.30 L 20.27 19.14 L 12.83 15.53 L 7.77 22.07 L 8.90 13.88 L 1.12 11.09 L 9.26 9.63 L 9.50 1.37 L 13.40 8.66 Z" />
      {children}
    </svg>
  );
});

export default UrticeThree;
