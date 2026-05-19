import React from 'react';

export const iconData = {
  "id": "SynoPancake",
  "name": "SynoPancake",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.64 17.59 L 8.55 12.51 L 1.43 9.33 L 9.20 9.92 L 6.41 2.64 L 11.49 8.55 L 14.67 1.43 L 14.08 9.20 L 21.36 6.41 L 15.45 11.49 L 22.57 14.67 L 14.80 14.08 L 17.59 21.36 L 12.51 15.45 L 9.33 22.57 L 9.92 14.80 Z"
      }
    ]
  ]
};

export const SynoPancake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.64 17.59 L 8.55 12.51 L 1.43 9.33 L 9.20 9.92 L 6.41 2.64 L 11.49 8.55 L 14.67 1.43 L 14.08 9.20 L 21.36 6.41 L 15.45 11.49 L 22.57 14.67 L 14.80 14.08 L 17.59 21.36 L 12.51 15.45 L 9.33 22.57 L 9.92 14.80 Z" />
      {children}
    </svg>
  );
});

export default SynoPancake;
