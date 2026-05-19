import React from 'react';

export const iconData = {
  "id": "TumidoTypist",
  "name": "TumidoTypist",
  "category": "VL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.17 10.12 5.81 3.20 Q 12.66 4.77 19.51 6.34 Q 17.42 9.12 15.33 11.91 Q 9.92 14.47 4.52 17.03 Z"
      }
    ]
  ]
};

export const TumidoTypist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.17 10.12 5.81 3.20 Q 12.66 4.77 19.51 6.34 Q 17.42 9.12 15.33 11.91 Q 9.92 14.47 4.52 17.03 Z" />
      {children}
    </svg>
  );
});

export default TumidoTypist;
