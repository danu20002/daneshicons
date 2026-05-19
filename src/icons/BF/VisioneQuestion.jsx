import React from 'react';

export const iconData = {
  "id": "VisioneQuestion",
  "name": "VisioneQuestion",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.47 20.67 L 6.20 18.46 L 3.33 12.47 L 5.54 6.20 L 11.53 3.33 L 17.80 5.54 L 20.67 11.53 L 18.46 17.80 Z"
      }
    ]
  ]
};

export const VisioneQuestion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.47 20.67 L 6.20 18.46 L 3.33 12.47 L 5.54 6.20 L 11.53 3.33 L 17.80 5.54 L 20.67 11.53 L 18.46 17.80 Z" />
      {children}
    </svg>
  );
});

export default VisioneQuestion;
