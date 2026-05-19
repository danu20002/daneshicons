import React from 'react';

export const iconData = {
  "id": "TestoRubber",
  "name": "TestoRubber",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.24 5.17 L 20.54 10.88 L 18.83 17.24 L 13.12 20.54 L 6.76 18.83 L 3.46 13.12 L 5.17 6.76 L 10.88 3.46 Z"
      }
    ]
  ]
};

export const TestoRubber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.24 5.17 L 20.54 10.88 L 18.83 17.24 L 13.12 20.54 L 6.76 18.83 L 3.46 13.12 L 5.17 6.76 L 10.88 3.46 Z" />
      {children}
    </svg>
  );
});

export default TestoRubber;
