import React from 'react';

export const iconData = {
  "id": "PentaSaint",
  "name": "PentaSaint",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 6.37 L 20.51 6.37 L 20.51 17.63 L 3.49 17.63 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 6.37 L 7.25 2.62 L 24.26 2.62 L 20.51 6.37"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 6.37 L 24.26 2.62 L 24.26 13.87 L 20.51 17.63"
      }
    ]
  ]
};

export const PentaSaint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 6.37 L 20.51 6.37 L 20.51 17.63 L 3.49 17.63 Z" />
      <path d="M 3.49 6.37 L 7.25 2.62 L 24.26 2.62 L 20.51 6.37" />
      <path d="M 20.51 6.37 L 24.26 2.62 L 24.26 13.87 L 20.51 17.63" />
      {children}
    </svg>
  );
});

export default PentaSaint;
