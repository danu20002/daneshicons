import React from 'react';

export const iconData = {
  "id": "VulgoParagraph",
  "name": "VulgoParagraph",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.01 19.99 L 6.58 18.60 L 3.57 10.61 L 8.99 4.01 L 17.42 5.40 L 20.43 13.39 Z"
      }
    ]
  ]
};

export const VulgoParagraph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.01 19.99 L 6.58 18.60 L 3.57 10.61 L 8.99 4.01 L 17.42 5.40 L 20.43 13.39 Z" />
      {children}
    </svg>
  );
});

export default VulgoParagraph;
