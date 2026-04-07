var ne = Object.defineProperty;
var re = (t, e, n) => e in t ? ne(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var x = (t, e, n) => re(t, typeof e != "symbol" ? e + "" : e, n);
import { jsx as dt } from "react/jsx-runtime";
import P, { forwardRef as ie, useRef as D, useEffect as et, Fragment as oe, cloneElement as Vt } from "react";
var ht = typeof window < "u", Yt = "comm", Kt = "rule", Ut = "decl", se = "@import", ae = "@namespace", ce = "@keyframes", le = "@layer", Gt = Math.abs, gt = String.fromCharCode;
function Ht(t) {
  return t.trim();
}
function nt(t, e, n) {
  return t.replace(e, n);
}
function de(t, e, n) {
  return t.indexOf(e, n);
}
function Y(t, e) {
  return t.charCodeAt(e) | 0;
}
function K(t, e, n) {
  return t.slice(e, n);
}
function j(t) {
  return t.length;
}
function ue(t) {
  return t.length;
}
function Q(t, e) {
  return e.push(t), t;
}
var ot = 1, U = 1, Xt = 0, I = 0, w = 0, G = "";
function pt(t, e, n, r, o, a, h, u) {
  return { value: t, root: e, parent: n, type: r, props: o, children: a, line: ot, column: U, length: h, return: "", siblings: u };
}
function fe() {
  return w;
}
function me() {
  return w = I > 0 ? Y(G, --I) : 0, U--, w === 10 && (U = 1, ot--), w;
}
function M() {
  return w = I < Xt ? Y(G, I++) : 0, U++, w === 10 && (U = 1, ot++), w;
}
function $() {
  return Y(G, I);
}
function rt() {
  return I;
}
function st(t, e) {
  return K(G, t, e);
}
function H(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function he(t) {
  return ot = U = 1, Xt = j(G = t), I = 0, [];
}
function ge(t) {
  return G = "", t;
}
function ct(t) {
  return Ht(st(I - 1, ut(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function pe(t) {
  for (; (w = $()) && w < 33; )
    M();
  return H(t) > 2 || H(w) > 3 ? "" : " ";
}
function be(t, e) {
  for (; --e && M() && !(w < 48 || w > 102 || w > 57 && w < 65 || w > 70 && w < 97); )
    ;
  return st(t, rt() + (e < 6 && $() == 32 && M() == 32));
}
function ut(t) {
  for (; M(); )
    switch (w) {
      case t:
        return I;
      case 34:
      case 39:
        t !== 34 && t !== 39 && ut(w);
        break;
      case 40:
        t === 41 && ut(t);
        break;
      case 92:
        M();
        break;
    }
  return I;
}
function ye(t, e) {
  for (; M() && t + w !== 57; )
    if (t + w === 84 && $() === 47)
      break;
  return "/*" + st(e, I - 1) + "*" + gt(t === 47 ? t : M());
}
function Se(t) {
  for (; !H($()); )
    M();
  return st(t, I);
}
function ke(t) {
  return ge(it("", null, null, null, [""], t = he(t), 0, [0], t));
}
function it(t, e, n, r, o, a, h, u, f) {
  for (var c = 0, l = 0, d = h, m = 0, S = 0, g = 0, v = 1, L = 1, C = 1, k = 0, E = "", T = o, p = a, i = r, s = E; L; )
    switch (g = k, k = M()) {
      case 40:
        if (g != 108 && Y(s, d - 1) == 58) {
          de(s += nt(ct(k), "&", "&\f"), "&\f", Gt(c ? u[c - 1] : 0)) != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        s += ct(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        s += pe(g);
        break;
      case 92:
        s += be(rt() - 1, 7);
        continue;
      case 47:
        switch ($()) {
          case 42:
          case 47:
            Q(xe(ye(M(), rt()), e, n, f), f), (H(g || 1) == 5 || H($() || 1) == 5) && j(s) && K(s, -1, void 0) !== " " && (s += " ");
            break;
          default:
            s += "/";
        }
        break;
      case 123 * v:
        u[c++] = j(s) * C;
      case 125 * v:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            L = 0;
          case 59 + l:
            C == -1 && (s = nt(s, /\f/g, "")), S > 0 && (j(s) - d || v === 0 && g === 47) && Q(S > 32 ? Dt(s + ";", r, n, d - 1, f) : Dt(nt(s, " ", "") + ";", r, n, d - 2, f), f);
            break;
          case 59:
            s += ";";
          default:
            if (Q(i = zt(s, e, n, c, l, o, u, E, T = [], p = [], d, a), a), k === 123)
              if (l === 0)
                it(s, e, i, i, T, a, d, u, p);
              else {
                switch (m) {
                  case 99:
                    if (Y(s, 3) === 110) break;
                  case 108:
                    if (Y(s, 2) === 97) break;
                  default:
                    l = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                l ? it(t, i, i, r && Q(zt(t, i, i, 0, 0, o, u, E, o, T = [], d, p), p), o, p, d, u, r ? T : p) : it(s, i, i, i, [""], p, 0, u, p);
              }
        }
        c = l = S = 0, v = C = 1, E = s = "", d = h;
        break;
      case 58:
        d = 1 + j(s), S = g;
      default:
        if (v < 1) {
          if (k == 123)
            --v;
          else if (k == 125 && v++ == 0 && me() == 125)
            continue;
        }
        switch (s += gt(k), k * v) {
          case 38:
            C = l > 0 ? 1 : (s += "\f", -1);
            break;
          case 44:
            u[c++] = (j(s) - 1) * C, C = 1;
            break;
          case 64:
            $() === 45 && (s += ct(M())), m = $(), l = d = j(E = s += Se(rt())), k++;
            break;
          case 45:
            g === 45 && j(s) == 2 && (v = 0);
        }
    }
  return a;
}
function zt(t, e, n, r, o, a, h, u, f, c, l, d) {
  for (var m = o - 1, S = o === 0 ? a : [""], g = ue(S), v = 0, L = 0, C = 0; v < r; ++v)
    for (var k = 0, E = K(t, m + 1, m = Gt(L = h[v])), T = t; k < g; ++k)
      (T = Ht(L > 0 ? S[k] + " " + E : nt(E, /&\f/g, S[k]))) && (f[C++] = T);
  return pt(t, e, n, o === 0 ? Kt : u, f, c, l, d);
}
function xe(t, e, n, r) {
  return pt(t, e, n, Yt, gt(fe()), K(t, 2, -2), 0, r);
}
function Dt(t, e, n, r, o) {
  return pt(t, e, n, Ut, K(t, 0, r), K(t, r + 1, -1), r, o);
}
function ft(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function ve(t, e, n, r) {
  switch (t.type) {
    case le:
      if (t.children.length) break;
    case se:
    case ae:
    case Ut:
      return t.return = t.return || t.value;
    case Yt:
      return "";
    case ce:
      return t.return = t.value + "{" + ft(t.children, r) + "}";
    case Kt:
      if (!j(t.value = t.props.join(","))) return "";
  }
  return j(n = ft(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
var mt = process.env.NODE_ENV === "production", we = class {
  constructor(t, e = !1) {
    x(this, "name");
    x(this, "deletedRulePlaceholder");
    x(this, "speedy");
    x(this, "tags");
    x(this, "injected");
    x(this, "rulesCount");
    this.name = t, this.deletedRulePlaceholder = `#${t}-deleted-rule{}`, this.speedy = e, this.tags = [], this.injected = !1, this.rulesCount = 0;
  }
  inject() {
    if (this.injected)
      throw new Error("ClientStyleSheet: sheet already injected");
    this.speedy && (this.tags[0] = this.makeStyleTag(), this.speedy = "insertRule" in this.getLatestSheet(), this.speedy || (mt || console.warn(
      "ClientStyleSheet: speedy mode not supported falling back to standard mode."
    ), this.flush())), this.injected = !0;
  }
  isSpeedy() {
    return this.speedy;
  }
  setSpeedy(t) {
    if (this.rulesCount === 0)
      throw new Error(
        "ClientStyleSheet: speedy cannot be when rules have already been inserted"
      );
    this.flush(), this.speedy = t, this.inject();
  }
  insertRule(t, e) {
    if (this.speedy) {
      const r = this.getLatestSheet();
      typeof e != "number" && (e = r.cssRules.length);
      try {
        r.insertRule(t, e);
      } catch {
        return mt || console.warn(
          `ClientStyleSheet: illegal rule: 

${t}

See https://stackoverflow.com/q/20007992 for more info`
        ), -1;
      }
      return this.rulesCount++;
    }
    const n = e ? this.tags[e] : void 0;
    return this.tags = this.tags.concat(this.makeStyleTag(t, n)), this.rulesCount++;
  }
  deleteRule(t) {
    var n;
    if (t < 0)
      return;
    if (this.speedy) {
      const r = this.getLatestSheet();
      r.deleteRule(t), r.insertRule(this.deletedRulePlaceholder, t);
      return;
    }
    const e = this.tags[t];
    if (!e)
      throw new Error(`ClientStyleSheet: rule at index \`${t}\` not found`);
    (n = e.parentNode) == null || n.removeChild(e), delete this.tags[t];
  }
  flush() {
    this.injected = !1, this.rulesCount = 0, this.tags.forEach((t) => {
      var e;
      return t && ((e = t.parentNode) == null ? void 0 : e.removeChild(t));
    }), this.tags = [];
  }
  cssRules() {
    return this.tags.reduce(
      (t, e) => e ? t.concat(
        Array.from(
          this.getSheet(e).cssRules,
          (n) => n.cssText === this.deletedRulePlaceholder ? void 0 : n
        )
      ) : t,
      []
    );
  }
  makeStyleTag(t, e) {
    var a;
    const n = document.createElement("style");
    n.setAttribute(`data-${this.name}`, "");
    const r = (a = document.querySelector('meta[property="csp-nonce"]')) == null ? void 0 : a.getAttribute("content");
    r && n.setAttribute("nonce", r), t && n.appendChild(document.createTextNode(t));
    const o = document.head || document.getElementsByTagName("head")[0];
    return e ? o.insertBefore(n, e) : o.appendChild(n), n;
  }
  getSheet(t) {
    if (t.sheet)
      return t.sheet;
    const e = Array.from(document.styleSheets).find(
      (n) => n.ownerNode === t
    );
    if (e)
      return e;
    throw new Error("ClientStyleSheet: styleSheet not found");
  }
  getLatestSheet() {
    const t = this.tags[this.tags.length - 1];
    if (!t)
      throw new Error("ClientStyleSheet: style tag not found");
    return this.getSheet(t);
  }
}, Re = class {
  constructor(t, e = !1) {
    x(this, "name");
    x(this, "deletedRulePlaceholder");
    x(this, "speedy");
    x(this, "serverSheet");
    x(this, "injected");
    x(this, "rulesCount");
    this.name = t, this.deletedRulePlaceholder = `#${t}-deleted-rule{}`, this.speedy = e, this.serverSheet = void 0, this.injected = !1, this.rulesCount = 0;
  }
  inject() {
    if (this.injected)
      throw new Error("ServerStyleSheet: sheet already injected");
    this.serverSheet = {
      cssRules: [],
      insertRule: (t, e) => typeof e == "number" ? (this.getSheet().cssRules[e] = { cssText: t }, e) : (this.getSheet().cssRules.push({ cssText: t }), this.getSheet().cssRules.length - 1),
      deleteRule: (t) => {
        delete this.getSheet().cssRules[t];
      }
    }, this.injected = !0;
  }
  setSpeedy(t) {
    if (this.rulesCount === 0)
      throw new Error(
        "ServerStyleSheet: speedy cannot be when rules have already been inserted"
      );
    this.flush(), this.speedy = t, this.inject();
  }
  isSpeedy() {
    return this.speedy;
  }
  insertRule(t, e) {
    return typeof e != "number" && (e = this.getSheet().cssRules.length), this.getSheet().insertRule(t, e), this.rulesCount++;
  }
  deleteRule(t) {
    if (t < 0)
      return;
    const e = this.getSheet();
    e.deleteRule(t), e.insertRule(this.deletedRulePlaceholder, t);
  }
  flush() {
    this.injected = !1, this.rulesCount = 0, this.getSheet().cssRules = [];
  }
  cssRules() {
    return this.getSheet().cssRules;
  }
  getSheet() {
    if (!this.serverSheet)
      throw new Error("ServerStyleSheet: sheet not injected");
    return this.serverSheet;
  }
}, Ce = class {
  constructor(t, e = !1) {
    return ht ? new we(t, e) : new Re(t, e);
  }
}, tt = "__", Ee = class {
  constructor() {
    x(this, "sheet");
    x(this, "serverSideRenderedStyleMap", null);
    x(this, "indexesMap", {});
    x(this, "instancesCountMap", {});
    this.sheet = new Ce("kuma-ui", mt), this.sheet.inject();
  }
  add(t, e) {
    var r;
    ht && this.serverSideRenderedStyleMap === null && (this.serverSideRenderedStyleMap = this.getServerSideRenderedStyleMap(), Object.keys(this.serverSideRenderedStyleMap).forEach((o) => {
      this.instancesCountMap[o] = 0;
    })), this.instancesCountMap[t] = 1 + (this.instancesCountMap[t] ?? 0);
    const n = (r = this.serverSideRenderedStyleMap) == null ? void 0 : r[t];
    this.instancesCountMap[t] === 1 && !n && ke(e).forEach((o) => {
      const a = ft([o], ve);
      this.indexesMap[t] = (this.indexesMap[t] || []).concat(
        this.sheet.insertRule(a)
      );
    });
  }
  remove(t) {
    var n, r;
    if (this.instancesCountMap[t] === void 0)
      throw new Error(
        `StyleSheetRegistry: id: \`${t}\` not found in idInstancesCountMap.`
      );
    if (this.instancesCountMap[t] -= 1, this.instancesCountMap[t] !== 0)
      return;
    const e = (n = this.serverSideRenderedStyleMap) == null ? void 0 : n[t];
    if (e)
      e.remove(), (r = this.serverSideRenderedStyleMap) == null || delete r[t];
    else {
      if (this.indexesMap[t] === void 0)
        throw new Error(
          `StyleSheetRegistry: id: \`${t}\` not found in idIndexesMap.`
        );
      this.indexesMap[t].forEach((o) => this.sheet.deleteRule(o)), delete this.indexesMap[t];
    }
    delete this.instancesCountMap[t];
  }
  styles(t = {}) {
    return Object.keys(this.indexesMap).map((e) => {
      const n = this.indexesMap[e];
      if (n === void 0)
        return null;
      const r = this.sheet.cssRules(), o = n.map((a) => {
        var h;
        return (h = r[a]) == null ? void 0 : h.cssText;
      }).filter(Boolean).join(this.sheet.isSpeedy() ? "" : `
`);
      return o.length === 0 ? null : P.createElement("style", {
        id: `${tt}${e}`,
        key: `${tt}${e}`,
        nonce: t.nonce ? t.nonce : void 0,
        dangerouslySetInnerHTML: {
          __html: o
        }
      });
    }).filter(Boolean);
  }
  flush() {
    this.sheet.flush(), this.sheet.inject(), this.serverSideRenderedStyleMap = null, this.indexesMap = {}, this.instancesCountMap = {};
  }
  getServerSideRenderedStyleMap() {
    return Array.from(
      document.querySelectorAll(`[id^="${tt}"]`)
    ).reduce(
      (e, n) => {
        const r = n.id.replace(tt, "");
        return e[r] = n, e;
      },
      {}
    );
  }
}, Jt = P.createContext(
  null
);
Jt.displayName = "StyleSheetContext";
function Te() {
  return new Ee();
}
function Ie() {
  return P.useContext(Jt);
}
var Me = {
  boxShadow: "box-shadow",
  textShadow: "text-shadow"
}, Pe = {
  margin: "margin",
  m: "margin",
  marginTop: "margin-top",
  mt: "margin-top",
  marginRight: "margin-right",
  mr: "margin-right",
  marginBottom: "margin-bottom",
  mb: "margin-bottom",
  marginLeft: "margin-left",
  ml: "margin-left",
  marginX: "margin-left,margin-right",
  mx: "margin-left,margin-right",
  marginY: "margin-top,margin-bottom",
  my: "margin-top,margin-bottom",
  marginInlineStart: "margin-inline-start",
  marginInlineEnd: "margin-inline-end",
  marginBlockStart: "margin-block-start",
  marginBlockEnd: "margin-block-end",
  marginInline: "margin-inline",
  marginBlock: "margin-block",
  padding: "padding",
  p: "padding",
  paddingTop: "padding-top",
  pt: "padding-top",
  paddingRight: "padding-right",
  pr: "padding-right",
  paddingBottom: "padding-bottom",
  pb: "padding-bottom",
  paddingLeft: "padding-left",
  pl: "padding-left",
  paddingX: "padding-left,padding-right",
  px: "padding-left,padding-right",
  paddingY: "padding-top,padding-bottom",
  py: "padding-top,padding-bottom",
  paddingInlineStart: "padding-inline-start",
  paddingInlineEnd: "padding-inline-end",
  paddingBlockStart: "padding-block-start",
  paddingBlockEnd: "padding-block-end",
  paddingInline: "padding-inline",
  paddingBlock: "padding-block"
}, Be = {
  textAlign: "text-align",
  textAlignLast: "text-align-last",
  textCombineUpright: "text-combine-upright",
  textDecoration: "text-decoration",
  textDecorationColor: "text-decoration-color",
  textDecorationLine: "text-decoration-line",
  textDecorationSkipInk: "text-decoration-skip-ink",
  textDecorationStyle: "text-decoration-style",
  textDecorationThickness: "text-decoration-thickness",
  textEmphasis: "text-emphasis",
  textEmphasisColor: "text-emphasis-color",
  textEmphasisPosition: "text-emphasis-position",
  textEmphasisStyle: "text-emphasis-style",
  textIndent: "text-indent",
  textJustify: "text-justify",
  textOrientation: "text-orientation",
  textOverflow: "text-overflow",
  textRendering: "text-rendering",
  textShadow: "text-shadow",
  textTransform: "text-transform",
  textUnderlineOffset: "text-underline-offset",
  textUnderlinePosition: "text-underline-position"
}, je = {
  hyphenateCharacter: "hyphenate-character",
  hyphenateLimitChars: "hyphenate-limit-chars",
  hyphens: "hyphens",
  hangingPunctuation: "hanging-punctuation",
  lineHeight: "line-height",
  lineBreak: "line-break",
  orphans: "orphans",
  quotes: "quotes",
  rubyPosition: "ruby-position",
  unicodeBidi: "unicode-bidi",
  widows: "widows",
  whiteSpace: "white-space",
  letterSpacing: "letter-spacing",
  wordBreak: "word-break",
  wordSpacing: "word-spacing",
  writingMode: "writing-mode"
}, Oe = {
  flexDirection: "flex-direction",
  flexDir: "flex-direction",
  justifyContent: "justify-content",
  justify: "justify-content",
  alignContent: "align-content",
  alignItems: "align-items",
  alignSelf: "align-self",
  flex: "flex",
  flexBasis: "flex-basis",
  flexFlow: "flex-flow",
  flexGrow: "flex-grow",
  flexShrink: "flex-shrink",
  flexWrap: "flex-wrap",
  justifyItems: "justify-items",
  justifySelf: "justify-self",
  gap: "gap",
  placeItems: "place-items",
  placeContent: "place-content"
}, Ae = {
  font: "font",
  fontFamily: "font-family",
  fontFeatureSettings: "font-feature-settings",
  fontKerning: "font-kerning",
  fontLanguageOverride: "font-language-override",
  fontOpticalSizing: "font-optical-sizing",
  fontPalette: "font-palette",
  fontSize: "font-size",
  fontSizeAdjust: "font-size-adjust",
  fontStretch: "font-stretch",
  fontStyle: "font-style",
  fontSynthesis: "font-synthesis",
  fontVariant: "font-variant",
  fontVariantAlternates: "font-variant-alternates",
  fontVariantCaps: "font-variant-caps",
  fontVariantEastAsian: "font-variant-east-asian",
  fontVariantEmoji: "font-variant-emoji",
  fontVariantLigatures: "font-variant-ligatures",
  fontVariantNumeric: "font-variant-numeric",
  fontVariantPosition: "font-variant-position",
  fontVariationSettings: "font-variation-settings",
  fontWeight: "font-weight"
}, Le = {
  grid: "grid",
  gridArea: "grid-area",
  gridAutoColumns: "grid-auto-columns",
  gridAutoFlow: "grid-auto-flow",
  gridAutoRows: "grid-auto-rows",
  gridColumn: "grid-column",
  gridColumnEnd: "grid-column-end",
  gridColumnStart: "grid-column-start",
  gridRow: "grid-row",
  gridRowEnd: "grid-row-end",
  gridRowStart: "grid-row-start",
  gridTemplate: "grid-template",
  gridTemplateAreas: "grid-template-areas",
  gridTemplateColumns: "grid-template-columns",
  gridTemplateRows: "grid-template-rows",
  gridGap: "grid-gap",
  gridColumnGap: "grid-column-gap",
  gridRowGap: "grid-row-gap"
}, Ne = {
  width: "width",
  w: "width",
  minWidth: "min-width",
  minW: "min-width",
  maxWidth: "max-width",
  maxW: "max-width",
  height: "height",
  h: "height",
  minHeight: "min-height",
  minH: "min-height",
  maxHeight: "max-height",
  maxH: "max-height",
  display: "display",
  overflow: "overflow",
  overflowX: "overflow-x",
  overflowY: "overflow-y",
  position: "position",
  zIndex: "z-index",
  cursor: "cursor",
  aspectRatio: "aspect-ratio",
  boxSizing: "box-sizing",
  float: "float",
  clear: "clear",
  objectFit: "object-fit",
  objectPosition: "object-position",
  resize: "resize",
  verticalAlign: "vertical-align",
  userSelect: "user-select"
}, ze = {
  listStyle: "list-style",
  listStyleImage: "list-style-image",
  listStylePosition: "list-style-position",
  listStyleType: "list-style-type"
}, De = {
  mask: "mask",
  maskBorder: "mask-border",
  maskBorderMode: "mask-border-mode",
  maskBorderOutset: "mask-border-outset",
  maskBorderRepeat: "mask-border-repeat",
  maskBorderSlice: "mask-border-slice",
  maskBorderSource: "mask-border-source",
  maskBorderWidth: "mask-border-width",
  maskClip: "mask-clip",
  maskComposite: "mask-composite",
  maskImage: "mask-image",
  maskMode: "mask-mode",
  maskOrigin: "mask-origin",
  maskPosition: "mask-position",
  maskRepeat: "mask-repeat",
  maskSize: "mask-size",
  maskType: "mask-type"
}, $e = {
  outline: "outline",
  outlineOffset: "outline-offset",
  outlineWidth: "outline-width",
  outlineStyle: "outline-style"
}, We = {
  top: "top",
  right: "right",
  left: "left",
  bottom: "bottom",
  inset: "inset"
}, _e = {
  animation: "animation",
  animationComposition: "animation-composition",
  animationDelay: "animation-delay",
  animationDirection: "animation-direction",
  animationDuration: "animation-duration",
  animationFillMode: "animation-fill-mode",
  animationName: "animation-name",
  animationIterationCount: "animation-iteration-count",
  animationPlayState: "animation-play-state",
  animationTimeline: "animation-timeline",
  animationTimingFunction: "animation-timing-function"
}, Fe = {
  backgroundImage: "background-image",
  bgImage: "background-image",
  backgroundPosition: "background-position",
  bgPosition: "background-position",
  backgroundPositionX: "background-position-x",
  bgPositionX: "background-position-x",
  backgroundPositionY: "background-position-y",
  bgPositionY: "background-position-y",
  backgroundSize: "background-size",
  bgSize: "background-size",
  backgroundRepeat: "background-repeat",
  bgRepeat: "background-repeat",
  backgroundAttachment: "background-attachment",
  bgAttachment: "background-attachment",
  backgroundClip: "background-clip",
  bgClip: "background-clip",
  backgroundOrigin: "background-origin",
  bgOrigin: "background-origin",
  backgroundBlendMode: "background-blend-mode",
  bgBlendMode: "background-blend-mode"
}, Ve = {
  border: "border",
  borderTop: "border-top",
  borderRight: "border-right",
  borderLeft: "border-left",
  borderBottom: "border-bottom",
  borderX: "border-left,border-right",
  borderY: "border-top,border-bottom",
  borderRadius: "border-radius",
  borderTopLeftRadius: "border-top-left-radius",
  borderTopRightRadius: "border-top-right-radius",
  borderBottomLeftRadius: "border-bottom-left-radius",
  borderBottomRightRadius: "border-bottom-right-radius",
  borderStyle: "border-style",
  borderTopStyle: "border-top-style",
  borderBottomStyle: "border-bottom-style",
  borderLeftStyle: "border-left-style",
  borderRightStyle: "border-right-style",
  borderWidth: "border-width",
  borderTopWidth: "border-top-width",
  borderBottomWidth: "border-bottom-width",
  borderLeftWidth: "border-left-width",
  borderRightWidth: "border-right-width",
  borderStart: "border-inline-start",
  borderEnd: "border-inline-end",
  borderStartWidth: "border-inline-start-width",
  borderEndWidth: "border-inline-end-width",
  borderStartStyle: "border-inline-start-style",
  borderEndStyle: "border-inline-end-style",
  borderStartRadius: "border-top-left-radius,border-bottom-left-radius",
  borderEndRadius: "border-top-right-radius,border-bottom-right-radius"
}, Ye = {
  background: "background",
  bg: "background",
  backgroundColor: "background-color",
  bgColor: "background-color",
  color: "color",
  borderColor: "border-color",
  outlineColor: "outline-color",
  accentColor: "accent-color",
  caretColor: "caret-color",
  opacity: "opacity",
  visibility: "visibility"
}, Ke = {
  columnCount: "column-count",
  columnFill: "column-fill",
  columnGap: "column-gap",
  columnRule: "column-rule",
  columnRuleColor: "column-rule-color",
  columnRuleStyle: "column-rule-style",
  columnRuleWidth: "column-rule-width",
  columnSpan: "column-span",
  columnWidth: "column-width",
  columns: "columns"
}, Ue = {
  contain: "contain",
  containIntrinsicBlockSize: "contain-intrinsic-block-size",
  containIntrinsicHeight: "contain-intrinsic-height",
  containIntrinsicInlineSize: "contain-intrinsic-inline-size",
  containIntrinsicSize: "contain-intrinsic-size",
  containIntrinsicWidth: "contain-intrinsic-width"
}, Ge = {
  transition: "transition",
  transitionDuration: "transition-duration",
  transitionProperty: "transition-property",
  transitionTimingFunction: "transition-timing-function",
  transitionDelay: "transition-delay",
  transform: "transform",
  transformBox: "transform-box",
  transformOrigin: "transform-origin",
  transformStyle: "transform-style",
  clipPath: "clip-path",
  content: "content",
  contentVisibility: "content-visibility"
}, He = {
  filter: "filter",
  backdropFilter: "backdrop-filter"
};
function Xe(t) {
  const o = t.length;
  let a = 305419896 ^ o;
  for (let h = 0; h < o; h++) {
    let u = t.charCodeAt(h);
    u *= 1540483477, u ^= u >>> 24, u *= 1540483477, a *= 1540483477, a ^= u;
  }
  return a ^= a >>> 13, a *= 1540483477, a ^= a >>> 15, (a >>> 0).toString();
}
var Je = (t) => {
  const e = {};
  for (const n of qe) {
    const r = t[n];
    if (r)
      for (const o in r)
        e[o] = r[o];
  }
  return e;
}, $t = Object.freeze({
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
}), qe = [
  "colors",
  "fonts",
  "fontSizes",
  "fontWeights",
  "lineHeights",
  "letterSpacings",
  "spacings",
  "sizes",
  "radii",
  "zIndices",
  "breakpoints"
], Ft, O, Ze = (O = class {
  constructor() {
    x(this, "_userTheme", {
      ...globalThis.__KUMA_USER_THEME__,
      breakpoints: ((Ft = globalThis.__KUMA_USER_THEME__) == null ? void 0 : Ft.breakpoints) ?? $t
    });
    x(this, "_placeholders", {});
  }
  static getInstance() {
    return O.instance || (O.instance = new O()), O.instance;
  }
  setUserTheme(e) {
    Object.keys(e.breakpoints || {}).length === 0 && delete e.breakpoints, this._userTheme = {
      ...this._userTheme,
      ...e
    }, this._placeholders = Je(this._userTheme);
  }
  getUserTheme() {
    return this._userTheme;
  }
  getPlaceholders() {
    return this._placeholders;
  }
  getVariants(e) {
    var n;
    return ((n = this._userTheme.components) == null ? void 0 : n[e]) || {};
  }
  reset() {
    this._userTheme = {
      breakpoints: $t
    };
  }
}, x(O, "instance"), O), bt = Ze.getInstance(), A, Qe = (A = class {
  constructor() {
    x(this, "cache");
    this.cache = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return A.instance || (A.instance = new A()), A.instance;
  }
  get(e) {
    return this.cache.get(e);
  }
  set(e, n) {
    this.cache.set(e, n);
  }
  reset() {
    this.cache.clear();
  }
}, x(A, "instance"), A), Wt = Qe.getInstance(), tn = (t) => Array.isArray(t), en = (t, e, n = (r) => r) => {
  const { breakpoints: r } = bt.getUserTheme(), o = {};
  if (!tn(e))
    return { base: `${t}: ${n(e)};`, media: {} };
  const a = e, h = n(a[0]);
  return a.slice(1).forEach((u, f) => {
    if (r) {
      const c = Object.keys(r)[f], l = r[c];
      o[l] = `${t}: ${n(u)};`;
    }
  }), { base: `${t}: ${h};`, media: o };
}, nn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function rn(t, e) {
  return typeof e == "number" ? `${e}${t in nn ? "" : "px"}` : e;
}
var on = Object.assign(
  {},
  _e,
  Pe,
  je,
  Ne,
  Ye,
  Oe,
  Ue,
  Ve,
  $e,
  We,
  Me,
  Le,
  ze,
  Ge,
  Be,
  Ae,
  De,
  Ke,
  Fe,
  He
), sn = (t) => {
  var h;
  const e = JSON.stringify(t), n = Wt.get(e);
  if (n)
    return n;
  let r = "";
  const o = {};
  for (const u in t) {
    const f = t[u];
    if (f == null) continue;
    const c = ((h = on[u]) == null ? void 0 : h.split(",")) ?? [];
    for (const l of c) {
      const d = en(
        l,
        f,
        (m) => rn(u, m)
      );
      r += d.base;
      for (const [m, S] of Object.entries(d.media))
        o[m] ? o[m] += S : o[m] = S;
    }
  }
  const a = { base: r, media: o };
  return Wt.set(e, a), a;
}, an = {
  animation: [
    "animation",
    "animationComposition",
    "animationDelay",
    "animationDirection",
    "animationDuration",
    "animationFillMode",
    "animationIterationCount",
    "animationName",
    "animationPlayState",
    "animationTimeline",
    "animationTimingFunction"
  ],
  space: [
    "margin",
    "m",
    "marginTop",
    "mt",
    "marginBottom",
    "mb",
    "marginLeft",
    "ml",
    "marginRight",
    "mr",
    "marginX",
    "mx",
    "marginY",
    "my",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlockStart",
    "marginBlockEnd",
    "marginInline",
    "marginBlock",
    "padding",
    "p",
    "paddingTop",
    "pt",
    "paddingBottom",
    "pb",
    "paddingLeft",
    "pl",
    "paddingRight",
    "pr",
    "paddingX",
    "px",
    "paddingY",
    "py",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlockStart",
    "paddingBlockEnd",
    "paddingInline",
    "paddingBlock"
  ],
  typography: [
    "hyphenateCharacter",
    "hyphenateLimitChars",
    "hyphens",
    "hangingPunctuation",
    "lineHeight",
    "lineBreak",
    "letterSpacing",
    "orphans",
    "quotes",
    "rubyPosition",
    "unicodeBidi",
    "widows",
    "whiteSpace",
    "wordBreak",
    "wordSpacing",
    "writingMode"
  ],
  fontKeys: [
    "font",
    "fontFamily",
    "fontFeatureSettings",
    "fontKerning",
    "fontLanguageOverride",
    "fontOpticalSizing",
    "fontPalette",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontSynthesis",
    "fontVariant",
    "fontVariantAlternates",
    "fontVariantCaps",
    "fontVariantEastAsian",
    "fontVariantEmoji",
    "fontVariantLigatures",
    "fontVariantNumeric",
    "fontVariantPosition",
    "fontVariationSettings",
    "fontWeight"
  ],
  textKeys: [
    "textAlign",
    "textAlignLast",
    "textCombineUpright",
    "textDecoration",
    "textDecorationColor",
    "textDecorationLine",
    "textDecorationSkipInk",
    "textDecorationStyle",
    "textDecorationThickness",
    "textEmphasis",
    "textEmphasisColor",
    "textEmphasisPosition",
    "textEmphasisStyle",
    "textIndent",
    "textJustify",
    "textOrientation",
    "textOverflow",
    "textRendering",
    "textShadow",
    "textTransform",
    "textUnderlineOffset",
    "textUnderlinePosition"
  ],
  layout: [
    "width",
    "w",
    "minWidth",
    "minW",
    "maxWidth",
    "maxW",
    "height",
    "h",
    "minHeight",
    "minH",
    "maxHeight",
    "maxH",
    "display",
    "overflow",
    "overflowX",
    "overflowY",
    "position",
    "zIndex",
    "cursor",
    "userSelect",
    "aspectRatio",
    "boxSizing",
    "float",
    "clear",
    "objectFit",
    "objectPosition",
    "resize",
    "verticalAlign"
  ],
  flex: [
    "flexDirection",
    "flexDir",
    "justifyContent",
    "justify",
    "alignItems",
    "alignContent",
    "alignSelf",
    "flex",
    "flexFlow",
    "flexWrap",
    "flexGrow",
    "flexShrink",
    "flexBasis",
    "justifyItems",
    "justifySelf",
    "placeItems",
    "placeContent",
    "gap"
  ],
  color: [
    "background",
    "bg",
    "backgroundColor",
    "bgColor",
    "color",
    "borderColor",
    "outlineColor",
    "accentColor",
    "caretColor",
    "opacity",
    "visibility"
  ],
  border: [
    "border",
    "borderWidth",
    "borderTopWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderStyle",
    "borderTopStyle",
    "borderBottomStyle",
    "borderLeftStyle",
    "borderRightStyle",
    "borderRadius",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderTop",
    "borderRight",
    "borderBottom",
    "borderLeft",
    "borderX",
    "borderY",
    "borderStart",
    "borderEnd",
    "borderStartWidth",
    "borderEndWidth",
    "borderStartStyle",
    "borderEndStyle",
    "borderStartRadius",
    "borderEndRadius"
  ],
  outline: [
    "outline",
    "outlineWidth",
    "outlineStyle",
    "outlineOffset"
  ],
  position: ["top", "right", "bottom", "left", "inset"],
  shadow: ["textShadow", "boxShadow"],
  list: [
    "listStyle",
    "listStyleImage",
    "listStylePosition",
    "listStyleType"
  ],
  grid: [
    "grid",
    "gridArea",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridColumn",
    "gridColumnEnd",
    "gridColumnStart",
    "gridRow",
    "gridRowEnd",
    "gridRowStart",
    "gridTemplate",
    "gridTemplateAreas",
    "gridTemplateColumns",
    "gridTemplateRows",
    "gridGap",
    "gridColumnGap",
    "gridRowGap"
  ],
  column: [
    "columnCount",
    "columnFill",
    "columnGap",
    "columnRule",
    "columnRuleColor",
    "columnRuleStyle",
    "columnRuleWidth",
    "columnSpan",
    "columnWidth",
    "columns"
  ],
  contain: [
    "contain",
    "containIntrinsicBlockSize",
    "containIntrinsicHeight",
    "containIntrinsicInlineSize",
    "containIntrinsicSize",
    "containIntrinsicWidth"
  ],
  effect: [
    "transition",
    "transitionDuration",
    "transitionProperty",
    "transitionTimingFunction",
    "transitionDelay",
    "transform",
    "transformBox",
    "transformOrigin",
    "transformStyle",
    "clipPath",
    "content",
    "contentVisibility"
  ],
  mask: [
    "mask",
    "maskBorder",
    "maskBorderMode",
    "maskBorderOutset",
    "maskBorderRepeat",
    "maskBorderSlice",
    "maskBorderSource",
    "maskBorderWidth",
    "maskClip",
    "maskComposite",
    "maskImage",
    "maskMode",
    "maskOrigin",
    "maskPosition",
    "maskRepeat",
    "maskSize",
    "maskType"
  ],
  background: [
    "backgroundImage",
    "bgImage",
    "backgroundPosition",
    "bgPosition",
    "backgroundPositionX",
    "bgPositionX",
    "backgroundPositionY",
    "bgPositionY",
    "backgroundSize",
    "bgSize",
    "backgroundRepeat",
    "bgRepeat",
    "backgroundAttachment",
    "bgAttachment",
    "backgroundClip",
    "bgClip",
    "backgroundOrigin",
    "bgOrigin",
    "backgroundBlendMode",
    "bgBlendMode"
  ],
  filter: ["filter", "backdropFilter"]
};
function cn(t) {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => (e[n] === void 0 && (e[n] = t(n)), e[n]);
}
var qt = cn((t) => {
  const e = t;
  return Object.values(an).some(
    (n) => n.includes(e)
  );
}), ln = (t) => t.replace("_", ":"), Zt = (t) => `${t}`.startsWith("_"), dn = class Qt {
  constructor(e, n = !1) {
    x(this, "style");
    x(this, "className");
    if (!e || Object.keys(e).length === 0) {
      this.className = "";
      return;
    }
    const r = {}, o = {}, a = (c) => {
      const l = bt.getUserTheme(), d = c.split(".")[0], m = l[d];
      if (m) {
        for (const S in m)
          if (c === S)
            return m[S];
      }
    }, h = (c) => typeof c == "string" && /[a-zA-Z]+\.[a-zA-Z0-9]+/.test(c) && !/^\w+\(.*\)$/.test(c), u = (c, l) => {
      if (Array.isArray(l))
        return l.map((d) => {
          if (h(d)) {
            const m = a(d);
            if (m !== void 0)
              return m;
          }
          return d;
        });
      if (h(l)) {
        const d = a(l);
        if (d !== void 0)
          return d;
      } else if (qt(c))
        return l;
      return l;
    };
    for (const [c, l] of Object.entries(e))
      if (Zt(c)) {
        o[c] = l;
        for (const [d, m] of Object.entries(l))
          o[c] = {
            ...o[c],
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- FIXME
            [d]: u(d, m)
          };
      } else
        r[c] = u(c, l);
    const f = Object.keys(o).length ? Object.entries(o).map(([c, l]) => {
      const d = lt(l);
      return {
        key: ln(c),
        base: d.base,
        responsive: d.media
      };
    }) : [];
    this.style = {
      base: lt(r).base,
      responsive: lt(r).media,
      pseudo: f
    }, this.className = Qt.getClassNamePrefix(n) + Xe(JSON.stringify(this.style));
  }
  static getClassNamePrefix(e = !1) {
    if (process.env.NODE_ENV === "production") {
      const n = process.env.KUMA_CLASS_NAME_PREFIX;
      return n ? `${n}-` : "kuma-";
    }
    return e ? "🦄-" : "🐻-";
  }
  getClassName() {
    return this.className;
  }
  getCSS() {
    if (!this.style)
      return "";
    let e = `.${this.className} { ${this.style.base} }`;
    for (const [n, r] of Object.entries(
      this.style.responsive
    ))
      e += `@media (min-width: ${n}) { .${this.className} { ${r} } }`;
    for (const n of this.style.pseudo) {
      e += `.${this.className}${n.key} { ${n.base} }`;
      for (const [r, o] of Object.entries(n.responsive))
        e += `@media (min-width: ${r}) { .${this.className}${n.key} { ${o} } }`;
    }
    return e;
  }
  getStyle() {
    return { css: this.getCSS(), className: this.getClassName() };
  }
}, lt = sn;
function un(t) {
  const e = [];
  return function n(r) {
    if (r && r.toJSON && typeof r.toJSON == "function" && (r = r.toJSON()), r === void 0) return;
    if (typeof r == "number") return isFinite(r) ? "" + r : "null";
    if (typeof r != "object") return JSON.stringify(r);
    let o, a;
    if (Array.isArray(r)) {
      for (a = "[", o = 0; o < r.length; o++)
        o && (a += ","), a += n(r[o]) || "null";
      return a + "]";
    }
    if (r === null) return "null";
    if (e.indexOf(r) !== -1)
      throw new TypeError("Converting circular structure to JSON");
    const h = e.push(r) - 1, u = Object.keys(r).sort();
    for (a = "", o = 0; o < u.length; o++) {
      const f = u[o], c = n(r[f]);
      c && (a && (a += ","), a += JSON.stringify(f) + ":" + c);
    }
    return e.splice(h, 1), "{" + a + "}";
  }(t);
}
function te(t) {
  return !!(qt(t) || Zt(t) || t === "variant");
}
function fn(t) {
  return Object.keys(t).some((e) => !!(te(e) && t[e] != null));
}
function mn(t) {
  const e = {}, n = {};
  return Object.keys(t).forEach((r) => {
    const o = t[r];
    if (te(r)) {
      e[r] = o;
      return;
    }
    n[r] = o;
  }), {
    dynamicProps: e,
    restProps: n
  };
}
var _t = {};
function hn(t) {
  const e = un(t);
  let n = _t[e];
  return n || (n = new dn(t, !0).getStyle(), _t[e] = n), n;
}
function yt(t) {
  return ie(t);
}
var gn = Te(), pn = P.useInsertionEffect || P.useLayoutEffect, bn = yt(
  ({ as: t = "div", children: e, variant: n, IS_KUMA_DEFAULT: r, ...o }, a) => {
    const h = Ie() || gn, u = (() => {
      var v;
      if (!n) return {};
      if (r) return {};
      const S = (v = bt.getVariants("Box")) == null ? void 0 : v.variants, g = n;
      return S && g && S[g] || {};
    })(), { dynamicProps: f, restProps: c } = mn({
      ...u,
      ...o
    }), { className: l, css: d } = hn(f), m = P.createElement(t, {
      ref: a,
      ...c,
      className: [c.className, l].filter(Boolean).join(" "),
      children: e
    });
    return ht ? (pn(() => (h.add(l, d), () => {
      h.remove(l);
    }), [l, d]), m) : (h.add(l, d), m);
  }
), yn = yt(
  ({ as: t = "div", children: e, IS_KUMA_DEFAULT: n, ...r }, o) => P.createElement(t, {
    ref: o,
    ...r,
    children: e
  })
), Sn = yt(
  ({ children: t, ...e }, n) => fn(e) ? /* @__PURE__ */ P.createElement(bn, { ref: n, ...e }, t) : /* @__PURE__ */ P.createElement(yn, { ref: n, ...e }, t)
);
const kn = ({
  children: t,
  triggerClass: e = "drag-sort-list-item",
  getContainer: n = "drag-sort-list-container",
  dragMoveClass: r,
  dragItemTargetClass: o,
  dragStart: a,
  dragMove: h,
  dragEnd: u
}) => {
  const f = D(null), c = D({ x: 0, y: 0 }), l = D(null), d = D({ x: 0, y: 0 }), m = () => {
    if (f.current) {
      const i = f.current.getBoundingClientRect(), s = window.getComputedStyle(f.current), b = parseFloat(s.marginLeft) || 0, y = parseFloat(s.marginTop) || 0, R = i.left - b, z = i.top - y;
      return { containerLeft: R, containerTop: z };
    }
    return { containerLeft: 0, containerTop: 0 };
  }, S = (i) => {
    if (f.current) {
      const { clientX: s, clientY: b } = i, { containerLeft: y, containerTop: R } = m();
      c.current = { x: s - y, y: b - R };
    }
  }, g = (i) => {
    const s = document.querySelector(`.${n}`);
    s ? s.appendChild(i) : document.body.appendChild(i);
  }, v = (i) => {
    var R;
    const { clientX: s, clientY: b } = i, y = (R = f.current) == null ? void 0 : R.cloneNode(!0);
    r && y.classList.add(r), y.style.position = "fixed", y.style.zIndex = "1000", y.style.pointerEvents = "none", y.style.left = `${s - c.current.x}px`, y.style.top = `${b - c.current.y}px`, l.current = y, g(y), f.current && (f.current.style.visibility = "hidden", o && f.current.classList.add(o));
  }, L = (i) => {
    f.current && v(i);
  }, C = (i, s) => {
    if (i) {
      const { clientX: b, clientY: y } = s, R = b - d.current.x, z = y - d.current.y;
      i.style.transform = `translate3d(${R}px, ${z}px, 0)`;
    }
  }, k = (i) => {
    i && i.parentNode && i.parentNode.removeChild(i);
  };
  function E(i) {
    const s = this;
    i.preventDefault();
    const { clientX: b, clientY: y } = i;
    d.current = { x: b, y }, document.addEventListener("mousemove", T, !1), S(i), L(i), document.addEventListener("mouseup", p, !1), a == null || a(i, s);
  }
  const T = (i) => {
    C(l.current, i), h == null || h(i);
  }, p = (i) => {
    i.stopPropagation(), k(l.current), f.current && (f.current.removeAttribute("style"), o && f.current.classList.remove(o || "")), document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", p), u == null || u(i);
  };
  return et(() => {
    var b;
    const i = f.current, s = (b = i == null ? void 0 : i.classList) != null && b.contains(e) ? i : i.querySelector(`.${e}`);
    return s && s.addEventListener("mousedown", E, !1), () => {
      s && s.removeEventListener("mousedown", E);
    };
  }, []), /* @__PURE__ */ dt(oe, { children: P.Children.map(t, (i) => {
    var s;
    return Vt(i, {
      ref: f,
      // 将容器引用传递给子元素
      className: `drag-sort-list-item ${((s = i == null ? void 0 : i.props) == null ? void 0 : s.className) || ""}`
      // 添加类名
    });
  }) });
};
function ee(t) {
  var e;
  return t ? (e = t.dataset) != null && e.sortItemKey ? t : ee(t.parentElement) : null;
}
function xn(t, e) {
  const n = [];
  for (let r = t; r <= e; r++)
    n.push(r);
  for (let r = n.length - 1; r > 0; r--) {
    const o = Math.floor(Math.random() * (r + 1));
    [n[r], n[o]] = [n[o], n[r]];
  }
  return n;
}
const Cn = ({
  className: t,
  style: e,
  children: n,
  triggerClass: r,
  getContainer: o,
  dragMoveClass: a,
  dragItemTargetClass: h,
  dragStart: u,
  dragMove: f,
  dragEnd: c,
  items: l = [],
  randomSortingId: d = ""
}) => {
  const m = D(null), S = D(null), g = D(l || []), v = D(!1), L = (p, i) => {
    var b;
    let s;
    (b = i.dataset) != null && b.sortItemKey ? s = i : s = ee(i), m.current = s, u == null || u(p, i);
  }, C = (p) => {
    const { clientY: i } = p;
    if (!S.current) return;
    let s = null;
    for (const b of Array.from(S.current.children)) {
      const { top: y, height: R } = b.getBoundingClientRect();
      if (i >= y && i <= y + R && b !== m.current) {
        s = b;
        break;
      }
    }
    return s;
  }, k = (p) => ({
    top: p.getBoundingClientRect().top
  }), E = (p) => {
    var xt, vt, wt, Rt, Ct, Et, Tt, q, It, Mt, Pt, Bt, Z, jt, Ot, At, Lt;
    const i = C(p), s = (xt = i == null ? void 0 : i.dataset) == null ? void 0 : xt.sortItemKey;
    if (!s || v.current) return;
    const b = i.getBoundingClientRect().top, y = i.getBoundingClientRect().height, R = p.clientY - b > y / 2 ? "before" : "after", z = (vt = g.current) == null ? void 0 : vt.findIndex(
      (N) => {
        var V, Nt;
        return N.key === ((Nt = (V = m.current) == null ? void 0 : V.dataset) == null ? void 0 : Nt.sortItemKey);
      }
    ), X = k(m.current), F = k(i), W = (wt = g.current) == null ? void 0 : wt.splice(z, 1);
    if (R === "before") {
      i.before(m.current);
      const N = (Rt = g.current) == null ? void 0 : Rt.findIndex((V) => V.key === s);
      (Ct = g.current) == null || Ct.splice(N, 0, ...W);
    } else {
      i.after(m.current);
      const N = (Et = g.current) == null ? void 0 : Et.findIndex((V) => V.key === s);
      (Tt = g.current) == null || Tt.splice(N + 1, 0, ...W);
    }
    const _ = k(m.current), B = k(i), J = X.top - _.top, St = F.top - B.top;
    if (Math.floor(J) === 0 && Math.floor(St) === 0) return;
    (Mt = (It = (q = m.current) == null ? void 0 : q.getAnimations) == null ? void 0 : It.call(q)) == null || Mt.forEach((N) => N.cancel()), (Bt = (Pt = i == null ? void 0 : i.getAnimations) == null ? void 0 : Pt.call(i)) == null || Bt.forEach((N) => N.cancel()), v.current = !0, (jt = (Z = m.current) == null ? void 0 : Z.animate) == null || jt.call(
      Z,
      [{ transform: `translate3d(0, ${J}px, 0)` }, { transform: "translate3d(0, 0, 0)" }],
      {
        duration: 100,
        fill: "forwards",
        easing: "ease-in-out"
      }
    );
    const at = (Ot = i == null ? void 0 : i.animate) == null ? void 0 : Ot.call(
      i,
      [{ transform: `translate3d(0, ${St}px, 0)` }, { transform: "translate3d(0, 0, 0)" }],
      {
        duration: 100,
        fill: "forwards",
        easing: "ease-in-out"
      }
    );
    let kt;
    (Lt = (At = at == null ? void 0 : at.finished) == null ? void 0 : At.then(() => {
      clearTimeout(kt), kt = setTimeout(() => {
        v.current = !1;
      }, 0);
    })) == null || Lt.catch(() => {
    }), f == null || f(p);
  }, T = (p) => {
    const i = [...g.current || []];
    c == null || c(i, p);
  };
  return et(() => () => {
    g.current = [];
  }, []), et(() => {
    g.current = l;
  }, [l]), et(() => {
    var p;
    if (d && S.current && ((p = g.current) == null ? void 0 : p.length) > 0) {
      const i = xn(0, g.current.length - 1), s = Array.from(S.current.children), b = [];
      let y;
      for (const R in s) {
        const z = s[i[R]], X = s[R], F = k(z), W = k(X), _ = F.top - W.top;
        b[i[R]] = _;
      }
      for (const R in s)
        s[R].animate(
          [{ transform: "translate3d(0, 0, 0)" }, { transform: `translate3d(0, ${-b[R]}px, 0)` }],
          {
            duration: 500,
            fill: "forwards",
            easing: "ease-in-out"
          }
        ).finished.then(() => {
          clearTimeout(y), y = setTimeout(() => {
            var F, W;
            g.current = i.map((_) => {
              var B;
              return (B = g.current) == null ? void 0 : B[_];
            }), c == null || c(g.current);
            for (const _ in s) {
              const B = s[_];
              (W = (F = B == null ? void 0 : B.getAnimations) == null ? void 0 : F.call(B)) == null || W.forEach((J) => J.cancel());
            }
          }, 0);
        }).catch(() => {
        });
    }
  }, [d]), /* @__PURE__ */ dt(Sn, { ref: S, position: "relative", className: `drag-sort-list ${t || ""}`, style: e, children: P.Children.map(n, (p, i) => {
    var b, y;
    const s = ((y = (b = g.current) == null ? void 0 : b[i]) == null ? void 0 : y.key) || i;
    return /* @__PURE__ */ dt(
      kn,
      {
        triggerClass: r,
        getContainer: o,
        dragMoveClass: a,
        dragItemTargetClass: h,
        dragStart: L,
        dragMove: E,
        dragEnd: T,
        children: Vt(p, {
          "data-sort-item-key": s
          // 添加 data-key 属性
        })
      },
      s
    );
  }) });
};
export {
  Cn as DragSortList
};
