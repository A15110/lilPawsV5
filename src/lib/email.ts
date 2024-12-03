import { supabase } from './supabase';

interface EmailParams {
  to: string;
  subject: string;
  content: string;
}

export async function sendEmail({ to, subject, content }: EmailParams) {
  try {
    // For development, just log the email
    console.log('Email would be sent:', { to, subject, content });
    
    // In production, you would integrate with an email service
    // For now, return success to avoid errors
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}