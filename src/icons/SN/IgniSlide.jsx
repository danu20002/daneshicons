import React from 'react';

export const iconData = {
  "id": "IgniSlide",
  "name": "IgniSlide",
  "category": "SN",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.17 12.50 10.87 7.73 Q 15.60 7.85 20.34 7.98 Q 20.30 9.62 20.27 11.27 Q 18.77 11.85 17.27 12.43 Q 17.31 13.67 17.36 14.92 Q 16.41 16.10 15.46 17.28 Z"
      }
    ]
  ]
};

export const IgniSlide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.17 12.50 10.87 7.73 Q 15.60 7.85 20.34 7.98 Q 20.30 9.62 20.27 11.27 Q 18.77 11.85 17.27 12.43 Q 17.31 13.67 17.36 14.92 Q 16.41 16.10 15.46 17.28 Z" />
      {children}
    </svg>
  );
});

export default IgniSlide;
