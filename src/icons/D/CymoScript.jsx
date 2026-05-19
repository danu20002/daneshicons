import React from 'react';

export const iconData = {
  "id": "CymoScript",
  "name": "CymoScript",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.33 18.22 L 14.19 16.92 L 11.71 21.61 L 9.52 16.78 L 4.30 17.77 L 6.71 13.04 L 2.69 9.58 L 7.89 8.52 L 8.09 3.21 L 12.16 6.62 L 16.43 3.46 L 16.31 8.77 L 21.44 10.14 L 17.21 13.36 Z"
      }
    ]
  ]
};

export const CymoScript = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.33 18.22 L 14.19 16.92 L 11.71 21.61 L 9.52 16.78 L 4.30 17.77 L 6.71 13.04 L 2.69 9.58 L 7.89 8.52 L 8.09 3.21 L 12.16 6.62 L 16.43 3.46 L 16.31 8.77 L 21.44 10.14 L 17.21 13.36 Z" />
      {children}
    </svg>
  );
});

export default CymoScript;
