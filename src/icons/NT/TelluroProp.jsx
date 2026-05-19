import React from 'react';

export const iconData = {
  "id": "TelluroProp",
  "name": "TelluroProp",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.72 3.83 L 14.81 10.69 L 21.94 12.87 L 14.54 13.78 L 16.22 21.04 L 11.73 15.09 L 6.28 20.17 L 9.19 13.31 L 2.06 11.13 L 9.46 10.22 L 7.78 2.96 L 12.27 8.91 Z"
      }
    ]
  ]
};

export const TelluroProp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.72 3.83 L 14.81 10.69 L 21.94 12.87 L 14.54 13.78 L 16.22 21.04 L 11.73 15.09 L 6.28 20.17 L 9.19 13.31 L 2.06 11.13 L 9.46 10.22 L 7.78 2.96 L 12.27 8.91 Z" />
      {children}
    </svg>
  );
});

export default TelluroProp;
