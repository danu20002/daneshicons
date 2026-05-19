import React from 'react';

export const iconData = {
  "id": "SoloShape",
  "name": "SoloShape",
  "category": "RU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.84 11.97 3.27 9.28 Q 5.23 8.45 7.20 7.63 Q 10.42 9.78 13.64 11.94 Q 16.88 13.83 20.12 15.72 Q 15.81 16.90 11.51 18.08 Q 8.21 17.28 4.91 16.49 Q 5.67 15.57 6.42 14.66 Z"
      }
    ]
  ]
};

export const SoloShape = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.84 11.97 3.27 9.28 Q 5.23 8.45 7.20 7.63 Q 10.42 9.78 13.64 11.94 Q 16.88 13.83 20.12 15.72 Q 15.81 16.90 11.51 18.08 Q 8.21 17.28 4.91 16.49 Q 5.67 15.57 6.42 14.66 Z" />
      {children}
    </svg>
  );
});

export default SoloShape;
