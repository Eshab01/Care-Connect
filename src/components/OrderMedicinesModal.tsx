import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, ShoppingBag } from 'lucide-react';

interface OrderMedicinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderMedicinesModal: React.FC<OrderMedicinesModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ medicine: '', quantity: 1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order placed for ${form.quantity} of ${form.medicine}`);
    onClose();
    setForm({ medicine: '', quantity: 1 });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-scale-in">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Order Medicines</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <Label htmlFor="medicine" className="text-gray-700 font-medium mb-2 block">Medicine Name</Label>
            <Input
              id="medicine"
              name="medicine"
              value={form.medicine}
              onChange={handleChange}
              className="h-12 border-gray-200"
              placeholder="Enter medicine name"
              required
            />
          </div>
          <div>
            <Label htmlFor="quantity" className="text-gray-700 font-medium mb-2 block">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              min={1}
              value={form.quantity}
              onChange={handleChange}
              className="h-12 border-gray-200"
              required
            />
          </div>
          <div className="flex space-x-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 h-12 border-gray-300 text-gray-700">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderMedicinesModal;