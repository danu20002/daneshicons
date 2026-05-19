import React from 'react';

export const iconData = {
  "id": "TondoGrate",
  "name": "TondoGrate",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.25 5.15 L 20.76 16.78 L 10.16 21.80 L 2.11 13.28 L 7.72 2.99 Z"
      }
    ]
  ]
};

export const TondoGrate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.25 5.15 L 20.76 16.78 L 10.16 21.80 L 2.11 13.28 L 7.72 2.99 Z" />
      {children}
    </svg>
  );
});

export default TondoGrate;
