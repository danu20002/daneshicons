import React from 'react';

export const iconData = {
  "id": "VinoWeave",
  "name": "VinoWeave",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.87 3.46 L 13.30 8.27 L 20.54 7.87 L 15.73 13.30 L 16.13 20.54 L 10.70 15.73 L 3.46 16.13 L 8.27 10.70 Z"
      }
    ]
  ]
};

export const VinoWeave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.87 3.46 L 13.30 8.27 L 20.54 7.87 L 15.73 13.30 L 16.13 20.54 L 10.70 15.73 L 3.46 16.13 L 8.27 10.70 Z" />
      {children}
    </svg>
  );
});

export default VinoWeave;
