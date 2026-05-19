import React from 'react';

export const iconData = {
  "id": "NeuroPack",
  "name": "NeuroPack",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.64 7.72 L 17.60 12.36 L 20.03 17.34 L 14.49 17.03 L 11.39 21.62 L 8.89 16.67 L 3.36 16.28 L 6.40 11.64 L 3.97 6.66 L 9.51 6.97 L 12.61 2.38 L 15.11 7.33 Z"
      }
    ]
  ]
};

export const NeuroPack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.64 7.72 L 17.60 12.36 L 20.03 17.34 L 14.49 17.03 L 11.39 21.62 L 8.89 16.67 L 3.36 16.28 L 6.40 11.64 L 3.97 6.66 L 9.51 6.97 L 12.61 2.38 L 15.11 7.33 Z" />
      {children}
    </svg>
  );
});

export default NeuroPack;
