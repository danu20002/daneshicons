import React from 'react';

export const iconData = {
  "id": "AviParagraph",
  "name": "AviParagraph",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.75 11.25 L 19.19 17.05 L 14.26 20.49 L 8.27 19.96 L 4.03 15.70 L 3.52 9.71 L 6.97 4.79 L 12.78 3.25 L 18.22 5.80 Z"
      }
    ]
  ]
};

export const AviParagraph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.75 11.25 L 19.19 17.05 L 14.26 20.49 L 8.27 19.96 L 4.03 15.70 L 3.52 9.71 L 6.97 4.79 L 12.78 3.25 L 18.22 5.80 Z" />
      {children}
    </svg>
  );
});

export default AviParagraph;
