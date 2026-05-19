import React from 'react';

export const iconData = {
  "id": "ValutaEntire",
  "name": "ValutaEntire",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.97 20.34 L 11.52 17.97 L 6.76 19.60 L 6.59 14.57 L 2.79 11.26 L 7.07 8.60 L 8.03 3.66 L 12.48 6.03 L 17.24 4.40 L 17.41 9.43 L 21.21 12.74 L 16.93 15.40 Z"
      }
    ]
  ]
};

export const ValutaEntire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.97 20.34 L 11.52 17.97 L 6.76 19.60 L 6.59 14.57 L 2.79 11.26 L 7.07 8.60 L 8.03 3.66 L 12.48 6.03 L 17.24 4.40 L 17.41 9.43 L 21.21 12.74 L 16.93 15.40 Z" />
      {children}
    </svg>
  );
});

export default ValutaEntire;
