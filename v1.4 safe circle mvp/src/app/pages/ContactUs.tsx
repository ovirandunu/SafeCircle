import { Mail, Calendar, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { trackFormSubmission, trackCTAClick } from '../../utils/analytics';

export default function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Get Supabase URL from environment variable
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      
      if (!supabaseUrl) {
        throw new Error('Supabase URL not configured. Please add VITE_SUPABASE_URL to your .env file');
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'safecircle@bartgeelen.com',
          subject: `Contact Form: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitSuccess(true);
      trackFormSubmission('contact_form');
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookingClick = () => {
    trackCTAClick('schedule_call', 'contact_page');
    // Get Google Calendar URL from environment variable
    const calendarUrl = import.meta.env.VITE_GOOGLE_CALENDAR_BOOKING_URL;
    
    if (calendarUrl) {
      window.open(calendarUrl, '_blank');
    } else {
      console.warn('Google Calendar booking URL not configured');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px] pt-[92px] sm:pt-[96px] lg:pt-[120px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="max-w-[900px] mx-auto text-left md:text-center">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[48px] lg:text-[70px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-4 sm:mb-6 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('contact.title')}
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-[48px]">
            
            {/* Contact Form */}
            <div>
              <Card variant="highlight" padding="lg">
                <div className="flex items-center gap-[16px] mb-[32px]">
                  <div className="w-[56px] h-[56px] bg-[#f8918a] rounded-[8px] flex items-center justify-center shrink-0">
                    <Mail className="w-[28px] h-[28px] text-white" />
                  </div>
                  <h2 className="font-['Open_Sans:Bold',sans-serif] text-[32px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('contact.form.title')}
                  </h2>
                </div>
                
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[24px] text-[#838383] mb-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('contact.form.response')}
                </p>

                {submitSuccess && (
                  <div className="mb-[24px] p-[16px] bg-green-50 border-[2px] border-green-500 rounded-[8px] flex items-center gap-[12px]">
                    <CheckCircle className="w-[20px] h-[20px] text-green-500 shrink-0" />
                    <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-green-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('contact.form.success')}
                    </p>
                  </div>
                )}

                {submitError && (
                  <div className="mb-[24px] p-[16px] bg-red-50 border-[2px] border-red-500 rounded-[8px]">
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-red-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {submitError}
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-[24px]">
                  <Input
                    label={t('contact.form.name')}
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                  />

                  <Input
                    label={t('contact.form.email')}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                  />

                  <Input
                    label={t('contact.form.subject')}
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    disabled={isSubmitting}
                  />

                  <Textarea
                    label={t('contact.form.message')}
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={isSubmitting}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t('contact.form.sending')
                    ) : (
                      <>
                        <Send className="w-[20px] h-[20px] mr-[8px]" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Schedule a Call */}
            <div>
              <Card variant="highlight" padding="lg" className="h-full">
                <div className="flex items-center gap-[16px] mb-[32px]">
                  <div className="w-[56px] h-[56px] bg-[#f8918a] rounded-[8px] flex items-center justify-center shrink-0">
                    <Calendar className="w-[28px] h-[28px] text-white" />
                  </div>
                  <h2 className="font-['Open_Sans:Bold',sans-serif] text-[32px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('contact.schedule.title')}
                  </h2>
                </div>

                <div className="space-y-[24px]">
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[24px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('contact.schedule.description')}
                  </p>

                  <div className="bg-white border-[2px] border-black rounded-[8px] p-[24px]">
                    <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('contact.schedule.cover.title')}
                    </h3>
                    <ul className="space-y-[12px]">
                      {[
                        t('contact.schedule.cover.item1'),
                        t('contact.schedule.cover.item2'),
                        t('contact.schedule.cover.item3'),
                        t('contact.schedule.cover.item4'),
                        t('contact.schedule.cover.item5')
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-[12px] items-start">
                          <div className="w-[6px] h-[6px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                          <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[24px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleBookingClick}
                  >
                    <Calendar className="w-[20px] h-[20px] mr-[8px]" />
                    {t('contact.schedule.button')}
                  </Button>

                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('contact.schedule.hours')}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}