import React from 'react';

export const iconData = {
  "id": "TiliPaste",
  "name": "TiliPaste",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 19.12 L 6.54 11.67 L 4.88 3.97 L 12.33 6.54 L 20.03 4.88 L 17.46 12.33 L 19.12 20.03 L 11.67 17.46 Z"
      }
    ]
  ]
};

export const TiliPaste = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 19.12 L 6.54 11.67 L 4.88 3.97 L 12.33 6.54 L 20.03 4.88 L 17.46 12.33 L 19.12 20.03 L 11.67 17.46 Z" />
      {children}
    </svg>
  );
});

export default TiliPaste;
