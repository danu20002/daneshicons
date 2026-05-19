import React from 'react';

export const iconData = {
  "id": "TornadoMister",
  "name": "TornadoMister",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.42 15.78 L 13.84 15.20 L 11.01 21.17 L 9.52 14.73 L 2.97 13.89 L 8.63 10.49 L 7.41 4.00 L 12.40 8.33 L 18.19 5.16 L 15.61 11.24 Z"
      }
    ]
  ]
};

export const TornadoMister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.42 15.78 L 13.84 15.20 L 11.01 21.17 L 9.52 14.73 L 2.97 13.89 L 8.63 10.49 L 7.41 4.00 L 12.40 8.33 L 18.19 5.16 L 15.61 11.24 Z" />
      {children}
    </svg>
  );
});

export default TornadoMister;
