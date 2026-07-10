import { c as createLucideIcon, a4 as useInternetIdentity, j as jsxRuntimeExports, m as motion, r as reactExports } from "./index-B1GuySlE.js";
import { I as Image } from "./image-CftSUIlX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
const SECTIONS = [
  {
    id: "publication-cover",
    title: "Publication Cover Image",
    description: "Upload a cover image for a book or paper (JPG, PNG, WebP).",
    accept: "image/*",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 20 }),
    fileType: "image"
  },
  {
    id: "research-pdf",
    title: "Research PDF",
    description: "Upload a research paper or article in PDF format.",
    accept: "application/pdf",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20 }),
    fileType: "pdf"
  },
  {
    id: "gallery-photo",
    title: "Gallery Photo",
    description: "Upload a conference, event, or archival photograph.",
    accept: "image/*",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 20 }),
    fileType: "image"
  }
];
function UploadBlock({ section }) {
  const [status, setStatus] = reactExports.useState("idle");
  const [fileName, setFileName] = reactExports.useState(null);
  const fileRef = reactExports.useRef(null);
  const handleFileChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) setFileName(file.name);
  };
  const handleUpload = async () => {
    var _a, _b;
    const file = (_b = (_a = fileRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (!file) return;
    setStatus("uploading");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", section.id);
      const response = await fetch("/api/object-storage/upload", {
        method: "POST",
        body: formData
      });
      if (!response.ok) throw new Error("Upload failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `admin.${section.id}.card`,
      className: "bg-card border border-border rounded-xl p-6 space-y-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center", children: section.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base text-foreground", children: section.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: section.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              htmlFor: `file-${section.id}`,
              className: "flex items-center gap-2 w-full border border-dashed border-border rounded-lg px-4 py-3 cursor-pointer hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 15, className: "text-muted-foreground shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-muted-foreground truncate min-w-0", children: fileName ?? "Choose file" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileRef,
              id: `file-${section.id}`,
              type: "file",
              accept: section.accept,
              className: "sr-only",
              "data-ocid": `admin.${section.id}.upload_button`,
              onChange: handleFileChange
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `admin.${section.id}.submit_button`,
              onClick: handleUpload,
              disabled: !fileName || status === "uploading",
              className: "w-full py-2.5 px-4 bg-primary text-primary-foreground font-body text-sm rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed",
              children: status === "uploading" ? "Uploading…" : "Upload"
            }
          ),
          status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-ocid": `admin.${section.id}.success_state`,
              className: "text-xs font-body text-primary",
              children: "✓ File uploaded successfully."
            }
          ),
          status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-ocid": `admin.${section.id}.error_state`,
              className: "text-xs font-body text-destructive",
              children: "Upload failed. Please try again."
            }
          )
        ] })
      ]
    }
  );
}
function AdminPage() {
  const { loginStatus, login } = useInternetIdentity();
  const isAuthenticated = loginStatus === "success";
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "admin.page",
        className: "min-h-screen bg-background flex items-center justify-center px-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            className: "bg-card border border-border rounded-xl p-10 max-w-sm w-full text-center shadow-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 22, className: "text-muted-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl text-foreground mb-2", children: "Admin Access Required" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mb-7 leading-relaxed", children: "Sign in with Internet Identity to access the admin upload panel." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "admin.sign_in_button",
                  onClick: () => login(),
                  className: "w-full py-3 px-6 bg-primary text-primary-foreground font-body text-sm tracking-wide rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]",
                  children: "Sign In"
                }
              )
            ]
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin.page", className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-14 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2", children: "Admin Panel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl text-foreground", children: "Upload Assets" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-px bg-accent mt-4" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto space-y-6", children: SECTIONS.map((section, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.45,
          delay: i * 0.1,
          ease: [0.22, 1, 0.36, 1]
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(UploadBlock, { section })
      },
      section.id
    )) }) })
  ] });
}
export {
  AdminPage as default
};
