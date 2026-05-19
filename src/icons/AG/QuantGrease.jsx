import React from 'react';

export const iconData = {
  "id": "QuantGrease",
  "name": "QuantGrease",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.26 13.82 12.92 7.11 Q 15.16 6.96 17.39 6.82 Q 18.31 6.01 19.22 5.19 Q 19.23 6.65 19.25 8.10 Q 19.39 10.19 19.53 12.29 Q 14.03 13.99 8.52 15.70 Q 6.54 17.77 4.56 19.83 Q 4.09 20.19 3.61 20.54 Z"
      }
    ]
  ]
};

export const QuantGrease = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.26 13.82 12.92 7.11 Q 15.16 6.96 17.39 6.82 Q 18.31 6.01 19.22 5.19 Q 19.23 6.65 19.25 8.10 Q 19.39 10.19 19.53 12.29 Q 14.03 13.99 8.52 15.70 Q 6.54 17.77 4.56 19.83 Q 4.09 20.19 3.61 20.54 Z" />
      {children}
    </svg>
  );
});

export default QuantGrease;
