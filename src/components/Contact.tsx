import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">联系我们</span> | <span className="text-gray-800">Contact Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们随时为您提供产品咨询和技术支持，欢迎联系我们
            <br />
            We're here to provide product information and technical support, feel free to reach out
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-default shadow-card">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  姓名 / Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-default focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="您的姓名 / Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  邮箱 / Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-default focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="您的邮箱 / Your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  留言 / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-default focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="请输入您的留言内容 / Please enter your message"
                ></textarea>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-default">
                  消息已发送，我们将尽快与您联系！ / Message sent, we'll contact you soon!
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-default">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-light text-white font-medium py-3 px-6 rounded-default transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  '发送中... / Sending...'
                ) : (
                  '发送信息 | Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div className="lg:w-5/12">
            <div className="bg-white p-8 rounded-default shadow-card mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">宁波沂风生物科技有限公司</h3>
              <p className="text-gray-600 mb-6">
                88 Innovation Rd, Ningbo, Zhejiang, China
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center mr-3">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:info@origreen.com" className="text-gray-800 hover:text-primary">info@origreen.com</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center mr-3">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+8657412345678" className="text-gray-800 hover:text-primary">+86 574 1234 5678</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-default shadow-card">
              <h3 className="text-xl font-bold mb-4 text-gray-800">关注我们 | Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center hover:bg-primary-light/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="text-primary" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center hover:bg-primary-light/30 transition-colors"
                  aria-label="WeChat"
                >
                  <MessageSquare size={24} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;