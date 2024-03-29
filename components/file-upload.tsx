"use client";

import { UploadDropzone } from "@/lib/uploadthing";

import { X } from "lucide-react";
import Image from "next/image";

import "@uploadthing/react/styles.css";
import { useState } from "react";
import { deleteValue } from "@/lib/deleteFile";

type FileUploadProps = {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
  edit?: boolean;
};

export const FileUpload = ({
  onChange,
  value,
  endpoint,
  edit
}: FileUploadProps) => {
  const [imageId, setImageId] = useState("");
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image src={value} fill alt="Upload" className="rounded-full" />
        <button
          onClick={() => {
            onChange(""); 
            {edit !== true && deleteValue(imageId)};
          }}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
        setImageId(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};