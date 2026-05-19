import React from 'react';

export const iconData = {
  "id": "UndosoShoe",
  "name": "UndosoShoe",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.63 19.63 L 2.21 10.30 L 8.58 2.67 L 18.37 4.37 L 21.79 13.70 L 15.42 21.33 Z"
      }
    ]
  ]
};

export const UndosoShoe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.63 19.63 L 2.21 10.30 L 8.58 2.67 L 18.37 4.37 L 21.79 13.70 L 15.42 21.33 Z" />
      {children}
    </svg>
  );
});

export default UndosoShoe;
