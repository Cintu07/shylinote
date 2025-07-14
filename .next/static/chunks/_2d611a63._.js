(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/TopNav.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TopNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TopNav(props) {
    const { hello, isViewer, handleToggleViewer, handleToggleMenu, savingNote, handleSaveNote } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "notes-btn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleToggleMenu,
                        className: "card-button-primary menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-bars"
                        }, void 0, false, {
                            fileName: "[project]/components/TopNav.jsx",
                            lineNumber: 10,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TopNav.jsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSaveNote,
                        disabled: savingNote,
                        className: "card-button-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/components/TopNav.jsx",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-floppy-disk"
                            }, void 0, false, {
                                fileName: "[project]/components/TopNav.jsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TopNav.jsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleToggleViewer,
                        className: "card-button-secondary",
                        children: isViewer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    children: "Editor"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopNav.jsx",
                                    lineNumber: 19,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-pencil"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopNav.jsx",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    children: "Viewer"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopNav.jsx",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-check-double"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopNav.jsx",
                                    lineNumber: 24,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/TopNav.jsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TopNav.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "full-line"
            }, void 0, false, {
                fileName: "[project]/components/TopNav.jsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = TopNav;
var _c;
__turbopack_context__.k.register(_c, "TopNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Editor.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Editor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopNav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TopNav.jsx [app-client] (ecmascript)");
;
;
function Editor(props) {
    const { text, setText } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "notes-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopNav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...props
            }, void 0, false, {
                fileName: "[project]/components/Editor.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: text,
                onChange: setText,
                placeholder: "The mitochondria is the powerhouse of the cell"
            }, void 0, false, {
                fileName: "[project]/components/Editor.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Editor.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Editor;
var _c;
__turbopack_context__.k.register(_c, "Editor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/MDX.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MDX)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$markdown$2d$to$2d$jsx$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/markdown-to-jsx/dist/index.modern.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopNav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TopNav.jsx [app-client] (ecmascript)");
;
;
;
function MDX(props) {
    const { text } = props // gives us access to the text attribute (or the value assigned to it really)
    ;
    const md = `# this is a header 1
## this is a header 2

hello world
[click me](https://www.google.com)
    `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mdx-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopNav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...props
            }, void 0, false, {
                fileName: "[project]/components/MDX.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$markdown$2d$to$2d$jsx$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: text.trim() || 'Hop in the editor to create a new note'
                }, void 0, false, {
                    fileName: "[project]/components/MDX.jsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MDX.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MDX.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = MDX;
var _c;
__turbopack_context__.k.register(_c, "MDX");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/SideNav.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SideNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function SideNav(props) {
    _s();
    const { showNav, setShowNav, noteIds, setNoteIds, handleCreateNote, setIsViewer } = props;
    const { logout, currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    async function deleteNote(noteIdx) {
        try {
            const noteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', currentUser.uid, 'notes', noteIdx);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(noteRef);
            setNoteIds((curr)=>{
                return curr.filter((idx)=>idx !== noteIdx);
            });
        } catch (err) {
            console.log(err.message);
        } finally{}
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SideNav.useEffect": ()=>{
            // this is the code block that gets executed when our ref changes (so in this case it's when the ref is assigned)
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowNav(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "SideNav.useEffect": ()=>{
                    // cleanup - unbind the event listener on clean up
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["SideNav.useEffect"];
        }
    }["SideNav.useEffect"], [
        ref
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SideNav.useEffect": ()=>{
            if (!currentUser) {
                return;
            } // because if we don't have a user then we can't fetch anything so exit this code block
            async function fetchIndexes() {
                try {
                    const notesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', currentUser.uid, 'notes');
                    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(notesRef);
                    const notesIndexes = snapshot.docs.map({
                        "SideNav.useEffect.fetchIndexes.notesIndexes": (doc)=>{
                            return doc.id;
                        }
                    }["SideNav.useEffect.fetchIndexes.notesIndexes"]);
                    setNoteIds(notesIndexes);
                } catch (err) {
                    console.log(err.message);
                } finally{}
            }
            fetchIndexes();
        }
    }["SideNav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "nav " + (showNav ? '' : ' hidden-nav '),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-gradient",
                children: "MDNOTES"
            }, void 0, false, {
                fileName: "[project]/components/SideNav.jsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                children: "Easy Breezy Notes"
            }, void 0, false, {
                fileName: "[project]/components/SideNav.jsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "full-line"
            }, void 0, false, {
                fileName: "[project]/components/SideNav.jsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCreateNote,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        children: "New note"
                    }, void 0, false, {
                        fileName: "[project]/components/SideNav.jsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fa-solid fa-plus"
                    }, void 0, false, {
                        fileName: "[project]/components/SideNav.jsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SideNav.jsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "notes-list",
                children: noteIds.length == 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "You have 0 notes"
                }, void 0, false, {
                    fileName: "[project]/components/SideNav.jsx",
                    lineNumber: 75,
                    columnNumber: 21
                }, this) : noteIds.map((note, idx)=>{
                    const [n, d] = note.split('__');
                    const date = new Date(parseInt(d)).toString();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            router.push('/notes?id=' + note);
                            setIsViewer(true);
                        },
                        className: "card-button-secondary list-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: n
                            }, void 0, false, {
                                fileName: "[project]/components/SideNav.jsx",
                                lineNumber: 85,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: date.split(' ').slice(1, 4).join(' ')
                            }, void 0, false, {
                                fileName: "[project]/components/SideNav.jsx",
                                lineNumber: 86,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    deleteNote(note);
                                },
                                className: "delete-btn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-trash-can"
                                }, void 0, false, {
                                    fileName: "[project]/components/SideNav.jsx",
                                    lineNumber: 91,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SideNav.jsx",
                                lineNumber: 87,
                                columnNumber: 33
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/SideNav.jsx",
                        lineNumber: 81,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/SideNav.jsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "full-line"
            }, void 0, false, {
                fileName: "[project]/components/SideNav.jsx",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: logout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/components/SideNav.jsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fa-solid fa-arrow-right-from-bracket"
                    }, void 0, false, {
                        fileName: "[project]/components/SideNav.jsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SideNav.jsx",
                lineNumber: 98,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SideNav.jsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(SideNav, "9OSOEDn8hTKm237uRSTdx45yYCE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SideNav;
var _c;
__turbopack_context__.k.register(_c, "SideNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/notes/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Editor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Editor.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MDX$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MDX.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SideNav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SideNav.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function NotesPage() {
    _s();
    const [isViewer, setIsViewer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // const [text, setText] = useState('')
    const [showNav, setShowNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        content: ''
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noteIds, setNoteIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [savingNote, setSavingNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { currentUser, isLoadingUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    function handleToggleViewer() {
        // isViewer = !isViewer
        setIsViewer(!isViewer);
    }
    function handleToggleMenu() {
        setShowNav(!showNav);
    }
    function handleCreateNote() {
        // create a new note
        setNote({
            content: ''
        });
        setIsViewer(false);
        window.history.replaceState(null, '', '/notes');
    }
    function handleEditNote(e) {
        // edit an existing note
        setNote({
            ...note,
            content: e.target.value
        });
    }
    async function handleSaveNote() {
        if (!note?.content) {
            return;
        }
        setSavingNote(true);
        try {
            // see if note already exists in database
            if (note.id) {
                // then we have an existing note cause we have it's id, so write to existing note
                const noteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', currentUser.uid, 'notes', note.id);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(noteRef, {
                    ...note
                }, {
                    merge: true
                });
            } else {
                // that means that it's a brand new note and will only contain the content field, so we can basically save a new note to firebase
                const newId = note.content.replaceAll('#', '').slice(0, 15) + '__' + Date.now();
                const notesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', currentUser.uid, 'notes', newId);
                const newDocInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(notesRef, {
                    content: note.content,
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                });
                setNoteIds((curr)=>[
                        ...curr,
                        newId
                    ]);
                setNote({
                    ...note,
                    id: newId
                });
                window.history.pushState(null, '', `?id=${newId}`);
            }
        } catch (err) {
            console.log(err.message);
        } finally{
            setSavingNote(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotesPage.useEffect": ()=>{
            // locally cache notes in a global context (like the one we already have, you perhaps just need an extra state)
            const value = searchParams.get('id');
            if (!value || !currentUser) {
                return;
            }
            async function fetchNote() {
                if (isLoading) {
                    return;
                }
                try {
                    setIsLoading(true);
                    console.log('FETCHING DATA');
                    const noteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', currentUser.uid, 'notes', value);
                    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(noteRef);
                    const docData = snapshot.exists() ? {
                        id: snapshot.id,
                        ...snapshot.data()
                    } : null;
                    if (docData) {
                        setNote({
                            ...docData
                        });
                    }
                } catch (err) {
                    console.log(err.message);
                } finally{
                    setIsLoading(false);
                }
            }
            fetchNote();
        }
    }["NotesPage.useEffect"], [
        currentUser,
        searchParams
    ]);
    if (isLoadingUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
            className: "text-gradient",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/notes/page.js",
            lineNumber: 109,
            columnNumber: 13
        }, this);
    }
    if (!currentUser) {
        // if no user found, then boot them to the home page cause this is the notes page (for auth users only)
        window.location.href = '/';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "notes",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SideNav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setIsViewer: setIsViewer,
                handleCreateNote: handleCreateNote,
                noteIds: noteIds,
                setNoteIds: setNoteIds,
                showNav: showNav,
                setShowNav: setShowNav
            }, void 0, false, {
                fileName: "[project]/app/notes/page.js",
                lineNumber: 120,
                columnNumber: 13
            }, this),
            !isViewer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Editor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                savingNote: savingNote,
                handleSaveNote: handleSaveNote,
                handleToggleMenu: handleToggleMenu,
                setText: handleEditNote,
                text: note.content,
                hello: "world",
                isViewer: isViewer,
                handleToggleViewer: handleToggleViewer
            }, void 0, false, {
                fileName: "[project]/app/notes/page.js",
                lineNumber: 122,
                columnNumber: 17
            }, this),
            isViewer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MDX$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                savingNote: savingNote,
                handleSaveNote: handleSaveNote,
                handleToggleMenu: handleToggleMenu,
                text: note.content,
                isViewer: isViewer,
                handleToggleViewer: handleToggleViewer
            }, void 0, false, {
                fileName: "[project]/app/notes/page.js",
                lineNumber: 125,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/notes/page.js",
        lineNumber: 119,
        columnNumber: 9
    }, this);
}
_s(NotesPage, "jy9taMOZdVaP/Bm8DcrzGZ6PKkM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = NotesPage;
var _c;
__turbopack_context__.k.register(_c, "NotesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/markdown-to-jsx/dist/index.modern.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RuleType": (()=>t),
    "compiler": (()=>Qe),
    "default": (()=>__TURBOPACK__default__export__),
    "sanitizer": (()=>we),
    "slugify": (()=>Ee)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function n() {
    return n = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), n.apply(this, arguments);
}
const r = [
    "children",
    "options"
], t = {
    blockQuote: "0",
    breakLine: "1",
    breakThematic: "2",
    codeBlock: "3",
    codeFenced: "4",
    codeInline: "5",
    footnote: "6",
    footnoteReference: "7",
    gfmTask: "8",
    heading: "9",
    headingSetext: "10",
    htmlBlock: "11",
    htmlComment: "12",
    htmlSelfClosing: "13",
    image: "14",
    link: "15",
    linkAngleBraceStyleDetector: "16",
    linkBareUrlDetector: "17",
    linkMailtoDetector: "18",
    newlineCoalescer: "19",
    orderedList: "20",
    paragraph: "21",
    ref: "22",
    refImage: "23",
    refLink: "24",
    table: "25",
    tableSeparator: "26",
    text: "27",
    textBolded: "28",
    textEmphasized: "29",
    textEscaped: "30",
    textMarked: "31",
    textStrikethroughed: "32",
    unorderedList: "33"
}, o = [
    "allowFullScreen",
    "allowTransparency",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "charSet",
    "classId",
    "colSpan",
    "contentEditable",
    "contextMenu",
    "crossOrigin",
    "encType",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "hrefLang",
    "inputMode",
    "keyParams",
    "keyType",
    "marginHeight",
    "marginWidth",
    "maxLength",
    "mediaGroup",
    "minLength",
    "noValidate",
    "radioGroup",
    "readOnly",
    "rowSpan",
    "spellCheck",
    "srcDoc",
    "srcLang",
    "srcSet",
    "tabIndex",
    "useMap"
].reduce((e, n)=>(e[n.toLowerCase()] = n, e), {
    class: "className",
    for: "htmlFor"
}), a = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: "“"
}, c = [
    "style",
    "script",
    "pre"
], i = [
    "src",
    "href",
    "data",
    "formAction",
    "srcDoc",
    "action"
], u = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, l = /mailto:/i, s = /\n{2,}$/, f = /^(\s*>[\s\S]*?)(?=\n\n|$)/, _ = /^ *> ?/gm, d = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, p = /^ {2,}\n/, y = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, h = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, m = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, k = /^(?:\n *)*\n/, x = /\r\n?/g, v = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, q = /^\[\^([^\]]+)]/, b = /\f/g, S = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, $ = /^\s*?\[(x|\s)\]/, z = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, E = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, R = /^([^\n]+)\n *(=|-){3,} *\n/, A = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, B = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, L = /^<!--[\s\S]*?(?:-->)/, O = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, j = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, C = /^\{.*\}$/, I = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, T = /^<([^ >]+@[^ >]+)>/, M = /^<([^ >]+:\/[^ >]+)>/, w = /-([a-z])?/gi, D = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, F = /^[^\n]+(?:  \n|\n{2,})/, P = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, N = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, Z = /^\[([^\]]*)\] ?\[([^\]]*)\]/, G = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, U = /\t/g, V = /(^ *\||\| *$)/g, H = /^ *:-+: *$/, Q = /^ *:-+ *$/, W = /^ *-+: *$/, J = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", K = RegExp(`^([*_])\\1${J}\\1\\1(?!\\1)`), X = RegExp(`^([*_])${J}\\1(?!\\1)`), Y = RegExp(`^(==)${J}\\1`), ee = RegExp(`^(~~)${J}\\1`), ne = /^\\([^0-9A-Za-z\s])/, re = /\\([^0-9A-Za-z\s])/g, te = /^[\s\S](?:(?!  |[0-9]\.|http)[^=*_~\-\n<`\\\[!])*/, oe = /^\n+/, ae = /^([ \t]*)/, ce = /(?:^|\n)( *)$/, ie = "(?:\\d+\\.)", ue = "(?:[*+-])";
function le(e) {
    return "( *)(" + (1 === e ? ie : ue) + ") +";
}
const se = le(1), fe = le(2);
function _e(e) {
    return RegExp("^" + (1 === e ? se : fe));
}
const de = _e(1), pe = _e(2);
function ye(e) {
    return RegExp("^" + (1 === e ? se : fe) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? ie : ue) + " )[^\\n]*)*(\\n|$)", "gm");
}
const he = ye(1), ge = ye(2);
function me(e) {
    const n = 1 === e ? ie : ue;
    return RegExp("^( *)(" + n + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + n + " (?!" + n + " ))\\n*|\\s*\\n*$)");
}
const ke = me(1), xe = me(2);
function ve(e, n) {
    const r = 1 === n, t = r ? ke : xe, o = r ? he : ge, a = r ? de : pe;
    return {
        t: (e)=>a.test(e),
        o: Oe(function(e, n) {
            const r = ce.exec(n.prevCapture);
            return r && (n.list || !n.inline && !n.simple) ? t.exec(e = r[1] + e) : null;
        }),
        i: 1,
        u (e, n, t) {
            const c = r ? +e[2] : void 0, i = e[0].replace(s, "\n").match(o);
            let u = !1;
            return {
                items: i.map(function(e, r) {
                    const o = a.exec(e)[0].length, c = RegExp("^ {1," + o + "}", "gm"), l = e.replace(c, "").replace(a, ""), s = r === i.length - 1, f = -1 !== l.indexOf("\n\n") || s && u;
                    u = f;
                    const _ = t.inline, d = t.list;
                    let p;
                    t.list = !0, f ? (t.inline = !1, p = Se(l) + "\n\n") : (t.inline = !0, p = Se(l));
                    const y = n(p, t);
                    return t.inline = _, t.list = d, y;
                }),
                ordered: r,
                start: c
            };
        },
        l: (n, r, t)=>e(n.ordered ? "ol" : "ul", {
                key: t.key,
                start: "20" === n.type ? n.start : void 0
            }, n.items.map(function(n, o) {
                return e("li", {
                    key: o
                }, r(n, t));
            }))
    };
}
const qe = RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"), be = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
function Se(e) {
    let n = e.length;
    for(; n > 0 && e[n - 1] <= " ";)n--;
    return e.slice(0, n);
}
function $e(e, n) {
    return e.startsWith(n);
}
function ze(e, n, r) {
    if (Array.isArray(r)) {
        for(let n = 0; n < r.length; n++)if ($e(e, r[n])) return !0;
        return !1;
    }
    return r(e, n);
}
function Ee(e) {
    return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Re(e) {
    return W.test(e) ? "right" : H.test(e) ? "center" : Q.test(e) ? "left" : null;
}
function Ae(e, n, r, t) {
    const o = r.inTable;
    r.inTable = !0;
    let a = [
        []
    ], c = "";
    function i() {
        if (!c) return;
        const e = a[a.length - 1];
        e.push.apply(e, n(c, r)), c = "";
    }
    return e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e, n, r)=>{
        "|" === e.trim() && (i(), t) ? 0 !== n && n !== r.length - 1 && a.push([]) : c += e;
    }), i(), r.inTable = o, a;
}
function Be(e, n, r) {
    r.inline = !0;
    const t = e[2] ? e[2].replace(V, "").split("|").map(Re) : [], o = e[3] ? function(e, n, r) {
        return e.trim().split("\n").map(function(e) {
            return Ae(e, n, r, !0);
        });
    }(e[3], n, r) : [], a = Ae(e[1], n, r, !!o.length);
    return r.inline = !1, o.length ? {
        align: t,
        cells: o,
        header: a,
        type: "25"
    } : {
        children: a,
        type: "21"
    };
}
function Le(e, n) {
    return null == e.align[n] ? {} : {
        textAlign: e.align[n]
    };
}
function Oe(e) {
    return e.inline = 1, e;
}
function je(e) {
    return Oe(function(n, r) {
        return r.inline ? e.exec(n) : null;
    });
}
function Ce(e) {
    return Oe(function(n, r) {
        return r.inline || r.simple ? e.exec(n) : null;
    });
}
function Ie(e) {
    return function(n, r) {
        return r.inline || r.simple ? null : e.exec(n);
    };
}
function Te(e) {
    return Oe(function(n) {
        return e.exec(n);
    });
}
const Me = /(javascript|vbscript|data(?!:image)):/i;
function we(e) {
    try {
        const n = decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "");
        if (Me.test(n)) return null;
    } catch (e) {
        return null;
    }
    return e;
}
function De(e) {
    return e ? e.replace(re, "$1") : e;
}
function Fe(e, n, r) {
    const t = r.inline || !1, o = r.simple || !1;
    r.inline = !0, r.simple = !0;
    const a = e(n, r);
    return r.inline = t, r.simple = o, a;
}
function Pe(e, n, r) {
    const t = r.inline || !1, o = r.simple || !1;
    r.inline = !1, r.simple = !0;
    const a = e(n, r);
    return r.inline = t, r.simple = o, a;
}
function Ne(e, n, r) {
    const t = r.inline || !1;
    r.inline = !1;
    const o = e(n, r);
    return r.inline = t, o;
}
const Ze = (e, n, r)=>({
        children: Fe(n, e[2], r)
    });
function Ge() {
    return {};
}
function Ue() {
    return null;
}
function Ve(...e) {
    return e.filter(Boolean).join(" ");
}
function He(e, n, r) {
    let t = e;
    const o = n.split(".");
    for(; o.length && (t = t[o[0]], void 0 !== t);)o.shift();
    return t || r;
}
function Qe(r = "", t = {}) {
    t.overrides = t.overrides || {}, t.namedCodesToUnicode = t.namedCodesToUnicode ? n({}, a, t.namedCodesToUnicode) : a;
    const s = t.slugify || Ee, V = t.sanitizer || we, H = t.createElement || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"], Q = [
        f,
        h,
        g,
        t.enforceAtxHeadings ? E : z,
        R,
        D,
        ke,
        xe
    ], W = [
        ...Q,
        F,
        A,
        L,
        j
    ];
    function J(e, r, ...o) {
        const a = He(t.overrides, e + ".props", {});
        return H(function(e, n) {
            const r = He(n, e);
            return r ? "function" == typeof r || "object" == typeof r && "render" in r ? r : He(n, e + ".component", e) : e;
        }(e, t.overrides), n({}, r, a, {
            className: Ve(null == r ? void 0 : r.className, a.className) || void 0
        }), ...o);
    }
    function re(e) {
        e = e.replace(S, "");
        let n = !1;
        t.forceInline ? n = !0 : t.forceBlock || (n = !1 === G.test(e));
        const r = fe(se(n ? e : Se(e).replace(oe, "") + "\n\n", {
            inline: n
        }));
        for(; "string" == typeof r[r.length - 1] && !r[r.length - 1].trim();)r.pop();
        if (null === t.wrapper) return r;
        const o = t.wrapper || (n ? "span" : "div");
        let a;
        if (r.length > 1 || t.forceWrapper) a = r;
        else {
            if (1 === r.length) return a = r[0], "string" == typeof a ? J("span", {
                key: "outer"
            }, a) : a;
            a = null;
        }
        return H(o, {
            key: "outer"
        }, a);
    }
    function ce(e, n) {
        if (!n || !n.trim()) return null;
        const r = n.match(u);
        return r ? r.reduce(function(n, r) {
            const t = r.indexOf("=");
            if (-1 !== t) {
                const a = (function(e) {
                    return -1 !== e.indexOf("-") && null === e.match(O) && (e = e.replace(w, function(e, n) {
                        return n.toUpperCase();
                    })), e;
                })(r.slice(0, t)).trim(), c = function(e) {
                    const n = e[0];
                    return ('"' === n || "'" === n) && e.length >= 2 && e[e.length - 1] === n ? e.slice(1, -1) : e;
                }(r.slice(t + 1).trim()), u = o[a] || a;
                if ("ref" === u) return n;
                const l = n[u] = function(e, n, r, t) {
                    return "style" === n ? (function(e) {
                        const n = [];
                        let r = "", t = !1, o = !1, a = "";
                        if (!e) return n;
                        for(let c = 0; c < e.length; c++){
                            const i = e[c];
                            if ('"' !== i && "'" !== i || t || (o ? i === a && (o = !1, a = "") : (o = !0, a = i)), "(" === i && r.endsWith("url") ? t = !0 : ")" === i && t && (t = !1), ";" !== i || o || t) r += i;
                            else {
                                const e = r.trim();
                                if (e) {
                                    const r = e.indexOf(":");
                                    if (r > 0) {
                                        const t = e.slice(0, r).trim(), o = e.slice(r + 1).trim();
                                        n.push([
                                            t,
                                            o
                                        ]);
                                    }
                                }
                                r = "";
                            }
                        }
                        const c = r.trim();
                        if (c) {
                            const e = c.indexOf(":");
                            if (e > 0) {
                                const r = c.slice(0, e).trim(), t = c.slice(e + 1).trim();
                                n.push([
                                    r,
                                    t
                                ]);
                            }
                        }
                        return n;
                    })(r).reduce(function(n, [r, o]) {
                        return n[r.replace(/(-[a-z])/g, (e)=>e[1].toUpperCase())] = t(o, e, r), n;
                    }, {}) : -1 !== i.indexOf(n) ? t(De(r), e, n) : (r.match(C) && (r = De(r.slice(1, r.length - 1))), "true" === r || "false" !== r && r);
                }(e, a, c, V);
                "string" == typeof l && (A.test(l) || j.test(l)) && (n[u] = re(l.trim()));
            } else "style" !== r && (n[o[r] || r] = !0);
            return n;
        }, {}) : null;
    }
    const ie = [], ue = {}, le = {
        0: {
            t: [
                ">"
            ],
            o: Ie(f),
            i: 1,
            u (e, n, r) {
                const [, t, o] = e[0].replace(_, "").match(d);
                return {
                    alert: t,
                    children: n(o, r)
                };
            },
            l (e, n, r) {
                const t = {
                    key: r.key
                };
                return e.alert && (t.className = "markdown-alert-" + s(e.alert.toLowerCase(), Ee), e.children.unshift({
                    attrs: {},
                    children: [
                        {
                            type: "27",
                            text: e.alert
                        }
                    ],
                    noInnerParse: !0,
                    type: "11",
                    tag: "header"
                })), J("blockquote", t, n(e.children, r));
            }
        },
        1: {
            o: Te(p),
            i: 1,
            u: Ge,
            l: (e, n, r)=>J("br", {
                    key: r.key
                })
        },
        2: {
            t: (e)=>{
                const n = e[0];
                return "-" === n || "*" === n || "_" === n;
            },
            o: Ie(y),
            i: 1,
            u: Ge,
            l: (e, n, r)=>J("hr", {
                    key: r.key
                })
        },
        3: {
            t: [
                "    "
            ],
            o: Ie(g),
            i: 0,
            u: (e)=>({
                    lang: void 0,
                    text: De(Se(e[0].replace(/^ {4}/gm, "")))
                }),
            l: (e, r, t)=>J("pre", {
                    key: t.key
                }, J("code", n({}, e.attrs, {
                    className: e.lang ? "lang-" + e.lang : ""
                }), e.text))
        },
        4: {
            t: [
                "```",
                "~~~"
            ],
            o: Ie(h),
            i: 0,
            u: (e)=>({
                    attrs: ce("code", e[3] || ""),
                    lang: e[2] || void 0,
                    text: e[4],
                    type: "3"
                })
        },
        5: {
            t: [
                "`"
            ],
            o: Ce(m),
            i: 3,
            u: (e)=>({
                    text: De(e[2])
                }),
            l: (e, n, r)=>J("code", {
                    key: r.key
                }, e.text)
        },
        6: {
            t: [
                "[^"
            ],
            o: Ie(v),
            i: 0,
            u: (e)=>(ie.push({
                    footnote: e[2],
                    identifier: e[1]
                }), {}),
            l: Ue
        },
        7: {
            t: [
                "[^"
            ],
            o: je(q),
            i: 1,
            u: (e)=>({
                    target: "#" + s(e[1], Ee),
                    text: e[1]
                }),
            l: (e, n, r)=>J("a", {
                    key: r.key,
                    href: V(e.target, "a", "href")
                }, J("sup", {
                    key: r.key
                }, e.text))
        },
        8: {
            t: [
                "[ ]",
                "[x]"
            ],
            o: je($),
            i: 1,
            u: (e)=>({
                    completed: "x" === e[1].toLowerCase()
                }),
            l: (e, n, r)=>J("input", {
                    checked: e.completed,
                    key: r.key,
                    readOnly: !0,
                    type: "checkbox"
                })
        },
        9: {
            t: [
                "#"
            ],
            o: Ie(t.enforceAtxHeadings ? E : z),
            i: 1,
            u: (e, n, r)=>({
                    children: Fe(n, e[2], r),
                    id: s(e[2], Ee),
                    level: e[1].length
                }),
            l: (e, n, r)=>J("h" + e.level, {
                    id: e.id,
                    key: r.key
                }, n(e.children, r))
        },
        10: {
            o: Ie(R),
            i: 0,
            u: (e, n, r)=>({
                    children: Fe(n, e[1], r),
                    level: "=" === e[2] ? 1 : 2,
                    type: "9"
                })
        },
        11: {
            t: [
                "<"
            ],
            o: Te(A),
            i: 1,
            u (e, n, r) {
                const [, t] = e[3].match(ae), o = RegExp("^" + t, "gm"), a = e[3].replace(o, ""), i = (u = a, W.some((e)=>e.test(u)) ? Ne : Fe);
                var u;
                const l = e[1].toLowerCase(), s = -1 !== c.indexOf(l), f = (s ? l : e[1]).trim(), _ = {
                    attrs: ce(f, e[2]),
                    noInnerParse: s,
                    tag: f
                };
                if (r.inAnchor = r.inAnchor || "a" === l, s) _.text = e[3];
                else {
                    const e = r.inHTML;
                    r.inHTML = !0, _.children = i(n, a, r), r.inHTML = e;
                }
                return r.inAnchor = !1, _;
            },
            l: (e, r, t)=>J(e.tag, n({
                    key: t.key
                }, e.attrs), e.text || (e.children ? r(e.children, t) : ""))
        },
        13: {
            t: [
                "<"
            ],
            o: Te(j),
            i: 1,
            u (e) {
                const n = e[1].trim();
                return {
                    attrs: ce(n, e[2] || ""),
                    tag: n
                };
            },
            l: (e, r, t)=>J(e.tag, n({}, e.attrs, {
                    key: t.key
                }))
        },
        12: {
            t: [
                "\x3c!--"
            ],
            o: Te(L),
            i: 1,
            u: ()=>({}),
            l: Ue
        },
        14: {
            t: [
                "!["
            ],
            o: Ce(be),
            i: 1,
            u: (e)=>({
                    alt: De(e[1]),
                    target: De(e[2]),
                    title: De(e[3])
                }),
            l: (e, n, r)=>J("img", {
                    key: r.key,
                    alt: e.alt || void 0,
                    title: e.title || void 0,
                    src: V(e.target, "img", "src")
                })
        },
        15: {
            t: [
                "["
            ],
            o: je(qe),
            i: 3,
            u: (e, n, r)=>({
                    children: Pe(n, e[1], r),
                    target: De(e[2]),
                    title: De(e[3])
                }),
            l: (e, n, r)=>J("a", {
                    key: r.key,
                    href: V(e.target, "a", "href"),
                    title: e.title
                }, n(e.children, r))
        },
        16: {
            t: [
                "<"
            ],
            o: je(M),
            i: 0,
            u: (e)=>({
                    children: [
                        {
                            text: e[1],
                            type: "27"
                        }
                    ],
                    target: e[1],
                    type: "15"
                })
        },
        17: {
            t: (e, n)=>!n.inAnchor && !t.disableAutoLink && ($e(e, "http://") || $e(e, "https://")),
            o: je(I),
            i: 0,
            u: (e)=>({
                    children: [
                        {
                            text: e[1],
                            type: "27"
                        }
                    ],
                    target: e[1],
                    title: void 0,
                    type: "15"
                })
        },
        18: {
            t: [
                "<"
            ],
            o: je(T),
            i: 0,
            u (e) {
                let n = e[1], r = e[1];
                return l.test(r) || (r = "mailto:" + r), {
                    children: [
                        {
                            text: n.replace("mailto:", ""),
                            type: "27"
                        }
                    ],
                    target: r,
                    type: "15"
                };
            }
        },
        20: ve(J, 1),
        33: ve(J, 2),
        19: {
            o: Ie(k),
            i: 3,
            u: Ge,
            l: ()=>"\n"
        },
        21: {
            o: Oe(function(e, n) {
                if (n.inline || n.simple || n.inHTML && -1 === e.indexOf("\n\n") && -1 === n.prevCapture.indexOf("\n\n")) return null;
                let r = "";
                e.split("\n").every((e)=>(e += "\n", !Q.some((n)=>n.test(e)) && (r += e, !!e.trim())));
                const t = Se(r);
                return "" === t ? null : [
                    r,
                    ,
                    t
                ];
            }),
            i: 3,
            u: Ze,
            l: (e, n, r)=>J("p", {
                    key: r.key
                }, n(e.children, r))
        },
        22: {
            t: [
                "["
            ],
            o: je(P),
            i: 0,
            u: (e)=>(ue[e[1]] = {
                    target: e[2],
                    title: e[4]
                }, {}),
            l: Ue
        },
        23: {
            t: [
                "!["
            ],
            o: Ce(N),
            i: 0,
            u: (e)=>({
                    alt: e[1] ? De(e[1]) : void 0,
                    ref: e[2]
                }),
            l: (e, n, r)=>ue[e.ref] ? J("img", {
                    key: r.key,
                    alt: e.alt,
                    src: V(ue[e.ref].target, "img", "src"),
                    title: ue[e.ref].title
                }) : null
        },
        24: {
            t: [
                "["
            ],
            o: je(Z),
            i: 0,
            u: (e, n, r)=>({
                    children: n(e[1], r),
                    fallbackChildren: e[0],
                    ref: e[2]
                }),
            l: (e, n, r)=>ue[e.ref] ? J("a", {
                    key: r.key,
                    href: V(ue[e.ref].target, "a", "href"),
                    title: ue[e.ref].title
                }, n(e.children, r)) : J("span", {
                    key: r.key
                }, e.fallbackChildren)
        },
        25: {
            t: [
                "|"
            ],
            o: Ie(D),
            i: 1,
            u: Be,
            l (e, n, r) {
                const t = e;
                return J("table", {
                    key: r.key
                }, J("thead", null, J("tr", null, t.header.map(function(e, o) {
                    return J("th", {
                        key: o,
                        style: Le(t, o)
                    }, n(e, r));
                }))), J("tbody", null, t.cells.map(function(e, o) {
                    return J("tr", {
                        key: o
                    }, e.map(function(e, o) {
                        return J("td", {
                            key: o,
                            style: Le(t, o)
                        }, n(e, r));
                    }));
                })));
            }
        },
        27: {
            o: Te(te),
            i: 4,
            u (e) {
                const n = e[0];
                return {
                    text: -1 === n.indexOf("&") ? n : n.replace(B, (e, n)=>t.namedCodesToUnicode[n] || e)
                };
            },
            l: (e)=>e.text
        },
        28: {
            t: [
                "**",
                "__"
            ],
            o: Ce(K),
            i: 2,
            u: (e, n, r)=>({
                    children: n(e[2], r)
                }),
            l: (e, n, r)=>J("strong", {
                    key: r.key
                }, n(e.children, r))
        },
        29: {
            t: (e)=>{
                const n = e[0];
                return ("*" === n || "_" === n) && e[1] !== n;
            },
            o: Ce(X),
            i: 3,
            u: (e, n, r)=>({
                    children: n(e[2], r)
                }),
            l: (e, n, r)=>J("em", {
                    key: r.key
                }, n(e.children, r))
        },
        30: {
            t: [
                "\\"
            ],
            o: Ce(ne),
            i: 1,
            u: (e)=>({
                    text: e[1],
                    type: "27"
                })
        },
        31: {
            t: [
                "=="
            ],
            o: Ce(Y),
            i: 3,
            u: Ze,
            l: (e, n, r)=>J("mark", {
                    key: r.key
                }, n(e.children, r))
        },
        32: {
            t: [
                "~~"
            ],
            o: Ce(ee),
            i: 3,
            u: Ze,
            l: (e, n, r)=>J("del", {
                    key: r.key
                }, n(e.children, r))
        }
    };
    !0 === t.disableParsingRawHTML && (delete le[11], delete le[13]);
    const se = function(e) {
        var n = Object.keys(e);
        function r(t, o) {
            var a = [];
            if (o.prevCapture = o.prevCapture || "", t.trim()) for(; t;)for(var c = 0; c < n.length;){
                var i = n[c], u = e[i];
                if (!u.t || ze(t, o, u.t)) {
                    var l = u.o(t, o);
                    if (l && l[0]) {
                        t = t.substring(l[0].length);
                        var s = u.u(l, r, o);
                        o.prevCapture += l[0], s.type || (s.type = i), a.push(s);
                        break;
                    }
                    c++;
                } else c++;
            }
            return o.prevCapture = "", a;
        }
        return n.sort(function(n, r) {
            return e[n].i - e[r].i || (n < r ? -1 : 1);
        }), function(e, n) {
            return r(function(e) {
                return e.replace(x, "\n").replace(b, "").replace(U, "    ");
            }(e), n);
        };
    }(le), fe = (_e = function(e, n) {
        return function(r, t, o) {
            const a = e[r.type].l;
            return n ? n(()=>a(r, t, o), r, t, o) : a(r, t, o);
        };
    }(le, t.renderRule), function e(n, r = {}) {
        if (Array.isArray(n)) {
            const t = r.key, o = [];
            let a = !1;
            for(let t = 0; t < n.length; t++){
                r.key = t;
                const c = e(n[t], r), i = "string" == typeof c;
                i && a ? o[o.length - 1] += c : null !== c && o.push(c), a = i;
            }
            return r.key = t, o;
        }
        return _e(n, e, r);
    });
    var _e;
    const de = re(r);
    return ie.length ? J("div", null, de, J("footer", {
        key: "footer"
    }, ie.map(function(e) {
        return J("div", {
            id: s(e.identifier, Ee),
            key: e.identifier
        }, e.identifier, fe(se(e.footnote, {
            inline: !0
        })));
    }))) : de;
}
const __TURBOPACK__default__export__ = (n)=>{
    let { children: t = "", options: o } = n, a = function(e, n) {
        if (null == e) return {};
        var r, t, o = {}, a = Object.keys(e);
        for(t = 0; t < a.length; t++)n.indexOf(r = a[t]) >= 0 || (o[r] = e[r]);
        return o;
    }(n, r);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(Qe(t, o), a);
};
;
 //# sourceMappingURL=index.modern.js.map
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_2d611a63._.js.map