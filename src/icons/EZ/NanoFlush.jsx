import React from 'react';

export const iconData = {
  "id": "NanoFlush",
  "name": "NanoFlush",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.64 12.99 L 6.69 9.64 L 6.46 4.39 L 11.39 6.22 L 15.82 3.40 L 16.70 8.58 L 21.36 11.01 L 17.31 14.36 L 17.54 19.61 L 12.61 17.78 L 8.18 20.60 L 7.30 15.42 Z"
      }
    ]
  ]
};

export const NanoFlush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.64 12.99 L 6.69 9.64 L 6.46 4.39 L 11.39 6.22 L 15.82 3.40 L 16.70 8.58 L 21.36 11.01 L 17.31 14.36 L 17.54 19.61 L 12.61 17.78 L 8.18 20.60 L 7.30 15.42 Z" />
      {children}
    </svg>
  );
});

export default NanoFlush;
