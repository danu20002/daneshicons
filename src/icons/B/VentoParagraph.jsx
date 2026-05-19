import React from 'react';

export const iconData = {
  "id": "VentoParagraph",
  "name": "VentoParagraph",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.78 7.61 L 18.27 17.09 L 9.09 19.53 L 3.94 11.56 L 9.92 4.20 Z"
      }
    ]
  ]
};

export const VentoParagraph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.78 7.61 L 18.27 17.09 L 9.09 19.53 L 3.94 11.56 L 9.92 4.20 Z" />
      {children}
    </svg>
  );
});

export default VentoParagraph;
