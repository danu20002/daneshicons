import React from 'react';

export const iconData = {
  "id": "FormoBumper",
  "name": "FormoBumper",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.53 1.87 L 14.09 7.72 L 22.13 8.53 L 16.28 14.09 L 15.47 22.13 L 9.91 16.28 L 1.87 15.47 L 7.72 9.91 Z"
      }
    ]
  ]
};

export const FormoBumper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.53 1.87 L 14.09 7.72 L 22.13 8.53 L 16.28 14.09 L 15.47 22.13 L 9.91 16.28 L 1.87 15.47 L 7.72 9.91 Z" />
      {children}
    </svg>
  );
});

export default FormoBumper;
