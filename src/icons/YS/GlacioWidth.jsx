import React from 'react';

export const iconData = {
  "id": "GlacioWidth",
  "name": "GlacioWidth",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.02 21.61 L 11.44 16.40 L 5.69 20.29 L 7.91 13.71 L 1.67 10.68 L 8.47 9.31 L 7.98 2.39 L 12.56 7.60 L 18.31 3.71 L 16.09 10.29 L 22.33 13.32 L 15.53 14.69 Z"
      }
    ]
  ]
};

export const GlacioWidth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.02 21.61 L 11.44 16.40 L 5.69 20.29 L 7.91 13.71 L 1.67 10.68 L 8.47 9.31 L 7.98 2.39 L 12.56 7.60 L 18.31 3.71 L 16.09 10.29 L 22.33 13.32 L 15.53 14.69 Z" />
      {children}
    </svg>
  );
});

export default GlacioWidth;
