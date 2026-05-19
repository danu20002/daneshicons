import React from 'react';

export const iconData = {
  "id": "TumidoDesert",
  "name": "TumidoDesert",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.69 9.63 L 18.65 16.53 L 12.60 20.03 L 6.10 17.47 L 4.04 10.80 L 7.98 5.03 L 14.94 4.51 Z"
      }
    ]
  ]
};

export const TumidoDesert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.69 9.63 L 18.65 16.53 L 12.60 20.03 L 6.10 17.47 L 4.04 10.80 L 7.98 5.03 L 14.94 4.51 Z" />
      {children}
    </svg>
  );
});

export default TumidoDesert;
