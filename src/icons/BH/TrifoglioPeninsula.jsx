import React from 'react';

export const iconData = {
  "id": "TrifoglioPeninsula",
  "name": "TrifoglioPeninsula",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.25 18.91 L 8.64 20.00 L 3.39 13.09 L 6.75 5.09 L 15.36 4.00 L 20.61 10.91 Z"
      }
    ]
  ]
};

export const TrifoglioPeninsula = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.25 18.91 L 8.64 20.00 L 3.39 13.09 L 6.75 5.09 L 15.36 4.00 L 20.61 10.91 Z" />
      {children}
    </svg>
  );
});

export default TrifoglioPeninsula;
