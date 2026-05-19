import React from 'react';

export const iconData = {
  "id": "PlacoPlea",
  "name": "PlacoPlea",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.41 21.10 L 10.41 16.11 L 4.82 17.77 L 7.64 12.67 L 3.41 8.67 L 9.24 8.56 L 10.59 2.90 L 13.59 7.89 L 19.18 6.23 L 16.36 11.33 L 20.59 15.33 L 14.76 15.44 Z"
      }
    ]
  ]
};

export const PlacoPlea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.41 21.10 L 10.41 16.11 L 4.82 17.77 L 7.64 12.67 L 3.41 8.67 L 9.24 8.56 L 10.59 2.90 L 13.59 7.89 L 19.18 6.23 L 16.36 11.33 L 20.59 15.33 L 14.76 15.44 Z" />
      {children}
    </svg>
  );
});

export default PlacoPlea;
