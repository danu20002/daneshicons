import React from 'react';

export const iconData = {
  "id": "GlacioInsult",
  "name": "GlacioInsult",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.85 17.47 L 13.84 14.87 L 13.69 21.42 L 11.27 15.33 L 6.53 19.85 L 9.13 13.84 L 2.58 13.69 L 8.67 11.27 L 4.15 6.53 L 10.16 9.13 L 10.31 2.58 L 12.73 8.67 L 17.47 4.15 L 14.87 10.16 L 21.42 10.31 L 15.33 12.73 Z"
      }
    ]
  ]
};

export const GlacioInsult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.85 17.47 L 13.84 14.87 L 13.69 21.42 L 11.27 15.33 L 6.53 19.85 L 9.13 13.84 L 2.58 13.69 L 8.67 11.27 L 4.15 6.53 L 10.16 9.13 L 10.31 2.58 L 12.73 8.67 L 17.47 4.15 L 14.87 10.16 L 21.42 10.31 L 15.33 12.73 Z" />
      {children}
    </svg>
  );
});

export default GlacioInsult;
