import React from 'react';

export const iconData = {
  "id": "RectiRecruit",
  "name": "RectiRecruit",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.85 3.56 L 17.31 5.44 L 20.28 10.39 L 19.38 16.09 L 15.03 19.88 L 9.26 19.98 L 4.77 16.35 L 3.67 10.68 L 6.46 5.63 Z"
      }
    ]
  ]
};

export const RectiRecruit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.85 3.56 L 17.31 5.44 L 20.28 10.39 L 19.38 16.09 L 15.03 19.88 L 9.26 19.98 L 4.77 16.35 L 3.67 10.68 L 6.46 5.63 Z" />
      {children}
    </svg>
  );
});

export default RectiRecruit;
