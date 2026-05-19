import React from 'react';

export const iconData = {
  "id": "SudoroJaw",
  "name": "SudoroJaw",
  "category": "LB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.55 L 2.50 11.34 L 3.00 13.67 L 3.50 13.67 L 4.00 11.34 L 4.50 7.55 L 5.00 3.77 L 5.50 1.44 L 6.00 1.44 L 6.50 3.77 L 7.00 7.55 L 7.50 11.34 L 8.00 13.67 L 8.50 13.67 L 9.00 11.34 L 9.50 7.55 L 10.00 3.77 L 10.50 1.44 L 11.00 1.44 L 11.50 3.77 L 12.00 7.55 L 12.50 11.34 L 13.00 13.67 L 13.50 13.67 L 14.00 11.34 L 14.50 7.55 L 15.00 3.77 L 15.50 1.44 L 16.00 1.44 L 16.50 3.77 L 17.00 7.55 L 17.50 11.34 L 18.00 13.67 L 18.50 13.67 L 19.00 11.34 L 19.50 7.55 L 20.00 3.77 L 20.50 1.44 L 21.00 1.44 L 21.50 3.77 L 22.00 7.55"
      }
    ]
  ]
};

export const SudoroJaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.55 L 2.50 11.34 L 3.00 13.67 L 3.50 13.67 L 4.00 11.34 L 4.50 7.55 L 5.00 3.77 L 5.50 1.44 L 6.00 1.44 L 6.50 3.77 L 7.00 7.55 L 7.50 11.34 L 8.00 13.67 L 8.50 13.67 L 9.00 11.34 L 9.50 7.55 L 10.00 3.77 L 10.50 1.44 L 11.00 1.44 L 11.50 3.77 L 12.00 7.55 L 12.50 11.34 L 13.00 13.67 L 13.50 13.67 L 14.00 11.34 L 14.50 7.55 L 15.00 3.77 L 15.50 1.44 L 16.00 1.44 L 16.50 3.77 L 17.00 7.55 L 17.50 11.34 L 18.00 13.67 L 18.50 13.67 L 19.00 11.34 L 19.50 7.55 L 20.00 3.77 L 20.50 1.44 L 21.00 1.44 L 21.50 3.77 L 22.00 7.55" />
      {children}
    </svg>
  );
});

export default SudoroJaw;
