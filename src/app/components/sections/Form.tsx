"use client";
import { Answer, Document, Question } from "@public/icons";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  submit?: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation function
  const validate = (data: FormData): FormErrors => {
    let err: FormErrors = {};
    if (!data.name.trim()) err.name = "Имя не может быть пустым";
    if (!data.email) err.email = "Email обязателен";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      err.email = "Неверный формат email";
    if (!data.phone) err.phone = "Телефон обязателен";
    else if (!/^\d{10,15}$/.test(data.phone))
      err.phone = "Телефон должен содержать от 10 до 15 цифр";
    return err;
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
    } else {
      try {
        // Here you would typically make an API call
        // Example: await fetch('/api/submit-form', { method: 'POST', body: JSON.stringify(formData) });
        console.log("Form data submitted:", formData);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "" }); // Clear form
      } catch (error) {
        console.error("Submission error:", error);
        setErrors({ submit: "Произошла ошибка при отправке формы" });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Handle input changes
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  return (
    <section id="form" className="flex items-center justify-center py-20">
      <div className="w-[1296px] h-[696px]">
        <div className="flex justify-center mb-20">
          {" "}
          <h4 className="font-playfair-display font-medium text-[48px] leading-[40px] tracking-[1.2px] align-middle text-[#C0A06C]">
            Получить консультацию
          </h4>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-center space-y-8 h-[48px]">
            <div className="flex items-center gap-6">
              <Answer color="#BC9861" />
              <p className="font-lato font-normal text-[20px] leading-[32px] tracking-[1px]">
                Получите ответ в удобное для вас время
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Question />
              <p className="font-lato font-normal text-[20px] leading-[32px] tracking-[1px]">
                Задайте любой интересующий вопрос
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Document />
              <p className="font-lato font-normal text-[20px] leading-[32px] tracking-[1px]">
                Запросите необходимые документы <br />
                (цены, брошюра, план оплаты, планировки)
              </p>
            </div>
          </div>

          <div className="w-[636px] h-[535px] flex justify-center items-center rounded-sm border-2 border-[#D1D1D1] shadow-[0_4px_20px_0_rgba(124,124,124,0.2)]">
            <form onSubmit={handleSubmit} className="p-4 space-y-10">
              <h5 className="text-center font-playfair-display text-[28px] font-semibold leading-[40px] tracking-[1.2px] text-[#C0A06C]">
                Оставьте заявку
              </h5>
              {submitSuccess && (
                <div className="mb-4 text-center text-green-500">
                  Форма успешно отправлена!
                </div>
              )}
              {errors.submit && (
                <div className="mb-4 text-center text-red-500">
                  {errors.submit}
                </div>
              )}
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  className="w-[372px] h-[52px] px-4 py-3 border-b-2 border-[#D1D1D1] bg-transparent focus:outline-none placeholder-lato placeholder-text-[18px] placeholder-font-normal placeholder-leading-[21.6px] placeholder-tracking-[1.5px] placeholder-text-left placeholder-text-[#D1D1D1]"
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ваш email"
                  className="w-[372px] h-[52px] px-4 py-3 border-b-2 border-[#D1D1D1] bg-transparent focus:outline-none placeholder-lato placeholder-text-[18px] placeholder-font-normal placeholder-leading-[21.6px] placeholder-tracking-[1.5px] placeholder-text-left placeholder-text-[#D1D1D1]"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ваш телефон"
                  className="w-[372px] h-[52px] px-4 py-3 border-b-2 border-[#D1D1D1] bg-transparent focus:outline-none placeholder-lato placeholder-text-[18px] placeholder-font-normal placeholder-leading-[21.6px] placeholder-tracking-[1.5px] placeholder-text-left placeholder-text-[#D1D1D1]"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone}</p>
                )}
              </div>
              <div className="flex items-center justify-center mt-8">
                <button
                  type="submit"
                  className="w-[240px] h-[60px] px-6 py-4 text-[#C0A06C] rounded-[2px] border-2   border-[#C0A06C] bg-transparent backdrop-blur-[24px] shadow-[0_4px_20px_0_rgba(72,83,131,0.1)] hover:bg-[#C0A06C] hover:text-white transition-all duration-300 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
