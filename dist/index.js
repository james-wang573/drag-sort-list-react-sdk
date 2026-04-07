import e, { Fragment as t, cloneElement as n, forwardRef as r, useEffect as i, useRef as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region node_modules/@kuma-ui/core/dist/utils/isBrowser.mjs
var s = typeof window < "u", c = "comm", l = "rule", u = "decl", d = "@import", f = "@namespace", p = "@keyframes", m = "@layer", h = Math.abs, g = String.fromCharCode;
function _(e) {
	return e.trim();
}
function v(e, t, n) {
	return e.replace(t, n);
}
function y(e, t, n) {
	return e.indexOf(t, n);
}
function b(e, t) {
	return e.charCodeAt(t) | 0;
}
function x(e, t, n) {
	return e.slice(t, n);
}
function S(e) {
	return e.length;
}
function C(e) {
	return e.length;
}
function w(e, t) {
	return t.push(e), e;
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var T = 1, E = 1, D = 0, O = 0, k = 0, A = "";
function j(e, t, n, r, i, a, o, s) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: T,
		column: E,
		length: o,
		return: "",
		siblings: s
	};
}
function ee() {
	return k;
}
function te() {
	return k = O > 0 ? b(A, --O) : 0, E--, k === 10 && (E = 1, T--), k;
}
function M() {
	return k = O < D ? b(A, O++) : 0, E++, k === 10 && (E = 1, T++), k;
}
function N() {
	return b(A, O);
}
function P() {
	return O;
}
function F(e, t) {
	return x(A, e, t);
}
function I(e) {
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
function ne(e) {
	return T = E = 1, D = S(A = e), O = 0, [];
}
function re(e) {
	return A = "", e;
}
function L(e) {
	return _(F(O - 1, R(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ie(e) {
	for (; (k = N()) && k < 33;) M();
	return I(e) > 2 || I(k) > 3 ? "" : " ";
}
function ae(e, t) {
	for (; --t && M() && !(k < 48 || k > 102 || k > 57 && k < 65 || k > 70 && k < 97););
	return F(e, P() + (t < 6 && N() == 32 && M() == 32));
}
function R(e) {
	for (; M();) switch (k) {
		case e: return O;
		case 34:
		case 39:
			e !== 34 && e !== 39 && R(k);
			break;
		case 40:
			e === 41 && R(e);
			break;
		case 92:
			M();
			break;
	}
	return O;
}
function oe(e, t) {
	for (; M() && e + k !== 57 && !(e + k === 84 && N() === 47););
	return "/*" + F(t, O - 1) + "*" + g(e === 47 ? e : M());
}
function se(e) {
	for (; !I(N());) M();
	return F(e, O);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
function z(e) {
	return re(B("", null, null, null, [""], e = ne(e), 0, [0], e));
}
function B(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, _ = 1, C = 1, T = 1, E = 0, D = "", O = i, k = a, A = r, j = D; C;) switch (m = E, E = M()) {
		case 40: if (m != 108 && b(j, d - 1) == 58) {
			y(j += v(L(E), "&", "&\f"), "&\f", h(l ? s[l - 1] : 0)) != -1 && (T = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			j += L(E);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			j += ie(m);
			break;
		case 92:
			j += ae(P() - 1, 7);
			continue;
		case 47:
			switch (N()) {
				case 42:
				case 47:
					w(ce(oe(M(), P()), t, n, c), c), (I(m || 1) == 5 || I(N() || 1) == 5) && S(j) && x(j, -1, void 0) !== " " && (j += " ");
					break;
				default: j += "/";
			}
			break;
		case 123 * _: s[l++] = S(j) * T;
		case 125 * _:
		case 59:
		case 0:
			switch (E) {
				case 0:
				case 125: C = 0;
				case 59 + u:
					T == -1 && (j = v(j, /\f/g, "")), p > 0 && (S(j) - d || _ === 0 && m === 47) && w(p > 32 ? H(j + ";", r, n, d - 1, c) : H(v(j, " ", "") + ";", r, n, d - 2, c), c);
					break;
				case 59: j += ";";
				default: if (w(A = V(j, t, n, l, u, i, s, D, O = [], k = [], d, a), a), E === 123) if (u === 0) B(j, t, A, A, O, a, d, s, k);
				else {
					switch (f) {
						case 99: if (b(j, 3) === 110) break;
						case 108: if (b(j, 2) === 97) break;
						default: u = 0;
						case 100:
						case 109:
						case 115:
					}
					u ? B(e, A, A, r && w(V(e, A, A, 0, 0, i, s, D, i, O = [], d, k), k), i, k, d, s, r ? O : k) : B(j, A, A, A, [""], k, 0, s, k);
				}
			}
			l = u = p = 0, _ = T = 1, D = j = "", d = o;
			break;
		case 58: d = 1 + S(j), p = m;
		default:
			if (_ < 1) {
				if (E == 123) --_;
				else if (E == 125 && _++ == 0 && te() == 125) continue;
			}
			switch (j += g(E), E * _) {
				case 38:
					T = u > 0 ? 1 : (j += "\f", -1);
					break;
				case 44:
					s[l++] = (S(j) - 1) * T, T = 1;
					break;
				case 64:
					N() === 45 && (j += L(M())), f = N(), u = d = S(D = j += se(P())), E++;
					break;
				case 45: m === 45 && S(j) == 2 && (_ = 0);
			}
	}
	return a;
}
function V(e, t, n, r, i, a, o, s, c, u, d, f) {
	for (var p = i - 1, m = i === 0 ? a : [""], g = C(m), y = 0, b = 0, S = 0; y < r; ++y) for (var w = 0, T = x(e, p + 1, p = h(b = o[y])), E = e; w < g; ++w) (E = _(b > 0 ? m[w] + " " + T : v(T, /&\f/g, m[w]))) && (c[S++] = E);
	return j(e, t, n, i === 0 ? l : s, c, u, d, f);
}
function ce(e, t, n, r) {
	return j(e, t, n, c, g(ee()), x(e, 2, -2), 0, r);
}
function H(e, t, n, r, i) {
	return j(e, t, n, u, x(e, 0, r), x(e, r + 1, -1), r, i);
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
function U(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n;
}
function W(e, t, n, r) {
	switch (e.type) {
		case m: if (e.children.length) break;
		case d:
		case f:
		case u: return e.return = e.return || e.value;
		case c: return "";
		case p: return e.return = e.value + "{" + U(e.children, r) + "}";
		case l: if (!S(e.value = e.props.join(","))) return "";
	}
	return S(n = U(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region node_modules/@kuma-ui/core/dist/utils/isProduction.mjs
var G = process.env.NODE_ENV === "production", le = class {
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
		this.speedy && (this.tags[0] = this.makeStyleTag(), this.speedy = "insertRule" in this.getLatestSheet(), this.speedy || (G || console.warn("ClientStyleSheet: speedy mode not supported falling back to standard mode."), this.flush())), this.injected = !0;
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
				return G || console.warn(`ClientStyleSheet: illegal rule: 

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
		return s ? new le(e, t) : new ue(e, t);
	}
}, K = "__", fe = class {
	sheet;
	serverSideRenderedStyleMap = null;
	indexesMap = {};
	instancesCountMap = {};
	constructor() {
		this.sheet = new de("kuma-ui", G), this.sheet.inject();
	}
	add(e, t) {
		s && this.serverSideRenderedStyleMap === null && (this.serverSideRenderedStyleMap = this.getServerSideRenderedStyleMap(), Object.keys(this.serverSideRenderedStyleMap).forEach((e) => {
			this.instancesCountMap[e] = 0;
		})), this.instancesCountMap[e] = 1 + (this.instancesCountMap[e] ?? 0);
		let n = this.serverSideRenderedStyleMap?.[e];
		this.instancesCountMap[e] === 1 && !n && z(t).forEach((t) => {
			let n = U([t], W);
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
				id: `${K}${n}`,
				key: `${K}${n}`,
				nonce: t.nonce ? t.nonce : void 0,
				dangerouslySetInnerHTML: { __html: a }
			});
		}).filter(Boolean);
	}
	flush() {
		this.sheet.flush(), this.sheet.inject(), this.serverSideRenderedStyleMap = null, this.indexesMap = {}, this.instancesCountMap = {};
	}
	getServerSideRenderedStyleMap() {
		return Array.from(document.querySelectorAll(`[id^="${K}"]`)).reduce((e, t) => {
			let n = t.id.replace(K, "");
			return e[n] = t, e;
		}, {});
	}
}, q = e.createContext(null);
q.displayName = "StyleSheetContext";
function pe() {
	return new fe();
}
function me() {
	return e.useContext(q);
}
//#endregion
//#region node_modules/@kuma-ui/system/dist/chunk-MHHUKXNJ.mjs
var he = {
	boxShadow: "box-shadow",
	textShadow: "text-shadow"
}, ge = {
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
}, _e = {
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
}, ve = {
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
}, ye = {
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
}, be = {
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
}, xe = {
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
}, Se = {
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
}, Ce = {
	listStyle: "list-style",
	listStyleImage: "list-style-image",
	listStylePosition: "list-style-position",
	listStyleType: "list-style-type"
}, we = {
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
}, Te = {
	outline: "outline",
	outlineOffset: "outline-offset",
	outlineWidth: "outline-width",
	outlineStyle: "outline-style"
}, Ee = {
	top: "top",
	right: "right",
	left: "left",
	bottom: "bottom",
	inset: "inset"
}, De = {
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
}, Oe = {
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
}, ke = {
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
}, Ae = {
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
}, je = {
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
}, Me = {
	contain: "contain",
	containIntrinsicBlockSize: "contain-intrinsic-block-size",
	containIntrinsicHeight: "contain-intrinsic-height",
	containIntrinsicInlineSize: "contain-intrinsic-inline-size",
	containIntrinsicSize: "contain-intrinsic-size",
	containIntrinsicWidth: "contain-intrinsic-width"
}, Ne = {
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
}, Pe = {
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
var Fe = (e, t) => Ie(e, t), Ie = (e, t) => e.replace(/\bt\s*\(\s*["']([^"']+)["']\s*\)/g, (e, n) => typeof n == "string" && n in t ? t[n] : e), Le = (e) => {
	let t = {};
	for (let n of ze) {
		let r = e[n];
		if (r) for (let e in r) t[e] = r[e];
	}
	return t;
}, Re = Object.freeze({
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px"
}), ze = [
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
		breakpoints: globalThis.__KUMA_USER_THEME__?.breakpoints ?? Re
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
		}, this._placeholders = Le(this._userTheme);
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
		this._userTheme = { breakpoints: Re };
	}
}.getInstance(), X = (e) => e.replace(/(:)\s+|\s+(?=;)/g, "$1"), Be = (e) => e.replace(/(:)\s+|\s+(?=;)|(\{)\s+|\s+(?=\})|(,)\s+|\s+(?=,)|\s+(?={)/g, "$1$2$3");
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
		let r = Be(`@media (min-width: ${n}) { .${e} { ${X(t)} } }`);
		this.responsive.push(r);
	}
	_addPseudoRule(e, t) {
		let n = X(this._processCSS(t.base)), r = Be(`.${e}${t.key} { ${n} }`);
		this.pseudo.push(r);
		for (let [n, r] of Object.entries(t.responsive)) this._addMediaRule(`${e}${t.key}`, this._processCSS(r), this._processCSS(n));
	}
	_processCSS(e) {
		return Fe(e, Y.getPlaceholders());
	}
	parseCSS(t) {
		t = this._processCSS(t);
		let n = e.getClassNamePrefix() + J(t), r = [];
		z(`.${n}{${t}}`).forEach((e) => {
			let { breakpoints: t } = Y.getUserTheme();
			this.normalizeMediaQueries(e, t ?? {}), this.applyGlobalSelectorNormalization(e, n) && r.push(e);
		});
		let i = U(r, W);
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
var Ve = class e {
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
var He = (e) => Array.isArray(e), Ue = (e, t, n = (e) => e) => {
	let { breakpoints: r } = Y.getUserTheme(), i = {};
	if (!He(t)) return {
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
}, We = {
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
function Ge(e, t) {
	return typeof t == "number" ? `${t}${e in We ? "" : "px"}` : t;
}
//#endregion
//#region node_modules/@kuma-ui/system/dist/chunk-ZCLMYYDR.mjs
var Ke = Object.assign({}, De, ge, ve, Se, Ae, ye, Me, ke, Te, Ee, he, xe, Ce, Ne, _e, be, we, je, Oe, Pe), qe = (e) => {
	let t = JSON.stringify(e), n = Ve.get(t);
	if (n) return n;
	let r = "", i = {};
	for (let t in e) {
		let n = e[t];
		if (n == null) continue;
		let a = Ke[t]?.split(",") ?? [];
		for (let e of a) {
			let a = Ue(e, n, (e) => Ge(t, e));
			r += a.base;
			for (let [e, t] of Object.entries(a.media)) i[e] ? i[e] += t : i[e] = t;
		}
	}
	let a = {
		base: r,
		media: i
	};
	return Ve.set(t, a), a;
}, Je = {
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
function Ye(e) {
	let t = /* @__PURE__ */ Object.create(null);
	return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var Xe = Ye((e) => {
	let t = e;
	return Object.values(Je).some((e) => e.includes(t));
}), Ze = (e) => e.replace("_", ":"), Qe = (e) => `${e}`.startsWith("_"), $e = class e {
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
			} else if (Xe(e)) return t;
			return t;
		};
		for (let [e, n] of Object.entries(t)) if (Qe(e)) {
			i[e] = n;
			for (let [t, r] of Object.entries(n)) i[e] = {
				...i[e],
				[t]: s(t, r)
			};
		} else r[e] = s(e, n);
		let c = Object.keys(i).length ? Object.entries(i).map(([e, t]) => {
			let n = Z(t);
			return {
				key: Ze(e),
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
}, Z = qe;
//#endregion
//#region node_modules/@kuma-ui/core/dist/utils/stableStringify.mjs
function et(e) {
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
function tt(e) {
	return !!(Xe(e) || Qe(e) || e === "variant");
}
function nt(e) {
	return Object.keys(e).some((t) => !!(tt(t) && e[t] != null));
}
function rt(e) {
	let t = {}, n = {};
	return Object.keys(e).forEach((r) => {
		let i = e[r];
		if (tt(r)) {
			t[r] = i;
			return;
		}
		n[r] = i;
	}), {
		dynamicProps: t,
		restProps: n
	};
}
var it = {};
function at(e) {
	let t = et(e), n = it[t];
	return n || (n = new $e(e, !0).getStyle(), it[t] = n), n;
}
//#endregion
//#region node_modules/@kuma-ui/core/dist/components/forwardRef.mjs
function Q(e) {
	return r(e);
}
//#endregion
//#region node_modules/@kuma-ui/core/dist/components/Box/react/DynamicBox.mjs
var ot = pe(), st = e.useInsertionEffect || e.useLayoutEffect, ct = Q(({ as: t = "div", children: n, variant: r, IS_KUMA_DEFAULT: i, ...a }, o) => {
	let c = me() || ot, { dynamicProps: l, restProps: u } = rt({
		...(() => {
			if (!r || i) return {};
			let e = Y.getVariants("Box")?.variants, t = r;
			return e && t && e[t] || {};
		})(),
		...a
	}), { className: d, css: f } = at(l), p = e.createElement(t, {
		ref: o,
		...u,
		className: [u.className, d].filter(Boolean).join(" "),
		children: n
	});
	return s ? (st(() => (c.add(d, f), () => {
		c.remove(d);
	}), [d, f]), p) : (c.add(d, f), p);
}), lt = Q(({ as: t = "div", children: n, IS_KUMA_DEFAULT: r, ...i }, a) => e.createElement(t, {
	ref: a,
	...i,
	children: n
})), ut = Q(({ children: t, ...n }, r) => nt(n) ? /* @__PURE__ */ e.createElement(ct, {
	ref: r,
	...n
}, t) : /* @__PURE__ */ e.createElement(lt, {
	ref: r,
	...n
}, t)), dt = ({ children: r, triggerClass: s = "drag-sort-list-item", getContainer: c = "drag-sort-list-container", dragMoveClass: l, dragItemTargetClass: u, dragStart: d, dragMove: f, dragEnd: p }) => {
	let m = a(null), h = a({
		x: 0,
		y: 0
	}), g = a(null), _ = a({
		x: 0,
		y: 0
	}), v = () => {
		if (m.current) {
			let e = m.current.getBoundingClientRect(), t = window.getComputedStyle(m.current), n = parseFloat(t.marginLeft) || 0, r = parseFloat(t.marginTop) || 0;
			return {
				containerLeft: e.left - n,
				containerTop: e.top - r
			};
		}
		return {
			containerLeft: 0,
			containerTop: 0
		};
	}, y = (e) => {
		if (m.current) {
			let { clientX: t, clientY: n } = e, { containerLeft: r, containerTop: i } = v();
			h.current = {
				x: t - r,
				y: n - i
			};
		}
	}, b = (e) => {
		let t = document.querySelector(`.${c}`);
		t ? t.appendChild(e) : document.body.appendChild(e);
	}, x = (e) => {
		let { clientX: t, clientY: n } = e, r = m.current?.cloneNode(!0);
		l && r.classList.add(l), r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none", r.style.left = `${t - h.current.x}px`, r.style.top = `${n - h.current.y}px`, g.current = r, b(r), m.current && (m.current.style.visibility = "hidden", u && m.current.classList.add(u));
	}, S = (e) => {
		m.current && x(e);
	}, C = (e, t) => {
		if (e) {
			let { clientX: n, clientY: r } = t, i = n - _.current.x, a = r - _.current.y;
			e.style.transform = `translate3d(${i}px, ${a}px, 0)`;
		}
	}, w = (e) => {
		e && e.parentNode && e.parentNode.removeChild(e);
	};
	function T(e) {
		let t = this;
		e.preventDefault();
		let { clientX: n, clientY: r } = e;
		_.current = {
			x: n,
			y: r
		}, document.addEventListener("mousemove", E, !1), y(e), S(e), document.addEventListener("mouseup", D, !1), d?.(e, t);
	}
	let E = (e) => {
		C(g.current, e), f?.(e);
	}, D = (e) => {
		e.stopPropagation(), w(g.current), m.current && (m.current.removeAttribute("style"), u && m.current.classList.remove(u || "")), document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", D), p?.(e);
	};
	return i(() => {
		let e = m.current, t = e?.classList?.contains(s) ? e : e.querySelector(`.${s}`);
		return t && t.addEventListener("mousedown", T, !1), () => {
			t && t.removeEventListener("mousedown", T);
		};
	}, []), /* @__PURE__ */ o(t, { children: e.Children.map(r, (e) => n(e, {
		ref: m,
		className: `drag-sort-list-item ${e?.props?.className || ""}`
	})) });
};
//#endregion
//#region src/components/sort-list/sort-list.tsx
function $(e) {
	return e ? e.dataset?.sortItemKey ? e : $(e.parentElement) : null;
}
function ft(e, t) {
	let n = [];
	for (let r = e; r <= t; r++) n.push(r);
	for (let e = n.length - 1; e > 0; e--) {
		let t = Math.floor(Math.random() * (e + 1));
		[n[e], n[t]] = [n[t], n[e]];
	}
	return n;
}
var pt = ({ className: t, style: r, children: s, triggerClass: c, getContainer: l, dragMoveClass: u, dragItemTargetClass: d, dragStart: f, dragMove: p, dragEnd: m, items: h = [], randomSortingId: g = "" }) => {
	let _ = a(null), v = a(null), y = a(h || []), b = a(!1), x = (e, t) => {
		let n;
		n = t.dataset?.sortItemKey ? t : $(t), _.current = n, f?.(e, t);
	}, S = (e) => {
		let { clientY: t } = e;
		if (!v.current) return;
		let n = null;
		for (let e of Array.from(v.current.children)) {
			let { top: r, height: i } = e.getBoundingClientRect();
			if (t >= r && t <= r + i && e !== _.current) {
				n = e;
				break;
			}
		}
		return n;
	}, C = (e) => ({ top: e.getBoundingClientRect().top }), w = (e) => {
		let t = S(e), n = t?.dataset?.sortItemKey;
		if (!n || b.current) return;
		let r = t.getBoundingClientRect().top, i = t.getBoundingClientRect().height, a = e.clientY - r > i / 2 ? "before" : "after", o = y.current?.findIndex((e) => e.key === _.current?.dataset?.sortItemKey), s = C(_.current), c = C(t), l = y.current?.splice(o, 1);
		if (a === "before") {
			t.before(_.current);
			let e = y.current?.findIndex((e) => e.key === n);
			y.current?.splice(e, 0, ...l);
		} else {
			t.after(_.current);
			let e = y.current?.findIndex((e) => e.key === n);
			y.current?.splice(e + 1, 0, ...l);
		}
		let u = C(_.current), d = C(t), f = s.top - u.top, m = c.top - d.top;
		if (Math.floor(f) === 0 && Math.floor(m) === 0) return;
		_.current?.getAnimations?.()?.forEach((e) => e.cancel()), t?.getAnimations?.()?.forEach((e) => e.cancel()), b.current = !0, _.current?.animate?.([{ transform: `translate3d(0, ${f}px, 0)` }, { transform: "translate3d(0, 0, 0)" }], {
			duration: 100,
			fill: "forwards",
			easing: "ease-in-out"
		});
		let h = t?.animate?.([{ transform: `translate3d(0, ${m}px, 0)` }, { transform: "translate3d(0, 0, 0)" }], {
			duration: 100,
			fill: "forwards",
			easing: "ease-in-out"
		}), g;
		h?.finished?.then(() => {
			clearTimeout(g), g = setTimeout(() => {
				b.current = !1;
			}, 0);
		})?.catch(() => void 0), p?.(e);
	}, T = (e) => {
		let t = [...y.current || []];
		m?.(t, e);
	};
	return i(() => () => {
		y.current = [];
	}, []), i(() => {
		y.current = h;
	}, [h]), i(() => {
		if (g && v.current && y.current?.length > 0) {
			let e = ft(0, y.current.length - 1), t = Array.from(v.current.children), n = [], r;
			for (let r in t) {
				let i = t[e[r]], a = t[r], o = C(i), s = C(a), c = o.top - s.top;
				n[e[r]] = c;
			}
			for (let i in t) t[i].animate([{ transform: "translate3d(0, 0, 0)" }, { transform: `translate3d(0, ${-n[i]}px, 0)` }], {
				duration: 500,
				fill: "forwards",
				easing: "ease-in-out"
			}).finished.then(() => {
				clearTimeout(r), r = setTimeout(() => {
					y.current = e.map((e) => y.current?.[e]), m?.(y.current);
					for (let e in t) t[e]?.getAnimations?.()?.forEach((e) => e.cancel());
				}, 0);
			}).catch(() => void 0);
		}
	}, [g]), /* @__PURE__ */ o(ut, {
		ref: v,
		position: "relative",
		className: `drag-sort-list ${t || ""}`,
		style: r,
		children: e.Children.map(s, (e, t) => {
			let r = y.current?.[t]?.key || t;
			return /* @__PURE__ */ o(dt, {
				triggerClass: c,
				getContainer: l,
				dragMoveClass: u,
				dragItemTargetClass: d,
				dragStart: x,
				dragMove: w,
				dragEnd: T,
				children: n(e, { "data-sort-item-key": r })
			}, r);
		})
	});
};
//#endregion
export { pt as DragSortList };
