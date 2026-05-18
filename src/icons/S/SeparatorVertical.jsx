import React from 'react';

export const iconData = {
  id: "SeparatorVertical",
  name: "SeparatorVertical",
  category: "S",
  nodes: [["path",{"d":"M12 3v18"}],["path",{"d":"m16 16 4-4-4-4"}],["path",{"d":"m8 8-4 4 4 4"}]]
};

export const SeparatorVertical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 3v18" />
      <path d="m16 16 4-4-4-4" />
      <path d="m8 8-4 4 4 4" />
      {children}
    </svg>
  );
});

export default SeparatorVertical;
