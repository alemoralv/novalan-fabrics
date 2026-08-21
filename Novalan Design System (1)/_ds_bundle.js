/* @ds-bundle: {"format":4,"namespace":"NovalanDesignSystem_054783","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Rule","sourcePath":"components/brand/Rule.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Figure","sourcePath":"components/textile/Figure.jsx"},{"name":"SpecList","sourcePath":"components/textile/SpecList.jsx"},{"name":"Swatch","sourcePath":"components/textile/Swatch.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"a7d27c180056","components/brand/Rule.jsx":"70b2723e38c1","components/brand/Wordmark.jsx":"ee632fc327d8","components/core/Badge.jsx":"8bf9a18d1331","components/core/Button.jsx":"38f678779d51","components/core/Card.jsx":"4e4dfe01f9f6","components/core/IconButton.jsx":"d5e60d11ab1a","components/core/Tag.jsx":"22d95f862eb9","components/feedback/Dialog.jsx":"b54b3b7a2ad1","components/feedback/Toast.jsx":"906e4cc27cf3","components/feedback/Tooltip.jsx":"6cd6a1926afc","components/forms/Checkbox.jsx":"edc1b082795e","components/forms/Input.jsx":"4e77b9737679","components/forms/Radio.jsx":"5a65c44f4bc5","components/forms/Select.jsx":"8dc4bfc5d6a1","components/forms/Switch.jsx":"6bda1d987332","components/navigation/Tabs.jsx":"d59a2b185342","components/textile/Figure.jsx":"dbc2d059c115","components/textile/SpecList.jsx":"4fde25973d92","components/textile/Swatch.jsx":"3fc0beea1dc4","ui_kits/catalogue/Portal.jsx":"6e4e7ea03ff9","ui_kits/ops/Ops.jsx":"f8598d3617a8","ui_kits/shop/Shop.jsx":"e920a4ef7c08","ui_kits/website/Chrome.jsx":"281bd683a169","ui_kits/website/Home.jsx":"1844251c11cb","ui_kits/website/Pages.jsx":"e5e3409c63e4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NovalanDesignSystem_054783 = window.NovalanDesignSystem_054783 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 16,
  strokeWidth = 1.25,
  color = "currentColor",
  label,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    host.appendChild(i);
    const draw = () => {
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          "stroke-width": strokeWidth,
          stroke: color
        }
      });
    };
    draw();
    const t = setTimeout(draw, 150);
    return () => clearTimeout(t);
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "0 0 auto",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rule({
  tone = "hairline",
  label,
  vertical = false,
  style,
  ...rest
}) {
  const color = tone === "solid" ? "var(--border-solid)" : tone === "accent" ? "var(--border-accent)" : tone === "strong" ? "var(--border-hairline-strong)" : "var(--border-hairline)";
  if (vertical) return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      width: 1,
      alignSelf: "stretch",
      background: color,
      ...style
    }
  }, rest));
  if (!label) return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: 1,
      margin: 0,
      background: color,
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Rule.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  variant = "full",
  tone = "ink",
  width = 200,
  href,
  style,
  ...rest
}) {
  const src = {
    full: "novalan-wordmark",
    wordmark: "novalan-lockup-wordmark",
    tagline: "novalan-lockup-tagline"
  }[variant] || "novalan-wordmark";
  const light = tone === "paper" && variant !== "tagline";
  const file = (light ? src + "-light" : src) + ".png";
  const img = /*#__PURE__*/React.createElement("img", {
    src: (window.NV_ASSETS || "assets/") + file,
    alt: "Novalan",
    style: {
      width: width,
      display: "block",
      ...(tone === "paper" && variant === "tagline" ? {
        filter: "invert(1) brightness(1.6)"
      } : null)
    }
  });
  const wrap = {
    display: "inline-block",
    lineHeight: 0,
    ...style
  };
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      ...wrap,
      textDecoration: "none"
    }
  }, rest), img) : /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), img);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style,
  ...rest
}) {
  const t = {
    neutral: {
      bg: "var(--surface-sunken)",
      fg: "var(--text-secondary)"
    },
    ink: {
      bg: "var(--nv-ink-900)",
      fg: "var(--nv-paper-300)"
    },
    accent: {
      bg: "var(--nv-khaki-100)",
      fg: "var(--nv-walnut-700)"
    },
    success: {
      bg: "var(--status-success-bg)",
      fg: "var(--status-success-fg)"
    },
    warning: {
      bg: "var(--status-warning-bg)",
      fg: "var(--status-warning-fg)"
    },
    danger: {
      bg: "var(--status-danger-bg)",
      fg: "var(--status-danger-fg)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "5px 9px",
      background: t.bg,
      color: t.fg,
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-none)",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "var(--radius-pill)",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconRight,
  iconLeft,
  as = "button",
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const m = {
    sm: {
      h: "var(--control-h-sm)",
      px: "var(--control-px-sm)",
      fs: "10px"
    },
    md: {
      h: "var(--control-h)",
      px: "var(--control-px)",
      fs: "var(--fs-label-lg)"
    },
    lg: {
      h: "var(--control-h-lg)",
      px: "38px",
      fs: "12px"
    }
  }[size];
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-3)",
    height: variant === "link" ? "auto" : m.h,
    padding: variant === "link" ? "0" : "0 " + m.px,
    width: fullWidth ? "100%" : "auto",
    font: "var(--type-button)",
    fontSize: m.fs,
    letterSpacing: "var(--ls-label-tight)",
    textTransform: "uppercase",
    border: "1px solid transparent",
    borderRadius: "var(--radius-none)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "var(--transition-ink)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    boxSizing: "border-box"
  };
  const skin = {
    primary: {
      background: h && !disabled ? "var(--nv-walnut-700)" : "var(--nv-ink-900)",
      color: "var(--nv-paper-300)",
      borderColor: h && !disabled ? "var(--nv-walnut-700)" : "var(--nv-ink-900)"
    },
    secondary: {
      background: h && !disabled ? "var(--state-hover-surface)" : "transparent",
      color: "var(--text-primary)",
      borderColor: "var(--border-solid)"
    },
    accent: {
      background: h && !disabled ? "var(--nv-khaki-700)" : "var(--nv-khaki-500)",
      color: "var(--nv-ink-900)",
      borderColor: "transparent"
    },
    ghost: {
      background: h && !disabled ? "var(--state-hover-surface)" : "transparent",
      color: "var(--text-secondary)",
      borderColor: "transparent"
    },
    link: {
      background: "transparent",
      color: h ? "var(--text-link-hover)" : "var(--text-link)",
      borderColor: "transparent",
      textDecoration: "underline",
      textUnderlineOffset: "5px"
    }
  }[variant];
  const dis = disabled ? {
    background: variant === "primary" || variant === "accent" ? "var(--state-disabled-bg)" : "transparent",
    color: "var(--state-disabled-fg)",
    borderColor: variant === "secondary" ? "var(--border-hairline)" : "transparent"
  } : null;
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      ...base,
      ...skin,
      ...dis,
      opacity: p && !disabled ? .86 : 1,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = "hairline",
  padding = "md",
  interactive = false,
  as = "div",
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const pad = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-5) var(--space-5) var(--space-6)",
    lg: "var(--space-6)"
  }[padding];
  const skin = {
    hairline: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)"
    },
    solid: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-solid)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      border: "1px solid transparent"
    },
    ink: {
      background: "var(--nv-ink-900)",
      border: "1px solid transparent",
      color: "var(--nv-paper-300)"
    },
    plain: {
      background: "transparent",
      border: "1px solid transparent"
    }
  }[variant];
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: pad,
      borderRadius: "var(--radius-none)",
      transition: "var(--transition-ink), box-shadow var(--dur) var(--ease-standard)",
      boxShadow: interactive && h ? "var(--shadow-hover)" : "none",
      borderColor: interactive && h ? "var(--border-hairline-strong)" : undefined,
      cursor: interactive ? "pointer" : undefined,
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const d = {
    sm: 32,
    md: 44,
    lg: 52
  }[size];
  const skin = {
    ghost: {
      background: h ? "var(--state-hover-surface)" : "transparent",
      color: "var(--text-primary)",
      borderColor: "transparent"
    },
    outline: {
      background: h ? "var(--state-hover-surface)" : "transparent",
      color: "var(--text-primary)",
      borderColor: "var(--border-solid)"
    },
    solid: {
      background: h ? "var(--nv-walnut-700)" : "var(--nv-ink-900)",
      color: "var(--nv-paper-300)",
      borderColor: "transparent"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid transparent",
      borderRadius: "var(--radius-none)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-ink)",
      opacity: disabled ? .4 : 1,
      ...skin,
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  removable = false,
  onRemove,
  tone = "outline",
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const skin = selected ? {
    background: "var(--nv-ink-900)",
    color: "var(--nv-paper-300)",
    borderColor: "var(--nv-ink-900)"
  } : tone === "accent" ? {
    background: h ? "var(--nv-khaki-100)" : "transparent",
    color: "var(--nv-walnut-700)",
    borderColor: "var(--border-accent)"
  } : {
    background: h ? "var(--state-hover-surface)" : "transparent",
    color: "var(--text-secondary)",
    borderColor: "var(--border-hairline-strong)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "7px 12px",
      border: "1px solid",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-none)",
      cursor: "pointer",
      transition: "var(--transition-ink)",
      ...skin,
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      opacity: .6,
      fontSize: 12,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-ink)",
      backdropFilter: "var(--blur-veil)"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "relative",
      width: width,
      maxWidth: "100%",
      background: "var(--surface-card)",
      border: "1px solid var(--border-solid)",
      boxShadow: "var(--shadow-overlay)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      padding: "var(--space-5) var(--space-6) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      font: "var(--type-body)",
      fontSize: 18,
      color: "var(--text-muted)",
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      height: 1,
      background: "var(--border-hairline)",
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5) var(--space-6)",
      font: "var(--type-body)",
      color: "var(--text-secondary)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      padding: "0 var(--space-6) var(--space-6)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  children,
  tone = "ink",
  action,
  onClose,
  style,
  ...rest
}) {
  const skin = {
    ink: {
      background: "var(--nv-ink-900)",
      color: "var(--nv-paper-300)"
    },
    success: {
      background: "var(--status-success-bg)",
      color: "var(--status-success-fg)"
    },
    danger: {
      background: "var(--status-danger-bg)",
      color: "var(--status-danger-fg)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-5)",
      padding: "14px 18px",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-overlay)",
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      ...skin,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), action && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-button)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
      cursor: "pointer"
    }
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      border: 0,
      background: "transparent",
      color: "inherit",
      opacity: .6,
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  content,
  placement = "top",
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)"
  } : placement === "right" ? {
    left: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)"
  } : {
    bottom: "calc(100% + 8px)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 40,
      ...pos,
      left: pos.left || "50%",
      transform: (pos.transform || "translateX(-50%)") + " translateY(" + (on ? "0" : "3px") + ")",
      opacity: on ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)",
      background: "var(--nv-ink-900)",
      color: "var(--nv-paper-300)",
      padding: "7px 10px",
      whiteSpace: "nowrap",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 16,
      height: 16,
      marginTop: 2,
      flex: "0 0 auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--nv-ink-900)" : "var(--surface-card)",
      border: "1px solid " + (checked ? "var(--nv-ink-900)" : "var(--border-hairline-strong)"),
      transition: "var(--transition-ink)"
    }
  }, rest), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 4,
      borderLeft: "1px solid var(--nv-paper-300)",
      borderBottom: "1px solid var(--nv-paper-300)",
      transform: "rotate(-45deg) translate(1px,-1px)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.4,
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  readOnly = false,
  size = "md",
  prefix,
  suffix,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const h = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h)",
    lg: "var(--control-h-lg)"
  }[size];
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: h,
      padding: "0 var(--space-4)",
      background: disabled ? "var(--state-disabled-bg)" : "var(--surface-card)",
      border: "1px solid " + (error ? "var(--status-danger-fg)" : f ? "var(--border-solid)" : "var(--border-hairline-strong)"),
      transition: "var(--transition-ink)"
    }
  }, prefix, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly || value !== undefined && !onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-primary)"
    }
  }, rest)), suffix), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-caption)",
      color: error ? "var(--status-danger-fg)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  name,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(true),
    "data-name": name,
    style: {
      width: 16,
      height: 16,
      marginTop: 2,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-card)",
      border: "1px solid " + (checked ? "var(--nv-ink-900)" : "var(--border-hairline-strong)"),
      transition: "var(--transition-ink)"
    }
  }, rest), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-pill)",
      background: "var(--nv-ink-900)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.4,
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  disabled = false,
  size = "md",
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const h = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h)",
    lg: "var(--control-h-lg)"
  }[size];
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: "none",
      width: "100%",
      height: h,
      padding: "0 36px 0 var(--space-4)",
      background: disabled ? "var(--state-disabled-bg)" : "var(--surface-card)",
      color: "var(--text-primary)",
      border: "1px solid " + (f ? "var(--border-solid)" : "var(--border-hairline-strong)"),
      borderRadius: "var(--radius-none)",
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      outline: "none",
      transition: "var(--transition-ink)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value,
      l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-60%) rotate(45deg)",
      width: 6,
      height: 6,
      borderRight: "1px solid var(--text-secondary)",
      borderBottom: "1px solid var(--text-secondary)",
      pointerEvents: "none"
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 38,
      height: 18,
      padding: 2,
      display: "inline-flex",
      alignItems: "center",
      background: checked ? "var(--nv-ink-900)" : "var(--surface-sunken)",
      border: "1px solid " + (checked ? "var(--nv-ink-900)" : "var(--border-hairline-strong)"),
      transition: "var(--transition-ink)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: checked ? "var(--nv-khaki-300)" : "var(--nv-paper-100)",
      transform: "translateX(" + (checked ? 18 : 0) + "px)",
      transition: "transform var(--dur-fast) var(--ease-standard)",
      boxShadow: "var(--shadow-sheet)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  style,
  ...rest
}) {
  const active = value != null ? value : items[0] && (items[0].value || items[0]);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: variant === "underline" ? "var(--space-6)" : 0,
      borderBottom: variant === "underline" ? "1px solid var(--border-hairline)" : "none",
      ...style
    }
  }, rest), items.map(it => {
    const v = it.value || it,
      l = it.label || it,
      on = v === active;
    const box = variant === "underline" ? {
      padding: "0 0 12px",
      borderBottom: "1px solid " + (on ? "var(--border-solid)" : "transparent"),
      marginBottom: -1,
      color: on ? "var(--text-primary)" : "var(--text-muted)"
    } : {
      padding: "11px 18px",
      border: "1px solid " + (on ? "var(--border-solid)" : "var(--border-hairline)"),
      marginRight: -1,
      background: on ? "var(--nv-ink-900)" : "transparent",
      color: on ? "var(--nv-paper-300)" : "var(--text-secondary)"
    };
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        background: "transparent",
        cursor: "pointer",
        font: "var(--type-button)",
        fontSize: "var(--fs-label-lg)",
        letterSpacing: "var(--ls-label-tight)",
        textTransform: "uppercase",
        transition: "var(--transition-ink)",
        borderRadius: "var(--radius-none)",
        border: "none",
        ...box
      }
    }, l, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8,
        opacity: .55
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/textile/Figure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Figure({
  src,
  alt = "",
  caption,
  ratio = "4 / 5",
  weave = "canvas",
  tone = "khaki",
  label = "Imagen",
  overlay,
  style,
  ...rest
}) {
  const grounds = {
    khaki: "var(--nv-khaki-500)",
    ink: "var(--nv-ink-900)",
    paper: "var(--nv-paper-400)",
    walnut: "var(--nv-walnut-500)"
  };
  const weaves = {
    canvas: "var(--weave-canvas)",
    twill: "var(--weave-twill)",
    herringbone: "var(--weave-herringbone)",
    plain: "var(--weave-plain)",
    none: "none"
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "grid",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: grounds[tone],
      backgroundImage: src ? "none" : weaves[weave]
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      padding: "var(--space-3)",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: tone === "ink" ? "rgba(246,243,236,.6)" : "rgba(11,11,11,.5)"
    }
  }, label), overlay && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      padding: "var(--space-5)",
      background: "var(--protect-bottom)",
      color: "var(--nv-paper-300)"
    }
  }, overlay)), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, caption));
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/textile/Figure.jsx", error: String((e && e.message) || e) }); }

// components/textile/SpecList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecList({
  items = [],
  dense = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: "grid",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      padding: (dense ? "7px" : "11px") + " 0",
      borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      fontFamily: it.mono === false ? "var(--font-ui)" : "var(--font-mono)",
      color: "var(--text-primary)",
      textAlign: "right"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/textile/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/textile/Swatch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Swatch({
  name,
  code,
  color,
  weave = "canvas",
  size = 88,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const weaves = {
    plain: "var(--weave-plain)",
    twill: "var(--weave-twill)",
    herringbone: "var(--weave-herringbone)",
    none: "none",
    canvas: "var(--weave-twill)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "grid",
      gap: "var(--space-2)",
      padding: 0,
      border: 0,
      background: "transparent",
      cursor: onClick ? "pointer" : "default",
      textAlign: "left",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: size,
      height: size,
      background: color,
      backgroundImage: weaves[weave],
      outline: "1px solid " + (selected ? "var(--border-solid)" : h ? "var(--border-hairline-strong)" : "var(--border-hairline)"),
      outlineOffset: selected ? 2 : 0,
      transition: "outline-color var(--dur-fast) var(--ease-standard),outline-offset var(--dur-fast) var(--ease-standard)"
    }
  }), (name || code) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: 1,
      maxWidth: size
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, name), code && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, code)));
}
Object.assign(__ds_scope, { Swatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/textile/Swatch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/catalogue/Portal.jsx
try { (() => {
const {
  Button,
  IconButton,
  Figure,
  Rule,
  Tag,
  Card,
  Swatch,
  SpecList,
  Input,
  Select,
  Icon,
  Badge,
  Checkbox,
  Switch,
  Tabs,
  Wordmark,
  Dialog,
  Tooltip
} = window.NovalanDesignSystem_054783;
const FABRICS = [{
  code: "NV-0042",
  name: "Lino lavado 240",
  fibra: "Lino",
  gsm: "240 g/m²",
  ancho: "150 cm",
  precio: "$310",
  estado: ["En existencia", "success"],
  tone: "khaki",
  weave: "canvas"
}, {
  code: "NV-0118",
  name: "Algodón sarga",
  fibra: "Algodón",
  gsm: "310 g/m²",
  ancho: "160 cm",
  precio: "$248",
  estado: ["En existencia", "success"],
  tone: "paper",
  weave: "twill"
}, {
  code: "NV-0207",
  name: "Lana Tlaxcala",
  fibra: "Lana",
  gsm: "420 g/m²",
  ancho: "140 cm",
  precio: "$620",
  estado: ["En producción", "warning"],
  tone: "walnut",
  weave: "herringbone"
}, {
  code: "NV-0311",
  name: "Hemp canvas",
  fibra: "Hemp",
  gsm: "330 g/m²",
  ancho: "150 cm",
  precio: "$395",
  estado: ["En existencia", "success"],
  tone: "khaki",
  weave: "plain"
}, {
  code: "NV-0402",
  name: "Mezclilla selvedge",
  fibra: "Algodón",
  gsm: "390 g/m²",
  ancho: "76 cm",
  precio: "$540",
  estado: ["Agotado", "danger"],
  tone: "ink",
  weave: "twill"
}, {
  code: "NV-0455",
  name: "Gasa de lino",
  fibra: "Lino",
  gsm: "120 g/m²",
  ancho: "150 cm",
  precio: "$285",
  estado: ["En existencia", "success"],
  tone: "paper",
  weave: "plain"
}];
function Login({
  enter
}) {
  const [correo, setCorreo] = React.useState("");
  const [clave, setClave] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1.15fr 480px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--nv-ink-900)",
      backgroundImage: "var(--weave-twill)",
      padding: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "wordmark",
    tone: "paper",
    width: 150
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      maxWidth: "30ch"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      color: "var(--nv-paper-300)",
      margin: 0
    }
  }, "Portal de tejidos"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-lg)",
      color: "rgba(246,243,236,.72)",
      margin: 0
    }
  }, "Precios por metro, existencias reales y muestrarios sin costo para clientes de mayoreo.")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "rgba(246,243,236,.45)"
    }
  }, "Puebla \xB7 M\xE9xico")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--space-8)",
      display: "grid",
      alignContent: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Acceso de clientes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      margin: 0
    }
  }, "Entra a tu cuenta")), /*#__PURE__*/React.createElement(Input, {
    label: "Correo de trabajo",
    placeholder: "compras@tumarca.mx",
    value: correo,
    onChange: e => setCorreo(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contrase\xF1a",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: clave,
    onChange: e => setClave(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Mantener sesi\xF3n",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm"
  }, "\xBFOlvidaste tu clave?")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: enter
  }, "Entrar"), /*#__PURE__*/React.createElement(Rule, {
    label: "Sin cuenta"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true
  }, "Solicitar acceso de mayoreo")));
}
function PortalChrome({
  children,
  view,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-7)",
      height: 70,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "wordmark",
    width: 112,
    onClick: () => go("catalogo"),
    style: {
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: "var(--border-hairline)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Portal de mayoreo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Muestrario"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "package",
      size: 18
    }),
    label: "Muestrario"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 18
    }),
    label: "Cotizaciones"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      background: "var(--nv-khaki-500)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11
    }
  }, "TM"), "Taller Mextl\xE1n")))), children);
}
function Catalogo({
  open
}) {
  const [fibras, setFibras] = React.useState(["Lino"]);
  const [solo, setSolo] = React.useState(false);
  const toggle = f => setFibras(v => v.includes(f) ? v.filter(x => x !== f) : [...v, f]);
  const list = FABRICS.filter(f => (!fibras.length || fibras.includes(f.fibra)) && (!solo || f.estado[1] === "success"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 0,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      padding: "var(--space-6) var(--space-5)",
      borderRight: "1px solid var(--border-hairline)",
      display: "grid",
      gap: "var(--space-6)",
      position: "sticky",
      top: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Fibra"), ["Lino", "Algodón", "Lana", "Hemp"].map(f => /*#__PURE__*/React.createElement(Checkbox, {
    key: f,
    label: f,
    checked: fibras.includes(f),
    onChange: () => toggle(f)
  }))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Gramaje"), /*#__PURE__*/React.createElement(Select, {
    options: ["Todos", "Ligero (< 200)", "Medio (200–320)", "Pesado (> 320)"],
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nv-label",
    style: {
      marginTop: 8
    }
  }, "Acabado"), /*#__PURE__*/React.createElement(Select, {
    options: ["Todos", "Crudo", "Lavado enzimático", "Teñido en pieza"],
    size: "sm"
  })), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Switch, {
    label: "Solo disponibles",
    checked: solo,
    onChange: setSolo
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "var(--space-6) var(--space-7) var(--space-9)",
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Cat\xE1logo \xB7 Oto\xF1o 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h2)",
      margin: 0
    }
  }, list.length, " tejidos disponibles")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar por lote o nombre",
    size: "sm",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14
    }),
    style: {
      width: 240
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    })
  }, "Lista de precios"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, fibras.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    removable: true,
    onRemove: () => toggle(f)
  }, f)), solo && /*#__PURE__*/React.createElement(Tag, {
    removable: true,
    onRemove: () => setSolo(false)
  }, "Disponibles")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--gutter)"
    }
  }, list.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.code,
    interactive: true,
    padding: "none",
    onClick: () => open(f)
  }, /*#__PURE__*/React.createElement(Figure, {
    ratio: "4 / 3",
    tone: f.tone,
    weave: f.weave,
    label: f.fibra
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4)",
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)"
    }
  }, f.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, f.code)), /*#__PURE__*/React.createElement(SpecList, {
    dense: true,
    items: [{
      label: "Gramaje",
      value: f.gsm
    }, {
      label: "Ancho",
      value: f.ancho
    }, {
      label: "Precio/m",
      value: f.precio
    }]
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: f.estado[1],
    dot: true
  }, f.estado[0])))))));
}
function Detalle({
  f,
  back
}) {
  const [ask, setAsk] = React.useState(false);
  const [metros, setMetros] = React.useState("120");
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "var(--space-6) var(--space-7) var(--space-9)",
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    onClick: back
  }, "\u2190 Cat\xE1logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Figure, {
    ratio: "16 / 10",
    tone: f.tone,
    weave: f.weave,
    label: "Rollo",
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement(Figure, {
    ratio: "1 / 1",
    tone: f.tone,
    weave: "plain",
    label: "Trama"
  }), /*#__PURE__*/React.createElement(Figure, {
    ratio: "1 / 1",
    tone: "ink",
    weave: "twill",
    label: "Ca\xEDda"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Lote ", f.code), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      fontSize: 44,
      margin: 0
    }
  }, f.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 17,
      color: "var(--text-accent)"
    }
  }, f.precio, " MXN / metro")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: f.estado[1],
    dot: true
  }, f.estado[0]), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "GOTS"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "M\xEDn. 30 m")), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: "Fibra",
      value: f.fibra,
      mono: false
    }, {
      label: "Gramaje",
      value: f.gsm
    }, {
      label: "Ancho útil",
      value: f.ancho
    }, {
      label: "Encogimiento",
      value: "3 % urdimbre / 2 % trama"
    }, {
      label: "Plazo",
      value: "4 semanas",
      mono: false
    }, {
      label: "Telar",
      value: "Lanzadera 3"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Coloridos disponibles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, [["Crudo", "var(--nv-khaki-100)"], ["Arena", "var(--nv-khaki-300)"], ["Khaki", "var(--nv-khaki-500)"], ["Nogal", "var(--nv-walnut-700)"], ["Negro", "var(--nv-ink-900)"]].map(([n, c]) => /*#__PURE__*/React.createElement(Swatch, {
    key: n,
    name: n,
    color: c,
    weave: f.weave,
    size: 64
  })))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Metros a cotizar",
    value: metros,
    onChange: e => setMetros(e.target.value),
    suffix: /*#__PURE__*/React.createElement("span", {
      className: "nv-label"
    }, "m")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setAsk(true)
  }, "Solicitar cotizaci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => setAsk(true)
  }, "Pedir muestra"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: ask,
    title: "Solicitar cotizaci\xF3n",
    onClose: () => setAsk(false),
    width: 520,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setAsk(false)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setAsk(false)
    }, "Enviar solicitud"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Confirmamos precio y plazo en menos de 24 horas h\xE1biles."), /*#__PURE__*/React.createElement(SpecList, {
    dense: true,
    items: [{
      label: "Tejido",
      value: f.name,
      mono: false
    }, {
      label: "Lote",
      value: f.code
    }, {
      label: "Metros",
      value: metros + " m"
    }]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Colorido",
    options: ["Crudo", "Arena", "Khaki", "Nogal", "Negro"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Referencia interna",
    placeholder: "OC-2026-114"
  }))));
}
Object.assign(window, {
  Login,
  PortalChrome,
  Catalogo,
  Detalle,
  FABRICS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/catalogue/Portal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/Ops.jsx
try { (() => {
const {
  Button,
  IconButton,
  Rule,
  Tag,
  Card,
  SpecList,
  Input,
  Select,
  Icon,
  Badge,
  Tabs,
  Wordmark,
  Switch,
  Swatch,
  Figure,
  Tooltip
} = window.NovalanDesignSystem_054783;
const ORDERS = [{
  folio: "OC-2026-114",
  cliente: "Taller Mextlán",
  tejido: "Lino lavado 240",
  lote: "NV-0042",
  metros: "320",
  valor: "$99,200",
  etapa: ["Tejido", "warning"],
  entrega: "18 sep"
}, {
  folio: "OC-2026-118",
  cliente: "Casa Aurora",
  tejido: "Algodón sarga",
  lote: "NV-0118",
  metros: "150",
  valor: "$37,200",
  etapa: ["Lavado", "warning"],
  entrega: "21 sep"
}, {
  folio: "OC-2026-121",
  cliente: "Hotel Riviera",
  tejido: "Hemp canvas",
  lote: "NV-0311",
  metros: "600",
  valor: "$237,000",
  etapa: ["Revisión", "success"],
  entrega: "24 sep"
}, {
  folio: "OC-2026-125",
  cliente: "Estudio Nube",
  tejido: "Gasa de lino",
  lote: "NV-0455",
  metros: "80",
  valor: "$22,800",
  etapa: ["Urdido", "neutral"],
  entrega: "2 oct"
}, {
  folio: "OC-2026-127",
  cliente: "Marca Propia",
  tejido: "Lana Tlaxcala",
  lote: "NV-0207",
  metros: "240",
  valor: "$148,800",
  etapa: ["Detenido", "danger"],
  entrega: "—"
}];
function Sidebar({
  view,
  go
}) {
  const nav = [["pedidos", "clipboard-list", "Pedidos"], ["produccion", "layers", "Producción"], ["inventario", "package", "Inventario"], ["clientes", "users", "Clientes"], ["ajustes", "settings", "Ajustes"]];
  return /*#__PURE__*/React.createElement("aside", {
    "data-nv-theme": "ink",
    style: {
      width: 232,
      background: "var(--nv-ink-900)",
      color: "var(--nv-paper-300)",
      minHeight: "100vh",
      padding: "var(--space-5) var(--space-4)",
      display: "grid",
      gap: "var(--space-6)",
      alignContent: "start",
      position: "sticky",
      top: 0
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "wordmark",
    tone: "paper",
    width: 112,
    style: {
      margin: "var(--space-2) var(--space-2) 0"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gap: 2
    }
  }, nav.map(([k, ic, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => go(k),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "11px 12px",
      border: 0,
      cursor: "pointer",
      textAlign: "left",
      background: view === k ? "rgba(246,243,236,.08)" : "transparent",
      color: view === k ? "var(--nv-paper-300)" : "rgba(246,243,236,.62)",
      font: "var(--type-label)",
      fontSize: "var(--fs-label-lg)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-3)",
      borderTop: "1px solid rgba(246,243,236,.2)",
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--nv-khaki-300)"
    }
  }, "Turno actual"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, "06:00 \u2013 14:00"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: 12,
      color: "rgba(246,243,236,.6)"
    }
  }, "Telares 1\u20136 \xB7 Puebla")));
}
function Pedidos({
  open
}) {
  const [tab, setTab] = React.useState("abiertos");
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: "var(--space-6) var(--space-7) var(--space-9)",
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Operaci\xF3n \xB7 Semana 38"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h2)",
      margin: 0
    }
  }, "Pedidos en piso")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar folio o cliente",
    size: "sm",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14
    }),
    style: {
      width: 230
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Nuevo pedido"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--gutter)"
    }
  }, [["Metros comprometidos", "1,390", "m"], ["Valor en piso", "$545,000", "MXN"], ["Telares activos", "5", "de 6"], ["Retrasos", "1", "pedido"]].map(([l, v, u]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    padding: "sm",
    variant: "hairline",
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      fontFamily: "var(--font-display)"
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, u)))), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "abiertos",
      label: "Abiertos",
      count: 5
    }, {
      value: "produccion",
      label: "En producción",
      count: 3
    }, {
      value: "cerrados",
      label: "Cerrados",
      count: 28
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "130px 1.2fr 1.2fr 100px 90px 110px 120px 90px",
      gap: "var(--space-4)",
      padding: "0 0 10px",
      borderBottom: "1px solid var(--border-solid)",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Folio"), /*#__PURE__*/React.createElement("span", null, "Cliente"), /*#__PURE__*/React.createElement("span", null, "Tejido"), /*#__PURE__*/React.createElement("span", null, "Lote"), /*#__PURE__*/React.createElement("span", null, "Metros"), /*#__PURE__*/React.createElement("span", null, "Valor"), /*#__PURE__*/React.createElement("span", null, "Etapa"), /*#__PURE__*/React.createElement("span", null, "Entrega")), ORDERS.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.folio,
    onClick: () => open(o),
    style: {
      display: "grid",
      gridTemplateColumns: "130px 1.2fr 1.2fr 100px 90px 110px 120px 90px",
      gap: "var(--space-4)",
      padding: "14px 0",
      borderBottom: "1px solid var(--border-hairline)",
      alignItems: "center",
      cursor: "pointer",
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      whiteSpace: "nowrap"
    }
  }, o.folio), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: 14
    }
  }, o.cliente), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, o.tejido), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      whiteSpace: "nowrap"
    }
  }, o.lote), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      whiteSpace: "nowrap"
    }
  }, o.metros, " m"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      whiteSpace: "nowrap"
    }
  }, o.valor), /*#__PURE__*/React.createElement(Badge, {
    tone: o.etapa[1],
    dot: true
  }, o.etapa[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-secondary)",
      whiteSpace: "nowrap"
    }
  }, o.entrega)))));
}
function Produccion() {
  const cols = [["Urdido", ["OC-2026-125"]], ["Tejido", ["OC-2026-114", "OC-2026-131"]], ["Lavado", ["OC-2026-118"]], ["Revisión", ["OC-2026-121"]], ["Empaque", []]];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: "var(--space-6) var(--space-7) var(--space-9)",
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Piso de producci\xF3n"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h2)",
      margin: 0
    }
  }, "Flujo por etapa")), /*#__PURE__*/React.createElement(Switch, {
    label: "Solo con retraso",
    checked: false,
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: "var(--gutter)",
      alignItems: "start"
    }
  }, cols.map(([etapa, items]) => /*#__PURE__*/React.createElement("div", {
    key: etapa,
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      paddingBottom: 8,
      borderBottom: "1px solid var(--border-solid)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, etapa), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, items.length)), items.map(f => {
    const o = ORDERS.find(x => x.folio === f) || {
      folio: f,
      cliente: "Marca Propia",
      tejido: "Lino lavado 240",
      metros: "90",
      entrega: "5 oct"
    };
    return /*#__PURE__*/React.createElement(Card, {
      key: f,
      padding: "sm",
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--text-muted)",
        whiteSpace: "nowrap"
      }
    }, o.folio), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-h4)",
        fontSize: 17
      }
    }, o.cliente), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        fontSize: 12,
        color: "var(--text-secondary)"
      }
    }, o.tejido), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 4,
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        whiteSpace: "nowrap"
      }
    }, o.metros, " m"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--text-muted)",
        whiteSpace: "nowrap"
      }
    }, o.entrega)));
  }), !items.length && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      border: "1px dashed var(--border-hairline-strong)",
      display: "grid",
      placeItems: "center",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Vac\xEDo")))));
}
function OrderDrawer({
  o,
  close
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: close,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-ink)",
      backdropFilter: "var(--blur-veil)"
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "relative",
      width: 460,
      background: "var(--surface-card)",
      borderLeft: "1px solid var(--border-solid)",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, o.folio), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      margin: 0
    }
  }, o.cliente)), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18
    }),
    label: "Cerrar",
    onClick: close
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.etapa[1],
    dot: true
  }, o.etapa[0]), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Mayoreo")), /*#__PURE__*/React.createElement(Figure, {
    ratio: "16 / 9",
    tone: "khaki",
    weave: "canvas",
    label: "Muestra de lote"
  }), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: "Tejido",
      value: o.tejido,
      mono: false
    }, {
      label: "Lote",
      value: o.lote
    }, {
      label: "Metros",
      value: o.metros + " m"
    }, {
      label: "Valor",
      value: o.valor + " MXN"
    }, {
      label: "Entrega",
      value: o.entrega,
      mono: false
    }, {
      label: "Telar",
      value: "Lanzadera 3"
    }]
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Bit\xE1cora"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, [["12 sep 08:40", "Urdido terminado — M. Ordóñez"], ["13 sep 11:05", "Tejido al 60% — telar 3"], ["14 sep 07:20", "Paro por hilo faltante (2 h)"]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gap: 4,
      paddingLeft: 14,
      borderLeft: "1px solid var(--border-accent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: 14
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true
  }, "Avanzar etapa"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true
  }, "Imprimir ficha")))));
}
Object.assign(window, {
  Sidebar,
  Pedidos,
  Produccion,
  OrderDrawer,
  ORDERS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/Ops.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Shop.jsx
try { (() => {
const {
  Button,
  IconButton,
  Figure,
  Rule,
  Tag,
  Card,
  Swatch,
  SpecList,
  Input,
  Select,
  Icon,
  Badge,
  Radio,
  Checkbox,
  Toast,
  Tabs,
  Wordmark,
  Dialog
} = window.NovalanDesignSystem_054783;
function ShopHeader({
  count,
  openCart
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-7)",
      height: 74,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "wordmark",
    width: 118
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, ["Prendas", "Casa", "Tejidos", "Rebajas"].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-label-lg)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    }),
    label: "Buscar"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 18
    }),
    label: "Cuenta"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-bag",
      size: 18
    }),
    label: "Bolsa",
    onClick: openCart
  }), count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      right: 2,
      minWidth: 16,
      height: 16,
      padding: "0 4px",
      background: "var(--nv-ink-900)",
      color: "var(--nv-paper-300)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 10
    }
  }, count)))));
}
function ProductPage({
  add
}) {
  const [color, setColor] = React.useState("Nogal");
  const [talla, setTalla] = React.useState("M");
  const [tab, setTab] = React.useState("ficha");
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "var(--space-6) var(--space-7) 0",
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Figure, {
    ratio: "4 / 5",
    tone: "khaki",
    weave: "canvas",
    label: "Frente",
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement(Figure, {
    ratio: "1 / 1",
    tone: "walnut",
    weave: "twill",
    label: "Detalle"
  }), /*#__PURE__*/React.createElement(Figure, {
    ratio: "1 / 1",
    tone: "paper",
    weave: "herringbone",
    label: "Textura"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      position: "sticky",
      top: 98
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Oto\xF1o 2026 \xB7 Lote NV-0042"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      fontSize: 44,
      margin: 0
    }
  }, "Camisa Ombr\xE9"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 17,
      color: "var(--text-accent)"
    }
  }, "$2,480 MXN")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      margin: 0,
      color: "var(--text-secondary)"
    }
  }, "Lino lavado de 240 g/m\xB2 te\xF1ido en degradado a mano. Cae suelta, se arruga bonito y se ablanda con cada lavado."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Colorido \u2014 ", color), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, [["Negro", "var(--nv-ink-900)", "plain"], ["Nogal", "var(--nv-walnut-700)", "twill"], ["Khaki", "var(--nv-khaki-500)", "twill"], ["Crudo", "var(--nv-khaki-100)", "plain"]].map(([n, c, w]) => /*#__PURE__*/React.createElement(Swatch, {
    key: n,
    color: c,
    weave: w,
    size: 52,
    selected: color === n,
    onClick: () => setColor(n)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Talla"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, ["XS", "S", "M", "L", "XL"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: talla === t,
    onClick: () => setTalla(t),
    style: {
      minWidth: 44,
      justifyContent: "center"
    }
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ruler",
      size: 14
    })
  }, "Gu\xEDa de tallas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => add({
      name: "Camisa Ombré",
      color,
      talla,
      price: 2480
    })
  }, "Agregar a la bolsa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true
  }, "Solicitar muestra"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 18
    }),
    label: "Guardar",
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "En existencia"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Env\xEDo en 3\u20135 d\xEDas h\xE1biles a todo M\xE9xico"))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "ficha",
      label: "Ficha"
    }, {
      value: "cuidado",
      label: "Cuidado"
    }, {
      value: "envio",
      label: "Envío"
    }],
    value: tab,
    onChange: setTab
  }), tab === "ficha" && /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: "Composición",
      value: "100% lino europeo",
      mono: false
    }, {
      label: "Gramaje",
      value: "240 g/m²"
    }, {
      label: "Ancho de tela",
      value: "150 cm"
    }, {
      label: "Acabado",
      value: "Lavado enzimático",
      mono: false
    }, {
      label: "Hecho en",
      value: "Puebla, México",
      mono: false
    }]
  }), tab === "cuidado" && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Lava en fr\xEDo, del rev\xE9s y con jab\xF3n neutro. Seca a la sombra. Plancha tibia si quieres, aunque el lino se ve mejor vivido."), tab === "envio" && /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: "Estándar",
      value: "5–7 días · $150"
    }, {
      label: "Exprés",
      value: "2–3 días · $320"
    }, {
      label: "Cambios",
      value: "30 días sin costo",
      mono: false
    }]
  })));
}
function CartDrawer({
  items,
  close,
  checkout,
  remove
}) {
  const total = items.reduce((s, i) => s + i.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: close,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-ink)",
      backdropFilter: "var(--blur-veil)"
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "relative",
      width: 420,
      background: "var(--surface-card)",
      borderLeft: "1px solid var(--border-solid)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-5) var(--space-5) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      margin: 0
    }
  }, "Tu bolsa"), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18
    }),
    label: "Cerrar",
    onClick: close
  })), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "var(--space-4) var(--space-5)",
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start"
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)"
    }
  }, "Tu bolsa est\xE1 vac\xEDa."), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "72px 1fr auto",
      gap: "var(--space-4)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Figure, {
    ratio: "4 / 5",
    tone: "khaki",
    weave: "canvas",
    label: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)",
      fontSize: 17
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, it.color, " \xB7 Talla ", it.talla), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    onClick: () => remove(i)
  }, "Quitar")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, "$", it.price.toLocaleString("es-MX"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      borderTop: "1px solid var(--border-hairline)",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(SpecList, {
    dense: true,
    items: [{
      label: "Subtotal",
      value: "$" + total.toLocaleString("es-MX")
    }, {
      label: "Envío",
      value: "$150"
    }, {
      label: "Total",
      value: "$" + (total ? total + 150 : 0).toLocaleString("es-MX") + " MXN"
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: !items.length,
    onClick: checkout
  }, "Pagar"))));
}
function Checkout({
  items,
  back,
  done
}) {
  const [envio, setEnvio] = React.useState("std");
  const total = items.reduce((s, i) => s + i.price, 0) + (envio === "std" ? 150 : 320);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "var(--space-6) var(--space-7) var(--space-9)",
      display: "grid",
      gridTemplateColumns: "1.2fr 420px",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    onClick: back
  }, "\u2190 Seguir viendo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      fontSize: 44,
      margin: 0
    }
  }, "Pago")), /*#__PURE__*/React.createElement(Rule, {
    label: "Datos de env\xEDo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Apellidos"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    placeholder: "nombre@correo.mx",
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Calle y n\xFAmero",
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Colonia"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xF3digo postal",
    placeholder: "06700"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Estado",
    options: ["Ciudad de México", "Puebla", "Jalisco", "Nuevo León", "Yucatán"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    placeholder: "55 1234 5678"
  })), /*#__PURE__*/React.createElement(Rule, {
    label: "Entrega"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "Est\xE1ndar \u2014 5 a 7 d\xEDas h\xE1biles \xB7 $150",
    checked: envio === "std",
    onChange: () => setEnvio("std")
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Expr\xE9s \u2014 2 a 3 d\xEDas h\xE1biles \xB7 $320",
    checked: envio === "exp",
    onChange: () => setEnvio("exp")
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Guardar esta direcci\xF3n para la pr\xF3xima",
    checked: true,
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    variant: "solid",
    style: {
      display: "grid",
      gap: "var(--space-5)",
      position: "sticky",
      top: 98
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Resumen"), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "56px 1fr auto",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Figure, {
    ratio: "1 / 1",
    tone: "khaki",
    weave: "canvas",
    label: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: 14
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, it.color, " \xB7 ", it.talla)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "$", it.price.toLocaleString("es-MX")))), /*#__PURE__*/React.createElement(SpecList, {
    dense: true,
    items: [{
      label: "Envío",
      value: envio === "std" ? "$150" : "$320"
    }, {
      label: "IVA incluido",
      value: "—"
    }, {
      label: "Total",
      value: "$" + total.toLocaleString("es-MX") + " MXN"
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: done
  }, "Confirmar pedido"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "Pago seguro. Facturamos a petici\xF3n.")));
}
function Confirmed({
  back,
  folio
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "var(--space-10) var(--space-7)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Pedido ", folio), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      margin: 0
    }
  }, "Gracias, ya est\xE1 en el taller."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Te mandamos el n\xFAmero de gu\xEDa en cuanto salga de Puebla. Si necesitas factura, resp\xF3ndenos ese correo."), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: "Folio",
      value: folio
    }, {
      label: "Entrega estimada",
      value: "12–16 sep"
    }, {
      label: "Envío",
      value: "Estándar",
      mono: false
    }],
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: back
  }, "Seguir comprando")));
}
Object.assign(window, {
  ShopHeader,
  ProductPage,
  CartDrawer,
  Checkout,
  Confirmed
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Shop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Wordmark,
  Icon,
  Button,
  Rule
} = window.NovalanDesignSystem_054783;
function SiteHeader({
  route,
  go
}) {
  const nav = [["colecciones", "Colecciones"], ["tejidos", "Tejidos"], ["taller", "El taller"], ["contacto", "Contacto"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 var(--page-margin)",
      height: 82,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "wordmark",
    width: 132,
    onClick: () => go("home"),
    style: {
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, nav.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => go(k),
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      font: "var(--type-label)",
      fontSize: "var(--fs-label-lg)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      color: route === k ? "var(--text-primary)" : "var(--text-secondary)",
      paddingBottom: 2,
      whiteSpace: "nowrap",
      borderBottom: "1px solid " + (route === k ? "var(--border-solid)" : "transparent")
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "MX / ES"), /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => go("contacto")
  }, "Cotizar"))));
}
function SiteFooter() {
  const cols = [["Colecciones", ["Otoño 2026", "Lino lavado", "Manta de telar", "Lanas de Tlaxcala"]], ["Casa", ["El taller", "Trazabilidad", "Prensa", "Trabaja con nosotros"]], ["Ayuda", ["Guía de cuidado", "Envíos y cambios", "Mayoreo", "Contacto"]]];
  return /*#__PURE__*/React.createElement("footer", {
    "data-nv-theme": "ink",
    style: {
      background: "var(--nv-ink-900)",
      color: "var(--nv-paper-300)",
      marginTop: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-8) var(--page-margin) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3,1fr)",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "wordmark",
    tone: "paper",
    width: 150
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      color: "rgba(246,243,236,.7)",
      maxWidth: "32ch",
      margin: 0
    }
  }, "Telares y acabados en Puebla, M\xE9xico. Tejemos por metro, por rollo y por encargo desde 1983.")), cols.map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--nv-khaki-300)"
    }
  }, t), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      color: "rgba(246,243,236,.78)",
      textDecoration: "none"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-4) var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "hairline",
    style: {
      background: "rgba(246,243,236,.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "var(--space-4)",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      color: "rgba(246,243,236,.5)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Novalan Textiles S.A. de C.V."), /*#__PURE__*/React.createElement("span", null, "Aviso de privacidad \xB7 T\xE9rminos"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Figure,
  Rule,
  Tag,
  Icon,
  Card,
  Swatch
} = window.NovalanDesignSystem_054783;
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "21 / 9",
      background: "var(--nv-khaki-500)",
      backgroundImage: "var(--weave-canvas)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,rgba(11,11,11,.62),rgba(11,11,11,.05))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 var(--page-margin)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--nv-khaki-300)"
    }
  }, "Oto\xF1o 2026 \xB7 Puebla"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      color: "var(--nv-paper-300)",
      maxWidth: "18ch",
      margin: 0
    }
  }, "Tejido para durar generaciones"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-lg)",
      color: "rgba(246,243,236,.82)",
      maxWidth: "46ch",
      margin: 0
    }
  }, "Lino, algod\xF3n y lana tejidos en telares de lanzadera y acabados a mano en nuestro taller."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => go("colecciones")
  }, "Ver colecci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      color: "var(--nv-paper-300)",
      borderColor: "rgba(246,243,236,.5)"
    },
    onClick: () => go("tejidos")
  }, "Cat\xE1logo de tejidos"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "La casa"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "var(--space-9)",
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      margin: 0,
      maxWidth: "20ch"
    }
  }, "Cuatro generaciones frente al telar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-lg)",
      margin: 0
    }
  }, "Empezamos en 1983 con seis telares y un solo hilo: lino europeo crudo. Hoy tejemos para casas de moda, hoteles y talleres de tapicer\xEDa en todo M\xE9xico."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Cada rollo lleva su n\xFAmero de lote y la firma de quien lo revis\xF3. Si algo no pasa la revisi\xF3n, no sale del taller."), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }),
    onClick: () => go("taller")
  }, "Conoce el taller")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      paddingBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      margin: 0
    }
  }, "Piezas de temporada"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    onClick: () => go("colecciones")
  }, "Ver las 42 piezas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--gutter)"
    }
  }, [["Camisa Ombré", "$2,480 MXN", "khaki", "canvas"], ["Manta de Telar", "$3,150 MXN", "walnut", "herringbone"], ["Cojín Crudo", "$890 MXN", "paper", "plain"], ["Rebozo Negro", "$4,200 MXN", "ink", "twill"]].map(([n, p, t, w]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    interactive: true,
    padding: "none"
  }, /*#__PURE__*/React.createElement(Figure, {
    ratio: "4 / 5",
    tone: t,
    weave: w,
    label: "Producto"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-4) var(--space-5)",
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-accent)"
    }
  }, p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "Coloridos del taller"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      paddingTop: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, [["Negro", "NV-0B0B", "var(--nv-ink-900)", "plain"], ["Nogal", "NV-4A37", "var(--nv-walnut-700)", "twill"], ["Barro", "NV-6B53", "var(--nv-walnut-500)", "herringbone"], ["Khaki", "NV-A89B", "var(--nv-khaki-500)", "twill"], ["Arena", "NV-C4B9", "var(--nv-khaki-300)", "plain"], ["Crudo", "NV-D8CF", "var(--nv-khaki-100)", "plain"]].map(([n, c, col, w]) => /*#__PURE__*/React.createElement(Swatch, {
    key: n,
    name: n,
    code: c,
    color: col,
    weave: w,
    size: 124
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1440,
      margin: "var(--section-y) auto 0",
      padding: "0 var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-nv-theme": "ink",
    style: {
      background: "var(--nv-ink-900)",
      color: "var(--nv-paper-300)",
      padding: "var(--space-8)",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--nv-khaki-300)"
    }
  }, "Mayoreo"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h2)",
      margin: 0,
      maxWidth: "24ch",
      color: "var(--nv-paper-300)"
    }
  }, "Abre tu cuenta de tejidos por rollo"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "rgba(246,243,236,.76)",
      maxWidth: "52ch",
      margin: 0
    }
  }, "Precios por metro, muestrarios sin costo y plazos de producci\xF3n visibles en tu portal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => go("tejidos")
  }, "Solicitar acceso"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      paddingTop: "var(--space-5)",
      flexWrap: "wrap"
    }
  }, ["Lino", "Algodón orgánico", "Lana de Tlaxcala", "Hemp", "Mezclilla"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
const {
  Button,
  Figure,
  Rule,
  Tag,
  Card,
  Swatch,
  SpecList,
  Input,
  Select,
  Icon,
  Badge
} = window.NovalanDesignSystem_054783;
function Colecciones({
  go
}) {
  const [fil, setFil] = React.useState("Todo");
  const items = [["Camisa Ombré", "$2,480", "khaki", "canvas", "Prendas"], ["Manta de Telar", "$3,150", "walnut", "herringbone", "Casa"], ["Cojín Crudo", "$890", "paper", "plain", "Casa"], ["Rebozo Negro", "$4,200", "ink", "twill", "Prendas"], ["Mantel Lino 240", "$1,980", "khaki", "plain", "Mesa"], ["Sábana Arena", "$3,900", "paper", "twill", "Cama"], ["Toalla Telar", "$740", "walnut", "plain", "Baño"], ["Saco Nogal", "$5,600", "ink", "herringbone", "Prendas"]];
  const shown = fil === "Todo" ? items : items.filter(i => i[4] === fil);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-8) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      paddingBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Colecciones"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      margin: 0
    }
  }, "Oto\xF1o 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-lg)",
      maxWidth: "58ch",
      margin: 0,
      color: "var(--text-secondary)"
    }
  }, "Cuarenta y dos piezas tejidas en lino, algod\xF3n y lana. Todas se pueden pedir por metro.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--space-5)",
      padding: "var(--space-4) 0",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, ["Todo", "Prendas", "Casa", "Mesa", "Cama", "Baño"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: fil === t,
    onClick: () => setFil(t)
  }, t))), /*#__PURE__*/React.createElement(Select, {
    options: ["Novedades", "Precio menor", "Precio mayor"],
    size: "sm",
    style: {
      width: 190
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--gutter)",
      paddingTop: "var(--space-6)"
    }
  }, shown.map(([n, p, t, w, c]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    interactive: true,
    padding: "none",
    onClick: () => go("producto")
  }, /*#__PURE__*/React.createElement(Figure, {
    ratio: "4 / 5",
    tone: t,
    weave: w,
    label: c
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-4) var(--space-5)",
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-accent)"
    }
  }, p, " MXN"))))));
}
function Tejidos({
  go
}) {
  const rows = [["NV-0042", "Lino lavado 240", "100% lino", "240 g/m²", "150 cm", "$310", "success"], ["NV-0118", "Algodón sarga", "100% algodón org.", "310 g/m²", "160 cm", "$248", "success"], ["NV-0207", "Lana Tlaxcala", "70% lana / 30% alg.", "420 g/m²", "140 cm", "$620", "warning"], ["NV-0311", "Hemp canvas", "100% hemp", "330 g/m²", "150 cm", "$395", "success"], ["NV-0402", "Mezclilla selvedge", "98% alg. / 2% ea.", "390 g/m²", "76 cm", "$540", "danger"]];
  const est = {
    success: ["En existencia", "success"],
    warning: ["En producción", "warning"],
    danger: ["Agotado", "danger"]
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-8) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Cat\xE1logo de tejidos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      margin: "var(--space-3) 0 var(--space-6)"
    }
  }, "Por metro y por rollo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1.4fr 1fr 90px 80px 90px 130px",
      gap: "var(--space-4)",
      padding: "0 0 10px",
      font: "var(--type-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label-tight)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      borderBottom: "1px solid var(--border-solid)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Lote"), /*#__PURE__*/React.createElement("span", null, "Tejido"), /*#__PURE__*/React.createElement("span", null, "Composici\xF3n"), /*#__PURE__*/React.createElement("span", null, "Gramaje"), /*#__PURE__*/React.createElement("span", null, "Ancho"), /*#__PURE__*/React.createElement("span", null, "Precio/m"), /*#__PURE__*/React.createElement("span", null, "Estado")), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1.4fr 1fr 90px 80px 90px 130px",
      gap: "var(--space-4)",
      padding: "14px 0",
      borderBottom: "1px solid var(--border-hairline)",
      alignItems: "center",
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)",
      fontSize: 17
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, r[3]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, r[4]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, r[5]), /*#__PURE__*/React.createElement(Badge, {
    tone: est[r[6]][1],
    dot: true
  }, est[r[6]][0]))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    variant: "solid",
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Muestrario"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      margin: 0
    }
  }, "Cinco muestras sin costo"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Enviamos cortes de 10 \xD7 10 cm a cualquier parte de la Rep\xFAblica en 3 d\xEDas h\xE1biles."), /*#__PURE__*/React.createElement(Input, {
    label: "Correo de trabajo",
    placeholder: "compras@tumarca.mx"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xF3digo postal",
    placeholder: "72000"
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => go("contacto")
  }, "Solicitar muestrario"))));
}
function Taller() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-8) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "El taller"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      margin: "var(--space-3) 0 var(--space-6)",
      maxWidth: "22ch"
    }
  }, "Puebla, seis telares, cuarenta y tres a\xF1os"), /*#__PURE__*/React.createElement(Figure, {
    ratio: "21 / 9",
    tone: "ink",
    weave: "twill",
    label: "Interior del taller"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-7)",
      paddingTop: "var(--space-7)"
    }
  }, [["1983", "Abrimos con seis telares de lanzadera y un contrato de manteles para hoteles del centro."], ["2004", "Instalamos la lavandería enzimática propia: el acabado deja de salir del taller."], ["2026", "Trazabilidad por lote y muestrario digital para clientes de mayoreo."]].map(([y, t]) => /*#__PURE__*/React.createElement("div", {
    key: y,
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      fontFamily: "var(--font-display)"
    }
  }, y), /*#__PURE__*/React.createElement("hr", {
    className: "nv-rule"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-8)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Figure, {
    ratio: "4 / 5",
    tone: "khaki",
    weave: "herringbone",
    label: "Detalle de urdimbre",
    caption: "Urdimbre de lino, telar 3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      margin: 0
    }
  }, "Trazabilidad por lote"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-lg)",
      margin: 0,
      color: "var(--text-secondary)"
    }
  }, "Cada rollo sale con su ficha: origen del hilo, telar, fecha de lavado y qui\xE9n lo revis\xF3."), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: "Hilo",
      value: "Lino europeo, Normandía",
      mono: false
    }, {
      label: "Telar",
      value: "Lanzadera 3"
    }, {
      label: "Lavado",
      value: "Enzimático, 60 min"
    }, {
      label: "Revisión",
      value: "M. Ordóñez",
      mono: false
    }]
  }))));
}
function Contacto() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-8) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-label"
  }, "Contacto"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      margin: 0,
      maxWidth: "16ch"
    }
  }, "Cu\xE9ntanos qu\xE9 necesitas tejer"), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: "Taller",
      value: "Av. Reforma 118, Puebla, Pue.",
      mono: false
    }, {
      label: "Showroom",
      value: "Colima 214, Roma Norte, CDMX",
      mono: false
    }, {
      label: "Teléfono",
      value: "+52 222 145 8890"
    }, {
      label: "Correo",
      value: "hola@novalan.mx",
      mono: false
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Opcional"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    placeholder: "nombre@empresa.mx"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tipo de proyecto",
    options: ["Mayoreo por rollo", "Pedido a medida", "Prensa", "Otro"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Metros estimados",
    placeholder: "120"
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true
  }, "Enviar mensaje"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "Respondemos en menos de 24 horas h\xE1biles."))));
}
Object.assign(window, {
  Colecciones,
  Tejidos,
  Taller,
  Contacto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.Swatch = __ds_scope.Swatch;

})();
