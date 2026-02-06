import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client (we'll set this up properly next)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export function EmailSignup() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus({ message: '', type: '' });

    try {
      // Insert email into Supabase
      const { error } = await supabase
        .from('early_access')
        .insert([
          { 
            email: data.email,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        // Check if email already exists
        if (error.code === '23505') {
          setStatus({ 
            message: "You're already on the list! We'll be in touch soon.", 
            type: 'success' 
          });
        } else {
          throw error;
        }
      } else {
        setStatus({ 
          message: "✓ You're on the list! Check your email for updates.", 
          type: 'success' 
        });
        reset();
      }
    } catch (error) {
      console.error('Signup error:', error);
      setStatus({ 
        message: 'Something went wrong. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="signup-section">
      <h2>Get early access</h2>
      <p>Be the first to try our AI panic attack companion. Free for early adopters.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <input
          type="email"
          placeholder="your@email.com"
          className="email-input"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && (
          <p className="status-message error">{errors.email.message}</p>
        )}
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Joining...' : 'Notify Me at Launch'}
        </button>
      </form>
      
      {status.message && (
        <p className={`status-message ${status.type}`}>
          {status.message}
        </p>
      )}
    </section>
  );
}