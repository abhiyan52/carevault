import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { X, Upload as UploadIcon, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileWithPreview extends File {
  preview?: string;
}

export const Upload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      const isValidType = ['application/pdf', 'image/jpeg', 'image/png', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type);
      const isValidSize = file.size <= 25 * 1024 * 1024; // 25MB
      
      if (!isValidType) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type. Please upload PDF, JPEG, PNG, or DOCX files.`,
          variant: "destructive",
        });
      }
      
      if (!isValidSize) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds the 25MB size limit.`,
          variant: "destructive",
        });
      }
      
      return isValidType && isValidSize;
    });

    setFiles(prev => [
      ...prev,
      ...validFiles.map(file => Object.assign(file, {
        preview: file.type.startsWith('image/') 
          ? URL.createObjectURL(file)
          : undefined
      }))
    ]);
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxSize: 25 * 1024 * 1024 // 25MB
  });

  const removeFile = (name: string) => {
    setFiles(files => files.filter(file => file.name !== name));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes, always succeed
    navigate("/upload/success");
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Upload Your Medical Documents</h1>
            <p className="text-muted-foreground">
              Your files are encrypted and will be automatically deleted after 24 hours
            </p>
          </div>

          <div
            {...getRootProps()}
            className={`p-8 rounded-2xl border-2 border-dashed transition-colors ${
              isDragActive ? "border-primary bg-primary/5" : "border-[#FF7F5C] bg-white/50"
            }`}
          >
            <input {...getInputProps()} />
            <div className="aspect-[3/2] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FF7F5C]/10 flex items-center justify-center">
                  <UploadIcon className="w-8 h-8 text-[#FF7F5C]" />
                </div>
                <h3 className="text-xl font-medium">
                  {isDragActive
                    ? "Drop your files here"
                    : "Drag files here or click to browse"
                }
                </h3>
                <p className="text-muted-foreground">
                  Supports PDF, JPEG, PNG, DOCX (up to 25 MB per file)
                </p>
              </div>
            </div>
          </div>

          {files.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="font-medium">Selected Files</h3>
              <div className="space-y-2">
                {files.map(file => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      {file.preview ? (
                        <img
                          src={file.preview}
                          alt={file.name}
                          className="w-10 h-10 rounded object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                          <AlertCircle className="w-5 h-5 text-primary" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium truncate max-w-[300px]">
                          {file.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(file.name)}
                      className="p-2 hover:bg-secondary rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={handleUpload}
                  disabled={isUploading}
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-[#5F9E9E] rounded-full hover:bg-[#5F9E9E]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUploading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>Process My Documents</>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  );
}; 