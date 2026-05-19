import React from 'react';

export const iconData = {
  "id": "TroncoChase",
  "name": "TroncoChase",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.99 5.40 L 16.36 11.73 L 20.75 17.56 L 13.60 16.06 L 9.42 22.04 L 8.64 14.78 L 1.66 12.65 L 8.32 9.66 L 8.19 2.36 L 13.09 7.77 Z"
      }
    ]
  ]
};

export const TroncoChase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.99 5.40 L 16.36 11.73 L 20.75 17.56 L 13.60 16.06 L 9.42 22.04 L 8.64 14.78 L 1.66 12.65 L 8.32 9.66 L 8.19 2.36 L 13.09 7.77 Z" />
      {children}
    </svg>
  );
});

export default TroncoChase;
