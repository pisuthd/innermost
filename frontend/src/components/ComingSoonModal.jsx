import { motion, AnimatePresence } from 'framer-motion';

function ComingSoonModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ 
              position: 'relative', 
              background: '#0f172a', 
              border: '1px solid #334155', 
              borderRadius: '12px', 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              maxWidth: '448px', 
              width: '100%',
              zIndex: 10000
            }}
          >
            {/* Header with warning icon */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', borderBottom: '1px solid #334155' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#3eddfd', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Coming Soon
              </h2>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <p style={{ color: '#cbd5e1', lineHeight: 1.8, margin: 0 }}>
                You're currently on v1. v1.5 launching shortly. We're adding privacy-first trading, shielded orders, and Local AI agents. We appreciate your patience.
              </p>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '24px', borderTop: '1px solid #334155' }}>
              <button
                onClick={onClose}
                style={{ 
                  padding: '12px 24px', 
                  background: '#3eddfd', 
                  color: '#000', 
                  fontWeight: 700, 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.05em',
                  transition: 'all 0.2s'
                }}
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ComingSoonModal;
