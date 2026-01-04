import { useState } from 'react';
import env from '../config/env';

export interface SchoolContactFormData {
  schoolName: string;
  contactPerson: string;
  email: string;
  phone: string;
  message: string;
}

export const useSchoolContactForm = () => {
  const [formData, setFormData] = useState<SchoolContactFormData>({
    schoolName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`${env.apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.contactPerson,
          email: formData.email,
          message: `School: ${formData.schoolName}\nPhone: ${formData.phone}\n\n${formData.message}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ schoolName: '', contactPerson: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof SchoolContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    setFormData,
    handleChange,
    isSubmitting,
    submitStatus,
    handleSubmit
  };
};
