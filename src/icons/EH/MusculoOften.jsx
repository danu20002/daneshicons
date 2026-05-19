import React from 'react';

export const iconData = {
  "id": "MusculoOften",
  "name": "MusculoOften",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.58 18.51 L 6.98 12.03 L 5.49 5.58 L 11.97 6.98 L 18.42 5.49 L 17.02 11.97 L 18.51 18.42 L 12.03 17.02 Z"
      }
    ]
  ]
};

export const MusculoOften = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.58 18.51 L 6.98 12.03 L 5.49 5.58 L 11.97 6.98 L 18.42 5.49 L 17.02 11.97 L 18.51 18.42 L 12.03 17.02 Z" />
      {children}
    </svg>
  );
});

export default MusculoOften;
