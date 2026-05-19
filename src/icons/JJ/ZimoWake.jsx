import React from 'react';

export const iconData = {
  "id": "ZimoWake",
  "name": "ZimoWake",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.99 21.57 L 9.76 16.65 L 4.52 17.96 L 6.96 13.15 L 2.67 9.86 L 7.96 8.78 L 7.86 3.38 L 12.00 6.83 L 16.16 3.38 L 16.04 8.78 L 21.33 9.88 L 17.04 13.15 L 19.48 17.97 L 14.24 16.66 Z"
      }
    ]
  ]
};

export const ZimoWake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.99 21.57 L 9.76 16.65 L 4.52 17.96 L 6.96 13.15 L 2.67 9.86 L 7.96 8.78 L 7.86 3.38 L 12.00 6.83 L 16.16 3.38 L 16.04 8.78 L 21.33 9.88 L 17.04 13.15 L 19.48 17.97 L 14.24 16.66 Z" />
      {children}
    </svg>
  );
});

export default ZimoWake;
