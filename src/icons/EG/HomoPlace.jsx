import React from 'react';

export const iconData = {
  "id": "HomoPlace",
  "name": "HomoPlace",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.17 2.91 L 14.91 8.15 L 20.70 9.35 L 16.56 13.58 L 17.21 19.45 L 11.91 16.83 L 6.52 19.26 L 7.38 13.41 L 3.41 9.03 L 9.24 8.04 Z"
      }
    ]
  ]
};

export const HomoPlace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.17 2.91 L 14.91 8.15 L 20.70 9.35 L 16.56 13.58 L 17.21 19.45 L 11.91 16.83 L 6.52 19.26 L 7.38 13.41 L 3.41 9.03 L 9.24 8.04 Z" />
      {children}
    </svg>
  );
});

export default HomoPlace;
