import React from 'react';

export const iconData = {
  "id": "UrinoHope",
  "name": "UrinoHope",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.10 18.39 L 4.02 10.95 L 8.92 4.56 L 16.90 5.61 L 19.98 13.05 L 15.08 19.44 Z"
      }
    ]
  ]
};

export const UrinoHope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.10 18.39 L 4.02 10.95 L 8.92 4.56 L 16.90 5.61 L 19.98 13.05 L 15.08 19.44 Z" />
      {children}
    </svg>
  );
});

export default UrinoHope;
