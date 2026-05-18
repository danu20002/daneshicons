import React from 'react';

export const iconData = {
  id: "RotateCcwKey",
  name: "RotateCcwKey",
  category: "R",
  nodes: [["path",{"d":"M12 7v6"}],["path",{"d":"M12 9h2"}],["path",{"d":"M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"}],["path",{"d":"M3 3v5h5"}],["circle",{"cx":"12","cy":"15","r":"2"}]]
};

export const RotateCcwKey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 7v6" />
      <path d="M12 9h2" />
      <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <circle cx="12" cy="15" r="2" />
      {children}
    </svg>
  );
});

export default RotateCcwKey;
