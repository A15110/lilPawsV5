import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { sendEmail } from '../lib/email';

interface UseSubscribeReturn {
  subscribe: (email: string) => Promise<void>;
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
}

export function useSubscribe(): UseSubscribeReturn {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (email: string) => {
    try {
      setStatus('loading');
      setError(null);

      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        throw new Error('Please enter a valid email address');
      }

      const { error: dbError } = await supabase
        .from('email_subscribers')
        .insert([{ email }]);

      if (dbError) {
        if (dbError.code === '23505') {
          throw new Error('This email is already subscribed');
        }
        throw dbError;
      }

      await sendEmail({
        to: 'Info@LittlePawsJax.com',
        subject: 'New Blog Subscriber',
        content: `New blog subscription from: ${email}`
      });

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setError(err.message || 'Failed to subscribe. Please try again.');
    }
  };

  return { subscribe, status, error };
}