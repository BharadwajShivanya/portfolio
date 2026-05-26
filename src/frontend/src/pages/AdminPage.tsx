import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { FileText, Image as ImageIcon, Lock, Upload } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

type UploadStatus = "idle" | "uploading" | "success" | "error";

interface UploadSection {
  id: string;
  title: string;
  description: string;
  accept: string;
  icon: React.ReactNode;
  fileType: "image" | "pdf";
}

const SECTIONS: UploadSection[] = [
  {
    id: "publication-cover",
    title: "Publication Cover Image",
    description: "Upload a cover image for a book or paper (JPG, PNG, WebP).",
    accept: "image/*",
    icon: <ImageIcon size={20} />,
    fileType: "image",
  },
  {
    id: "research-pdf",
    title: "Research PDF",
    description: "Upload a research paper or article in PDF format.",
    accept: "application/pdf",
    icon: <FileText size={20} />,
    fileType: "pdf",
  },
  {
    id: "gallery-photo",
    title: "Gallery Photo",
    description: "Upload a conference, event, or archival photograph.",
    accept: "image/*",
    icon: <ImageIcon size={20} />,
    fileType: "image",
  },
];

function UploadBlock({ section }: { section: UploadSection }) {
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleUpload = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file) return;
    setStatus("uploading");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", section.id);
      const response = await fetch("/api/object-storage/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Upload failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      data-ocid={`admin.${section.id}.card`}
      className="bg-card border border-border rounded-xl p-6 space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {section.icon}
        </div>
        <div>
          <h3 className="font-display text-base text-foreground">
            {section.title}
          </h3>
          <p className="font-body text-xs text-muted-foreground">
            {section.description}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <label
          htmlFor={`file-${section.id}`}
          className="flex items-center gap-2 w-full border border-dashed border-border rounded-lg px-4 py-3 cursor-pointer hover:bg-muted/30 transition-colors"
        >
          <Upload size={15} className="text-muted-foreground shrink-0" />
          <span className="font-body text-sm text-muted-foreground truncate min-w-0">
            {fileName ?? "Choose file"}
          </span>
        </label>
        <input
          ref={fileRef}
          id={`file-${section.id}`}
          type="file"
          accept={section.accept}
          className="sr-only"
          data-ocid={`admin.${section.id}.upload_button`}
          onChange={handleFileChange}
        />

        <button
          type="button"
          data-ocid={`admin.${section.id}.submit_button`}
          onClick={handleUpload}
          disabled={!fileName || status === "uploading"}
          className="w-full py-2.5 px-4 bg-primary text-primary-foreground font-body text-sm rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "uploading" ? "Uploading\u2026" : "Upload"}
        </button>

        {status === "success" && (
          <p
            data-ocid={`admin.${section.id}.success_state`}
            className="text-xs font-body text-primary"
          >
            ✓ File uploaded successfully.
          </p>
        )}
        {status === "error" && (
          <p
            data-ocid={`admin.${section.id}.error_state`}
            className="text-xs font-body text-destructive"
          >
            Upload failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const { loginStatus, login } = useInternetIdentity();
  const isAuthenticated = loginStatus === "success";

  if (!isAuthenticated) {
    return (
      <div
        data-ocid="admin.page"
        className="min-h-screen bg-background flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card border border-border rounded-xl p-10 max-w-sm w-full text-center shadow-sm"
        >
          <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <Lock size={22} className="text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl text-foreground mb-2">
            Admin Access Required
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-7 leading-relaxed">
            Sign in with Internet Identity to access the admin upload panel.
          </p>
          <button
            type="button"
            data-ocid="admin.sign_in_button"
            onClick={() => login()}
            className="w-full py-3 px-6 bg-primary text-primary-foreground font-body text-sm tracking-wide rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            Sign In
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div data-ocid="admin.page" className="min-h-screen">
      <section className="bg-card border-b border-border py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Admin Panel
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-foreground">
              Upload Assets
            </h1>
            <div className="w-10 h-px bg-accent mt-4" />
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {SECTIONS.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <UploadBlock section={section} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
