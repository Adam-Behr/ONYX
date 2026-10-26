'use client';

import { useState, useRef } from 'react';

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setStatus({ type: 'error', message: 'Please select an image file' });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!fileInputRef.current?.files?.[0]) {
      setStatus({ type: 'error', message: 'No file selected' });
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', fileInputRef.current.files[0]);

    try {
      const response = await fetch('/api/upload-logo', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus({ type: 'success', message: '✓ Logo saved successfully as onyx-dark-logo.png' });
        setPreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setStatus({ type: 'error', message: 'Error saving logo' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: `Error: ${err}` });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full border border-white/20">
        <h1 className="text-2xl font-bold text-white mb-2">Upload ONYX Dark Logo</h1>
        <p className="text-gray-300 text-sm mb-6">Save the dark ONYX logo to use in the modern header</p>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
            isDragging
              ? 'border-cyan-400 bg-cyan-500/10'
              : 'border-white/30 hover:border-white/50 hover:bg-white/5'
          }`}
        >
          <div className="text-4xl mb-3">📁</div>
          <p className="text-white font-medium">Drag & drop your logo here</p>
          <p className="text-gray-400 text-sm">or click to select</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            className="hidden"
          />
        </div>

        {preview && (
          <div className="mt-6">
            <p className="text-gray-300 text-xs mb-3">Preview:</p>
            <img src={preview} alt="Preview" className="w-full rounded-lg mb-4" />
            <button
              onClick={handleUpload}
              disabled={isUploading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              {isUploading ? 'Saving...' : 'Save to Public Folder'}
            </button>
          </div>
        )}

        {status && (
          <div
            className={`mt-6 p-3 rounded-lg text-sm ${
              status.type === 'success'
                ? 'bg-green-500/20 border border-green-500/30 text-green-200'
                : 'bg-red-500/20 border border-red-500/30 text-red-200'
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
}
