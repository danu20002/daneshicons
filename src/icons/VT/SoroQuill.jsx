import React from 'react';

export const iconData = {
  "id": "SoroQuill",
  "name": "SoroQuill",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.46 21.41 L 3.06 15.88 L 3.39 7.43 L 10.20 2.42 L 18.37 4.62 L 21.74 12.38 L 17.77 19.85 Z"
      }
    ]
  ]
};

export const SoroQuill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.46 21.41 L 3.06 15.88 L 3.39 7.43 L 10.20 2.42 L 18.37 4.62 L 21.74 12.38 L 17.77 19.85 Z" />
      {children}
    </svg>
  );
});

export default SoroQuill;
