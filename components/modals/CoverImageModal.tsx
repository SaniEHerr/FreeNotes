"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/useCoverImage";
import { SingleImageDropzone } from "@/components/singleImageDropzone";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const CoverImageModal = () => {

  const params = useParams();
  const update = useMutation(api.documents.update);
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const [file, setFile] = useState<File>();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const onClose = () => {
    setFile(undefined);
    setIsSubmiting(false);
    coverImage.onClose();
  }

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmiting(true);
      setFile(file);

      // let res;

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url
        }
      });

      // if (coverImage.url) {
      //   res = await edgestore.publicFiles.upload({
      //     file, 
      //     options: {
      //       replaceTargetUrl: coverImage.url
      //     }
      //   })
      // } else {
      //   res = await edgestore.publicFiles.upload({
      //     file
      //   });
      // }

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url
      });

      onClose();
    }
  }

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">
            Cover Image
          </h2>
        </DialogHeader>
        <SingleImageDropzone 
          className="w-full outline-none"
          disabled={isSubmiting}
          value={file}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  )
}

export default CoverImageModal