import React from 'react';

export const iconData = {
  "id": "TibioThousand",
  "name": "TibioThousand",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.48 6.36 L 21.36 12.49 L 18.85 18.39 L 13.14 21.30 L 6.90 19.86 L 3.04 14.74 L 3.38 8.34 L 7.75 3.65 L 14.11 2.87 Z"
      }
    ]
  ]
};

export const TibioThousand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.48 6.36 L 21.36 12.49 L 18.85 18.39 L 13.14 21.30 L 6.90 19.86 L 3.04 14.74 L 3.38 8.34 L 7.75 3.65 L 14.11 2.87 Z" />
      {children}
    </svg>
  );
});

export default TibioThousand;
