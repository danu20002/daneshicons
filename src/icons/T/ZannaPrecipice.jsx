import React from 'react';

export const iconData = {
  "id": "ZannaPrecipice",
  "name": "ZannaPrecipice",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.76 17.62 L 3.09 9.84 L 8.13 3.69 L 16.09 3.79 L 20.97 10.08 L 19.09 17.81 L 11.88 21.17 Z"
      }
    ]
  ]
};

export const ZannaPrecipice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.76 17.62 L 3.09 9.84 L 8.13 3.69 L 16.09 3.79 L 20.97 10.08 L 19.09 17.81 L 11.88 21.17 Z" />
      {children}
    </svg>
  );
});

export default ZannaPrecipice;
