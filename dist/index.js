import e, { Fragment as t, cloneElement as n, forwardRef as r, useEffect as i, useRef as a } from "react";
//#region \0rolldown/runtime.js
var o = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), s = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), c = typeof window < "u", l = "comm", u = "rule", d = "decl", f = "@import", p = "@namespace", m = "@keyframes", h = "@layer", g = Math.abs, _ = String.fromCharCode;
function v(e) {
	return e.trim();
}
function y(e, t, n) {
	return e.replace(t, n);
}
function b(e, t, n) {
	return e.indexOf(t, n);
}
function x(e, t) {
	return e.charCodeAt(t) | 0;
}
function S(e, t, n) {
	return e.slice(t, n);
}
function C(e) {
	return e.length;
}
function w(e) {
	return e.length;
}
function T(e, t) {
	return t.push(e), e;
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var E = 1, D = 1, O = 0, k = 0, A = 0, j = "";
function M(e, t, n, r, i, a, o, s) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: E,
		column: D,
		length: o,
		return: "",
		siblings: s
	};
}
function N() {
	return A;
}
function P() {
	return A = k > 0 ? x(j, --k) : 0, D--, A === 10 && (D = 1, E--), A;
}
function F() {
	return A = k < O ? x(j, k++) : 0, D++, A === 10 && (D = 1, E++), A;
}
function I() {
	return x(j, k);
}
function L() {
	return k;
}
function R(e, t) {
	return S(j, e, t);
}
function z(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function ee(e) {
	return E = D = 1, O = C(j = e), k = 0, [];
}
function te(e) {
	return j = "", e;
}
function B(e) {
	return v(R(k - 1, V(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ne(e) {
	for (; (A = I()) && A < 33;) F();
	return z(e) > 2 || z(A) > 3 ? "" : " ";
}
function re(e, t) {
	for (; --t && F() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97););
	return R(e, L() + (t < 6 && I() == 32 && F() == 32));
}
function V(e) {
	for (; F();) switch (A) {
		case e: return k;
		case 34:
		case 39:
			e !== 34 && e !== 39 && V(A);
			break;
		case 40:
			e === 41 && V(e);
			break;
		case 92:
			F();
			break;
	}
	return k;
}
function ie(e, t) {
	for (; F() && e + A !== 57 && !(e + A === 84 && I() === 47););
	return "/*" + R(t, k - 1) + "*" + _(e === 47 ? e : F());
}
function ae(e) {
	for (; !z(I());) F();
	return R(e, k);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
function H(e) {
	return te(U("", null, null, null, [""], e = ee(e), 0, [0], e));
}
function U(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, v = 1, w = 1, E = 0, D = "", O = i, k = a, A = r, j = D; v;) switch (m = E, E = F()) {
		case 40: if (m != 108 && x(j, d - 1) == 58) {
			b(j += y(B(E), "&", "&\f"), "&\f", g(l ? s[l - 1] : 0)) != -1 && (w = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			j += B(E);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			j += ne(m);
			break;
		case 92:
			j += re(L() - 1, 7);
			continue;
		case 47:
			switch (I()) {
				case 42:
				case 47:
					T(oe(ie(F(), L()), t, n, c), c), (z(m || 1) == 5 || z(I() || 1) == 5) && C(j) && S(j, -1, void 0) !== " " && (j += " ");
					break;
				default: j += "/";
			}
			break;
		case 123 * h: s[l++] = C(j) * w;
		case 125 * h:
		case 59:
		case 0:
			switch (E) {
				case 0:
				case 125: v = 0;
				case 59 + u:
					w == -1 && (j = y(j, /\f/g, "")), p > 0 && (C(j) - d || h === 0 && m === 47) && T(p > 32 ? se(j + ";", r, n, d - 1, c) : se(y(j, " ", "") + ";", r, n, d - 2, c), c);
					break;
				case 59: j += ";";
				default: if (T(A = W(j, t, n, l, u, i, s, D, O = [], k = [], d, a), a), E === 123) if (u === 0) U(j, t, A, A, O, a, d, s, k);
				else {
					switch (f) {
						case 99: if (x(j, 3) === 110) break;
						case 108: if (x(j, 2) === 97) break;
						default: u = 0;
						case 100:
						case 109:
						case 115:
					}
					u ? U(e, A, A, r && T(W(e, A, A, 0, 0, i, s, D, i, O = [], d, k), k), i, k, d, s, r ? O : k) : U(j, A, A, A, [""], k, 0, s, k);
				}
			}
			l = u = p = 0, h = w = 1, D = j = "", d = o;
			break;
		case 58: d = 1 + C(j), p = m;
		default:
			if (h < 1) {
				if (E == 123) --h;
				else if (E == 125 && h++ == 0 && P() == 125) continue;
			}
			switch (j += _(E), E * h) {
				case 38:
					w = u > 0 ? 1 : (j += "\f", -1);
					break;
				case 44:
					s[l++] = (C(j) - 1) * w, w = 1;
					break;
				case 64:
					I() === 45 && (j += B(F())), f = I(), u = d = C(D = j += ae(L())), E++;
					break;
				case 45: m === 45 && C(j) == 2 && (h = 0);
			}
	}
	return a;
}
function W(e, t, n, r, i, a, o, s, c, l, d, f) {
	for (var p = i - 1, m = i === 0 ? a : [""], h = w(m), _ = 0, b = 0, x = 0; _ < r; ++_) for (var C = 0, T = S(e, p + 1, p = g(b = o[_])), E = e; C < h; ++C) (E = v(b > 0 ? m[C] + " " + T : y(T, /&\f/g, m[C]))) && (c[x++] = E);
	return M(e, t, n, i === 0 ? u : s, c, l, d, f);
}
function oe(e, t, n, r) {
	return M(e, t, n, l, _(N()), S(e, 2, -2), 0, r);
}
function se(e, t, n, r, i) {
	return M(e, t, n, d, S(e, 0, r), S(e, r + 1, -1), r, i);
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
function G(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n;
}
function ce(e, t, n, r) {
	switch (e.type) {
		case h: if (e.children.length) break;
		case f:
		case p:
		case d: return e.return = e.return || e.value;
		case l: return "";
		case m: return e.return = e.value + "{" + G(e.children, r) + "}";
		case u: if (!C(e.value = e.props.join(","))) return "";
	}
	return C(n = G(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region node_modules/@kuma-ui/core/dist/utils/isProduction.mjs
var K = process.env.NODE_ENV === "production", le = class {
	name;
	deletedRulePlaceholder;
	speedy;
	tags;
	injected;
	rulesCount;
	constructor(e, t = !1) {
		this.name = e, this.deletedRulePlaceholder = `#${e}-deleted-rule{}`, this.speedy = t, this.tags = [], this.injected = !1, this.rulesCount = 0;
	}
	inject() {
		if (this.injected) throw Error("ClientStyleSheet: sheet already injected");
		this.speedy && (this.tags[0] = this.makeStyleTag(), this.speedy = "insertRule" in this.getLatestSheet(), this.speedy || (K || console.warn("ClientStyleSheet: speedy mode not supported falling back to standard mode."), this.flush())), this.injected = !0;
	}
	isSpeedy() {
		return this.speedy;
	}
	setSpeedy(e) {
		if (this.rulesCount === 0) throw Error("ClientStyleSheet: speedy cannot be when rules have already been inserted");
		this.flush(), this.speedy = e, this.inject();
	}
	insertRule(e, t) {
		if (this.speedy) {
			let n = this.getLatestSheet();
			typeof t != "number" && (t = n.cssRules.length);
			try {
				n.insertRule(e, t);
			} catch {
				return K || console.warn(`ClientStyleSheet: illegal rule: 

${e}

See https://stackoverflow.com/q/20007992 for more info`), -1;
			}
			return this.rulesCount++;
		}
		let n = t ? this.tags[t] : void 0;
		return this.tags = this.tags.concat(this.makeStyleTag(e, n)), this.rulesCount++;
	}
	deleteRule(e) {
		if (e < 0) return;
		if (this.speedy) {
			let t = this.getLatestSheet();
			t.deleteRule(e), t.insertRule(this.deletedRulePlaceholder, e);
			return;
		}
		let t = this.tags[e];
		if (!t) throw Error(`ClientStyleSheet: rule at index \`${e}\` not found`);
		t.parentNode?.removeChild(t), delete this.tags[e];
	}
	flush() {
		this.injected = !1, this.rulesCount = 0, this.tags.forEach((e) => e && e.parentNode?.removeChild(e)), this.tags = [];
	}
	cssRules() {
		return this.tags.reduce((e, t) => t ? e.concat(Array.from(this.getSheet(t).cssRules, (e) => e.cssText === this.deletedRulePlaceholder ? void 0 : e)) : e, []);
	}
	makeStyleTag(e, t) {
		let n = document.createElement("style");
		n.setAttribute(`data-${this.name}`, "");
		let r = document.querySelector("meta[property=\"csp-nonce\"]")?.getAttribute("content");
		r && n.setAttribute("nonce", r), e && n.appendChild(document.createTextNode(e));
		let i = document.head || document.getElementsByTagName("head")[0];
		return t ? i.insertBefore(n, t) : i.appendChild(n), n;
	}
	getSheet(e) {
		if (e.sheet) return e.sheet;
		let t = Array.from(document.styleSheets).find((t) => t.ownerNode === e);
		if (t) return t;
		throw Error("ClientStyleSheet: styleSheet not found");
	}
	getLatestSheet() {
		let e = this.tags[this.tags.length - 1];
		if (!e) throw Error("ClientStyleSheet: style tag not found");
		return this.getSheet(e);
	}
}, ue = class {
	name;
	deletedRulePlaceholder;
	speedy;
	serverSheet;
	injected;
	rulesCount;
	constructor(e, t = !1) {
		this.name = e, this.deletedRulePlaceholder = `#${e}-deleted-rule{}`, this.speedy = t, this.serverSheet = void 0, this.injected = !1, this.rulesCount = 0;
	}
	inject() {
		if (this.injected) throw Error("ServerStyleSheet: sheet already injected");
		this.serverSheet = {
			cssRules: [],
			insertRule: (e, t) => typeof t == "number" ? (this.getSheet().cssRules[t] = { cssText: e }, t) : (this.getSheet().cssRules.push({ cssText: e }), this.getSheet().cssRules.length - 1),
			deleteRule: (e) => {
				delete this.getSheet().cssRules[e];
			}
		}, this.injected = !0;
	}
	setSpeedy(e) {
		if (this.rulesCount === 0) throw Error("ServerStyleSheet: speedy cannot be when rules have already been inserted");
		this.flush(), this.speedy = e, this.inject();
	}
	isSpeedy() {
		return this.speedy;
	}
	insertRule(e, t) {
		return typeof t != "number" && (t = this.getSheet().cssRules.length), this.getSheet().insertRule(e, t), this.rulesCount++;
	}
	deleteRule(e) {
		if (e < 0) return;
		let t = this.getSheet();
		t.deleteRule(e), t.insertRule(this.deletedRulePlaceholder, e);
	}
	flush() {
		this.injected = !1, this.rulesCount = 0, this.getSheet().cssRules = [];
	}
	cssRules() {
		return this.getSheet().cssRules;
	}
	getSheet() {
		if (!this.serverSheet) throw Error("ServerStyleSheet: sheet not injected");
		return this.serverSheet;
	}
}, de = class {
	constructor(e, t = !1) {
		return c ? new le(e, t) : new ue(e, t);
	}
}, q = "__", fe = class {
	sheet;
	serverSideRenderedStyleMap = null;
	indexesMap = {};
	instancesCountMap = {};
	constructor() {
		this.sheet = new de("kuma-ui", K), this.sheet.inject();
	}
	add(e, t) {
		c && this.serverSideRenderedStyleMap === null && (this.serverSideRenderedStyleMap = this.getServerSideRenderedStyleMap(), Object.keys(this.serverSideRenderedStyleMap).forEach((e) => {
			this.instancesCountMap[e] = 0;
		})), this.instancesCountMap[e] = 1 + (this.instancesCountMap[e] ?? 0);
		let n = this.serverSideRenderedStyleMap?.[e];
		this.instancesCountMap[e] === 1 && !n && H(t).forEach((t) => {
			let n = G([t], ce);
			this.indexesMap[e] = (this.indexesMap[e] || []).concat(this.sheet.insertRule(n));
		});
	}
	remove(e) {
		if (this.instancesCountMap[e] === void 0) throw Error(`StyleSheetRegistry: id: \`${e}\` not found in idInstancesCountMap.`);
		if (--this.instancesCountMap[e], this.instancesCountMap[e] !== 0) return;
		let t = this.serverSideRenderedStyleMap?.[e];
		if (t) t.remove(), delete this.serverSideRenderedStyleMap?.[e];
		else {
			if (this.indexesMap[e] === void 0) throw Error(`StyleSheetRegistry: id: \`${e}\` not found in idIndexesMap.`);
			this.indexesMap[e].forEach((e) => this.sheet.deleteRule(e)), delete this.indexesMap[e];
		}
		delete this.instancesCountMap[e];
	}
	styles(t = {}) {
		return Object.keys(this.indexesMap).map((n) => {
			let r = this.indexesMap[n];
			if (r === void 0) return null;
			let i = this.sheet.cssRules(), a = r.map((e) => i[e]?.cssText).filter(Boolean).join(this.sheet.isSpeedy() ? "" : "\n");
			return a.length === 0 ? null : e.createElement("style", {
				id: `${q}${n}`,
				key: `${q}${n}`,
				nonce: t.nonce ? t.nonce : void 0,
				dangerouslySetInnerHTML: { __html: a }
			});
		}).filter(Boolean);
	}
	flush() {
		this.sheet.flush(), this.sheet.inject(), this.serverSideRenderedStyleMap = null, this.indexesMap = {}, this.instancesCountMap = {};
	}
	getServerSideRenderedStyleMap() {
		return Array.from(document.querySelectorAll(`[id^="${q}"]`)).reduce((e, t) => {
			let n = t.id.replace(q, "");
			return e[n] = t, e;
		}, {});
	}
}, pe = e.createContext(null);
pe.displayName = "StyleSheetContext";
function me() {
	return new fe();
}
function he() {
	return e.useContext(pe);
}
//#endregion
//#region node_modules/@kuma-ui/system/dist/chunk-MHHUKXNJ.mjs
var ge = {
	boxShadow: "box-shadow",
	textShadow: "text-shadow"
}, _e = {
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
}, ve = {
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
}, ye = {
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
}, be = {
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
}, xe = {
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
}, Se = {
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
}, Ce = {
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
}, we = {
	listStyle: "list-style",
	listStyleImage: "list-style-image",
	listStylePosition: "list-style-position",
	listStyleType: "list-style-type"
}, Te = {
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
}, Ee = {
	outline: "outline",
	outlineOffset: "outline-offset",
	outlineWidth: "outline-width",
	outlineStyle: "outline-style"
}, De = {
	top: "top",
	right: "right",
	left: "left",
	bottom: "bottom",
	inset: "inset"
}, Oe = {
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
}, ke = {
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
}, Ae = {
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
}, je = {
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
}, Me = {
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
}, Ne = {
	contain: "contain",
	containIntrinsicBlockSize: "contain-intrinsic-block-size",
	containIntrinsicHeight: "contain-intrinsic-height",
	containIntrinsicInlineSize: "contain-intrinsic-inline-size",
	containIntrinsicSize: "contain-intrinsic-size",
	containIntrinsicWidth: "contain-intrinsic-width"
}, Pe = {
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
}, Fe = {
	filter: "filter",
	backdropFilter: "backdrop-filter"
};
//#endregion
//#region node_modules/@kuma-ui/sheet/dist/chunk-I7HLEBXK.mjs
function J(e) {
	let t = 1540483477, n = e.length, r = 305419896 ^ n;
	for (let i = 0; i < n; i++) {
		let n = e.charCodeAt(i);
		n *= t, n ^= n >>> 24, n *= t, r *= t, r ^= n;
	}
	return r ^= r >>> 13, r *= t, r ^= r >>> 15, (r >>> 0).toString();
}
//#endregion
//#region node_modules/@kuma-ui/sheet/dist/chunk-HGADYMTV.mjs
var Ie = (e, t) => Le(e, t), Le = (e, t) => e.replace(/\bt\s*\(\s*["']([^"']+)["']\s*\)/g, (e, n) => typeof n == "string" && n in t ? t[n] : e), Re = (e) => {
	let t = {};
	for (let n of Be) {
		let r = e[n];
		if (r) for (let e in r) t[e] = r[e];
	}
	return t;
}, ze = Object.freeze({
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px"
}), Be = [
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
], Y = class e {
	static instance;
	_userTheme = {
		...globalThis.__KUMA_USER_THEME__,
		breakpoints: globalThis.__KUMA_USER_THEME__?.breakpoints ?? ze
	};
	_placeholders = {};
	constructor() {}
	static getInstance() {
		return e.instance ||= new e(), e.instance;
	}
	setUserTheme(e) {
		Object.keys(e.breakpoints || {}).length === 0 && delete e.breakpoints, this._userTheme = {
			...this._userTheme,
			...e
		}, this._placeholders = Re(this._userTheme);
	}
	getUserTheme() {
		return this._userTheme;
	}
	getPlaceholders() {
		return this._placeholders;
	}
	getVariants(e) {
		return this._userTheme.components?.[e] || {};
	}
	reset() {
		this._userTheme = { breakpoints: ze };
	}
}.getInstance(), X = (e) => e.replace(/(:)\s+|\s+(?=;)/g, "$1"), Ve = (e) => e.replace(/(:)\s+|\s+(?=;)|(\{)\s+|\s+(?=\})|(,)\s+|\s+(?=,)|\s+(?={)/g, "$1$2$3");
(class e {
	static instance;
	base;
	responsive;
	pseudo;
	css;
	constructor() {
		this.base = [], this.responsive = [], this.pseudo = [], this.css = [];
	}
	static getInstance() {
		return e.instance ||= new e(), e.instance;
	}
	static getClassNamePrefix(e = !1) {
		if (process.env.NODE_ENV === "production") {
			let e = process.env.KUMA_CLASS_NAME_PREFIX;
			return e ? `${e}-` : "kuma-";
		}
		return e ? "🦄-" : "🐻-";
	}
	addRule(t, n = !1) {
		let r = e.getClassNamePrefix(n) + J(JSON.stringify(t));
		this._addBaseRule(r, this._processCSS(t.base));
		for (let [e, n] of Object.entries(t.responsive)) this._addMediaRule(r, this._processCSS(n), this._processCSS(e));
		for (let [e, n] of Object.entries(t.pseudo)) this._addPseudoRule(r, n);
		return r;
	}
	_addBaseRule(e, t) {
		let n = X(t);
		this.base.push(`.${e}{${n}}`);
	}
	_addMediaRule(e, t, n) {
		let r = Ve(`@media (min-width: ${n}) { .${e} { ${X(t)} } }`);
		this.responsive.push(r);
	}
	_addPseudoRule(e, t) {
		let n = X(this._processCSS(t.base)), r = Ve(`.${e}${t.key} { ${n} }`);
		this.pseudo.push(r);
		for (let [n, r] of Object.entries(t.responsive)) this._addMediaRule(`${e}${t.key}`, this._processCSS(r), this._processCSS(n));
	}
	_processCSS(e) {
		return Ie(e, Y.getPlaceholders());
	}
	parseCSS(t) {
		t = this._processCSS(t);
		let n = e.getClassNamePrefix() + J(t), r = [];
		H(`.${n}{${t}}`).forEach((e) => {
			let { breakpoints: t } = Y.getUserTheme();
			this.normalizeMediaQueries(e, t ?? {}), this.applyGlobalSelectorNormalization(e, n) && r.push(e);
		});
		let i = G(r, ce);
		return this.css.push(i), n;
	}
	removeDuplicates() {
		this.base = [...new Set(this.base)], this.responsive = [...new Set(this.responsive)], this.pseudo = [...new Set(this.pseudo)], this.css = [...new Set(this.css)];
	}
	static escapeRegExp(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	static toArray(e) {
		return Array.isArray(e) ? e : typeof e == "string" ? [e] : [];
	}
	static replaceBreakpoints(e, t) {
		let n = e;
		for (let e in t) n = n.replaceAll(e, t[e]);
		return n;
	}
	normalizeMediaQueries(t, n) {
		Array.isArray(t.children) && t.children.forEach((e) => this.normalizeMediaQueries(e, n)), t.type === "@media" && (t.props = e.toArray(t.props).map((t) => e.replaceBreakpoints(t, n)), typeof t.value == "string" && (t.value = e.replaceBreakpoints(t.value, n)));
	}
	applyGlobalSelectorNormalization(t, n) {
		if (Array.isArray(t.children)) {
			let e = t.children;
			for (let t = 0; t < e.length;) this.applyGlobalSelectorNormalization(e[t], n) ? t += 1 : e.splice(t, 1);
			t.length = e.length;
		}
		if (t.type !== "rule") return !0;
		let { selectors: r, touched: i } = this.normalizeSelectorList(t.props, n);
		return i ? r.length === 0 ? !1 : (t.props = r, typeof t.value == "string" && (t.value = e.stripGlobalTokens(t.value, r[0])), !0) : !0;
	}
	normalizeSelectorList(t, n) {
		let r = e.toArray(t), i = [], a = !1, o = RegExp(`^\\.${e.escapeRegExp(n)}\\s*`);
		return r.forEach((t) => {
			t.split(",").map((e) => e.trim()).filter(Boolean).forEach((t) => {
				if (!t.includes(":global")) {
					i.push(t);
					return;
				}
				a = !0;
				let n = e.stripGlobalTokens(t.replace(o, ""));
				n && i.push(n);
			});
		}), {
			selectors: i,
			touched: a
		};
	}
	static stripGlobalTokens(e, t) {
		return e.replace(/:global\(([^)]+)\)/g, "$1").replace(/:global\b/g, "").trim() || (t ?? e);
	}
	getCSS() {
		return this.removeDuplicates(), this.base.join("") + this.responsive.join("") + this.pseudo.join("") + this.css.join("");
	}
	reset() {
		this.base = [], this.responsive = [], this.pseudo = [], this.css = [];
	}
}).getInstance();
//#endregion
//#region node_modules/@kuma-ui/sheet/dist/chunk-32RE4SW3.mjs
var He = class e {
	static instance;
	cache;
	constructor() {
		this.cache = /* @__PURE__ */ new Map();
	}
	static getInstance() {
		return e.instance ||= new e(), e.instance;
	}
	get(e) {
		return this.cache.get(e);
	}
	set(e, t) {
		this.cache.set(e, t);
	}
	reset() {
		this.cache.clear();
	}
}.getInstance();
(class e {
	static instance;
	map;
	constructor() {
		this.map = /* @__PURE__ */ new Map();
	}
	static getInstance() {
		return e.instance ||= new e(), e.instance;
	}
	set(e, t) {
		this.map.set(e, t);
	}
	get(e) {
		return this.map.get(e);
	}
	delete(e) {
		this.map.delete(e);
	}
	reset() {
		this.map.clear();
	}
}).getInstance();
//#endregion
//#region node_modules/@kuma-ui/system/dist/chunk-VFV5UNNL.mjs
var Ue = (e) => Array.isArray(e), We = (e, t, n = (e) => e) => {
	let { breakpoints: r } = Y.getUserTheme(), i = {};
	if (!Ue(t)) return {
		base: `${e}: ${n(t)};`,
		media: {}
	};
	let a = t, o = n(a[0]);
	return a.slice(1).forEach((t, a) => {
		if (r) {
			let o = r[Object.keys(r)[a]];
			i[o] = `${e}: ${n(t)};`;
		}
	}), {
		base: `${e}: ${o};`,
		media: i
	};
}, Ge = {
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
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
function Ke(e, t) {
	return typeof t == "number" ? `${t}${e in Ge ? "" : "px"}` : t;
}
//#endregion
//#region node_modules/@kuma-ui/system/dist/chunk-ZCLMYYDR.mjs
var qe = Object.assign({}, Oe, _e, ye, Ce, je, be, Ne, Ae, Ee, De, ge, Se, we, Pe, ve, xe, Te, Me, ke, Fe), Je = (e) => {
	let t = JSON.stringify(e), n = He.get(t);
	if (n) return n;
	let r = "", i = {};
	for (let t in e) {
		let n = e[t];
		if (n == null) continue;
		let a = qe[t]?.split(",") ?? [];
		for (let e of a) {
			let a = We(e, n, (e) => Ke(t, e));
			r += a.base;
			for (let [e, t] of Object.entries(a.media)) i[e] ? i[e] += t : i[e] = t;
		}
	}
	let a = {
		base: r,
		media: i
	};
	return He.set(t, a), a;
}, Ye = {
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
	space: /* @__PURE__ */ "margin.m.marginTop.mt.marginBottom.mb.marginLeft.ml.marginRight.mr.marginX.mx.marginY.my.marginInlineStart.marginInlineEnd.marginBlockStart.marginBlockEnd.marginInline.marginBlock.padding.p.paddingTop.pt.paddingBottom.pb.paddingLeft.pl.paddingRight.pr.paddingX.px.paddingY.py.paddingInlineStart.paddingInlineEnd.paddingBlockStart.paddingBlockEnd.paddingInline.paddingBlock".split("."),
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
	layout: /* @__PURE__ */ "width.w.minWidth.minW.maxWidth.maxW.height.h.minHeight.minH.maxHeight.maxH.display.overflow.overflowX.overflowY.position.zIndex.cursor.userSelect.aspectRatio.boxSizing.float.clear.objectFit.objectPosition.resize.verticalAlign".split("."),
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
	border: /* @__PURE__ */ "border.borderWidth.borderTopWidth.borderBottomWidth.borderLeftWidth.borderRightWidth.borderStyle.borderTopStyle.borderBottomStyle.borderLeftStyle.borderRightStyle.borderRadius.borderTopLeftRadius.borderTopRightRadius.borderBottomLeftRadius.borderBottomRightRadius.borderTop.borderRight.borderBottom.borderLeft.borderX.borderY.borderStart.borderEnd.borderStartWidth.borderEndWidth.borderStartStyle.borderEndStyle.borderStartRadius.borderEndRadius".split("."),
	outline: [
		"outline",
		"outlineWidth",
		"outlineStyle",
		"outlineOffset"
	],
	position: [
		"top",
		"right",
		"bottom",
		"left",
		"inset"
	],
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
function Xe(e) {
	let t = /* @__PURE__ */ Object.create(null);
	return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var Ze = Xe((e) => {
	let t = e;
	return Object.values(Ye).some((e) => e.includes(t));
}), Qe = (e) => e.replace("_", ":"), $e = (e) => `${e}`.startsWith("_"), et = class e {
	style;
	className;
	constructor(t, n = !1) {
		if (!t || Object.keys(t).length === 0) {
			this.className = "";
			return;
		}
		let r = {}, i = {}, a = (e) => {
			let t = Y.getUserTheme()[e.split(".")[0]];
			if (t) {
				for (let n in t) if (e === n) return t[n];
			}
		}, o = (e) => typeof e == "string" && /[a-zA-Z]+\.[a-zA-Z0-9]+/.test(e) && !/^\w+\(.*\)$/.test(e), s = (e, t) => {
			if (Array.isArray(t)) return t.map((e) => {
				if (o(e)) {
					let t = a(e);
					if (t !== void 0) return t;
				}
				return e;
			});
			if (o(t)) {
				let e = a(t);
				if (e !== void 0) return e;
			} else if (Ze(e)) return t;
			return t;
		};
		for (let [e, n] of Object.entries(t)) if ($e(e)) {
			i[e] = n;
			for (let [t, r] of Object.entries(n)) i[e] = {
				...i[e],
				[t]: s(t, r)
			};
		} else r[e] = s(e, n);
		let c = Object.keys(i).length ? Object.entries(i).map(([e, t]) => {
			let n = Z(t);
			return {
				key: Qe(e),
				base: n.base,
				responsive: n.media
			};
		}) : [];
		this.style = {
			base: Z(r).base,
			responsive: Z(r).media,
			pseudo: c
		}, this.className = e.getClassNamePrefix(n) + J(JSON.stringify(this.style));
	}
	static getClassNamePrefix(e = !1) {
		if (process.env.NODE_ENV === "production") {
			let e = process.env.KUMA_CLASS_NAME_PREFIX;
			return e ? `${e}-` : "kuma-";
		}
		return e ? "🦄-" : "🐻-";
	}
	getClassName() {
		return this.className;
	}
	getCSS() {
		if (!this.style) return "";
		let e = `.${this.className} { ${this.style.base} }`;
		for (let [t, n] of Object.entries(this.style.responsive)) e += `@media (min-width: ${t}) { .${this.className} { ${n} } }`;
		for (let t of this.style.pseudo) {
			e += `.${this.className}${t.key} { ${t.base} }`;
			for (let [n, r] of Object.entries(t.responsive)) e += `@media (min-width: ${n}) { .${this.className}${t.key} { ${r} } }`;
		}
		return e;
	}
	getStyle() {
		return {
			css: this.getCSS(),
			className: this.getClassName()
		};
	}
}, Z = Je;
//#endregion
//#region node_modules/@kuma-ui/core/dist/utils/stableStringify.mjs
function tt(e) {
	let t = [];
	return (function e(n) {
		if (n && n.toJSON && typeof n.toJSON == "function" && (n = n.toJSON()), n === void 0) return;
		if (typeof n == "number") return isFinite(n) ? "" + n : "null";
		if (typeof n != "object") return JSON.stringify(n);
		let r, i;
		if (Array.isArray(n)) {
			for (i = "[", r = 0; r < n.length; r++) r && (i += ","), i += e(n[r]) || "null";
			return i + "]";
		}
		if (n === null) return "null";
		if (t.indexOf(n) !== -1) throw TypeError("Converting circular structure to JSON");
		let a = t.push(n) - 1, o = Object.keys(n).sort();
		for (i = "", r = 0; r < o.length; r++) {
			let t = o[r], a = e(n[t]);
			a && (i && (i += ","), i += JSON.stringify(t) + ":" + a);
		}
		return t.splice(a, 1), "{" + i + "}";
	})(e);
}
//#endregion
//#region node_modules/@kuma-ui/core/dist/components/Box/react/utils.mjs
function nt(e) {
	return !!(Ze(e) || $e(e) || e === "variant");
}
function rt(e) {
	return Object.keys(e).some((t) => !!(nt(t) && e[t] != null));
}
function it(e) {
	let t = {}, n = {};
	return Object.keys(e).forEach((r) => {
		let i = e[r];
		if (nt(r)) {
			t[r] = i;
			return;
		}
		n[r] = i;
	}), {
		dynamicProps: t,
		restProps: n
	};
}
var at = {};
function ot(e) {
	let t = tt(e), n = at[t];
	return n || (n = new et(e, !0).getStyle(), at[t] = n), n;
}
//#endregion
//#region node_modules/@kuma-ui/core/dist/components/forwardRef.mjs
function Q(e) {
	return r(e);
}
//#endregion
//#region node_modules/@kuma-ui/core/dist/components/Box/react/DynamicBox.mjs
var st = me(), ct = e.useInsertionEffect || e.useLayoutEffect, lt = Q(({ as: t = "div", children: n, variant: r, IS_KUMA_DEFAULT: i, ...a }, o) => {
	let s = he() || st, { dynamicProps: l, restProps: u } = it({
		...(() => {
			if (!r || i) return {};
			let e = Y.getVariants("Box")?.variants, t = r;
			return e && t && e[t] || {};
		})(),
		...a
	}), { className: d, css: f } = ot(l), p = e.createElement(t, {
		ref: o,
		...u,
		className: [u.className, d].filter(Boolean).join(" "),
		children: n
	});
	return c ? (ct(() => (s.add(d, f), () => {
		s.remove(d);
	}), [d, f]), p) : (s.add(d, f), p);
}), ut = Q(({ as: t = "div", children: n, IS_KUMA_DEFAULT: r, ...i }, a) => e.createElement(t, {
	ref: a,
	...i,
	children: n
})), dt = Q(({ children: t, ...n }, r) => rt(n) ? /* @__PURE__ */ e.createElement(lt, {
	ref: r,
	...n
}, t) : /* @__PURE__ */ e.createElement(ut, {
	ref: r,
	...n
}, t)), ft = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), pt = /* @__PURE__ */ o(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, o, s, u) {
			var f = n.children;
			if (f !== void 0) if (o) if (M(f)) {
				for (o = 0; o < f.length; o++) p(f[o]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, f, m, f), R[f + o] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), c(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && l(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, a(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = s("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, o)(), L = N(i(o)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), $ = (/* @__PURE__ */ o(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = ft() : t.exports = pt();
})))(), mt = ({ children: r, triggerClass: o = "drag-sort-list-item", getContainer: s = "drag-sort-list-container", dragMoveClass: c, dragItemTargetClass: l, dragStart: u, dragMove: d, dragEnd: f }) => {
	let p = a(null), m = a({
		x: 0,
		y: 0
	}), h = a(null), g = a({
		x: 0,
		y: 0
	}), _ = () => {
		if (p.current) {
			let e = p.current.getBoundingClientRect(), t = window.getComputedStyle(p.current), n = parseFloat(t.marginLeft) || 0, r = parseFloat(t.marginTop) || 0;
			return {
				containerLeft: e.left - n,
				containerTop: e.top - r
			};
		}
		return {
			containerLeft: 0,
			containerTop: 0
		};
	}, v = (e) => {
		if (p.current) {
			let { clientX: t, clientY: n } = e, { containerLeft: r, containerTop: i } = _();
			m.current = {
				x: t - r,
				y: n - i
			};
		}
	}, y = (e) => {
		let t = document.querySelector(`.${s}`);
		t ? t.appendChild(e) : document.body.appendChild(e);
	}, b = (e) => {
		let { clientX: t, clientY: n } = e, r = p.current?.cloneNode(!0);
		c && r.classList.add(c), r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none", r.style.left = `${t - m.current.x}px`, r.style.top = `${n - m.current.y}px`, h.current = r, y(r), p.current && (p.current.style.visibility = "hidden", l && p.current.classList.add(l));
	}, x = (e) => {
		p.current && b(e);
	}, S = (e, t) => {
		if (e) {
			let { clientX: n, clientY: r } = t, i = n - g.current.x, a = r - g.current.y;
			e.style.transform = `translate3d(${i}px, ${a}px, 0)`;
		}
	}, C = (e) => {
		e && e.parentNode && e.parentNode.removeChild(e);
	};
	function w(e) {
		let t = this;
		e.preventDefault();
		let { clientX: n, clientY: r } = e;
		g.current = {
			x: n,
			y: r
		}, document.addEventListener("mousemove", T, !1), v(e), x(e), document.addEventListener("mouseup", E, !1), u?.(e, t);
	}
	let T = (e) => {
		S(h.current, e), d?.(e);
	}, E = (e) => {
		e.stopPropagation(), C(h.current), p.current && (p.current.removeAttribute("style"), l && p.current.classList.remove(l || "")), document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", E), f?.(e);
	};
	return i(() => {
		let e = p.current, t = e?.classList?.contains(o) ? e : e.querySelector(`.${o}`);
		return t && t.addEventListener("mousedown", w, !1), () => {
			t && t.removeEventListener("mousedown", w);
		};
	}, []), /* @__PURE__ */ (0, $.jsx)(t, { children: e.Children.map(r, (e) => n(e, {
		ref: p,
		className: `drag-sort-list-item ${e?.props?.className || ""}`
	})) });
};
//#endregion
//#region src/components/sort-list/sort-list.tsx
function ht(e) {
	return e ? e.dataset?.sortItemKey ? e : ht(e.parentElement) : null;
}
function gt(e, t) {
	let n = [];
	for (let r = e; r <= t; r++) n.push(r);
	for (let e = n.length - 1; e > 0; e--) {
		let t = Math.floor(Math.random() * (e + 1));
		[n[e], n[t]] = [n[t], n[e]];
	}
	return n;
}
var _t = ({ className: t, style: r, children: o, triggerClass: s, getContainer: c, dragMoveClass: l, dragItemTargetClass: u, dragStart: d, dragMove: f, dragEnd: p, items: m = [], randomSortingId: h = "" }) => {
	let g = a(null), _ = a(null), v = a(m || []), y = a(!1), b = (e, t) => {
		let n;
		n = t.dataset?.sortItemKey ? t : ht(t), g.current = n, d?.(e, t);
	}, x = (e) => {
		let { clientY: t } = e;
		if (!_.current) return;
		let n = null;
		for (let e of Array.from(_.current.children)) {
			let { top: r, height: i } = e.getBoundingClientRect();
			if (t >= r && t <= r + i && e !== g.current) {
				n = e;
				break;
			}
		}
		return n;
	}, S = (e) => ({ top: e.getBoundingClientRect().top }), C = (e) => {
		let t = x(e), n = t?.dataset?.sortItemKey;
		if (!n || y.current) return;
		let r = t.getBoundingClientRect().top, i = t.getBoundingClientRect().height, a = e.clientY - r > i / 2 ? "before" : "after", o = v.current?.findIndex((e) => e.key === g.current?.dataset?.sortItemKey), s = S(g.current), c = S(t), l = v.current?.splice(o, 1);
		if (a === "before") {
			t.before(g.current);
			let e = v.current?.findIndex((e) => e.key === n);
			v.current?.splice(e, 0, ...l);
		} else {
			t.after(g.current);
			let e = v.current?.findIndex((e) => e.key === n);
			v.current?.splice(e + 1, 0, ...l);
		}
		let u = S(g.current), d = S(t), p = s.top - u.top, m = c.top - d.top;
		if (Math.floor(p) === 0 && Math.floor(m) === 0) return;
		g.current?.getAnimations?.()?.forEach((e) => e.cancel()), t?.getAnimations?.()?.forEach((e) => e.cancel()), y.current = !0, g.current?.animate?.([{ transform: `translate3d(0, ${p}px, 0)` }, { transform: "translate3d(0, 0, 0)" }], {
			duration: 100,
			fill: "forwards",
			easing: "ease-in-out"
		});
		let h = t?.animate?.([{ transform: `translate3d(0, ${m}px, 0)` }, { transform: "translate3d(0, 0, 0)" }], {
			duration: 100,
			fill: "forwards",
			easing: "ease-in-out"
		}), _;
		h?.finished?.then(() => {
			clearTimeout(_), _ = setTimeout(() => {
				y.current = !1;
			}, 0);
		})?.catch(() => void 0), f?.(e);
	}, w = (e) => {
		let t = [...v.current || []];
		p?.(t, e);
	};
	return i(() => () => {
		v.current = [];
	}, []), i(() => {
		v.current = m;
	}, [m]), i(() => {
		if (h && _.current && v.current?.length > 0) {
			let e = gt(0, v.current.length - 1), t = Array.from(_.current.children), n = [], r;
			for (let r in t) {
				let i = t[e[r]], a = t[r], o = S(i), s = S(a), c = o.top - s.top;
				n[e[r]] = c;
			}
			for (let i in t) t[i].animate([{ transform: "translate3d(0, 0, 0)" }, { transform: `translate3d(0, ${-n[i]}px, 0)` }], {
				duration: 500,
				fill: "forwards",
				easing: "ease-in-out"
			}).finished.then(() => {
				clearTimeout(r), r = setTimeout(() => {
					v.current = e.map((e) => v.current?.[e]), p?.(v.current);
					for (let e in t) t[e]?.getAnimations?.()?.forEach((e) => e.cancel());
				}, 0);
			}).catch(() => void 0);
		}
	}, [h]), /* @__PURE__ */ (0, $.jsx)(dt, {
		ref: _,
		position: "relative",
		className: `drag-sort-list ${t || ""}`,
		style: r,
		children: e.Children.map(o, (e, t) => {
			let r = v.current?.[t]?.key || t;
			return /* @__PURE__ */ (0, $.jsx)(mt, {
				triggerClass: s,
				getContainer: c,
				dragMoveClass: l,
				dragItemTargetClass: u,
				dragStart: b,
				dragMove: C,
				dragEnd: w,
				children: n(e, { "data-sort-item-key": r })
			}, r);
		})
	});
};
//#endregion
export { _t as DragSortList };
