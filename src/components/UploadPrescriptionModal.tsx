import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { X, FilePlus } from 'lucide-react';

interface UploadPrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadPrescriptionModal: React.FC<UploadPrescriptionModalProps> = ({ isOpen, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [notes, setNotes] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Prescription uploaded successfully!');
    onClose();
    setFile(null);
    setNotes('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-scale-in">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <FilePlus className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Upload Prescription</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <Label htmlFor="prescription" className="text-gray-700 font-medium mb-2 block">Prescription File</Label>
            <Input
              id="prescription"
              name="prescription"
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="h-12 border-gray-200"
              required
            />
          </div>
          <div>
            <Label htmlFor="notes" className="text-gray-700 font-medium mb-2 block">Notes (optional)</Label>
            <Textarea
              id="notes"
              name="notes"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="border-gray-200"
              placeholder="Add any notes for the pharmacist"
              rows={3}
            />
          </div>
          <div className="flex space-x-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 h-12 border-gray-300 text-gray-700">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Upload
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadPrescriptionModal;