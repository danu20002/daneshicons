import React from 'react';

export const iconData = {
  id: "StickyNotePlus",
  name: "StickyNotePlus",
  category: "S",
  nodes: [["path",{"d":"M15 3v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M18 15v6"}],["path",{"d":"M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355"}],["path",{"d":"M21 18h-6"}]]
};

export const StickyNotePlus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M18 15v6" />
      <path d="M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355" />
      <path d="M21 18h-6" />
      {children}
    </svg>
  );
});

export default StickyNotePlus;
