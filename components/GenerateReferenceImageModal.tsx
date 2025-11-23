import React, { useState } from 'react';
import type { TranslationKeys } from '../translations';
import Loader from './Loader';
import WandIcon from './icons/WandIcon';

interface GenerateReferenceImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (prompt: string) => Promise<void>;
  isLoading: boolean;
  t: TranslationKeys;
}

const GenerateReferenceImageModal: React.FC<GenerateReferenceImageModalProps> = ({ isOpen, onClose, onGenerate, isLoading, t }) => {
  const [prompt, setPrompt] = useState('');

  // Reset prompt when modal opens
  React.useEffect(() => {
    if (isOpen) {
        setPrompt('');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="gen-ref-modal-title">
      <div className="bg-[#1E1E22] rounded-lg shadow-2xl w-full max-w-lg border-2 border-gray-700" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex items-center gap-x-4 mb-4">
            <WandIcon className="w-8 h-8 text-[#5BEAFF]" />
            <div>
              <h2 id="gen-ref-modal-title" className="text-xl font-bold text-gray-100">{t.generateRefImageModalTitle}</h2>
            </div>
          </div>
          <label htmlFor="ref-prompt" className="block text-sm font-medium text-gray-400 mb-2">{t.generateRefImageModalPromptLabel}</label>
          <textarea
            id="ref-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="w-full bg-[#0D0D0F] text-gray-300 p-3 rounded-md border border-gray-700 focus:ring-2 focus:ring-[#5BEAFF] focus:border-[#5BEAFF] transition font-mono"
            placeholder={t.generateRefImageModalPromptPlaceholder}
            disabled={isLoading}
          />
        </div>
        <div className="bg-gray-800/50 px-6 py-4 flex justify-end items-center gap-3">
          {isLoading && <p className="text-sm text-cyan-300 animate-pulse">{t.generatingReferenceImage}</p>}
          <div className="flex-grow" />
          <button
            type="button"
            className="rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-[#0D0D0F] text-base font-medium text-gray-300 hover:bg-gray-700 disabled:opacity-50"
            onClick={onClose}
            disabled={isLoading}
          >
            {t.cancelButton}
          </button>
          <button
            type="button"
            className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#5BEAFF] text-base font-bold text-black hover:bg-opacity-90 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center gap-x-2"
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
          >
             {isLoading ? <div className="w-5 h-5 border-2 border-dashed rounded-full animate-spin border-black"></div> : <WandIcon className="w-5 h-5" />}
            {t.generateRefImageModalGenerateButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateReferenceImageModal;