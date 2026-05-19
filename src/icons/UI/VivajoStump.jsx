import React from 'react';

export const iconData = {
  "id": "VivajoStump",
  "name": "VivajoStump",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.88 21.48 L 10.12 16.09 L 4.23 17.50 L 7.52 12.42 L 3.35 8.03 L 9.40 8.33 L 11.12 2.52 L 13.88 7.91 L 19.77 6.50 L 16.48 11.58 L 20.65 15.97 L 14.60 15.67 Z"
      }
    ]
  ]
};

export const VivajoStump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.88 21.48 L 10.12 16.09 L 4.23 17.50 L 7.52 12.42 L 3.35 8.03 L 9.40 8.33 L 11.12 2.52 L 13.88 7.91 L 19.77 6.50 L 16.48 11.58 L 20.65 15.97 L 14.60 15.67 Z" />
      {children}
    </svg>
  );
});

export default VivajoStump;
