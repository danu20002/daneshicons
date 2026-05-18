import React from 'react';

export const iconData = {
  id: "ShelvingUnit",
  name: "ShelvingUnit",
  category: "S",
  nodes: [["path",{"d":"M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}],["path",{"d":"M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{"d":"M20 22V2"}],["path",{"d":"M4 12h16"}],["path",{"d":"M4 20h16"}],["path",{"d":"M4 2v20"}],["path",{"d":"M4 4h16"}]]
};

export const ShelvingUnit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      <path d="M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
      <path d="M20 22V2" />
      <path d="M4 12h16" />
      <path d="M4 20h16" />
      <path d="M4 2v20" />
      <path d="M4 4h16" />
      {children}
    </svg>
  );
});

export default ShelvingUnit;
