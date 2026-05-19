import React from 'react';

export const iconData = {
  "id": "GranoScroll",
  "name": "GranoScroll",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.14 17.27 L 13.32 19.98 L 7.88 18.96 L 4.37 14.68 L 4.43 9.15 L 8.03 4.95 L 13.49 4.05 L 18.25 6.87 L 20.09 12.09 Z"
      }
    ]
  ]
};

export const GranoScroll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.14 17.27 L 13.32 19.98 L 7.88 18.96 L 4.37 14.68 L 4.43 9.15 L 8.03 4.95 L 13.49 4.05 L 18.25 6.87 L 20.09 12.09 Z" />
      {children}
    </svg>
  );
});

export default GranoScroll;
